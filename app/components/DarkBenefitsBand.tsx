import Link from "next/link";

type Benefit = {
  title: string;
  subtitle: string;
};

type DarkBenefitsBandProps = {
  id?: string;
  heading: string;
  benefits: Benefit[];
  cta: {
    label: string;
    href: string;
  };
};

function BenefitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#e56a2e]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5 7h6a3 3 0 1 1 0 6H8a3 3 0 1 0 0 6h7" />
    </svg>
  );
}

export default function DarkBenefitsBand({ id, heading, benefits, cta }: DarkBenefitsBandProps) {
  return (
    <section id={id} className="bg-[#2f3a46] py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 text-center md:px-6">
        <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-white md:text-5xl">{heading}</h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="px-3">
              <div className="mx-auto mb-4 w-fit">
                <BenefitIcon />
              </div>
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{benefit.subtitle}</p>
            </article>
          ))}
        </div>

        <Link
          href={cta.href}
          className="mt-10 inline-flex rounded-full bg-[#e56a2e] px-8 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#cd5620]"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
