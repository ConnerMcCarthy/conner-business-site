import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

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
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div>
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

        <div className="justify-self-end">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative aspect-[5/4] w-full">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                fill
                priority
                unoptimized={image.src.startsWith("/")}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
