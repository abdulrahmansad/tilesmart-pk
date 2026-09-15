type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0e1d28] text-white">
      <div className="tile-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="container relative py-18 md:py-24 lg:py-28">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-white/55">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.05em] sm:text-6xl md:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
      </div>
    </section>
  );
}
