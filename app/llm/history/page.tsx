"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LLM_CONTINUE_KEY = "llm_continue_conversation";

type HistoryEntry = {
  id: string;
  created_at: string;
  title: string | null;
  prompt: string;
  summary: string;
  grok_summary?: string | null;
  model_ids: string[];
  conversation_model_id: string | null;
};

type ChatMessage = { role: "user" | "assistant"; content: string };

const MODEL_ID_TO_LABEL: Record<string, string> = {
  "openai-5.2": "OpenAI 5.2",
  "openai-4.1": "OpenAI 4.1",
  "openai-5-mini": "OpenAI 5 Mini",
  "openai-5-nano": "OpenAI 5 Nano",
  "claude-opus": "Claude Opus 4.6",
  "claude-sonnet": "Claude Sonnet 4.6",
  "claude-haiku": "Claude Haiku 4.5",
  "grok-reasoning": "Grok 4-1 Fast Reasoning",
  "grok-non-reasoning": "Grok 4-1 Fast Non-Reasoning",
  deepseek: "DeepSeek Chat",
  "gemini-flash": "Gemini 1.5 Flash",
  "mistral-small": "Mistral Small",
};

type SessionResponse = {
  provider: string;
  model_id: string;
  response: string;
  error: string | null;
  sort_order: number;
};

type SessionDetailSession = HistoryEntry & {
  messages: ChatMessage[];
};

type SessionDetail = {
  session: SessionDetailSession;
  responses: SessionResponse[];
};

