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
        <div className="grid overflow-hidden border border-[var(--line)] bg-white shadow-[0_18px_55px_rgba(15,31,42,.06)] lg:grid-cols-[.8fr_1.2fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <p className="eyebrow text-[var(--brand)]">Address</p>
            <h2 className="display-title mt-5 text-3xl md:text-4xl">{business.address.street}</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {business.address.locality}, {business.address.region}, {business.country} {business.postalCode}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn btn-primary sm:col-span-2 lg:col-span-1 xl:col-span-2">
                Open Google directions
              </a>
              <a href={phoneHref} className="btn btn-secondary">
                Call showroom
              </a>
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="btn btn-secondary">
                WhatsApp
              </a>
            </div>
            <div className="mt-8 border-t border-[var(--line)] pt-6 text-sm leading-7 text-[var(--muted)]">
              Need a particular tile type, size or sanitary item? Contact Tile Mart before travelling so the team can confirm current options.
            </div>
          </div>
          <div className="min-h-[440px] bg-[#e7e4dc]">
            <iframe
              title="Tile Mart Peshawar map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full min-h-[440px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white py-20 md:py-24">
        <div className="container">
          <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {[
              ["01", "Before you travel", "Message or call if you need a particular tile type, size, design or sanitary item."],
              ["02", "Bring measurements", "Approximate floor and wall areas make it easier to discuss the project and compare options."],
              ["03", "Bring references", "Photos, colour references and room inspiration help communicate the look you are trying to achieve."],
            ].map(([number, title, copy]) => (
              <article key={title} className="card-lift bg-white p-8 md:p-9">
                <p className="eyebrow text-[var(--brand)]">{number}</p>
                <h2 className="mt-10 text-xl font-extrabold tracking-[-0.025em]">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactPanel title="Check availability before you visit." />
    </main>
  );
}
