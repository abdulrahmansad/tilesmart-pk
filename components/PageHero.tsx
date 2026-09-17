type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0f1f2a] text-white">
      <div className="architecture-lines absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-24 top-0 h-full w-[44%] skew-x-[-10deg] bg-[var(--brand)]/12" aria-hidden="true" />
      <div className="container relative grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_.34fr] lg:items-end lg:py-32">
        <div>
          <p className="eyebrow text-[#75c1e6]">{eyebrow}</p>
          <h1 className="display-title mt-6 max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg">{description}</p>
        </div>
        <div className="hidden border-l border-white/14 pl-6 lg:block">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Tile Mart Peshawar</p>
          <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/64">Material-led interiors for homes, renovations and commercial spaces.</p>
        </div>
      </div>
    </section>
  );
}
