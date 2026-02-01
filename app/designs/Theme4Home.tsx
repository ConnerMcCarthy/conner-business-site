"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ServiceAreaMap = dynamic(() => import("./ServiceAreaMap"), { ssr: false });

type Section = "home" | "services" | "servicearea" | "reviews" | "faq" | "rates" | "contact";

const SCROLL_OFFSET = 0; // adjust if needed for header overlap

const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "servicearea", label: "Service Area" },
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

export default function CritterSitter() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [contactError, setContactError] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  function goToSection(id: Section) {
    setActiveSection(id);
    setMobileNavOpen(false);
  }

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const dogInfo = formData.get("dogInfo") as string;
    const message = formData.get("message") as string;

    setContactStatus("loading");
    setContactError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, dogInfo, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }
      setContactStatus("success");
      form.reset();
    } catch (err) {
      setContactStatus("error");
      setContactError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

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
      name: "Pam M.",
      dog: "Golden Retriever, Max",
      text: "Rick watched Max for a week while we were on vacation. He sent daily photos and updates. Max was so happy when we picked him up!",
      rating: 5,
    },
    {
      name: "Elaine J.",
      dog: "French Bulldog, Luna",
      text: "Luna has separation anxiety, but Rick knew exactly how to help her feel comfortable. We couldn't have asked for better care.",
      rating: 5,
    },
    {
      name: "Mel",
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
      desc: "Drop off for the day. Play, rest, and company while you're at work or out.",
    },
    {
      icon: "🚶",
      title: "Walks",
      desc: "Regular walks every 2 hrs so your dog gets exercise and bathroom breaks on schedule.",
    },
  ];

  const faqs = [
    {
      q: "How far in advance should I book?",
      a: "I recommend booking at least 2-3 weeks in advance, especially for holidays. However, I often have availability for last-minute requests. Just reach out!",
    },
    {
      q: "Do you take multiple dogs at once?",
      a: "Yes, I can watch multiple dogs from the same family. I always do a meet-and-greet first.",
    },
    {
      q: "What if my dog has special needs?",
      a: "I'm experienced with medications, special diets, mobility issues, and senior care. Just let me know your dog's specific needs during booking.",
    },
    {
      q: "Will I get updates while I'm away?",
      a: "Absolutely! I send daily photos and updates via text or email so you can see how your pup is doing and have peace of mind.",
    },
    {
      q: "What is dog taxi/transport?",
      a: "Pick-up and drop-off for vet, groomer, daycare, etc.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-stone-900">
      {/* Header - switches sections */}
      <header
        className="sticky z-30 flex-shrink-0 border-b border-stone-200 bg-white"
        style={{ top: "var(--topbar-height)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4 md:px-6">
          <div className="font-bold uppercase tracking-tight text-stone-900 text-lg md:text-base">
            Rick Johnson
          </div>
          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex md:gap-8">
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
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileNavOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-600 hover:bg-stone-100 md:hidden"
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          >
            {mobileNavOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
        {/* Mobile nav dropdown */}
        {mobileNavOpen && (
          <nav className="flex flex-col border-t border-stone-200 bg-white px-4 py-3 md:hidden">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className={`py-2.5 text-left text-sm font-medium ${
                  activeSection === item.id ? "text-fuchsia-600" : "text-stone-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main content - one section at a time, no scroll */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Home */}
        {activeSection === "home" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-6 sm:gap-8 sm:py-8 md:flex-row md:items-start md:gap-16 md:px-6 md:py-16">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold uppercase leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="block">Your Dog&apos;s</span>
                  <span className="block">Home Away</span>
                  <span className="block">From Home</span>
                </h1>
                <div className="mt-4 h-1 w-12 bg-fuchsia-500 sm:mt-6 sm:w-16" />
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone-600 sm:mt-6 sm:text-base md:mt-8 md:text-lg">
                  Reliable, experienced dog sitting from Rick Johnson. Overnight stays and day care. Your pup gets personalized care in a safe, loving environment.
                </p>
                <button
                  type="button"
                  onClick={() => goToSection("contact")}
                  className="mt-6 inline-block rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-fuchsia-600 hover:to-fuchsia-700"
                >
                  Book
                </button>
              </div>
              <div className="relative aspect-square w-full max-w-[280px] flex-shrink-0 self-center overflow-hidden rounded-xl sm:max-w-sm md:max-w-md md:mt-0 md:self-start">
                <Image
                  src="/theme4-dog-hero.png"
                  alt="Happy dog"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 384px, 448px"
                />
              </div>
            </div>
            <NextSectionButton current="home" onNext={goToSection} />
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
            <NextSectionButton current="services" onNext={goToSection} />
          </section>
        )}

        {/* Service Area */}
        {activeSection === "servicearea" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 md:px-6 md:py-16">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl">
                Service area
              </h2>
              <div className="mt-4 h-1 w-16 bg-fuchsia-500" />
              <p className="mt-6 max-w-2xl text-base text-stone-600 md:text-lg">
                I serve a 20-mile radius around Columbus, NC including Tryon, Landrum, Hendersonville, Spartanburg, and surrounding areas.
              </p>
              <div className="mt-8 overflow-hidden rounded-xl border border-stone-200 bg-stone-50/50">
                <ServiceAreaMap />
              </div>
              <p className="mt-4 text-center text-sm text-stone-500">
                © <a href="https://www.openstreetmap.org/copyright" className="text-stone-600 underline hover:text-fuchsia-600" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors
              </p>
            </div>
            <NextSectionButton current="servicearea" onNext={goToSection} />
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
                Pricing depends on your dog and length of stay. I&apos;ll give you a straightforward quote when you reach out. No hidden fees, no surprises.
              </p>
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  {[
                    "Overnight stays: $50–80/night",
                    "Day care: $35–50/day",
                    "Dog taxi / transport: $25–40/trip",
                    "House and Dog sitting: $100/night",
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
                    onClick={() => goToSection("contact")}
                    className="mt-6 inline-block rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-fuchsia-600 hover:to-fuchsia-700"
                  >
                    Get a personalized quote
                  </button>
                </div>
              </div>
            </div>
            <NextSectionButton current="rates" onNext={goToSection} />
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
            <NextSectionButton current="reviews" onNext={goToSection} />
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
            <NextSectionButton current="faq" onNext={goToSection} />
          </section>
        )}

        {/* Contact */}
        {activeSection === "contact" && (
          <section ref={sectionRef} className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[280px_1fr_1fr] lg:gap-x-0 lg:gap-y-8">
                <div className="flex justify-center lg:justify-start lg:items-center">
                  <img
                    src="/ric-contact.png"
                    alt="Rick Johnson with dog"
                    className="h-[320px] w-[240px] rounded-xl object-cover lg:h-[368px] lg:w-[276px]"
                  />
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
                      href="mailto:ericj3742@gmail.com"
                      className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-fuchsia-300 hover:shadow-md"
                    >
                      <div className="rounded-full bg-fuchsia-100 p-3">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900">Email</div>
                        <div className="text-sm text-stone-600">ericj3742@gmail.com</div>
                      </div>
                    </a>
                    <a
                      href="tel:+8643573991"
                      className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-fuchsia-300 hover:shadow-md"
                    >
                      <div className="rounded-full bg-fuchsia-100 p-3">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900">Phone</div>
                        <div className="text-sm text-stone-600">(864) 357-3991</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="m-3 rounded-xl border border-stone-200 bg-stone-50/50 p-6 lg:-mr-8 lg:ml-20 lg:pl-8">
                  <div className="mb-4 font-semibold text-stone-900">Send a message</div>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-stone-700">
                        Your name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-stone-700">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-dog" className="mb-1 block text-sm font-medium text-stone-700">
                        Dog&apos;s name & breed
                      </label>
                      <input
                        id="contact-dog"
                        name="dogInfo"
                        type="text"
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="Max, Golden Retriever"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-stone-700">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        placeholder="Tell me about your dog and what you need..."
                      />
                    </div>
                    {contactStatus === "success" && (
                      <p className="text-sm font-medium text-green-600">Message sent! I&apos;ll get back to you soon.</p>
                    )}
                    {contactStatus === "error" && contactError && (
                      <p className="text-sm font-medium text-red-600">{contactError}</p>
                    )}
                    <button
                      type="submit"
                      disabled={contactStatus === "loading"}
                      className="w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:from-fuchsia-600 hover:to-fuchsia-700 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {contactStatus === "loading" ? "Sending…" : "Send message"}
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
