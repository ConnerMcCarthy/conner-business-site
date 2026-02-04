import Link from "next/link";

type SplitSectionProps = {
  id?: string;
  heading: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  overlay: {
    text: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export default function SplitSection({ id, heading, paragraphs, image, overlay }: SplitSectionProps) {
  return (
    <section id={id} className="bg-[#f6f6f8] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="flex flex-col items-start gap-10 md:flex-row">
          {/* Image: fixed width on desktop */}
          <div className="relative w-full overflow-hidden rounded-3xl shadow-lg md:w-[720px] md:flex-shrink-0">
            <div className="relative aspect-[16/11]">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm rounded-2xl bg-white/90 p-4 backdrop-blur">
              <p className="text-sm leading-snug text-slate-900">{overlay.text}</p>
              <Link
                href={overlay.ctaHref}
                className="mt-3 inline-flex rounded-full bg-[#e56a2e] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#cd5620]"
              >
                {overlay.ctaLabel}
              </Link>
            </div>
          </div>

          {/* Text: manual left margin on desktop */}
          <div className="w-full md:ml-8 md:min-w-0 lg:ml-10">
            <h2 className="font-serif text-4xl leading-[1.05] text-slate-900 md:text-6xl text-balance">
              {heading}
            </h2>

            <div className="mt-6 max-w-2xl space-y-5 text-sm leading-relaxed text-slate-700 md:text-base">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

