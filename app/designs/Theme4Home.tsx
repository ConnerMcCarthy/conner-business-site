"use client";

import { useState } from "react";

export default function Theme4Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      features: ["24/7 supervision", "Regular feeding schedule", "Comfortable sleeping area", "Daily exercise"],
    },
    {
      icon: "☀️",
      title: "Day Care",
      desc: "Drop off for the day—play, rest, and company while you're at work or out.",
      features: ["Flexible hours", "Socialization", "Playtime & walks", "Safe environment"],
    },
    {
      icon: "🚶",
      title: "Dog Walks",
      desc: "Regular walks so your dog gets exercise and bathroom breaks on schedule.",
      features: ["Scheduled walks", "Exercise & fresh air", "Bathroom breaks", "Route variety"],
    },
    {
      icon: "💊",
      title: "Special Care",
      desc: "Comfortable with medications, special diets, and senior dog needs.",
      features: ["Medication administration", "Special diets", "Senior care", "Health monitoring"],
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 text-stone-900">
      {/* Top bar */}
      <header
        className="sticky z-30 border-b border-stone-200/80 bg-white/95 backdrop-blur-md shadow-sm"
        style={{ top: "var(--topbar-height)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 ring-2 ring-amber-200">
              <span className="absolute inset-0 flex items-center justify-center text-lg">🐕</span>
            </div>
            <div>
              <span className="block text-base font-bold tracking-tight text-stone-900">
                Rick Johnson
              </span>
              <span className="block text-xs font-medium text-amber-700">Dog Sitting Services</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
            <a className="transition-colors hover:text-amber-700" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-amber-700" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-amber-700" href="#testimonials">
              Reviews
            </a>
            <a className="transition-colors hover:text-amber-700" href="#faq">
              FAQ
            </a>
            <a className="transition-colors hover:text-amber-700" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg hover:from-amber-700 hover:to-amber-800"
            href="#contact"
          >
            Book now
          </a>
        </div>
      </header>

      {/* Hero - Complex overlapping design */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-stone-200/30 blur-3xl" />
        
        <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left content - spans 7 columns */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-white via-amber-50/50 to-white p-8 shadow-xl md:p-12">
              {/* Decorative corner accent */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-100/50 blur-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
                  <span>⭐</span> Trusted by 200+ dog owners
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
                  Your dog&apos;s home away from home
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-stone-600 md:text-xl">
                  Reliable, experienced dog sitting from Rick Johnson. Overnight stays, day care, and walks—your pup gets personalized care in a safe, loving environment.
                </p>
                
                {/* Feature highlights */}
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-stone-200 bg-white/60 p-3 backdrop-blur-sm">
                    <div className="text-2xl">✓</div>
                    <div className="mt-1 text-xs font-semibold text-stone-700">Licensed & Insured</div>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white/60 p-3 backdrop-blur-sm">
                    <div className="text-2xl">✓</div>
                    <div className="mt-1 text-xs font-semibold text-stone-700">15+ Years Experience</div>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white/60 p-3 backdrop-blur-sm">
                    <div className="text-2xl">✓</div>
                    <div className="mt-1 text-xs font-semibold text-stone-700">Daily Updates</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:from-amber-700 hover:to-amber-800"
                    href="#contact"
                  >
                    Book a stay
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    className="rounded-full border-2 border-stone-300 bg-white px-8 py-4 text-base font-semibold text-stone-800 transition-all duration-200 hover:border-amber-400 hover:bg-amber-50"
                    href="#rates"
                  >
                    See rates
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right image - spans 5 columns, offset */}
          <div className="relative lg:col-span-5 lg:-mt-12">
            <div className="relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-stone-100 to-amber-100/50 shadow-2xl">
              <div className="aspect-[4/5] flex items-center justify-center p-8">
                <div className="text-center text-stone-400">
                  <div className="text-6xl mb-4">🐕</div>
                  <div className="text-sm font-medium">Photo of Rick with a happy dog</div>
                </div>
              </div>
              {/* Decorative badge overlay */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl border-2 border-white bg-gradient-to-br from-amber-500 to-amber-600 p-4 shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-xs font-medium">Happy Dogs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Complex grid with feature lists */}
      <section id="services" className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            What I offer
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-stone-600">
            Flexible options so your dog gets the personalized care that fits their needs and your schedule.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
            >
              {/* Icon background */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-amber-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="text-lg font-bold text-stone-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{service.desc}</p>
                
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-stone-600">
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About - Split with image and stats */}
      <section id="about" className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-white via-amber-50/30 to-white p-8 shadow-xl md:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                About Rick
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                I&apos;ve been around dogs my whole life and have sat for all kinds—puppies to seniors, big and small. I keep things calm, consistent, and fun. Your dog gets plenty of attention, exercise, and rest so you can relax knowing they&apos;re in good hands.
              </p>
              
              {/* Stats grid */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-stone-200 bg-white/60 p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-amber-700">15+</div>
                  <div className="mt-1 text-xs font-medium text-stone-600">Years Experience</div>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white/60 p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-amber-700">200+</div>
                  <div className="mt-1 text-xs font-medium text-stone-600">Happy Dogs</div>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white/60 p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-amber-700">500+</div>
                  <div className="mt-1 text-xs font-medium text-stone-600">Stays Completed</div>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  "Experienced with many breeds and temperaments",
                  "Comfortable with meds and special needs",
                  "Updates and photos so you stay connected",
                  "Licensed, insured, and background checked",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border-2 border-stone-200 bg-gradient-to-br from-stone-100 to-amber-100/50 shadow-lg">
                <div className="flex h-full w-full items-center justify-center text-stone-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍🦱</div>
                    <div className="text-sm font-medium">Rick (headshot or with dog)</div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border-2 border-white bg-gradient-to-br from-amber-500 to-amber-600 p-3 shadow-xl">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-xl">⭐</span>
                  <div>
                    <div className="text-sm font-bold">4.9/5</div>
                    <div className="text-xs">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel-like section */}
      <section id="testimonials" className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            What dog owners say
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-stone-600">
            Don&apos;t just take my word for it—hear from happy pet parents.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-white to-amber-50/30 p-8 shadow-xl md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border-2 p-6 transition-all duration-300 ${
                    idx === activeTestimonial
                      ? "border-amber-400 bg-white shadow-lg scale-105"
                      : "border-stone-200 bg-white/60"
                  }`}
                  onMouseEnter={() => setActiveTestimonial(idx)}
                >
                  <div className="mb-3 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-500">⭐</span>
                    ))}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-stone-700 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t border-stone-200 pt-4">
                    <div className="font-semibold text-stone-900">{testimonial.name}</div>
                    <div className="text-xs text-stone-500">{testimonial.dog}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indicator dots */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeTestimonial ? "w-8 bg-amber-600" : "w-2 bg-stone-300"
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Accordion style */}
      <section id="faq" className="relative mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-stone-600">
            Everything you need to know about booking and what to expect.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-md transition-all duration-200 open:border-amber-300 open:shadow-lg"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-stone-900">
                <span>{faq.q}</span>
                <span className="text-amber-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-stone-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Rates - More detailed */}
      <section id="rates" className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-50 p-8 shadow-xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Simple, clear rates
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Pricing depends on your dog, the type of stay, and length. I&apos;ll give you a straightforward quote when you reach out. No hidden fees, no surprises.
              </p>
              
              <div className="mt-6 space-y-3">
                {[
                  "Overnight stays: $50-80/night",
                  "Day care: $35-50/day",
                  "Dog walks: $20-30/walk",
                  "Multi-dog discounts available",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-lg border border-amber-200 bg-white/60 p-3">
                    <span className="text-amber-600">✓</span>
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                href="#contact"
              >
                Get a personalized quote
                <span className="ml-2">→</span>
              </a>
            </div>
            
            <div className="rounded-2xl border-2 border-amber-200 bg-white p-8 shadow-lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-700">Starting at</div>
                <div className="mt-2 text-6xl font-bold text-stone-900">$35</div>
                <div className="mt-2 text-lg text-stone-600">per day</div>
                <div className="mt-6 text-sm text-stone-500">
                  *Final pricing depends on your dog&apos;s needs and stay duration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Complex form section */}
      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-white via-stone-50 to-white p-8 shadow-xl md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Book a stay or ask a question
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                Tell me about your dog, dates, and what you need. I&apos;ll get back quickly to confirm availability and rates.
              </p>
              
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:rick@example.com"
                  className="flex items-center gap-4 rounded-xl border-2 border-stone-200 bg-white p-4 transition-all duration-200 hover:border-amber-400 hover:shadow-md"
                >
                  <div className="rounded-full bg-amber-100 p-3">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Email</div>
                    <div className="text-sm text-stone-600">rick@example.com</div>
                  </div>
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 rounded-xl border-2 border-stone-200 bg-white p-4 transition-all duration-200 hover:border-amber-400 hover:shadow-md"
                >
                  <div className="rounded-full bg-amber-100 p-3">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900">Phone</div>
                    <div className="text-sm text-stone-600">(555) 123-4567</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6">
                <div className="font-semibold text-stone-900">Quick response time</div>
                <div className="mt-2 text-sm text-stone-600">
                  I typically respond within 2-4 hours during business hours. For urgent requests, call directly.
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-lg">
              <div className="mb-4 font-semibold text-stone-900">Send a message</div>
              <form className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700">Your name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700">Dog&apos;s name & breed</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="Max, Golden Retriever"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700">Dates needed</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="March 15-20, 2024"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-stone-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    placeholder="Tell me about your dog and what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-stone-200 bg-gradient-to-b from-white to-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-bold text-stone-900">© {new Date().getFullYear()} Rick Johnson Dog Sitting</div>
            <div className="mt-1 text-xs text-stone-500">Licensed & Insured</div>
          </div>
          <div className="flex flex-wrap gap-6 text-stone-500">
            <span>rick@example.com</span>
            <span>·</span>
            <span>(555) 123-4567</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
