import { business } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/site";

type ContactPanelProps = {
  title?: string;
  message?: string;
};

export function ContactPanel({
  title = "Need help choosing?",
  message = "Tell Tile Mart what space you are working on and what you need. The team can confirm current designs, sizes and availability.",
}: ContactPanelProps) {
  return (
    <section className="container py-18 md:py-24">
      <div className="relative overflow-hidden bg-[#0f1f2a] text-white">
        <div className="architecture-lines absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative grid md:grid-cols-[1.15fr_.85fr]">
          <div className="p-8 md:p-12 lg:p-16">
            <p className="eyebrow text-[#75c1e6]">Direct enquiry</p>
            <h2 className="display-title mt-5 max-w-2xl text-4xl md:text-5xl lg:text-6xl">{title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">{message}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="btn bg-white text-[var(--ink)] hover:bg-white/90">Ask on WhatsApp</a>
              <a href={phoneHref} className="btn border-white/25 text-white hover:border-white/45">Call {business.phone}</a>
            </div>
          </div>
          <div className="relative min-h-72 border-t border-white/10 md:min-h-full md:border-l md:border-t-0" aria-hidden="true">
            <div className="material-board absolute inset-8 md:inset-10" />
            <div className="absolute bottom-5 right-5 border border-white/15 bg-[#0f1f2a]/90 px-4 py-3 text-right backdrop-blur md:bottom-8 md:right-8">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">Tile Mart</p>
              <p className="mt-1 text-sm font-extrabold">Peshawar showroom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
