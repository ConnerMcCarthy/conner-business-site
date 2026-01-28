"use client";

import { useState } from "react";

export default function Theme5Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const workSamples = [
    {
      id: 1,
      category: "design",
      title: "Brand Identity Design",
      client: "Tech Startup",
      image: "🎨",
      description: "Complete brand identity including logo, color palette, and visual guidelines.",
    },
    {
      id: 2,
      category: "photography",
      title: "Portrait Series",
      client: "Personal Project",
      image: "📸",
      description: "A collection of intimate portraits exploring human emotion and connection.",
    },
    {
      id: 3,
      category: "design",
      title: "Website Redesign",
      client: "E-commerce Brand",
      image: "💻",
      description: "Modern, conversion-focused redesign improving user experience and sales.",
    },
    {
      id: 4,
      category: "art",
      title: "Digital Art Collection",
      client: "Gallery Exhibition",
      image: "🖼️",
      description: "Series of digital artworks exploring themes of nature and technology.",
    },
    {
      id: 5,
      category: "photography",
      title: "Product Photography",
      client: "Fashion Brand",
      image: "👔",
      description: "Clean, editorial-style product shots for online and print catalogs.",
    },
    {
      id: 6,
      category: "design",
      title: "Mobile App UI",
      client: "Health & Wellness",
      image: "📱",
      description: "Intuitive mobile interface design focused on user engagement and accessibility.",
    },
  ];

  const categories = ["all", "design", "photography", "art"];

  const filteredWork = activeFilter === "all" 
    ? workSamples 
    : workSamples.filter(item => item.category === activeFilter);

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#", color: "hover:text-pink-600" },
    { name: "Behance", icon: "🎨", url: "#", color: "hover:text-blue-600" },
    { name: "LinkedIn", icon: "💼", url: "#", color: "hover:text-blue-700" },
    { name: "Twitter", icon: "🐦", url: "#", color: "hover:text-sky-500" },
    { name: "Dribbble", icon: "🏀", url: "#", color: "hover:text-pink-500" },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Minimal Header */}
      <header
        className="sticky z-30 border-b border-neutral-200/60 bg-white/80 backdrop-blur-sm"
        style={{ top: "var(--topbar-height)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#" className="text-lg font-semibold tracking-tight text-neutral-900">
            Alex Morgan
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
            <a className="transition-colors hover:text-neutral-900" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-neutral-900" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-neutral-900" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero - Full width with background image */}
      <section 
        className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24"
        style={{
          backgroundImage: "url('/theme5-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-5xl font-light tracking-tight text-white md:text-6xl lg:text-7xl">
            Creative Designer
            <br />
            <span className="font-normal text-white/90">& Photographer</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
            I create visual experiences that tell stories, build brands, and connect with audiences.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#work"
              className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-sm font-medium text-white transition-all hover:border-white/50 hover:bg-white/20"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3 text-sm font-medium text-neutral-900 transition-all hover:bg-white/90"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Work Samples - Portfolio Grid */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-light tracking-tight text-neutral-900 md:text-4xl">
            Selected Work
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-neutral-600">
            A curated selection of projects spanning design, photography, and digital art.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWork.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-lg"
            >
              <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
                <div className="text-6xl">{item.image}</div>
              </div>
              <div className="p-6">
                <div className="mb-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {item.category}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-neutral-900">{item.title}</h3>
                <div className="mb-3 text-sm text-neutral-500">{item.client}</div>
                <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About - Personal & Personality */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="aspect-square max-w-md overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
              <div className="flex h-full w-full items-center justify-center text-neutral-400">
                <div className="text-center">
                  <div className="text-7xl mb-4">👤</div>
                  <div className="text-sm font-medium">Portrait photo</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-light tracking-tight text-neutral-900 md:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              I&apos;m a creative professional with over 8 years of experience in design and photography. 
              I believe in the power of visual storytelling and creating work that resonates on both an 
              emotional and functional level.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              When I&apos;m not behind a camera or designing, you&apos;ll find me exploring new cities, 
              reading design books, or experimenting with new creative techniques. I&apos;m always 
              learning and pushing boundaries.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-light text-neutral-900">8+</div>
                <div className="mt-1 text-sm text-neutral-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-light text-neutral-900">50+</div>
                <div className="mt-1 text-sm text-neutral-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-light text-neutral-900">20+</div>
                <div className="mt-1 text-sm text-neutral-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-light text-neutral-900">3</div>
                <div className="mt-1 text-sm text-neutral-600">Awards Won</div>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Brand Identity", "UI/UX Design", "Photography", "Digital Art", "Art Direction", "Print Design"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-sm text-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <div className="rounded-lg border border-neutral-200 bg-neutral-50/50 p-8 md:p-12">
          <h2 className="text-center text-2xl font-light tracking-tight text-neutral-900 md:text-3xl">
            Connect With Me
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-neutral-600">
            Follow my work and creative process on social media.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-400 hover:shadow-md ${social.color}`}
              >
                <span className="text-xl">{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-tight text-neutral-900 md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-neutral-600">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s 
            create something amazing together.
          </p>
          
          <div className="mt-12 space-y-6">
            <a
              href="mailto:alex@example.com"
              className="block rounded-lg border border-neutral-300 bg-white p-6 text-center transition-all hover:border-neutral-400 hover:shadow-md"
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-medium text-neutral-900">alex@example.com</div>
              <div className="mt-1 text-sm text-neutral-500">Email me</div>
            </a>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="tel:+15551234567"
                className="block rounded-lg border border-neutral-300 bg-white p-6 text-center transition-all hover:border-neutral-400 hover:shadow-md"
              >
                <div className="text-2xl mb-2">📞</div>
                <div className="font-medium text-neutral-900">(555) 123-4567</div>
                <div className="mt-1 text-sm text-neutral-500">Call me</div>
              </a>
              <a
                href="#"
                className="block rounded-lg border border-neutral-300 bg-white p-6 text-center transition-all hover:border-neutral-400 hover:shadow-md"
              >
                <div className="text-2xl mb-2">📅</div>
                <div className="font-medium text-neutral-900">Schedule a call</div>
                <div className="mt-1 text-sm text-neutral-500">Book time</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-sm text-neutral-600 md:flex-row md:justify-between">
          <div>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-neutral-900">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-neutral-900">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
