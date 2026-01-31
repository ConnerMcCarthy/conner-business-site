"use client";

import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function Theme6Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Background fills this area, white margin around it */}
      <div
        className="mx-6 min-h-screen rounded-2xl pb-6 pt-0 md:mx-10 md:pb-8 md:pt-0 md:rounded-3xl lg:mx-16 lg:pb-10 lg:pt-0"
        style={{
          backgroundImage: "url('/theme6-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#fce7f3",
        }}
      >
        {/* Header - square top corners so it fully covers parent's rounded corners */}
        <header
          className="sticky z-30 -mt-px border-b border-neutral-200/60 bg-white px-6 py-4 md:px-8"
          style={{ top: "calc(var(--topbar-height) - 1px)" }}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                Creative Studio
              </span>
            </a>
            <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
              <a className="transition-colors hover:text-neutral-900" href="#home">Home</a>
              <a className="transition-colors hover:text-neutral-900" href="#services">Services</a>
              <a className="transition-colors hover:text-neutral-900" href="#projects">Projects</a>
              <a className="transition-colors hover:text-neutral-900" href="#about">About</a>
              <a className="transition-colors hover:text-neutral-900" href="#contact">Contact</a>
            </nav>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="relative min-h-[80vh] overflow-hidden rounded-2xl">
          <div className="relative min-h-[80vh]">
            {/* Left content stays constrained */}
            <div className="mx-auto grid min-h-[80vh] max-w-6xl grid-cols-1 gap-12 px-4 py-20 md:grid-cols-2 md:items-end md:gap-16 md:px-6">
              <div className="max-w-xl text-center md:text-left">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
                  Grow Your <span className="text-orange-500">Business</span> with Stunning Websites
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-neutral-700">
                  Custom websites that captivate and convert. We build modern, fast, and beautiful
                  sites that help your business stand out online.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                  <a
                    href="#contact"
                    className="rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="#projects"
                    className="rounded-full border-2 border-rose-400 bg-white/80 px-6 py-3.5 text-sm font-semibold text-neutral-800 backdrop-blur transition-all hover:bg-white hover:scale-105"
                  >
                    View Our Work
                  </a>
                </div>
              </div>

              {/* This column is just a spacer on md+ (image goes full-bleed separately) */}
              <div className="hidden md:block" />
            </div>

            {/* Full-bleed image pinned to the right */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[55%]">
              <div className="relative h-full w-full">
                <Image
                  src="/laptopgirl-transparent-new.png"
                  alt="Creative professional working on laptop"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </section>


        {/* CTA + Testimonial */}
        <section className="px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-8 md:-mr-10 md:pr-10 lg:-mr-16 lg:pr-16">
            <div
              className="flex flex-col justify-center border-l-4 border-violet-500 bg-white/40 px-6 py-10 backdrop-blur-xl md:px-8 md:py-12"
              style={{ borderRadius: 0 }}
            >
              <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="mt-3 text-base text-neutral-700 md:text-lg">
                Let&apos;s create something amazing together. Book a free consultation and we&apos;ll
                discuss your vision.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                Book a Free Consultation
              </a>
            </div>
            <div className="rounded-tr-3xl bg-neutral-900 p-6 text-white shadow-2xl md:p-8">
              <h3 className="text-lg font-semibold text-white">What Our Clients Say</h3>
              <div className="mt-4 flex items-center gap-4">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-amber-400 bg-amber-500/20 text-sm font-semibold text-amber-400"
                  aria-hidden
                >
                  ST
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Thompson</div>
                  <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 md:text-base">
                Creative Studio delivered exactly what we needed. Our new website has increased
                traffic and conversions. Professional, responsive, and a pleasure to work with.
              </p>
              <a
                href="#reviews"
                className="mt-4 inline-block text-sm font-medium text-amber-400 underline underline-offset-2 transition-colors hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Read more reviews →
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold text-neutral-900 md:text-4xl">Our Projects</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            A selection of websites we&apos;ve built for clients across industries.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="aspect-video flex items-center justify-center border-4 border-neutral-900 bg-white text-neutral-600 font-bold">
              Project 1
            </div>
            <div className="aspect-video flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-fuchsia-200 to-violet-200 text-fuchsia-800 font-medium shadow-inner">
              Project 2
            </div>
            <div className="aspect-video flex items-center justify-center border-2 border-dashed border-violet-400 bg-violet-50/50 text-violet-600">
              Project 3
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold text-fuchsia-600 md:text-4xl">Our Services</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-rose-500 to-orange-500 p-8 text-white shadow-xl transition-all hover:scale-[1.02]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/30 text-2xl">🎨</div>
              <h3 className="text-xl font-bold text-white">Web Design</h3>
              <p className="mt-3 text-white/90">
                Beautiful, user-friendly designs that reflect your brand and engage your audience.
              </p>
            </div>
            <div className="border border-neutral-300 bg-white p-8 transition-all hover:border-neutral-400">
              <div className="mb-4 flex h-14 w-14 items-center justify-center border border-neutral-300 text-2xl">📈</div>
              <h3 className="text-xl font-semibold text-neutral-900">SEO Optimization</h3>
              <p className="mt-3 text-neutral-600">
                Get found on Google. We optimize your site for search engines and organic traffic.
              </p>
            </div>
            <div className="rounded-lg border-2 border-amber-400 bg-neutral-800 p-8 text-white shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-amber-500/30 text-2xl">🛒</div>
              <h3 className="text-xl font-semibold text-amber-400">Ecommerce Solutions</h3>
              <p className="mt-3 text-neutral-300">
                Sell online with secure, scalable stores built for conversions and growth.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="border-l-8 border-fuchsia-500 bg-white py-8 pl-8 pr-8 md:py-12 md:pl-12 md:pr-12">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-neutral-900 md:text-4xl">About Creative Studio</h2>
            <p className="mt-6 text-lg leading-relaxed italic text-neutral-600">
              We&apos;re a team of designers and developers passionate about creating websites that
              look great and perform even better. From startups to established brands, we help
              businesses grow their online presence.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rounded-t-3xl bg-gradient-to-br from-violet-900 via-fuchsia-900 to-neutral-900 px-4 py-20 text-white md:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Get in Touch</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-white/80">
              Tell us about your project. We&apos;ll get back to you within 24 hours.
            </p>
            <div className="mx-auto mt-12 max-w-md">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
