"use client";

import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

type LLMResponse = {
  provider: string;
  response: string;
  error?: string;
};

type LLMResult = {
  summary: string;
  responses: LLMResponse[];
};

const MODEL_OPTIONS = [
  { id: "openai-5.2", label: "OpenAI 5.2" },
  { id: "openai-4.1", label: "OpenAI 4.1" },
  { id: "claude-opus", label: "Claude Opus 4.6" },
  { id: "claude-sonnet", label: "Claude Sonnet 4.6" },
  { id: "grok-reasoning", label: "Grok 4-1 Fast Reasoning" },
  { id: "grok-non-reasoning", label: "Grok 4-1 Fast Non-Reasoning" },
  { id: "deepseek", label: "DeepSeek Chat" },
] as const;

const DEFAULT_SELECTED = new Set(MODEL_OPTIONS.map((m) => m.id));

export default function LLMPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LLMResult | null>(null);
  const [expandedProviders, setExpandedProviders] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [transcribing, setTranscribing] = useState(false);
  const [recording, setRecording] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedModels, setSelectedModels] = useState<Set<string>>(DEFAULT_SELECTED);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const toggleModel = (id: string) => {
    setSelectedModels((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAllModels = () => setSelectedModels(new Set(MODEL_OPTIONS.map((m) => m.id)));
  const clearAllModels = () => setSelectedModels(new Set());

  async function copyToClipboard(text: string, id: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setError("Failed to copy");
    }
  }

  async function sendAudioForTranscription(blob: Blob) {
    setTranscribing(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", blob, "recording.webm");
      const res = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Transcription failed");
      const text = data.text || "";
      setInput((prev) => (prev ? `${prev}\n\n${text}` : text));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Transcription failed");
    } finally {
      setTranscribing(false);
    }
  }

  function startRecording() {
    chunksRef.current = [];
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      recorder.ondataavailable = (e) => {
        if (e.data.size) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        sendAudioForTranscription(blob);
      };
      recorder.start();
      setRecording(true);
    }).catch(() => {
      setError("Microphone access denied");
    });
  }

  function stopRecording() {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }
    setRecording(false);
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setTranscribing(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", file);
    fetch("/api/transcribe", { method: "POST", body: formData })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          const text = data.text || "";
          setInput((prev) => (prev ? `${prev}\n\n${text}` : text));
        } else {
          setError(data.error);
        }
      })
      .catch(() => setError("Transcription failed"))
      .finally(() => {
        setTranscribing(false);
        e.target.value = "";
      });
  }

  const toggleProvider = (provider: string) => {
    setExpandedProviders((prev) => {
      const next = new Set(prev);
      if (next.has(provider)) {
        next.delete(provider);
      } else {
        next.add(provider);
      }
      return next;
    });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading || selectedModels.size === 0) return;

    setError(null);
    setResult(null);
    setLoading(true);
    setExpandedProviders(new Set());

    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: text,
          models: Array.from(selectedModels),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get responses");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <header className="mb-8">
          <a
            href="/"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
          >
            ← Back to home
          </a>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Multi-LLM Aggregator
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Get responses from multiple AI models and see a summarized comparison.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-slate-700">Models</span>
                <div className="flex gap-2">
                  <button type="button" onClick={selectAllModels} className="min-h-[44px] min-w-[44px] rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-800 active:bg-slate-200">
                    All
                  </button>
                  <button type="button" onClick={clearAllModels} className="min-h-[44px] min-w-[44px] rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-800 active:bg-slate-200">
                    None
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                {MODEL_OPTIONS.map((m) => (
                  <label
                    key={m.id}
                    className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg py-2.5 pr-2 active:bg-slate-50 sm:min-h-0 sm:py-0 sm:active:bg-transparent"
                  >
                    <input
                      type="checkbox"
                      checked={selectedModels.has(m.id)}
                      onChange={() => toggleModel(m.id)}
                      disabled={loading}
                      className="h-4 w-4 shrink-0 rounded border-slate-300 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:ring-offset-0"
                    />
                    <span className="text-sm text-slate-700 select-none">{m.label}</span>
                  </label>
                ))}
              </div>
              {selectedModels.size === 0 && (
                <p className="mt-2 text-xs text-amber-600">Select at least one model.</p>
              )}
              {selectedModels.size === 1 && (
                <p className="mt-2 text-xs text-slate-500">Select more than one model to see synthesis.</p>
              )}
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your prompt here or use speech-to-text below..."
              disabled={loading}
              rows={6}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 disabled:opacity-60 resize-none"
            />
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={loading || !input.trim() || selectedModels.size === 0}
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Submit"}
              </button>
              <span className="text-slate-500 text-sm">Speech-to-text (gpt-4o-transcribe):</span>
              {!recording ? (
                <button
                  type="button"
                  disabled={transcribing || loading}
                  onClick={startRecording}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                >
                  {transcribing ? "Transcribing..." : "Record"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
                >
                  Stop
                </button>
              )}
              <label className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer disabled:opacity-50 inline-block">
                <input
                  type="file"
                  accept="audio/*,.mp3,.mp4,.mpeg,.mpga,.m4a,.wav,.webm"
                  className="hidden"
                  disabled={transcribing || loading}
                  onChange={handleFileUpload}
                />
                Upload audio
              </label>
            </div>
          </div>
        </form>

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </div>
        )}

        {result && (
          <div className="space-y-6">
            {/* Model-Response Synthesis — only when summary is present (2+ models) */}
            {result.summary ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-slate-800">
                    Model-Response Synthesis
                  </h2>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(result.summary, "summary")}
                    className="shrink-0 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {copiedId === "summary" ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-6 prose-h3:mb-2 prose-h4:mt-5 prose-h4:mb-2 prose-p:my-2.5 prose-ul:my-3 prose-ol:my-3 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0 [&>h4:first-child]:mt-0">
                  <ReactMarkdown>{result.summary}</ReactMarkdown>
                </div>
              </div>
            ) : null}

            {/* Individual Responses */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Individual Responses
              </h2>
              {result.responses.map((response) => (
                <div
                  key={response.provider}
                  className="rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex items-center gap-2 rounded-t-xl border-b border-slate-100">
                    <button
                      type="button"
                      onClick={() => toggleProvider(response.provider)}
                      className="flex-1 px-4 py-3 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-medium text-slate-800">
                        {response.provider}
                        {response.error && (
                          <span className="ml-2 text-xs text-red-600">(Error)</span>
                        )}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {expandedProviders.has(response.provider) ? "▼" : "▶"}
                      </span>
                    </button>
                    {!response.error && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(response.response, response.provider);
                        }}
                        className="shrink-0 mr-2 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                      >
                        {copiedId === response.provider ? "Copied!" : "Copy"}
                      </button>
                    )}
                  </div>
                  {expandedProviders.has(response.provider) && (
                    <div className="px-4 pb-4 border-t border-slate-100">
                      {response.error ? (
                        <p className="mt-3 text-sm text-red-600">{response.error}</p>
                      ) : (
                        <div className="mt-3 prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-6 prose-h3:mb-2 prose-h4:mt-5 prose-h4:mb-2 prose-p:my-2.5 prose-ul:my-3 prose-ol:my-3 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0 [&>h4:first-child]:mt-0">
                          <ReactMarkdown>{response.response}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