export default function LLMHistoryPage() {
  const router = useRouter();
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [detailsCache, setDetailsCache] = useState<Record<string, SessionDetail>>({});
  const [loadingDetailId, setLoadingDetailId] = useState<string | null>(null);
  /** Per-entry set of expanded model response provider names (for click-to-expand) */
  const [expandedResponseProviders, setExpandedResponseProviders] = useState<Record<string, Set<string>>>({});
  /** Per-entry expanded state for Grok and synthesis summaries */
  const [expandedGrokSummaries, setExpandedGrokSummaries] = useState<Record<string, boolean>>({});
  const [expandedSynthesisSummaries, setExpandedSynthesisSummaries] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speakingRef = useRef(false);

  async function speakWithTTS(text: string) {
    if (!text.trim() || speakingRef.current) return;
    speakingRef.current = true;
    setIsPlaying(true);
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
      if (!res.ok) {
        setIsPlaying(false);
        speakingRef.current = false;
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        URL.revokeObjectURL(url);
        audioRef.current = null;
        speakingRef.current = false;
        setIsPlaying(false);
      };
      audio.onerror = () => {
        URL.revokeObjectURL(url);
        speakingRef.current = false;
        setIsPlaying(false);
      };
      await audio.play();
    } catch {
      speakingRef.current = false;
      setIsPlaying(false);
    }
  }

  function stopPlayback() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    speakingRef.current = false;
    setIsPlaying(false);
  }

  function toggleGrokSummary(entryId: string) {
    setExpandedGrokSummaries((prev) => ({
      ...prev,
      [entryId]: !prev[entryId],
    }));
  }

  function toggleSynthesisSummary(entryId: string) {
    setExpandedSynthesisSummaries((prev) => ({
      ...prev,
      [entryId]: !prev[entryId],
    }));
  }

  function continueConversation(payload: {
    sessionId?: string | null;
    modelId: string;
    providerLabel: string;
    messages: ChatMessage[];
  }) {
    try {
      sessionStorage.setItem(LLM_CONTINUE_KEY, JSON.stringify(payload));
      router.push("/llm");
    } catch {
      setError("Could not open LLM page");
    }
  }

  useEffect(() => {
    fetch("/api/llm/history")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load history");
        return res.json();
      })
      .then((data) => {
        setEntries(data.entries ?? []);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function formatDate(iso: string) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  }

  function preview(text: string, maxLen: number) {
    if (!text) return "—";
    const t = text.trim();
    if (t.length <= maxLen) return t;
    return t.slice(0, maxLen) + "…";
  }

  function toggleExpand(entryId: string) {
    const nextExpanded = expandedId === entryId ? null : entryId;
    setExpandedId(nextExpanded);
    if (nextExpanded && !detailsCache[nextExpanded]) {
      setLoadingDetailId(nextExpanded);
      fetch(`/api/llm/history/${nextExpanded}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load session");
          return res.json();
        })
        .then((data) => {
          setDetailsCache((c) => ({
            ...c,
            [nextExpanded]: {
              session: data.session,
              responses: data.responses ?? [],
            },
          }));
        })
        .catch(() => setError("Failed to load session details"))
        .finally(() => setLoadingDetailId(null));
    }
  }

  const expandedDetail = expandedId ? detailsCache[expandedId] : null;

  const filteredEntries = searchQuery.trim()
    ? entries.filter((entry) => {
        const q = searchQuery.trim().toLowerCase();
        const title = (entry.title ?? "").toLowerCase();
        const prompt = (entry.prompt ?? "").toLowerCase();
        const modelLabels = (entry.model_ids ?? [])
          .map((id) => (MODEL_ID_TO_LABEL[id] ?? id).toLowerCase())
          .join(" ");
        return title.includes(q) || prompt.includes(q) || modelLabels.includes(q);
      })
    : entries;

  function toggleResponseProvider(entryId: string, provider: string) {
    setExpandedResponseProviders((prev) => {
      const next = { ...prev };
      const set = new Set(next[entryId] ?? []);
      if (set.has(provider)) set.delete(provider);
      else set.add(provider);
      next[entryId] = set;
      return next;
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl min-w-0 px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Link
              href="/llm"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              ← Back to LLM
            </Link>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            LLM History
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Past runs from the Multi-LLM Aggregator.
          </p>
        </header>

        {loading && (
          <p className="text-slate-500">Loading history…</p>
        )}
        {error && (
          <p className="text-amber-600">{error}</p>
        )}
        {!loading && !error && entries.length === 0 && (
          <p className="text-slate-500">No entries yet. Run a prompt on the LLM page to see them here.</p>
        )}
        {!loading && !error && entries.length > 0 && searchQuery.trim() && filteredEntries.length === 0 && (
          <p className="text-slate-500">No entries match your search.</p>
        )}
        {!loading && !error && entries.length > 0 && (filteredEntries.length > 0 || !searchQuery.trim()) && (
          <ul className="space-y-4">
            {filteredEntries.map((entry) => {
              const isExpanded = expandedId === entry.id;
              const detail = detailsCache[entry.id];
              const loadingDetail = loadingDetailId === entry.id;
              return (
                <li key={entry.id} className="min-w-0">
                  <article className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden min-w-0">
                    <button
                      type="button"
                      onClick={() => toggleExpand(entry.id)}
                      className="w-full p-4 text-left hover:bg-slate-50/80 transition-colors flex items-start justify-between gap-2 min-w-0"
                    >
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                            {formatDate(entry.created_at)}
                          </p>
                          {entry.conversation_model_id && (
                            <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700">
                              Conversation
                            </span>
                          )}
                        </div>
                        <h2 className="mt-1 text-base font-semibold text-slate-900 break-words">
                          {entry.title || preview(entry.prompt, 80)}
                        </h2>
                        <p className="mt-1 text-sm text-slate-600 line-clamp-2 break-words">
                          {preview(entry.prompt, 200)}
                        </p>
                        {entry.model_ids.length > 0 && (
                          <p className="mt-2 text-xs text-slate-500 break-words">
                            Models: {entry.model_ids.join(", ")}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 text-slate-400 mt-1">
                        {isExpanded ? "▼" : "▶"}
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="border-t border-slate-200 bg-slate-50/50 px-4 pb-4 min-w-0 overflow-hidden">
                        {loadingDetail && !detail && (
                          <p className="py-4 text-slate-500">Loading…</p>
                        )}
                        {detail && (
                          <div className="space-y-6 pt-4 min-w-0">
                            {detail.session.messages && detail.session.messages.length > 0 ? (
                              <div className="min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <h3 className="text-sm font-semibold text-slate-700">Conversation</h3>
                                  {detail.session.conversation_model_id && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        continueConversation({
                                          sessionId: detail.session.id,
                                          modelId: detail.session.conversation_model_id!,
                                          providerLabel:
                                            MODEL_ID_TO_LABEL[detail.session.conversation_model_id!] ??
                                            detail.session.conversation_model_id,
                                          messages: detail.session.messages,
                                        })
                                      }
                                      className="shrink-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                      Continue conversation
                                    </button>
                                  )}
                                </div>
                                <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-3 min-w-0">
                                  {detail.session.messages.map((msg, i) => (
                                    <div
                                      key={i}
                                      className={
                                        msg.role === "user"
                                          ? "flex justify-end min-w-0"
                                          : "flex justify-start min-w-0"
                                      }
                                    >
                                      <div
                                        className={
                                          msg.role === "user"
                                            ? "max-w-[85%] min-w-0 rounded-2xl rounded-tr-sm bg-slate-900 px-3 py-2 text-sm text-white break-words"
                                            : "max-w-[85%] min-w-0 rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-sm text-slate-800 break-words"
                                        }
                                      >
                                        <div className="flex items-center justify-between gap-2">
                                          <span className="text-xs font-medium text-slate-500">
                                            {msg.role === "user"
                                              ? "You"
                                              : (detail.session.conversation_model_id &&
                                                  MODEL_ID_TO_LABEL[detail.session.conversation_model_id]) ||
                                                "Assistant"}
                                          </span>
                                          {msg.role === "assistant" && msg.content.trim() && (
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                speakWithTTS(msg.content);
                                              }}
                                              className="shrink-0 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
                                              title="Play with text-to-speech"
                                            >
                                              Play
                                            </button>
                                          )}
                                        </div>
                                        {msg.role === "assistant" ? (
                                          <div className="mt-1 prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 text-slate-700 break-words break-all [&>*]:break-words [&>*]:break-all">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                              {msg.content}
                                            </ReactMarkdown>
                                          </div>
                                        ) : (
                                          <p className="mt-0.5 whitespace-pre-wrap break-words">{msg.content}</p>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              detail.session.prompt && (
                                <div className="min-w-0">
                                  <h3 className="text-sm font-semibold text-slate-700 mb-2">Prompt</h3>
                                  <p className="rounded-lg bg-white border border-slate-200 p-3 text-sm text-slate-800 whitespace-pre-wrap break-words min-w-0">
                                    {detail.session.prompt}
                                  </p>
                                </div>
                              )
                            )}
                            {detail.session.grok_summary && (
                              <div className="min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <div className="flex items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => toggleGrokSummary(detail.session.id)}
                                      className="shrink-0 text-sm text-slate-500 hover:text-slate-700"
                                      aria-label={
                                        expandedGrokSummaries[detail.session.id]
                                          ? "Collapse Grok summary"
                                          : "Expand Grok summary"
                                      }
                                    >
                                      {expandedGrokSummaries[detail.session.id] ? "▼" : "▶"}
                                    </button>
                                    <h3 className="text-sm font-semibold text-slate-700">
                                      Grok 4-1 Reasoning Summary
                                    </h3>
                                  </div>
                                  <div className="flex shrink-0 items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => speakWithTTS(detail.session.grok_summary ?? "")}
                                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                      title="Play with text-to-speech"
                                    >
                                      Play
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const initialUser =
                                          detail.session.messages?.find((m) => m.role === "user")?.content ??
                                          detail.session.prompt ??
                                          "";
                                        const allResponses = detail.responses
                                          .map(
                                            (r) =>
                                              `**${r.provider}**:\n${r.error ? `(Error: ${r.error})` : r.response}`
                                          )
                                          .join("\n\n---\n\n");
                                        const assistantContent =
                                          detail.session.grok_summary +
                                          "\n\n---\n\nIndividual model responses:\n\n" +
                                          allResponses;
                                        continueConversation({
                                          sessionId: null,
                                          modelId: "grok-reasoning",
                                          providerLabel: "Grok 4-1 Fast Reasoning",
                                          messages: [
                                            { role: "user", content: initialUser },
                                            { role: "assistant", content: assistantContent },
                                          ],
                                        });
                                      }}
                                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                      Continue conversation
                                    </button>
                                  </div>
                                </div>
                                {expandedGrokSummaries[detail.session.id] && (
                                  <div className="rounded-lg bg-white border border-slate-200 p-4 prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-6 prose-h2:mb-2 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-4 prose-h3:mb-2 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0 break-words break-all [&>*]:break-words [&>*]:break-all overflow-hidden">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                      {detail.session.grok_summary}
                                    </ReactMarkdown>
                                  </div>
                                )}
                              </div>
                            )}
                            {detail.session.summary && (
                              <div className="min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <div className="flex items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => toggleSynthesisSummary(detail.session.id)}
                                      className="shrink-0 text-sm text-slate-500 hover:text-slate-700"
                                      aria-label={
                                        expandedSynthesisSummaries[detail.session.id]
                                          ? "Collapse synthesis summary"
                                          : "Expand synthesis summary"
                                      }
                                    >
                                      {expandedSynthesisSummaries[detail.session.id] ? "▼" : "▶"}
                                    </button>
                                    <h3 className="text-sm font-semibold text-slate-700">
                                      Model-Response Synthesis
                                    </h3>
                                  </div>
                                  <div className="flex shrink-0 items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => speakWithTTS(detail.session.summary ?? "")}
                                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                      title="Play with text-to-speech"
                                    >
                                      Play
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const initialUser =
                                          detail.session.messages?.find((m) => m.role === "user")?.content ??
                                          detail.session.prompt ??
                                          "";
                                        const allResponses = detail.responses
                                          .map(
                                            (r) =>
                                              `**${r.provider}**:\n${r.error ? `(Error: ${r.error})` : r.response}`
                                          )
                                          .join("\n\n---\n\n");
                                        const assistantContent =
                                          detail.session.summary +
                                          "\n\n---\n\nIndividual model responses:\n\n" +
                                          allResponses;
                                        continueConversation({
                                          sessionId: null,
                                          modelId: "openai-5.2",
                                          providerLabel: "OpenAI 5.2",
                                          messages: [
                                            { role: "user", content: initialUser },
                                            { role: "assistant", content: assistantContent },
                                          ],
                                        });
                                      }}
                                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                      Continue conversation
                                    </button>
                                  </div>
                                </div>
                                {expandedSynthesisSummaries[detail.session.id] && (
                                  <div className="rounded-lg bg-white border border-slate-200 p-4 prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-6 prose-h2:mb-2 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-4 prose-h3:mb-2 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0 break-words break-all [&>*]:break-words [&>*]:break-all overflow-hidden">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                      {detail.session.summary}
                                    </ReactMarkdown>
                                  </div>
                                )}
                              </div>
                            )}
                            {!detail.session.conversation_model_id && (
                              <div className="min-w-0">
                                <h3 className="text-sm font-semibold text-slate-700 mb-2">Model responses</h3>
                                <div className="space-y-4 min-w-0">
                                  {detail.responses.map((r) => {
                                    const entryId = detail.session.id;
                                    const isExpanded = (expandedResponseProviders[entryId] ?? new Set()).has(r.provider);
                                    return (
                                      <div
                                        key={`${r.provider}-${r.sort_order}`}
                                        className="rounded-xl border border-slate-200 bg-white shadow-sm min-w-0 overflow-hidden"
                                      >
                                        <div className="flex w-full items-center justify-between gap-2 rounded-t-xl border-b border-slate-100 bg-white px-4 py-3">
                                          <button
                                            type="button"
                                            onClick={() => toggleResponseProvider(entryId, r.provider)}
                                            className="flex-1 text-left hover:bg-slate-50 transition-colors rounded-lg px-2 py-1 min-w-0"
                                          >
                                            <span className="font-medium text-slate-800 min-w-0 break-words">
                                              {r.provider}
                                              {r.error && (
                                                <span className="ml-2 text-xs text-red-600">(Error)</span>
                                              )}
                                            </span>
                                          </button>
                                          {!r.error && (
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                speakWithTTS(r.response);
                                              }}
                                              className="shrink-0 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                                              title="Play with text-to-speech"
                                            >
                                              Play
                                            </button>
                                          )}
                                          <button
                                            type="button"
                                            onClick={() => toggleResponseProvider(entryId, r.provider)}
                                            className="shrink-0 text-sm text-slate-500 hover:text-slate-700"
                                            aria-label={isExpanded ? "Collapse response" : "Expand response"}
                                          >
                                            {isExpanded ? "▼" : "▶"}
                                          </button>
                                        </div>
                                        {isExpanded && (
                                          <div className="border-t border-slate-100 px-4 pb-4 min-w-0 overflow-hidden">
                                            {r.error ? (
                                              <p className="mt-3 text-sm text-red-600 break-words">{r.error}</p>
                                            ) : (
                                              <>
                                                <div className="mt-3 prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-6 prose-h3:mb-2 prose-h4:mt-5 prose-h4:mb-2 prose-p:my-2.5 prose-ul:my-3 prose-ol:my-3 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0 [&>h4:first-child]:mt-0 break-words break-all [&>*]:break-words [&>*]:break-all overflow-hidden">
                                                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {r.response}
                                                  </ReactMarkdown>
                                                </div>
                                                <div className="mt-3 flex flex-wrap items-center gap-2">
                                                  <button
                                                    type="button"
                                                    onClick={() => {
                                                      const initialUser =
                                                        detail.session.messages?.find((m) => m.role === "user")?.content ??
                                                        detail.session.prompt ??
                                                        "";
                                                      continueConversation({
                                                        sessionId: null,
                                                        modelId: r.model_id,
                                                        providerLabel: r.provider,
                                                        messages: [
                                                          { role: "user", content: initialUser },
                                                          { role: "assistant", content: r.response },
                                                        ],
                                                      });
                                                    }}
                                                    className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                                  >
                                                    Continue with {r.provider}
                                                  </button>
                                                </div>
                                              </>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
