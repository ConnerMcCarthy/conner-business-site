import Link from "next/link";

type HeroProps = {
  headlineTop: string;
  headlineAccent: string;
  subtext: string;
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export default function Hero({ headlineTop, headlineAccent, subtext, cta, image }: HeroProps) {
  return (
    <section className="bg-[#2f3a46] py-14 md:py-20" id="home">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch gap-10 px-4 md:flex-row md:items-center md:gap-0 md:px-6">
        <div className="flex flex-col justify-center md:mr-10 md:min-w-0 md:flex-1">
          <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl">
            {headlineTop}
            <span className="mt-1 block text-[#e56a2e]">{headlineAccent}</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-200 md:text-base">{subtext}</p>
          <Link
            href={cta.href}
            className="mt-8 inline-flex rounded-full bg-[#e56a2e] px-7 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#cd5620]"
          >
            {cta.label}
          </Link>
        </div>

        <div className="relative z-10 min-w-0 md:w-[48%] md:flex-shrink-0">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative aspect-[5/4] w-full min-h-[260px] md:min-h-0">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
