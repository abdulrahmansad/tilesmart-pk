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
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] lg:grid-cols-3">
          <a href={whatsappHref()} target="_blank" rel="noreferrer" className="card-lift bg-[var(--brand)] p-8 text-white md:p-10">
            <p className="eyebrow text-white/55">WhatsApp</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.035em]">{business.whatsapp}</h2>
            <p className="mt-4 text-sm leading-7 text-white/78">Best for sending product references, room photos and requirements.</p>
            <p className="mt-8 text-sm font-black">Start chat →</p>
          </a>

          <a href={phoneHref} className="card-lift bg-white p-8 md:p-10">
            <p className="eyebrow text-[var(--brand)]">Phone</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.035em]">{business.phone}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Call the showroom directly for a quick conversation.</p>
            <p className="mt-8 text-sm font-black text-[var(--brand)]">Call now →</p>
          </a>

          <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="card-lift bg-white p-8 md:p-10">
            <p className="eyebrow text-[var(--brand)]">Visit</p>
            <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.03em]">{business.address.street}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{business.city}, {business.region}, {business.country}</p>
            <p className="mt-8 text-sm font-black text-[var(--brand)]">Get directions →</p>
          </a>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-[var(--brand)]">For a faster answer</p>
            <h2 className="display-title mt-5 text-4xl md:text-5xl">Put the useful details in your first message.</h2>
          </div>
          <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {enquiryTips.map((tip, index) => (
              <div key={tip} className="bg-[var(--background)] p-6 md:p-7">
                <p className="eyebrow text-[var(--brand)]">0{index + 1}</p>
                <p className="mt-6 font-extrabold leading-6">{tip}</p>
              </div>
            ))}
            <a
              href={whatsappHref("Hello Tile Mart. I would like help with a project. I can share the room, approximate area, product type and style references.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark sm:col-span-2 min-h-[58px] rounded-none text-sm"
            >
              Open a prepared WhatsApp enquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
