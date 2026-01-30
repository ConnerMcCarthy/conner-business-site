import Image from "next/image";

export default function Theme2Home() {
  return (
    <main className="min-h-screen" style={{ color: "var(--text)", background: "var(--bg)" }}>
      {/* Header — opaque for readability over hero */}
      <header
        className="sticky z-30 border-b border-white/10 bg-[#0b1220]/95 backdrop-blur-md"
        style={{ top: "var(--topbar-height)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/plumbing-logo.png"
              alt="Plumbing company logo"
              width={56}
              height={56}
              className="h-12 w-12 flex-shrink-0 rounded-lg object-contain md:h-14 md:w-14"
            />
            <div>
              <span className="text-sm font-semibold tracking-tight text-white md:text-base">
                Your Company Plumbing
              </span>
              <span className="ml-1.5 text-xs text-white/70 md:text-sm">· Asheville, NC</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex">
            <a className="transition-opacity hover:text-white" href="#services">
              Services
            </a>
            <a className="transition-opacity hover:text-white" href="#about">
              About
            </a>
            <a className="transition-opacity hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="flex-shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100"
            href="tel:+15551234567"
          >
            Call
          </a>
        </div>
      </header>

      {/* Hero — gradient overlay, constrained content, clear hierarchy */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/plumbing-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark gradient overlay — stronger center, softer edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Hero content — centered, max-width, backdrop blur behind text */}
        <div className="relative z-10 mx-auto max-w-[1150px] px-4 py-20 text-center md:py-28 lg:py-32">
          <div className="mx-auto max-w-2xl rounded-2xl bg-black/30 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/90 md:text-sm">
              Licensed &amp; insured · Asheville &amp; surrounding areas
            </p>
            <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              Reliable plumbing when you need it
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/95 md:text-lg md:leading-[1.6]">
              Repairs, installations, and emergencies. Same-day service when we can—clear pricing,
              no surprises.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <a
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:bg-slate-100 hover:shadow-xl sm:w-auto"
                href="tel:+15551234567"
              >
                Call now
              </a>
              <a
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/60 bg-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/25 hover:border-white/80 sm:w-auto"
                href="#contact"
              >
                Request service
              </a>
              <a
                className="rounded-full border border-amber-400/50 bg-amber-400/10 px-4 py-2 text-xs font-medium text-amber-300 transition-colors hover:bg-amber-400/20 hover:text-amber-200"
                href="tel:+15551234567"
              >
                Emergency?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — compact, one line on desktop */}
      <section
        className="border-b border-white/10 px-4 py-3"
        aria-label="Credentials"
      >
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-1.5 text-xs text-white/80 md:flex-nowrap md:justify-center md:gap-x-10 md:text-sm">
          <span>Licensed</span>
          <span>Insured</span>
          <span>Fast response</span>
          <span>Upfront pricing</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-4 py-10 text-center md:py-14">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Why choose us</h2>
        <p className="mt-3 text-sm opacity-90">
          Local, licensed, and focused on doing the job right. We explain options and costs
          upfront so you can decide with confidence.
        </p>
      </section>

      {/* Service area map — Asheville radius, locked to clicks */}
      <section className="mx-auto max-w-4xl px-4 pb-14 md:pb-20" aria-label="Service area">
        <h2 className="mb-4 text-center text-lg font-semibold tracking-tight text-white/90 md:text-xl">
          Service area
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-center text-sm text-white/70">
          We serve Asheville and surrounding communities within a 25-mile radius.
        </p>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div className="relative aspect-[16/10] w-full md:aspect-[2/1]">
            <iframe
              title="Asheville service area map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-82.75%2C35.45%2C-82.35%2C35.75&layer=mapnik&marker=35.5951%2C-82.5515"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ pointerEvents: "none" }}
            />
            {/* Radius overlay — true circle (height-based + aspect-square) */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[70%] w-auto -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-blue-500/90 bg-blue-500/15 aspect-square"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
          What we do
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm opacity-80">
          Residential and light commercial plumbing across Asheville and the area.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Drains & sewer", desc: "Clogs, cleanouts, camera inspections." },
            { title: "Water heaters", desc: "Install, repair, tank & tankless." },
            { title: "Repairs and Installations", desc: "Leaks, pipes, fixtures, toilets." },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Schedule a job or get a quote
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm opacity-90">
            Call, text, or use the form below. We&apos;ll get back quickly with availability and
            a straightforward estimate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              href="tel:+15551234567"
            >
              (555) 123-4567
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold hover:bg-white/10"
              href="mailto:jobs@example.com"
            >
              jobs@example.com
            </a>
          </div>
          <p className="mt-6 text-xs opacity-70">
            Serving Asheville, Black Mountain, Hendersonville, and surrounding communities.
          </p>
        </div>
      </section>

      <footer
        className="border-t border-white/10 py-8 px-4 opacity-80"
        style={{ color: "var(--text)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>© {new Date().getFullYear()} Your Company Plumbing. Licensed &amp; insured.</div>
          <div className="opacity-70">Asheville, NC · (555) 123-4567</div>
        </div>
      </footer>
    </main>
  );
}
