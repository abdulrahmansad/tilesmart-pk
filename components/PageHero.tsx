type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0f1f2a] text-white">
      <div className="architecture-lines absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-24 top-0 h-full w-[40%] skew-x-[-10deg] bg-[var(--brand)]/10" aria-hidden="true" />
      <div className="container relative grid gap-8 py-14 md:py-18 lg:grid-cols-[1fr_.3fr] lg:items-end lg:py-20">
        <div>
          <p className="eyebrow text-[#75c1e6]">{eyebrow}</p>
          <h1 className="display-title mt-4 max-w-4xl text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem]">{title}</h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/70 md:text-base md:leading-8">{description}</p>
        </div>
        <div className="hidden border-l border-white/14 pl-5 lg:block">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Tile Mart Peshawar</p>
          <p className="mt-2 max-w-[210px] text-[13px] leading-6 text-white/62">Tiles and bathroom solutions for homes, renovations and commercial spaces.</p>
        </div>
      </div>
    </section>
  );
}
