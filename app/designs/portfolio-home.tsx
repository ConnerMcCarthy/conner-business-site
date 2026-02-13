"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { LazyVideo } from "@/app/components/LazyVideo";

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

type WorkViewMode = "video" | "image";

export default function Theme5Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [workViewMode, setWorkViewMode] = useState<WorkViewMode>("video");

  const workSamples = [
    {
      id: 1,
      category: "design",
      title: "Brand Identity Design",
      client: "Tech Startup",
      image: "/theme5-work-1.png",
      description: "Complete brand identity including logo, color palette, and visual guidelines.",
    },
    {
      id: 2,
      category: "photography",
      title: "Portrait Series",
      client: "Personal Project",
      image: "/theme5-work-2.png",
      description: "A collection of intimate portraits exploring human emotion and connection.",
    },
    {
      id: 3,
      category: "design",
      title: "Website Redesign",
      client: "E-commerce Brand",
      image: "/theme5-work-3.png",
      description: "Modern, conversion-focused redesign improving user experience and sales.",
    },
    {
      id: 4,
      category: "art",
      title: "Digital Art Collection",
      client: "Gallery Exhibition",
      image: "/theme5-work-4.png",
      description: "Series of digital artworks exploring themes of nature and technology.",
    },
    {
      id: 5,
      category: "photography",
      title: "Product Photography",
      client: "Fashion Brand",
      image: "/theme5-work-5.png",
      description: "Clean, editorial-style product shots for online and print catalogs.",
    },
    {
      id: 6,
      category: "design",
      title: "Mobile App UI",
      client: "Health & Wellness",
      image: "/theme5-work-6.png",
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
        
        <FadeInSection>
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
        </FadeInSection>
      </section>

      {/* Work Samples - Portfolio Grid */}
      <section id="work" className="mx-auto max-w-7xl scroll-mt-36 px-4 py-20 md:py-28">
        <FadeInSection>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-light tracking-tight text-neutral-900 md:text-4xl">
            Selected Work
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-neutral-600">
            A curated selection of projects spanning design, photography, and digital art.
          </p>
          {/* Video / Picture toggle with sliding highlight */}
          <div className="mt-6 flex justify-center">
            <div className="relative inline-flex rounded-full border border-neutral-300 bg-neutral-100 p-1">
              <div
                className="absolute top-1 bottom-1 rounded-full bg-neutral-900 transition-all duration-200 ease-out"
                style={{
                  left: "4px",
                  width: "calc(50% - 4px)",
                  transform: workViewMode === "image" ? "translateX(100%)" : "translateX(0)",
                }}
              />
              <button
                type="button"
                onClick={() => setWorkViewMode("video")}
                className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  workViewMode === "video" ? "text-white" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Video
              </button>
              <button
                type="button"
                onClick={() => setWorkViewMode("image")}
                className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  workViewMode === "image" ? "text-white" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Picture
              </button>
            </div>
          </div>
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
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                {workViewMode === "video" ? (
                  <LazyVideo
                    src={`/theme5-work-${item.id}-web.mp4`}
                    poster={item.image}
                    title={item.title}
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
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
        </FadeInSection>
      </section>

      {/* About - Personal & Personality */}
      <section id="about" className="ml-auto mr-4 max-w-5xl scroll-mt-36 px-4 py-20 md:mr-8 md:py-28 lg:mr-16">
        <FadeInSection>
        <div className="grid gap-16 md:grid-cols-2 md:items-start md:gap-24 lg:gap-32">
          <div>
            <div className="aspect-[3/4] max-w-md overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
              <Image
                src="/theme5-portrait.png"
                alt="Creative professional portrait"
                width={384}
                height={512}
                className="h-full w-full object-cover"
              />
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
        </FadeInSection>
      </section>

      {/* Social Links */}
      <section
        className="relative mx-auto max-w-4xl overflow-hidden rounded-lg px-8 py-24 md:px-12 md:py-32"
        style={{
          backgroundImage: "url('/theme5-connect-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f5f5f5",
        }}
      >
        <FadeInSection>
        <div className="relative z-10 rounded-lg border border-neutral-200 bg-white p-8 md:p-12">
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
        </FadeInSection>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl scroll-mt-36 px-4 py-20 md:py-28">
        <FadeInSection>
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
              <a
                href="#"
                className="block rounded-lg border border-neutral-300 bg-white p-6 text-center transition-all hover:border-neutral-400 hover:shadow-md"
              >
                <div className="text-2xl mb-2">💬</div>
                <div className="font-medium text-neutral-900">Send a message</div>
                <div className="mt-1 text-sm text-neutral-500">Contact form</div>
              </a>
            </div>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Footer - Minimal */}
      <footer className="border-t border-neutral-200 bg-white">
        <FadeInSection>
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
        </FadeInSection>
      </footer>
    </main>
  );
}
