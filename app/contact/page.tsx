import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { business } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Tile Mart Peshawar",
  description:
    "Contact Tile Mart Peshawar by phone or WhatsApp for tile and sanitary ware enquiries, or get directions to the Karkhano Market showroom.",
  alternates: { canonical: "/contact" },
};

const enquiryTips = [
  "What room or project are you working on?",
  "Do you need floor tiles, wall tiles, sanitary ware or a combination?",
  "What approximate area or quantity do you need?",
  "Do you have a preferred colour, design or reference photo?",
] as const;

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact Tile Mart"
        title="Ask directly. Get the current answer."
        description="For product availability, designs, sizes and showroom questions, contact Tile Mart directly by WhatsApp or phone."
      />

      <section className="container py-20 md:py-28">
        <div className="grid gap-5 lg:grid-cols-3">
          <a href={whatsappHref()} target="_blank" rel="noreferrer" className="rounded-[2rem] bg-[var(--brand)] p-8 text-white md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/55">WhatsApp</p>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em]">{business.whatsapp}</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">Best for sending product references, room photos and requirements.</p>
            <p className="mt-8 text-sm font-black">Start chat →</p>
          </a>

          <a href={phoneHref} className="rounded-[2rem] border border-[var(--line)] bg-white p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand)]">Phone</p>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em]">{business.phone}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Call the showroom directly for a quick conversation.</p>
            <p className="mt-8 text-sm font-black text-[var(--brand)]">Call now →</p>
          </a>

          <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="rounded-[2rem] border border-[var(--line)] bg-white p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand)]">Visit</p>
            <h2 className="mt-5 text-2xl font-black tracking-[-0.03em]">{business.address.street}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{business.city}, {business.region}, {business.country}</p>
            <p className="mt-8 text-sm font-black text-[var(--brand)]">Get directions →</p>
          </a>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">For a faster answer</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em]">Put the useful details in your first message.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {enquiryTips.map((tip, index) => (
              <div key={tip} className="rounded-2xl border border-[var(--line)] bg-[var(--background)] p-6">
                <p className="text-xs font-black text-[var(--brand)]">0{index + 1}</p>
                <p className="mt-5 font-black leading-6">{tip}</p>
              </div>
            ))}
            <a
              href={whatsappHref("Hello Tile Mart. I would like help with a project. I can share the room, approximate area, product type and style references.")}
              target="_blank"
              rel="noreferrer"
              className="sm:col-span-2 rounded-2xl bg-[#101820] p-6 text-center text-sm font-black text-white"
            >
              Open a prepared WhatsApp enquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
