"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

const EMAIL = "conner.mccarthy.97@gmail.com";
const PHONE = "(828) 329-5839";

function FadeInSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Theme1Home() {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  async function copyToClipboard(text: string, type: "email" | "phone") {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // fallback: mailto/tel still work via href
    }
  }
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50/95 to-blue-100 text-slate-900">
      {/* Top Bar */}
      <header
        className="sticky z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur"
        style={{ top: "var(--topbar-height)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <Image
              src="/conner-headshot-v2.png"
              alt="Conner McCarthy"
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl object-cover ring-1 ring-slate-200"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Conner McCarthy Websites</div>
              <div className="text-xs text-slate-500">Web design and Hosting</div>
            </div>
          </div>

          <nav className="flex items-center gap-2 text-sm">
            <a 
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:scale-105 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm"
              href="#pricing"
            >
              Pricing
            </a>
            <a 
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:scale-105 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm"
              href="#faq"
            >
              FAQ
            </a>
            <a 
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:scale-105 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <FadeInSection>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* soft decorative blobs */}
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative p-8 md:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Small-business websites, built with care
              </div>

              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Professional Modern Websites
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                Fast, clean, mobile-first sites for real people and real businesses.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                  href="#contact"
                >
                  Get a quote
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-slate-300 hover:shadow-lg">
                  <div className="text-sm font-semibold">Mobile-first</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">Looks great anywhere</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-slate-300 hover:shadow-lg">
                  <div className="text-sm font-semibold">Fast</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">Speed + SEO friendly</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:border-slate-300 hover:shadow-lg">
                  <div className="text-sm font-semibold">Support</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">Help when you need it</p>
                </div>
              </div>
            </div>
          </div>

          {/* trust row */}
          <div className="border-t border-slate-200 bg-white/70 px-8 py-5 md:px-12">
            <div className="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="font-semibold text-slate-800">Simple pricing.</span>{" "}
                Clear scope, clear timeline, no surprises.
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" /> Launch-ready
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" /> Instant edits
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-500" /> Performance minded
                </span>
              </div>
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* One simple monthly price */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20 scroll-mt-32">
        <FadeInSection>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">One simple monthly price</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300">
              <div className="text-sm font-semibold">ZERO upfront cost</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">No upfront cost. No contracts. Cancel anytime.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300 min-h-[120px]">
              <div className="text-sm font-semibold">Pay only when your site goes live</div> 
              <p className="mt-2 text-sm leading-relaxed text-slate-600">A professional website without the big upfront expense and risk.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300 min-h-[120px]">
              <div className="text-sm font-semibold">Starting at $85 / month</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Includes hosting, domain, backups, security, and simple edits.</p>
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20 scroll-mt-32">
        <FadeInSection>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "How fast can we launch?",
                a: "Most small sites can launch in 1–3 weeks depending on content, approvals, and pages.",
              },

              {
                q: "Can you help with hosting/domain/email?",
                a: "I’ll guide you through setup (AWS/Cloudflare/etc.) and make sure everything connects cleanly.",
              },
              {
                q: "What if I need updates later?",
                a: "You can request simple edits, or choose a maintenance option depending on how hands-on you want to be.",
              },
            ].map((f) => (
              <div key={f.q} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300">
                <div className="text-sm font-semibold">{f.q}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14 md:py-20 scroll-mt-32">
        <FadeInSection>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-sm">
          <div className="grid items-stretch gap-y-10 gap-x-12 p-8 md:grid-cols-[0.6fr_1.2fr_1fr] md:p-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to launch?</h2>
              <p className="mt-3 text-white/80">
                Tell me what you do and what you want your website to accomplish. I’ll reply with a
                quick plan and a straightforward quote.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                  href="mailto:conner.mccarthy.97@gmail.com"
                  onClick={() => copyToClipboard(EMAIL, "email")}
                >
                  {copied === "email" ? "Copied!" : `Email - ${EMAIL}`}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 hover:border-white/30"
                  href="tel:+18283295839"
                  onClick={() => copyToClipboard(PHONE, "phone")}
                >
                  {copied === "phone" ? "Copied!" : `Call - ${PHONE}`}
                </a>
              </div>
            </div>

            <div className="flex w-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-sm font-semibold text-white">Send a message</div>
              <div className="w-full">
                <ContactForm />
              </div>
            </div>

            <div className="flex w-full flex-col self-center rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">A calm, simple process</div>

              <ul className="mt-5 space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                  <span>
                    <span className="font-semibold text-white">Quick call or email</span> — You tell me what you do, who you serve, and what you want the site to accomplish.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                  <span>
                    <span className="font-semibold text-white">Design + copy</span> — I draft a clean layout so visitors understand you fast.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                  <span>
                    <span className="font-semibold text-white">Build + launch</span> — We review, make final edits, connect domain/email, and go live.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <FadeInSection>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Conner McCarthy Websites</div>
          <div className="text-slate-500">Built with Next.js</div>
        </div>
        </FadeInSection>
      </footer>
    </main>
  );
}
