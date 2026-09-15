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
    <section className="container py-16 md:py-24">
      <div className="grid overflow-hidden rounded-[2rem] bg-[var(--brand-dark)] text-white md:grid-cols-[1.25fr_.75fr]">
        <div className="p-8 md:p-12 lg:p-16">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/50">Direct enquiry</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">{message}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-black text-[var(--brand-dark)]"
            >
              Ask on WhatsApp
            </a>
            <a href={phoneHref} className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-black">
              Call {business.phone}
            </a>
          </div>
        </div>
        <div className="tile-sample-dark min-h-64 border-t border-white/10 md:min-h-full md:border-l md:border-t-0" aria-hidden="true" />
      </div>
    </section>
  );
}
