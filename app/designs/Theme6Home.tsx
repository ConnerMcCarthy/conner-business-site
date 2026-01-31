"use client";

import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function Theme6Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Background fills this area, white margin around it */}
      <div
        className="mx-6 min-h-screen rounded-2xl pt-0 md:mx-10 md:pt-0 md:rounded-3xl lg:mx-16"
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
          className="sticky z-30 -mt-px border-b border-b border-neutral-200/60 bg-white px-6 py-4 md:px-8"
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

            {/* Full-bleed image: hidden on mobile; pinned to right on md+ */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-full md:block md:w-[55%]">
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
        {/* Testimonial */}
<section className="relative overflow-visible px-0 py-8 md:py-16">
  <div className="md:-mx-6 md:px-6 lg:-mx-10 lg:px-10 xl:-mx-16 xl:px-16">
    <div className="mx-[5vw] rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm md:mx-0 md:ml-[2in] md:mr-[2in] md:rounded-3xl md:p-12">
      <div className="text-neutral-900">
        <h3 className="text-base font-semibold text-neutral-900 md:text-lg">What Our Clients Say</h3>
        
        <div className="mt-3 flex items-center gap-3 md:mt-4 md:gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-fuchsia-500 bg-fuchsia-500/10 text-xs font-semibold text-fuchsia-600 md:h-12 md:w-12 md:text-sm">
            ST
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-900 md:text-base">Sarah Thompson</div>
            <div className="flex gap-0.5 text-amber-500">{"★".repeat(5)}</div>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-neutral-600 md:mt-4 md:text-base max-w-2xl">
          Creative Studio delivered exactly what we needed. Our new website has increased
          traffic and conversions. Professional, responsive, and a pleasure to work with.
        </p>
        
        <a href="#reviews" className="mt-3 inline-block text-xs font-medium text-fuchsia-600 underline underline-offset-2 hover:text-fuchsia-700 md:mt-4 md:text-sm">
          Read more reviews →
        </a>
      </div>
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
          className="rounded-b-2xl rounded-t-3xl bg-gradient-to-br from-violet-900 via-fuchsia-900 to-neutral-900 px-4 py-20 pb-8 text-white md:rounded-b-3xl md:py-28 md:pb-10"
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
