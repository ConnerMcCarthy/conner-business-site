"use client";

import { useState, useRef, useEffect } from "react";
import type { LeadUpdates } from "../api/intake/route";

const INITIAL_GREETING =
  "Hi! I can help scope your website. What business is this for, and what do you want the website to do?";

type Message = { role: "user" | "assistant"; content: string };

function mergeLeadUpdates(prev: LeadUpdates, updates: LeadUpdates): LeadUpdates {
  const next = { ...prev };
  for (const [k, v] of Object.entries(updates)) {
    if (v === undefined) continue;
    (next as Record<string, unknown>)[k] = v;
  }
  return next;
}

export default function IntakePage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_GREETING },
  ]);
  const [lead, setLead] = useState<LeadUpdates>({});
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [leadSummary, setLeadSummary] = useState("");
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setError(null);
    setInput("");
    const userMessage: Message = { role: "user", content: text };
    setMessages((m) => [...m, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessType: "Website Development",
          serviceArea:
            "Polk County / Rutherford County NC and remote clients",
          messages: [...messages, userMessage],
          lead,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errMsg =
          data.error ||
          (data.raw_output
            ? "The assistant returned invalid data. Please try again."
            : "Something went wrong. Please try again.");
        setError(errMsg);
        setMessages((m) => [...m, { role: "assistant", content: errMsg }]);
        return;
      }

      const assistantMessage = data.assistant_message ?? "Thanks for that.";
      setMessages((m) => [...m, { role: "assistant", content: assistantMessage }]);
      setLead((prev) => mergeLeadUpdates(prev, data.lead_updates ?? {}));
      setDone(Boolean(data.done));
      setLeadSummary(data.lead_summary ?? "");
    } catch {
      setError("Something went wrong. Please try again.");
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            AI Smart Intake
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Answer a few questions so we can scope your website project.
          </p>
        </header>

        {/* Transcript */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="max-h-[50vh] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "assistant"
                    ? "flex justify-start"
                    : "flex justify-end"
                }
              >
                <div
                  className={
                    msg.role === "assistant"
                      ? "max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-sm text-slate-800"
                      : "max-w-[85%] rounded-2xl rounded-tr-sm bg-slate-900 px-4 py-2.5 text-sm text-white"
                  }
                >
                  <span className="text-xs font-medium text-slate-500">
                    {msg.role === "assistant" ? "Assistant" : "You"}
                  </span>
                  <p className="mt-0.5 whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2.5 text-sm text-slate-500">
                  Thinking…
                </div>
              </div>
            )}
            <div ref={transcriptEndRef} />
          </div>
        </div>

        {/* Input */}
        {!done && (
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your answer…"
                disabled={loading}
                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
          </form>
        )}

        {/* Done state: summary + JSON */}
        {done && (
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              Lead summary
            </h2>
            {leadSummary ? (
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
                {leadSummary}
              </p>
            ) : (
              <p className="text-sm text-slate-500">
                No summary generated. See lead data below.
              </p>
            )}
            <h2 className="text-lg font-semibold text-slate-800">Lead data</h2>
            <pre className="max-h-64 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-700">
              {JSON.stringify(lead, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
