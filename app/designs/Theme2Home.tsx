export default function Theme2Home() {
  return (
    <main className="min-h-screen" style={{ color: "var(--text)", background: "var(--bg)" }}>
      {/* Top bar */}
      <header
        className="sticky z-30 border-b border-white/10 bg-[#0b1220]"
        style={{ top: "var(--topbar-height)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-white/10" aria-hidden />
            <div>
              <span className="font-semibold tracking-tight">[Company] Plumbing</span>
              <span className="ml-1.5 text-sm opacity-80">· Asheville, NC</span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm opacity-90 md:flex">
            <a className="hover:opacity-100" href="#services">
              Services
            </a>
            <a className="hover:opacity-100" href="#about">
              About
            </a>
            <a className="hover:opacity-100" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            href="tel:+15551234567"
          >
            Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section 
        className="relative w-full pt-14 pb-10 md:pt-20 md:pb-14 text-center"
        style={{
          backgroundImage: "url('/plumbing-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <p className="text-sm font-medium uppercase tracking-widest text-white/90">
            Licensed &amp; insured · Asheville &amp; surrounding areas
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Reliable plumbing when you need it
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
            Repairs, installations, and emergencies. Same-day service when we can—clear pricing,
            no surprises.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-white/90 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
              href="tel:+15551234567"
            >
              Call now
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
              href="#contact"
            >
              Request service
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-amber-400/60 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-300 transition-all duration-200 hover:bg-amber-400/20 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
              href="tel:+15551234567"
            >
              Emergency?
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section
        className="border-t border-white/10 border-b border-white/10 py-4 px-4"
        aria-label="Credentials"
      >
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-2 text-sm opacity-90">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Licensed
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Insured
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Fast response
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Upfront pricing
          </span>
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
            { title: "Repairs", desc: "Leaks, pipes, fixtures, toilets." },
            { title: "Installations", desc: "New fixtures, reroutes, remodels." },
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
          <div>© {new Date().getFullYear()} [Company] Plumbing. Licensed &amp; insured.</div>
          <div className="opacity-70">Asheville, NC · (555) 123-4567</div>
        </div>
      </footer>
    </main>
  );
}
