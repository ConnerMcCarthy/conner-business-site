"use client";

import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type LLMResponse = {
  provider: string;
  response: string;
  error?: string;
};

type LLMResult = {
  summary: string;
  grokSummary?: string;
  responses: LLMResponse[];
};

type ChatMessage = { role: "user" | "assistant"; content: string };

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
  const [useGrokSummary, setUseGrokSummary] = useState(true);
  const [useSynthesisSummary, setUseSynthesisSummary] = useState(true);
  const [doublePrompt, setDoublePrompt] = useState(false);
  const [drivingMode, setDrivingMode] = useState(false);
  const [conversationMessages, setConversationMessages] = useState<ChatMessage[] | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speakingRef = useRef(false);
  const [conversationModelId, setConversationModelId] = useState<string | null>(null);
  const [conversationProviderLabel, setConversationProviderLabel] = useState<string>("");
  const [conversationSessionId, setConversationSessionId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [recordingForReply, setRecordingForReply] = useState(false);
  const [lastSubmittedPrompt, setLastSubmittedPrompt] = useState("");
  const replyEndRef = useRef<HTMLDivElement>(null);
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

  async function speakWithTTS(text: string) {
    if (!text.trim() || speakingRef.current) return;
    speakingRef.current = true;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        URL.revokeObjectURL(url);
        audioRef.current = null;
        speakingRef.current = false;
      };
      audio.onerror = () => {
        URL.revokeObjectURL(url);
        speakingRef.current = false;
      };
      await audio.play();
    } catch {
      speakingRef.current = false;
    }
  }

  function stopPlayback() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    speakingRef.current = false;
  }

  async function copyToClipboard(text: string, id: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setError("Failed to copy");
    }
  }

  async function sendAudioForTranscription(
    blob: Blob,
    target: "main" | "reply" = "main",
    onDone?: (combinedText: string) => void
  ) {
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
      if (target === "reply") {
        const combined = (prev: string) => (prev ? `${prev}\n\n${text}` : text);
        setReplyText((prev) => {
          const c = combined(prev);
          if (drivingMode && onDone) onDone(c);
          return c;
        });
      } else {
        setInput((prev) => {
          const c = prev ? `${prev}\n\n${text}` : text;
          if (drivingMode && onDone) onDone(c);
          return c;
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Transcription failed");
    } finally {
      setTranscribing(false);
    }
  }

  function startRecording(target: "main" | "reply" = "main") {
    chunksRef.current = [];
    setRecordingForReply(target === "reply");
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      const targetWhenStarted = target;
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const onDone =
          drivingMode && targetWhenStarted === "main"
            ? (combinedText: string) => submitMainPrompt(combinedText)
            : drivingMode && targetWhenStarted === "reply"
              ? (combinedText: string) => submitReply(combinedText)
              : undefined;
        sendAudioForTranscription(blob, targetWhenStarted, onDone);
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
    setRecordingForReply(false);
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

  async function submitMainPrompt(promptText: string) {
    const text = promptText.trim();
    if (!text || loading || selectedModels.size === 0) return;

    setError(null);
    setResult(null);
    setConversationMessages(null);
    setConversationModelId(null);
    setConversationProviderLabel("");
    setConversationSessionId(null);
    setLoading(true);
    setExpandedProviders(new Set());

    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: doublePrompt ? `${text}\n\n${text}` : text,
          models: Array.from(selectedModels),
          useGrokSummary,
          useSynthesis: useSynthesisSummary,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data);
      setLastSubmittedPrompt(text);

      if (selectedModels.size === 1 && data.responses?.length === 1 && !data.responses[0].error) {
        setConversationMessages([
          { role: "user", content: text },
          { role: "assistant", content: data.responses[0].response },
        ]);
        setConversationModelId(Array.from(selectedModels)[0]);
        setConversationProviderLabel(data.responses[0].provider);
        setConversationSessionId(data.sessionId ?? null);
      }

      if (drivingMode && data.responses?.length) {
        const toSpeak =
          data.responses.length === 1
            ? data.responses[0].response
            : data.summary || data.grokSummary || data.responses[0]?.response || "";
        if (toSpeak) speakWithTTS(toSpeak);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get responses");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submitMainPrompt(input.trim());
  }

  async function submitReply(replyTextParam: string) {
    const text = replyTextParam.trim();
    if (!text || loading || !conversationModelId || !conversationMessages) return;

    setError(null);
    setLoading(true);
    const nextMessages: ChatMessage[] = [
      ...conversationMessages,
      { role: "user", content: text },
    ];
    setReplyText("");

    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: text,
          models: [conversationModelId],
          messages: nextMessages,
          ...(conversationSessionId ? { sessionId: conversationSessionId } : {}),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (data.responses?.length === 1 && !data.responses[0].error) {
        const assistantContent = data.responses[0].response;
        setConversationMessages([
          ...nextMessages,
          { role: "assistant", content: assistantContent },
        ]);
        setConversationSessionId(data.sessionId ?? conversationSessionId ?? null);
        setResult({
          summary: "",
          responses: [{ provider: conversationProviderLabel, response: assistantContent }],
        });
        replyEndRef.current?.scrollIntoView({ behavior: "smooth" });
        if (drivingMode && assistantContent) speakWithTTS(assistantContent);
      } else {
        setError(data.responses?.[0]?.error ?? "Reply failed");
        setReplyText(text);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send reply");
    } finally {
      setLoading(false);
    }
  }

  async function handleReply(e: React.FormEvent) {
    e.preventDefault();
    await submitReply(replyText.trim());
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              ← Back to home
            </a>
            <a
              href="/llm/history"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              History
            </a>
          </div>
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
            {selectedModels.size >= 1 && (
              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-4">
                {selectedModels.size > 1 && (
                  <>
                    <span className="text-sm font-medium text-slate-700">Summaries</span>
                    <p className="mt-1 text-xs text-slate-500 mb-3">Choose which summaries to generate (when 2+ models selected).</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
                      <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg py-2.5 sm:min-h-0 sm:py-0">
                        <input
                          type="checkbox"
                          checked={useGrokSummary}
                          onChange={(e) => setUseGrokSummary(e.target.checked)}
                          disabled={loading}
                          className="h-4 w-4 shrink-0 rounded border-slate-300 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:ring-offset-0"
                        />
                        <span className="text-sm text-slate-700 select-none">Grok 4-1 Reasoning Summary</span>
                      </label>
                      <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg py-2.5 sm:min-h-0 sm:py-0">
                        <input
                          type="checkbox"
                          checked={useSynthesisSummary}
                          onChange={(e) => setUseSynthesisSummary(e.target.checked)}
                          disabled={loading}
                          className="h-4 w-4 shrink-0 rounded border-slate-300 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:ring-offset-0"
                        />
                        <span className="text-sm text-slate-700 select-none">Synthesis (5.2)</span>
                      </label>
                    </div>
                  </>
                )}
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg py-2.5 sm:min-h-0 sm:py-0">
                    <input
                      type="checkbox"
                      checked={doublePrompt}
                      onChange={(e) => setDoublePrompt(e.target.checked)}
                      disabled={loading}
                      className="h-4 w-4 shrink-0 rounded border-slate-300 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:ring-offset-0"
                    />
                    <span className="text-sm text-slate-700 select-none">Double prompt</span>
                  </label>
                  <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg py-2.5 sm:min-h-0 sm:py-0">
                    <input
                      type="checkbox"
                      checked={drivingMode}
                      onChange={(e) => setDrivingMode(e.target.checked)}
                      disabled={loading}
                      className="h-4 w-4 shrink-0 rounded border-slate-300 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:ring-offset-0"
                    />
                    <span className="text-sm text-slate-700 select-none">Driving mode</span>
                  </label>
                </div>
              </div>
            )}
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your prompt here or use speech-to-text below..."
              disabled={loading}
              rows={6}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 disabled:opacity-60 resize-none"
            />
            <div className={`flex flex-wrap items-center gap-3 ${drivingMode ? "flex-col gap-4" : ""}`}>
              <button
                type="submit"
                disabled={loading || !input.trim() || selectedModels.size === 0}
                className={
                  drivingMode
                    ? "w-full min-h-[72px] rounded-2xl bg-slate-900 px-8 py-5 text-xl font-bold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    : "rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                }
              >
                {loading ? "Processing..." : drivingMode ? "Send" : "Submit"}
              </button>
              {!drivingMode && (
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
              )}
              {!recording ? (
                <button
                  type="button"
                  disabled={transcribing || loading}
                  onClick={() => startRecording("main")}
                  className={
                    drivingMode
                      ? "w-full min-h-[72px] rounded-2xl border-2 border-slate-300 bg-white px-8 py-5 text-xl font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                      : "rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                  }
                >
                  {transcribing ? "Transcribing..." : "Record"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className={
                    drivingMode
                      ? "w-full min-h-[72px] rounded-2xl border-2 border-red-400 bg-red-100 px-8 py-5 text-xl font-bold text-red-700 hover:bg-red-200"
                      : "rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
                  }
                >
                  Stop
                </button>
              )}
              {drivingMode && (
                <button
                  type="button"
                  onClick={stopPlayback}
                  className="w-full min-h-[72px] rounded-2xl border-2 border-amber-300 bg-amber-50 px-8 py-5 text-xl font-bold text-amber-800 hover:bg-amber-100"
                >
                  Stop playback
                </button>
              )}
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
            {/* Grok 4-1 Reasoning brief summary — above 5.2 synthesis when 2+ models */}
            {result.grokSummary ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-slate-800">
                    Grok 4-1 Reasoning Summary
                  </h2>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(result.grokSummary ?? "", "grokSummary")}
                    className="shrink-0 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {copiedId === "grokSummary" ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-6 prose-h3:mb-2 prose-h4:mt-5 prose-h4:mb-2 prose-p:my-2.5 prose-ul:my-3 prose-ol:my-3 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0 [&>h4:first-child]:mt-0">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.grokSummary}</ReactMarkdown>
                </div>
              </div>
            ) : null}

            {/* Model-Response Synthesis (OpenAI 5.2) — only when summary is present (2+ models) */}
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
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{result.summary}</ReactMarkdown>
                </div>
              </div>
            ) : null}

            {/* Individual Responses — when in conversation mode, only show the latest (avoid duplicating thread) */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Individual Responses
              </h2>
              {(conversationMessages != null ? result.responses.slice(-1) : result.responses).map((response, idx) => (
                <div
                  key={conversationMessages != null ? "latest" : response.provider}
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
                        <>
                          <div className="mt-3 prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-6 prose-h3:mb-2 prose-h4:mt-5 prose-h4:mb-2 prose-p:my-2.5 prose-ul:my-3 prose-ol:my-3 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0 [&>h4:first-child]:mt-0">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{response.response}</ReactMarkdown>
                          </div>
                          <div className="mt-3">
                            <button
                              type="button"
                              onClick={() => {
                                const modelId = MODEL_OPTIONS.find((m) => m.label === response.provider)?.id;
                                if (modelId && lastSubmittedPrompt) {
                                  setConversationSessionId(null);
                                  setConversationMessages([
                                    { role: "user", content: lastSubmittedPrompt },
                                    { role: "assistant", content: response.response },
                                  ]);
                                  setConversationModelId(modelId);
                                  setConversationProviderLabel(response.provider);
                                  replyEndRef.current?.scrollIntoView({ behavior: "smooth" });
                                }
                              }}
                              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                            >
                              Continue conversation
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Reply / continue conversation (only when one model was selected) */}
            {conversationMessages != null && conversationModelId != null && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-slate-800">
                  Continue with {conversationProviderLabel}
                </h2>
                <div className="max-h-[40vh] space-y-4 overflow-y-auto rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                  {conversationMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={
                        msg.role === "user"
                          ? "flex justify-end"
                          : "flex justify-start"
                      }
                    >
                      <div
                        className={
                          msg.role === "user"
                            ? "max-w-[85%] rounded-2xl rounded-tr-sm bg-slate-900 px-4 py-2.5 text-sm text-white"
                            : "max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm"
                        }
                      >
                        <span className="text-xs font-medium text-slate-500">
                          {msg.role === "user" ? "You" : conversationProviderLabel}
                        </span>
                        {msg.role === "assistant" ? (
                          <div className="mt-1 prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 text-slate-700">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                          </div>
                        ) : (
                          <p className="mt-0.5 whitespace-pre-wrap">{msg.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-slate-500 shadow-sm">
                        Thinking…
                      </div>
                    </div>
                  )}
                  <div ref={replyEndRef} />
                </div>
                <form onSubmit={handleReply} className={`mt-4 flex flex-wrap items-center gap-2 ${drivingMode ? "flex-col gap-4" : ""}`}>
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Reply or record…"
                    disabled={loading}
                    className={
                      drivingMode
                        ? "w-full min-h-[56px] flex-1 rounded-2xl border-2 border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-60"
                        : "min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 disabled:opacity-60"
                    }
                  />
                  {recording && recordingForReply ? (
                    <button
                      type="button"
                      onClick={stopRecording}
                      className={
                        drivingMode
                          ? "w-full min-h-[72px] shrink-0 rounded-2xl border-2 border-red-400 bg-red-100 px-8 py-5 text-xl font-bold text-red-700 hover:bg-red-200"
                          : "shrink-0 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-100"
                      }
                    >
                      Stop
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={recording || transcribing || loading}
                      onClick={() => startRecording("reply")}
                      className={
                        drivingMode
                          ? "w-full min-h-[72px] shrink-0 rounded-2xl border-2 border-slate-300 bg-white px-8 py-5 text-xl font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                          : "shrink-0 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                      }
                    >
                      {transcribing ? "…" : "Record"}
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={loading || !replyText.trim()}
                    className={
                      drivingMode
                        ? "w-full min-h-[72px] shrink-0 rounded-2xl bg-slate-900 px-8 py-5 text-xl font-bold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        : "shrink-0 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    }
                  >
                    Send
                  </button>
                  {drivingMode && (
                    <button
                      type="button"
                      onClick={stopPlayback}
                      className="w-full min-h-[72px] shrink-0 rounded-2xl border-2 border-amber-300 bg-amber-50 px-8 py-5 text-xl font-bold text-amber-800 hover:bg-amber-100"
                    >
                      Stop playback
                    </button>
                  )}
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
