"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";

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

export default function Theme3Home() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-stone-900">
      {/* Header */}
      <header
        className="sticky z-30 border-b border-stone-200/60 bg-white"
        style={{ top: "var(--topbar-height)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/pjmc-logo.png"
              alt="PJMC Logo"
              width={120}
              height={64}
              className="max-h-16 object-contain opacity-90"
            />
            <span className="text-lg font-semibold text-stone-900">Pamela McCarthy Catering</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex">
            <a className="transition-colors hover:text-amber-700" href="#gallery">
              Gallery
            </a>
            <a className="transition-colors hover:text-amber-700" href="#events">
              Events
            </a>
            <a className="transition-colors hover:text-amber-700" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20 md:pb-14">
        <FadeInSection>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <Image
            src="/pam-mccarthy-headshot.png"
            alt="Pamela McCarthy"
            width={160}
            height={160}
            className="h-32 w-32 rounded-full object-cover ring-4 ring-amber-200 md:h-40 md:w-40"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Weddings, Parties & Events
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-stone-700 md:text-xl">
              Beautiful, delicious catering for your special moments. From intimate gatherings to grand celebrations, we create memorable experiences through exceptional food and service.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                className="rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700"
                href="#contact"
              >
                Book your event
              </a>
              <a
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-50"
                href="#gallery"
              >
                See our work
              </a>
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-14 md:py-20 scroll-mt-28">
        <FadeInSection>
        <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
          Our Work
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-stone-600">
          A glimpse into the beautiful events we&apos;ve catered.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
            <Image
              src="/theme3-photo-1-new.png"
              alt="Catering photo 1"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
            <Image
              src="/theme3-photo-2-new.png"
              alt="Catering photo 2"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
            <Image
              src="/theme3-photo-3.png"
              alt="Catering photo 3"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* What we offer */}
      <section id="events" className="mx-auto max-w-6xl px-4 py-14 md:py-20 scroll-mt-28">
        <FadeInSection>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-stone-600">
            Premium catering services for every occasion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "💒",
              title: "Weddings",
              desc: "Elegant menus and flawless execution for your special day. From intimate ceremonies to grand receptions.",
            },
            {
              icon: "🎉",
              title: "Corporate Events",
              desc: "Professional catering for meetings, conferences, and company celebrations. Impress your guests.",
            },
            {
              icon: "🎂",
              title: "Private Parties",
              desc: "Custom menus for birthdays, anniversaries, and special gatherings. We make it memorable.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
              <div className="relative">
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-stone-900">{service.title}</h3>
                <p className="leading-relaxed text-stone-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        </FadeInSection>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <FadeInSection>
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-lg md:p-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Let&apos;s Plan Your Event
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-lg text-stone-600">
            Tell us about your event and we&apos;ll create a custom catering plan that exceeds your expectations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:pamjrmccarthy@gmail.com"
              className="rounded-full bg-amber-600 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-700"
            >
              pamjrmccarthy@gmail.com
            </a>
            <a
              href="tel:+18283297953"
              className="rounded-full border border-stone-300 bg-white px-8 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-50"
            >
              (828) 329-7953
            </a>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <FadeInSection>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Pamela McCarthy Catering</div>
          <div className="text-stone-500">Serving exceptional events since 2010</div>
        </div>
        </FadeInSection>
      </footer>
    </main>
  );
}
