import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { business } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tile Mart Showroom Peshawar | Karkhano Market",
  description:
    "Visit Tile Mart Peshawar at Jan Plaza, Karkhano Market. Get directions, call the showroom or ask about tile and sanitary ware availability on WhatsApp.",
  alternates: { canonical: "/showroom" },
};

export default function ShowroomPage() {
  const mapQuery = encodeURIComponent(`${business.address.street}, ${business.city}, ${business.country}`);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Tile Mart showroom"
        title="Visit Tile Mart in Karkhano Market, Peshawar."
        description="See tiles and bathroom products in person. If you need something specific, contact the showroom first to confirm current availability before travelling."
      />

      <section className="container py-20 md:py-28">
        <div className="grid overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white lg:grid-cols-[.8fr_1.2fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand)]">Address</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em]">{business.address.street}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              {business.address.locality}, {business.address.region}, {business.country} {business.postalCode}
            </p>
            <div className="mt-8 grid gap-3">
              <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--brand)] px-6 py-3.5 text-center text-sm font-black text-white">
                Open Google directions
              </a>
              <a href={phoneHref} className="rounded-full border border-black/12 px-6 py-3.5 text-center text-sm font-black">
                Call {business.phone}
              </a>
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="rounded-full border border-black/12 px-6 py-3.5 text-center text-sm font-black">
                WhatsApp {business.whatsapp}
              </a>
            </div>
            <p className="mt-7 text-xs leading-6 text-[var(--muted)]">
              Opening hours are intentionally not published here until they are confirmed by the business owner.
            </p>
          </div>
          <div className="min-h-[420px] bg-[#e7e4dc]">
            <iframe
              title="Tile Mart Peshawar map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container grid gap-10 md:grid-cols-3">
          {[
            ["Before you travel", "Message or call if you need a particular tile type, size, design or sanitary item."],
            ["Bring measurements", "Approximate floor and wall areas make it easier to discuss the project and compare options."],
            ["Bring references", "Photos, colour references and room inspiration help communicate the look you are trying to achieve."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--background)] p-8">
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactPanel title="Check availability before you visit." />
    </main>
  );
}
