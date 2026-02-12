"use client";

import { useState } from "react";

export default function ContractorAskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setError(null);
    setAnswer(null);
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setAnswer(data.answer ?? null);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-10">
      <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
        Ask about our business, prices, or installations
      </h2>
      <p className="mt-2 text-sm text-white/80">
        Ask a question and get an instant answer. e.g. services, pricing, water heater installs, or service area.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }
          }}
          placeholder="e.g. How much for a water heater install? Do you do emergency repairs?"
          rows={3}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Getting answer…" : "Ask"}
        </button>
      </form>
      {error && (
        <p className="mt-4 text-sm text-amber-300" role="alert">
          {error}
        </p>
      )}
      {answer && (
        <div className="mt-6 rounded-lg border border-white/15 bg-white/5 p-4">
          <p className="text-sm font-medium text-white/90">Answer:</p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-white/95">{answer}</p>
        </div>
      )}
    </div>
  );
}
