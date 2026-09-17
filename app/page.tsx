import type { Metadata } from "next";
import Link from "next/link";
import { ContactPanel } from "@/components/ContactPanel";
import { business, tileCategories } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tile Mart Peshawar | Tiles & Sanitary Ware",
  description:
    "Looking for tiles or sanitary ware in Peshawar? Explore Tile Mart by room and product type, then confirm current options directly by WhatsApp or phone.",
  alternates: { canonical: "/" },
};

const quickFacts = [
  ["Peshawar", "Local showroom"],
  ["Tiles", "Main category"],
  ["Sanitary Ware", "Bathroom solutions"],
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-[#0f1f2a] text-white">
        <div className="architecture-lines absolute inset-0" aria-hidden="true" />
        <div className="container relative grid min-h-[76vh] gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow text-[#75c1e6]">Karkhano Market · Peshawar</p>
            <h1 className="display-title mt-6 text-5xl sm:text-6xl lg:text-[5.8rem]">
              Surfaces that shape the whole room.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Tiles, wash basins and sanitary ware for homes, renovations and building projects. Explore by space, then contact Tile Mart for current designs, sizes and availability.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/tiles" className="btn btn-light px-6">Explore tiles</Link>
              <a href={whatsappHref("Hello Tile Mart, I am looking for tiles/sanitary ware. Please share current options and availability.")} target="_blank" rel="noreferrer" className="btn btn-primary px-6">Ask on WhatsApp</a>
              <a href={phoneHref} className="btn btn-outline-light px-6">Call showroom</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:justify-self-end" aria-hidden="true">
            <div className="material-board aspect-[4/5] border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,.28)]" />
            <div className="absolute -bottom-5 -left-5 w-[62%] border border-white/12 bg-[#0f1f2a]/94 p-5 backdrop-blur md:-left-8 md:p-6">
              <p className="eyebrow text-white/38">Tile Mart</p>
              <p className="mt-3 text-xl font-extrabold leading-6">Tiles · Sanitary Ware · Peshawar</p>
            </div>
            <div className="absolute -right-3 top-8 h-24 w-24 border border-white/15 bg-[var(--brand)] md:-right-6 md:h-32 md:w-32" />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white">
        <div className="container grid sm:grid-cols-3">
          {quickFacts.map(([value, label], index) => (
            <div key={value} className={`relative py-7 sm:px-8 ${index > 0 ? "border-t border-[var(--line)] sm:border-l sm:border-t-0" : ""}`}>
              <span className="absolute left-0 top-0 h-[3px] w-10 bg-[var(--brand)] sm:left-8" aria-hidden="true" />
              <p className="text-xl font-extrabold tracking-[-0.025em]">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_.62fr] md:items-end">
          <div>
            <p className="eyebrow text-[var(--brand)]">Tiles by space</p>
            <h2 className="display-title mt-5 max-w-4xl text-4xl md:text-6xl">Start with the room. Then refine the surface.</h2>
          </div>
          <p className="max-w-xl leading-7 text-[var(--muted)] md:justify-self-end">
            Product inventory changes. Use the site to narrow your direction, then confirm current showroom options directly with Tile Mart.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {tileCategories.map((category, index) => (
            <Link key={category.slug} href={`/tiles/${category.slug}`} className="card-lift group relative min-h-[330px] overflow-hidden bg-white p-8 transition-colors hover:bg-[#f8f6f1] md:p-10">
              <div className={`absolute right-0 top-0 h-36 w-36 transition-transform duration-300 group-hover:scale-105 ${index % 2 === 0 ? "material-board" : "surface-grid bg-[#dfe7e9]"}`} aria-hidden="true" />
              <p className="eyebrow relative text-[var(--brand)]">0{index + 1}</p>
              <div className="relative mt-24 max-w-md">
                <h3 className="text-3xl font-extrabold tracking-[-0.04em]">{category.name}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{category.short}</p>
                <p className="mt-8 text-sm font-black text-[var(--brand)]">Explore category →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e6e1d7] py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div className="material-board aspect-[5/4] border border-black/8 shadow-[0_22px_65px_rgba(15,31,42,.08)]" aria-hidden="true" />
          <div className="lg:pl-8">
            <p className="eyebrow text-[var(--brand)]">Bathroom solutions</p>
            <h2 className="display-title mt-5 text-4xl md:text-6xl">The tile is one part of the bathroom.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Tile Mart also deals in sanitary ware, wash basins and bathroom sets. Plan the room as one composition, then ask the showroom about current options.
            </p>
            <Link href="/sanitary-ware" className="btn btn-dark mt-8 px-6">Explore sanitary ware</Link>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid border border-[var(--line)] bg-white shadow-[0_18px_55px_rgba(15,31,42,.05)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="bg-[var(--brand)] p-8 text-white md:p-12 lg:p-14">
            <p className="eyebrow text-white/55">Tile Mart Peshawar</p>
            <h2 className="display-title mt-5 text-4xl md:text-5xl">See materials in person.</h2>
            <p className="mt-5 max-w-md leading-7 text-white/78">
              For a specific design, size or bathroom item, contact Tile Mart before travelling so the team can confirm what is currently available.
            </p>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn btn-light mt-8 px-6">Open directions</a>
          </div>
          <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
            <div className="bg-white p-8 md:p-10">
              <p className="eyebrow text-[var(--muted)]">Address</p>
              <p className="mt-4 text-xl font-extrabold leading-7">{business.address.street}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{business.city}, {business.region} {business.postalCode}</p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <p className="eyebrow text-[var(--muted)]">Phone</p>
              <a href={phoneHref} className="mt-4 block text-xl font-extrabold text-[var(--brand)]">{business.phone}</a>
              <p className="mt-2 text-sm text-[var(--muted)]">Tap to call from mobile.</p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <p className="eyebrow text-[var(--muted)]">WhatsApp</p>
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="mt-4 block text-xl font-extrabold text-[var(--brand)]">{business.whatsapp}</a>
              <p className="mt-2 text-sm text-[var(--muted)]">Best for product enquiries and photos.</p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <p className="eyebrow text-[var(--muted)]">Showroom</p>
              <Link href="/showroom" className="mt-4 block text-xl font-extrabold text-[var(--brand)]">Visit details →</Link>
              <p className="mt-2 text-sm text-[var(--muted)]">Location, directions and contact options.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactPanel title="Have a room, project or tile direction in mind?" />
    </main>
  );
}
