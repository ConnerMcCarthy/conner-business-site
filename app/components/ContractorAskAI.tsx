"use client";

import { useState, useRef, useEffect } from "react";

const QUICK_QUESTIONS = [
  { label: "Services", question: "What do you fix?" },
  { label: "Pricing", question: "I'm looking at replacing my water heater and might add a recirculation pump. Do you give free estimates? What's included in the price—permits, disposal, labor—and do you offer any rebates or financing?" },
  { label: "Service area", question: "Do you serve my neighborhood? I sometimes need help on short notice or after hours—do you do emergency calls, and what's the typical response time or after-hours charge?" },
  { label: "Extreme Question", question: "In a 1980s-era house with original galvanized supply lines transitioning to copper in the mid-90s addition, I'm getting inconsistent low water pressure only on the hot side during simultaneous use (shower + kitchen sink), but cold pressure is fine. The water heater is a 50-gal natural gas unit from 2012 that's been descaled once. There's no banging or visible leaks, the pressure regulator at the meter tests at 65 psi static, and we've already replaced the shower mixing valve and aerators. Could this be a failing dip tube, partial collapse in the galvanized-to-copper transition fitting causing cavitation, or maybe a restricted hot water line from calcium buildup or a crossed connection somewhere? Would repiping just the hot side with PEX solve it, or do I need a full system re-pipe including addressing the old galvanized for velocity/erosion concerns under current UPC/IPC flow rates? And how would you diagnose without tearing into walls—camera, thermal imaging, flow testing at fixtures, or something else?" },
] as const;

const MIN_ROWS = 3;
const MIN_HEIGHT_PX = 80;
const MAX_HEIGHT_PX = 280;

export default function ContractorAskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "0px";
    const h = Math.max(MIN_HEIGHT_PX, Math.min(ta.scrollHeight, MAX_HEIGHT_PX));
    ta.style.height = `${h}px`;
  }, [question]);

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
      <div className="mt-4 flex flex-wrap gap-2">
        {QUICK_QUESTIONS.map(({ label, question: q }) => (
          <button
            key={label}
            type="button"
            onClick={() => setQuestion(q)}
            className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
          >
            {label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <textarea
          ref={textareaRef}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }
          }}
          placeholder="e.g. How much for a water heater install? Do you do emergency repairs?"
          rows={MIN_ROWS}
          className="w-full resize-none overflow-y-auto rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
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
