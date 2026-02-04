type FeatureItem = {
  title: string;
};

type FeatureTilesProps = {
  id?: string;
  items: FeatureItem[];
};

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#e56a2e]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16h16M7 16v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3m3 0v-5a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v5M8 7h8" />
    </svg>
  );
}

export default function FeatureTiles({ id, items }: FeatureTilesProps) {
  return (
    <section id={id} className="bg-white py-10 md:py-14" aria-label="Core value highlights">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-3 flex w-fit items-center justify-center">
                <LineIcon />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
