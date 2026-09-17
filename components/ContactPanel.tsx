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
    <section className="container py-12 md:py-18">
      <div className="relative overflow-hidden border border-white/5 bg-[#0f1f2a] text-white shadow-[0_20px_55px_rgba(15,31,42,.11)]">
        <div className="architecture-lines absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative grid md:grid-cols-[1.15fr_.85fr]">
          <div className="p-6 sm:p-7 md:p-9 lg:p-11">
            <p className="eyebrow text-[#75c1e6]">Direct enquiry</p>
            <h2 className="display-title mt-4 max-w-2xl text-[2rem] sm:text-3xl md:text-4xl lg:text-[2.75rem]">{title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-[15px]">{message}</p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="btn btn-light col-span-2 sm:col-auto">Ask on WhatsApp</a>
              <a href={phoneHref} className="btn btn-outline-light col-span-2 sm:col-auto">Call {business.phone}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/42">
              <span>Room / project</span>
              <span>Approx. area</span>
              <span>Style reference</span>
            </div>
            <div className="mt-6 h-[3px] w-16 bg-[var(--brand)] md:hidden" aria-hidden="true" />
          </div>
          <div className="relative hidden min-h-full border-l border-white/10 md:block" aria-hidden="true">
            <div className="material-board absolute inset-8 shadow-[0_20px_50px_rgba(0,0,0,.16)]" />
            <div className="absolute bottom-6 right-6 border border-white/15 bg-[#0f1f2a]/92 px-3.5 py-2.5 text-right backdrop-blur">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/45">Tile Mart</p>
              <p className="mt-1 text-xs font-extrabold">Peshawar showroom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
