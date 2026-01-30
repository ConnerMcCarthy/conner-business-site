"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Section = "home" | "services" | "reviews" | "faq" | "rates" | "contact";

const SCROLL_OFFSET = 0; // adjust if needed for header overlap

const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "home", label: "Book" },
  { id: "services", label: "Services" },
  { id: "rates", label: "Rates" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

function getNextSection(current: Section): Section | null {
  const idx = NAV_ITEMS.findIndex((n) => n.id === current);
  if (idx < 0 || idx >= NAV_ITEMS.length - 1) return null;
  return NAV_ITEMS[idx + 1].id;
}

function NextSectionButton({
  current,
  onNext,
}: {
  current: Section;
  onNext: (s: Section) => void;
}) {
  const next = getNextSection(current);
  if (!next) return null;
  return (
    <div className="mt-auto flex flex-shrink-0 justify-center pb-8 pt-8">
      <button
        type="button"
        onClick={() => onNext(next)}
        className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-6 py-3 text-stone-700 shadow-sm transition-all hover:border-fuchsia-300 hover:bg-fuchsia-50 hover:text-fuchsia-700"
        aria-label={`Go to next section`}
      >
        <span className="text-fuchsia-500">▼</span>
      </button>
    </div>
  );
}

export default function Theme4Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const scroll = () => {
      el.scrollTop = SCROLL_OFFSET;
      window.scrollTo(0, SCROLL_OFFSET);
    };
    requestAnimationFrame(scroll);
  }, [activeSection]);

  const testimonials = [
    {
      name: "Sarah M.",
      dog: "Golden Retriever, Max",
      text: "Rick watched Max for a week while we were on vacation. He sent daily photos and updates. Max was so happy when we picked him up!",
      rating: 5,
    },
    {
      name: "James T.",
      dog: "French Bulldog, Luna",
      text: "Luna has separation anxiety, but Rick knew exactly how to help her feel comfortable. We couldn't have asked for better care.",
      rating: 5,
    },
    {
      name: "Maria L.",
      dog: "Border Collie, Charlie",
      text: "Charlie needs lots of exercise, and Rick made sure he got plenty of walks and playtime. Highly recommend!",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: "🏠",
      title: "Overnight Stays",
      desc: "Your dog stays with me or I stay at your place. Same routine, less stress.",
    },
    {
      icon: "☀️",
      title: "Day Care",
      desc: "Drop off for the day—play, rest, and company while you're at work or out.",
    },
    {
      icon: "🚶",
      title: "Dog Walks",
      desc: "Regular walks so your dog gets exercise and bathroom breaks on schedule.",
    },
  ];

  const faqs = [
    {
      q: "How far in advance should I book?",
      a: "I recommend booking at least 2-3 weeks in advance, especially for holidays. However, I often have availability for last-minute requests—just reach out!",
    },
    {
      q: "Do you take multiple dogs at once?",
      a: "Yes, I can watch multiple dogs from the same family, or coordinate with you if your dog gets along well with others. I always do a meet-and-greet first.",
    },
    {
      q: "What if my dog has special needs?",
      a: "I'm experienced with medications, special diets, mobility issues, and senior care. Just let me know your dog's specific needs during booking.",
    },
    {
      q: "Will I get updates while I'm away?",
      a: "Absolutely! I send daily photos and updates via text or email so you can see how your pup is doing and have peace of mind.",
    },
  ];

  const featuredIn = ["PET CARE MAGAZINE", "DOG LOVER", "LOCAL TIMES", "TRUSTED SITTERS"];

  return (
    <main className="flex min-h-screen flex-col bg-white text-stone-900">
      {/* Header - switches sections */}
      <header
        className="sticky z-30 flex-shrink-0 border-b border-stone-200 bg-white"
        style={{ top: "var(--topbar-height)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="font-bold uppercase tracking-tight text-stone-900">
            Rick Johnson
          </div>
          <nav className="flex items-center gap-6 md:gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative text-sm font-medium text-stone-700 transition-colors hover:text-stone-900 ${
                  activeSection === item.id ? "text-stone-900" : ""
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-fuchsia-500" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content - one section at a time, no scroll */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Home */}
        {activeSection === "home" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 md:flex-row md:items-start md:gap-16 md:px-6 md:py-16">
              <div className="flex-1">
                <h1 className="text-4xl font-bold uppercase leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
                  <span className="block">Your Dog&apos;s</span>
                  <span className="block">Home Away</span>
                  <span className="block">From Home</span>
                </h1>
                <div className="mt-6 h-1 w-16 bg-fuchsia-500" />
                <p className="mt-8 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
                  Reliable, experienced dog sitting from Rick Johnson. Overnight stays, day care, and walks—your pup gets personalized care in a safe, loving environment.
                </p>
                <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400">★</span>
                      ))}
                    </div>
                    <span className="text-sm text-stone-600">4.9 / 5 (200+ reviews)</span>
                  </div>
                  <div className="border-l-0 pl-0 sm:border-l sm:border-stone-200 sm:pl-8">
                    <div className="text-xs font-medium uppercase tracking-wider text-stone-400">
                      Featured in
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-400">
                      {featuredIn.map((name, i) => (
                        <span key={i}>{name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-10 aspect-square w-full max-w-md flex-shrink-0 overflow-hidden rounded-xl md:mt-0">
                <Image
                  src="/theme4-dog-contact.png"
                  alt="Happy dog"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <NextSectionButton current="home" onNext={setActiveSection} />
          </section>
        )}

        {/* Services */}
        {activeSection === "services" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 md:px-6 md:py-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl">
                What I offer
              </h2>
              <div className="mt-4 h-1 w-16 bg-fuchsia-500" />
              <p className="mt-6 max-w-2xl text-base text-stone-600 md:text-lg">
                Flexible options so your dog gets the personalized care that fits their needs and your schedule.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:border-fuchsia-200 hover:shadow-md"
                  >
                    <div className="mb-4 text-3xl">{service.icon}</div>
                    <h3 className="text-lg font-bold text-stone-900">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <NextSectionButton current="services" onNext={setActiveSection} />
          </section>
        )}

        {/* Rates */}
        {activeSection === "rates" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 md:px-6 md:py-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl">
                Simple, clear rates
              </h2>
              <div className="mt-4 h-1 w-16 bg-fuchsia-500" />
              <p className="mt-6 max-w-2xl text-base text-stone-600 md:text-lg">
                Pricing depends on your dog, the type of stay, and length. I&apos;ll give you a straightforward quote when you reach out. No hidden fees, no surprises.
              </p>
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  {[
                    "Overnight stays: $50–80/night",
                    "Day care: $35–50/day",
                    "Dog walks: $20–30/walk",
                    "Multi-dog discounts available",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-lg border border-stone-200 bg-stone-50/50 p-4"
                    >
                      <span className="text-fuchsia-500">✓</span>
                      <span className="text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border-2 border-fuchsia-200 bg-fuchsia-50/50 p-8 text-center">
                  <div className="text-2xl font-bold text-stone-900">Starting at</div>
                  <div className="mt-2 text-5xl font-bold text-stone-900">$35</div>
                  <div className="mt-2 text-lg text-stone-600">per day</div>
                  <button
                    onClick={() => setActiveSection("contact")}
                    className="mt-6 inline-block rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-fuchsia-600 hover:to-fuchsia-700"
                  >
                    Get a personalized quote
                  </button>
                </div>
              </div>
            </div>
            <NextSectionButton current="rates" onNext={setActiveSection} />
          </section>
        )}

        {/* Reviews */}
        {activeSection === "reviews" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 md:px-6 md:py-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl">
                What dog owners say
              </h2>
              <div className="mt-4 h-1 w-16 bg-fuchsia-500" />
              <p className="mt-6 max-w-xl text-base text-stone-600 md:text-lg">
                Don&apos;t just take my word for it—hear from happy pet parents.
              </p>
              <div className="mt-12">
                <div className="rounded-xl border border-stone-200 bg-stone-50/30 p-8 md:p-12">
                  <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, idx) => (
                      <div
                        key={idx}
                        className={`rounded-xl border-2 p-6 transition-all ${
                          idx === activeTestimonial
                            ? "border-fuchsia-400 bg-white shadow-lg"
                            : "border-stone-200 bg-white/80"
                        }`}
                        onMouseEnter={() => setActiveTestimonial(idx)}
                      >
                        <div className="mb-3 flex gap-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <span key={i} className="text-amber-400">★</span>
                          ))}
                        </div>
                        <p className="mb-4 text-sm leading-relaxed text-stone-700 italic">
                          &quot;{t.text}&quot;
                        </p>
                        <div className="border-t border-stone-200 pt-4">
                          <div className="font-semibold text-stone-900">{t.name}</div>
                          <div className="text-xs text-stone-500">{t.dog}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonial(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === activeTestimonial ? "w-8 bg-fuchsia-500" : "w-2 bg-stone-300"
                        }`}
                        aria-label={`View testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <NextSectionButton current="reviews" onNext={setActiveSection} />
          </section>
        )}

        {/* FAQ */}
        {activeSection === "faq" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-12 md:px-6 md:py-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl">
                Frequently asked questions
              </h2>
              <div className="mt-4 h-1 w-16 bg-fuchsia-500" />
              <div className="mt-12 space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all open:border-fuchsia-300 open:shadow-md"
                  >
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-stone-900">
                      <span>{faq.q}</span>
                      <span className="text-fuchsia-500 transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-stone-600 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <NextSectionButton current="faq" onNext={setActiveSection} />
          </section>
        )}

        {/* Contact */}
        {activeSection === "contact" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
              <div className="grid gap-8 lg:grid-cols-[200px_1fr_1fr] lg:gap-12">
                <div className="m-3">
                  <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-xl lg:max-w-none">
                    <Image
                      src="/theme4-dog-contact-photo.png"
                      alt="Happy dog"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="m-4 lg:m-0">
                  <h2 className="text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl">
                    Book a stay or ask a question
                  </h2>
                  <div className="mt-4 h-1 w-16 bg-fuchsia-500" />
                  <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                    Tell me about your dog, dates, and what you need. I&apos;ll get back quickly to confirm availability and rates.
                  </p>
                  <div className="mt-8 space-y-4">
                    <a
                      href="mailto:rick@example.com"
                      className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-fuchsia-300 hover:shadow-md"
                    >
                      <div className="rounded-full bg-fuchsia-100 p-3">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900">Email</div>
                        <div className="text-sm text-stone-600">rick@example.com</div>
                      </div>
                    </a>
                    <a
                      href="tel:+15551234567"
                      className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-fuchsia-300 hover:shadow-md"
                    >
                      <div className="rounded-full bg-fuchsia-100 p-3">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900">Phone</div>
                        <div className="text-sm text-stone-600">(555) 123-4567</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="m-3 rounded-xl border border-stone-200 bg-stone-50/50 p-6">
                  <div className="mb-4 font-semibold text-stone-900">Send a message</div>
                    <form className="space-y-4">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-stone-700">
                          Your name
                        </label>
                        <input
                        type="text"
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">
                        Dog&apos;s name & breed
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="Max, Golden Retriever"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-stone-700">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="Tell me about your dog and what you need..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:from-fuchsia-600 hover:to-fuchsia-700"
                    >
                      Send message
                    </button>
                    </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
