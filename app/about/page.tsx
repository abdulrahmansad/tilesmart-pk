import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "About Tile Mart Peshawar",
  description:
    "Learn about Tile Mart, a tiles and sanitary ware business in Peshawar, Pakistan, and how to contact or visit the showroom.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About Tile Mart"
        title="A local tile and sanitary destination in Peshawar."
        description="Tile Mart serves customers looking for tiles and bathroom products in Peshawar. The website is designed to make the first part of that search easier before a showroom visit or direct enquiry."
      />

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow text-[var(--brand)]">What Tile Mart does</p>
            <h2 className="display-title mt-5 text-4xl md:text-5xl">Tiles first, with bathroom products alongside them.</h2>
          </div>
          <div className="prose-copy max-w-2xl text-lg leading-8 text-[var(--muted)]">
            <p>
              Tile Mart&apos;s main category is tiles, including options customers can consider for floors, walls, bathrooms and kitchens. The business also deals in sanitary ware, wash basins and bathroom sets.
            </p>
            <p>
              Because showroom stock and designs can change, this website does not manufacture a fake online catalogue. Instead, it helps customers narrow what they need and gives them a direct route to ask Tile Mart for current options.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--brand)]">How to use the showroom</p>
            <h2 className="display-title mt-5 text-4xl md:text-6xl">Arrive with a clearer brief.</h2>
          </div>
          <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {[
              ["01", "Measure", "Bring approximate floor or wall dimensions so the conversation starts with scale."],
              ["02", "Save references", "Keep photos, colours or styles you like on your phone to communicate the direction quickly."],
              ["03", "Confirm availability", "Use WhatsApp or phone before travelling if you need a particular type, size or bathroom product."],
            ].map(([number, title, copy]) => (
              <article key={number} className="card-lift bg-white p-8 md:p-9">
                <p className="eyebrow text-[var(--brand)]">{number}</p>
                <h3 className="mt-12 text-2xl font-extrabold tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid overflow-hidden border border-[var(--line)] bg-white shadow-[0_18px_55px_rgba(15,31,42,.05)] md:grid-cols-2">
          <div className="material-board min-h-80" aria-hidden="true" />
          <div className="p-8 md:p-12 lg:p-14">
            <p className="eyebrow text-[var(--brand)]">Location</p>
            <h2 className="display-title mt-5 text-3xl md:text-4xl">{business.displayName}</h2>
            <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
              {business.address.street}, {business.address.locality}, {business.address.region}, {business.country} {business.postalCode}.
            </p>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-8 px-6">
              Open directions
            </a>
          </div>
        </div>
      </section>

      <ContactPanel title="Ready to ask about a tile or bathroom product?" />
    </main>
  );
}
