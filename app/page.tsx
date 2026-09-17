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
        <div className="container relative grid min-h-[60vh] gap-8 py-10 sm:gap-10 sm:py-12 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:py-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#75c1e6]">Karkhano Market · Peshawar</p>
            <h1 className="display-title mt-4 text-[2.65rem] sm:text-[3.8rem] lg:text-[4.65rem]">
              Surfaces that shape the whole room.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/72 sm:text-base sm:leading-7">
              Tiles, wash basins and sanitary ware for homes, renovations and building projects. Explore by space, then contact Tile Mart for current designs, sizes and availability.
            </p>
            <div className="mt-6 grid max-w-lg grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
              <a href={whatsappHref("Hello Tile Mart, I am looking for tiles/sanitary ware. Please share current options and availability.")} target="_blank" rel="noreferrer" className="btn btn-primary col-span-2 px-5 sm:order-2 sm:col-auto">Ask on WhatsApp</a>
              <Link href="/tiles" className="btn btn-light px-4 sm:order-1 sm:px-5">Explore tiles</Link>
              <a href={phoneHref} className="btn btn-outline-light px-4 sm:order-3 sm:px-5">Call showroom</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] lg:justify-self-end" aria-hidden="true">
            <div className="material-board aspect-[5/4] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,.24)]" />
            <div className="absolute -bottom-3 left-3 w-[66%] border border-white/12 bg-[#0f1f2a]/94 p-3.5 backdrop-blur sm:-bottom-4 sm:left-4 sm:w-[60%] sm:p-4">
              <p className="eyebrow text-white/38">Tile Mart</p>
              <p className="mt-2 text-sm font-extrabold leading-5 sm:text-base">Tiles · Sanitary Ware · Peshawar</p>
            </div>
            <div className="absolute -right-1 top-5 h-16 w-16 border border-white/15 bg-[var(--brand)] sm:-right-3 sm:top-7 sm:h-20 sm:w-20" />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white">
        <div className="container grid sm:grid-cols-3">
          {quickFacts.map(([value, label], index) => (
            <div key={value} className={`relative py-5 sm:px-7 ${index > 0 ? "border-t border-[var(--line)] sm:border-l sm:border-t-0" : ""}`}>
              <span className="absolute left-0 top-0 h-[3px] w-9 bg-[var(--brand)] sm:left-7" aria-hidden="true" />
              <p className="text-lg font-extrabold tracking-[-0.025em]">{value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-[1fr_.58fr] md:items-end">
          <div>
            <p className="eyebrow text-[var(--brand)]">Tiles by space</p>
            <h2 className="display-title mt-4 max-w-3xl text-[2.3rem] md:text-[3.2rem]">Start with the room. Then refine the surface.</h2>
          </div>
          <p className="max-w-lg text-[15px] leading-7 text-[var(--muted)] md:justify-self-end">
            Product inventory changes. Use the site to narrow your direction, then confirm current showroom options directly with Tile Mart.
          </p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:mt-10 md:grid-cols-2">
          {tileCategories.map((category, index) => (
            <Link key={category.slug} href={`/tiles/${category.slug}`} className="card-lift group relative overflow-hidden bg-white transition-colors hover:bg-[#f8f6f1] sm:min-h-[260px]">
              <div className={`h-28 w-full transition-transform duration-300 group-hover:scale-[1.02] sm:absolute sm:right-0 sm:top-0 sm:h-32 sm:w-32 sm:group-hover:scale-105 ${index % 2 === 0 ? "material-board" : "surface-grid bg-[#dfe7e9]"}`} aria-hidden="true" />
              <div className="p-6 sm:p-7 md:p-8">
                <p className="eyebrow relative text-[var(--brand)]">0{index + 1}</p>
                <div className="relative mt-5 max-w-sm sm:mt-16">
                  <h3 className="text-2xl font-extrabold tracking-[-0.04em]">{category.name}</h3>
                  <p className="mt-3 text-[15px] leading-6 text-[var(--muted)]">{category.short}</p>
                  <p className="mt-5 text-sm font-black text-[var(--brand)]">Explore category →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e6e1d7] py-14 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
          <div className="material-board mx-auto aspect-[4/3] w-full max-w-[520px] border border-black/8 shadow-[0_18px_50px_rgba(15,31,42,.07)]" aria-hidden="true" />
          <div className="lg:pl-6">
            <p className="eyebrow text-[var(--brand)]">Bathroom solutions</p>
            <h2 className="display-title mt-4 text-[2.3rem] md:text-[3.2rem]">The tile is one part of the bathroom.</h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)] md:text-base">
              Tile Mart also deals in sanitary ware, wash basins and bathroom sets. Plan the room as one composition, then ask the showroom about current options.
            </p>
            <Link href="/sanitary-ware" className="btn btn-dark mt-6 px-5">Explore sanitary ware</Link>
          </div>
        </div>
      </section>

      <section className="container py-14 md:py-20">
        <div className="grid border border-[var(--line)] bg-white shadow-[0_14px_45px_rgba(15,31,42,.05)] lg:grid-cols-[.82fr_1.18fr]">
          <div className="bg-[var(--brand)] p-7 text-white md:p-9 lg:p-10">
            <p className="eyebrow text-white/55">Tile Mart Peshawar</p>
            <h2 className="display-title mt-4 text-[2.2rem] md:text-[2.8rem]">See materials in person.</h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-white/78">
              For a specific design, size or bathroom item, contact Tile Mart before travelling so the team can confirm what is currently available.
            </p>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="btn btn-light mt-6 px-5">Open directions</a>
          </div>
          <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
            <div className="bg-white p-7 md:p-8">
              <p className="eyebrow text-[var(--muted)]">Address</p>
              <p className="mt-3 text-lg font-extrabold leading-7">{business.address.street}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{business.city}, {business.region} {business.postalCode}</p>
            </div>
            <div className="bg-white p-7 md:p-8">
              <p className="eyebrow text-[var(--muted)]">Phone</p>
              <a href={phoneHref} className="mt-3 block text-lg font-extrabold text-[var(--brand)]">{business.phone}</a>
              <p className="mt-2 text-sm text-[var(--muted)]">Tap to call from mobile.</p>
            </div>
            <div className="bg-white p-7 md:p-8">
              <p className="eyebrow text-[var(--muted)]">WhatsApp</p>
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="mt-3 block text-lg font-extrabold text-[var(--brand)]">{business.whatsapp}</a>
              <p className="mt-2 text-sm text-[var(--muted)]">Best for product enquiries and photos.</p>
            </div>
            <div className="bg-white p-7 md:p-8">
              <p className="eyebrow text-[var(--muted)]">Showroom</p>
              <Link href="/showroom" className="mt-3 block text-lg font-extrabold text-[var(--brand)]">Visit details →</Link>
              <p className="mt-2 text-sm text-[var(--muted)]">Location, directions and contact options.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactPanel title="Have a room, project or tile direction in mind?" />
    </main>
  );
}
