"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  "claude-opus": "Claude Opus 4.6",
  "claude-sonnet": "Claude Sonnet 4.6",
  "grok-reasoning": "Grok 4-1 Fast Reasoning",
  "grok-non-reasoning": "Grok 4-1 Fast Non-Reasoning",
  deepseek: "DeepSeek Chat",
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
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [detailsCache, setDetailsCache] = useState<Record<string, SessionDetail>>({});
  const [loadingDetailId, setLoadingDetailId] = useState<string | null>(null);

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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Link
              href="/llm"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              ← Back to LLM
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Home
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
        {!loading && !error && entries.length > 0 && (
          <ul className="space-y-4">
            {entries.map((entry) => {
              const isExpanded = expandedId === entry.id;
              const detail = detailsCache[entry.id];
              const loadingDetail = loadingDetailId === entry.id;
              return (
                <li key={entry.id}>
                  <article className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleExpand(entry.id)}
                      className="w-full p-4 text-left hover:bg-slate-50/80 transition-colors flex items-start justify-between gap-2"
                    >
                      <div className="min-w-0 flex-1">
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
                        <h2 className="mt-1 text-base font-semibold text-slate-900">
                          {entry.title || preview(entry.prompt, 80)}
                        </h2>
                        <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                          {preview(entry.prompt, 200)}
                        </p>
                        {entry.model_ids.length > 0 && (
                          <p className="mt-2 text-xs text-slate-500">
                            Models: {entry.model_ids.join(", ")}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 text-slate-400 mt-1">
                        {isExpanded ? "▼" : "▶"}
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="border-t border-slate-200 bg-slate-50/50 px-4 pb-4">
                        {loadingDetail && !detail && (
                          <p className="py-4 text-slate-500">Loading…</p>
                        )}
                        {detail && (
                          <div className="space-y-6 pt-4">
                            {detail.session.messages && detail.session.messages.length > 0 ? (
                              <div>
                                <h3 className="text-sm font-semibold text-slate-700 mb-2">Conversation</h3>
                                <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-3">
                                  {detail.session.messages.map((msg, i) => (
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
                                            ? "max-w-[85%] rounded-2xl rounded-tr-sm bg-slate-900 px-3 py-2 text-sm text-white"
                                            : "max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-sm text-slate-800"
                                        }
                                      >
                                        <span className="text-xs font-medium text-slate-500">
                                          {msg.role === "user"
                                            ? "You"
                                            : (detail.session.conversation_model_id &&
                                                MODEL_ID_TO_LABEL[detail.session.conversation_model_id]) ||
                                              "Assistant"}
                                        </span>
                                        {msg.role === "assistant" ? (
                                          <div className="mt-1 prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 text-slate-700">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                              {msg.content}
                                            </ReactMarkdown>
                                          </div>
                                        ) : (
                                          <p className="mt-0.5 whitespace-pre-wrap">{msg.content}</p>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              detail.session.prompt && (
                                <div>
                                  <h3 className="text-sm font-semibold text-slate-700 mb-2">Prompt</h3>
                                  <p className="rounded-lg bg-white border border-slate-200 p-3 text-sm text-slate-800 whitespace-pre-wrap">
                                    {detail.session.prompt}
                                  </p>
                                </div>
                              )
                            )}
                            {detail.session.grok_summary && (
                              <div>
                                <h3 className="text-sm font-semibold text-slate-700 mb-2">Grok 4-1 Reasoning Summary</h3>
                                <div className="rounded-lg bg-white border border-slate-200 p-4 prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-6 prose-h2:mb-2 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-4 prose-h3:mb-2 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0">
                                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {detail.session.grok_summary}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            )}
                            {detail.session.summary && (
                              <div>
                                <h3 className="text-sm font-semibold text-slate-700 mb-2">Model-Response Synthesis</h3>
                                <div className="rounded-lg bg-white border border-slate-200 p-4 prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-6 prose-h2:mb-2 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-1 prose-h3:mt-4 prose-h3:mb-2 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0">
                                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {detail.session.summary}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            )}
                            {!detail.session.conversation_model_id && (
                              <div>
                                <h3 className="text-sm font-semibold text-slate-700 mb-2">Model responses</h3>
                                <div className="space-y-4">
                                  {detail.responses.map((r) => (
                                    <div
                                      key={`${r.provider}-${r.sort_order}`}
                                      className="rounded-lg bg-white border border-slate-200 overflow-hidden"
                                    >
                                      <div className="border-b border-slate-100 px-3 py-2 font-medium text-slate-800 text-sm">
                                        {r.provider}
                                        {r.error && (
                                          <span className="ml-2 text-xs text-red-600">(Error)</span>
                                        )}
                                      </div>
                                      <div className="p-3">
                                        {r.error ? (
                                          <p className="text-sm text-red-600">{r.error}</p>
                                        ) : (
                                          <div className="prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700 prose-h2:mt-4 prose-h2:mb-2 prose-h3:mt-3 prose-h3:mb-1 prose-p:my-1.5 prose-ul:my-1.5 prose-ol:my-1.5 prose-li:my-0 [&>h2:first-child]:mt-0 [&>h3:first-child]:mt-0">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                              {r.response}
                                            </ReactMarkdown>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  ))}
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
