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
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">What Tile Mart does</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-5xl">Tiles first, with bathroom products alongside them.</h2>
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

      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">How to use the showroom</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">Arrive with a clearer brief.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["1", "Measure", "Bring approximate floor or wall dimensions so the conversation starts with scale."],
              ["2", "Save references", "Keep photos, colours or styles you like on your phone to communicate the direction quickly."],
              ["3", "Confirm availability", "Use WhatsApp or phone before travelling if you need a particular type, size or bathroom product."],
            ].map(([number, title, copy]) => (
              <article key={number} className="rounded-[2rem] border border-[var(--line)] bg-[var(--background)] p-8">
                <p className="text-sm font-black text-[var(--brand)]">0{number}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white md:grid-cols-2">
          <div className="tile-sample-dark min-h-80" aria-hidden="true" />
          <div className="p-8 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand)]">Location</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em]">{business.displayName}</h2>
            <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
              {business.address.street}, {business.address.locality}, {business.address.region}, {business.country} {business.postalCode}.
            </p>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-black text-white">
              Open directions
            </a>
          </div>
        </div>
      </section>

      <ContactPanel title="Ready to ask about a tile or bathroom product?" />
    </main>
  );
}
