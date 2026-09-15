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
      <section className="relative overflow-hidden bg-[#0d1b25] text-white">
        <div className="tile-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container relative grid min-h-[72vh] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/55">Karkhano Market · Peshawar</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              Start with the surface. Build the whole room.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Explore tiles, wash basins and sanitary ware from Tile Mart in Peshawar. Browse by space, then contact the showroom for current designs, sizes and availability.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/tiles" className="rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#0d1b25]">
                Explore tiles
              </Link>
              <a
                href={whatsappHref("Hello Tile Mart, I am looking for tiles/sanitary ware. Please share current options and availability.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-black text-white"
              >
                Ask on WhatsApp
              </a>
              <a href={phoneHref} className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-black text-white">
                Call showroom
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#142b3a] p-5 shadow-2xl shadow-black/30" aria-hidden="true">
            <div className="grid h-full grid-cols-2 grid-rows-3 gap-3">
              <div className="rounded-2xl bg-[#e8e4dc]" />
              <div className="rounded-2xl bg-[#b8c5cc]" />
              <div className="col-span-2 rounded-2xl tile-sample-light" />
              <div className="rounded-2xl bg-[#597b8d]" />
              <div className="rounded-2xl bg-[#d6c4a5]" />
            </div>
            <div className="absolute bottom-9 left-9 right-9 rounded-2xl border border-white/10 bg-[#0d1b25]/90 p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">Tile Mart</p>
              <p className="mt-2 text-xl font-black">Tiles · Sanitary Ware · Peshawar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="container grid divide-y divide-[var(--line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {quickFacts.map(([value, label]) => (
            <div key={value} className="py-6 sm:px-7 first:pl-0 last:pr-0">
              <p className="text-lg font-black">{value}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">Tiles by space</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.045em] md:text-6xl">Find the right direction before you visit.</h2>
          </div>
          <p className="max-w-xl leading-7 text-[var(--muted)] md:justify-self-end">
            Product inventory changes. This site does not pretend every design is always in stock; use it to narrow your choice, then confirm current showroom options with Tile Mart.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {tileCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/tiles/${category.slug}`}
              className="group relative min-h-72 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:p-10"
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-[5rem] bg-[var(--brand-soft)] transition group-hover:scale-110" aria-hidden="true" />
              <p className="relative text-xs font-black uppercase tracking-[0.2em] text-[var(--brand)]">0{index + 1}</p>
              <h3 className="relative mt-16 text-3xl font-black tracking-[-0.035em]">{category.name}</h3>
              <p className="relative mt-4 max-w-lg leading-7 text-[var(--muted)]">{category.short}</p>
              <p className="relative mt-8 text-sm font-black text-[var(--brand)]">Explore category →</p>
            </Link>
          ))}
        </div>
        <div className="mt-7 text-center">
          <Link href="/tiles" className="inline-flex rounded-full border border-black/15 px-6 py-3 text-sm font-black">
            View all tile guidance
          </Link>
        </div>
      </section>

      <section className="bg-[#e9e5dc] py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="tile-sample-light aspect-square max-h-[560px] rounded-[2.5rem] border border-black/8" aria-hidden="true" />
          <div className="lg:pl-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">Bathroom solutions</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">Tiles are only part of the bathroom.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Tile Mart also deals in sanitary ware, wash basins and bathroom sets. Use the sanitary section to plan what you need, then ask the showroom about current options.
            </p>
            <Link href="/sanitary-ware" className="mt-8 inline-flex rounded-full bg-[#101820] px-6 py-3.5 text-sm font-black text-white">
              Explore sanitary ware
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid overflow-hidden rounded-[2.25rem] border border-[var(--line)] bg-white lg:grid-cols-[.9fr_1.1fr]">
          <div className="bg-[var(--brand)] p-8 text-white md:p-12 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/55">Tile Mart Peshawar</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-5xl">See the options in person.</h2>
            <p className="mt-5 max-w-md leading-7 text-white/75">
              For a specific design, size or bathroom item, contact Tile Mart before travelling so the team can confirm what is currently available.
            </p>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-black text-[var(--brand-dark)]">
              Open directions
            </a>
          </div>
          <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2">
            <div className="bg-white p-8 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--muted)]">Address</p>
              <p className="mt-3 text-xl font-black leading-7">{business.address.street}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{business.city}, {business.region} {business.postalCode}</p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--muted)]">Phone</p>
              <a href={phoneHref} className="mt-3 block text-xl font-black text-[var(--brand)]">{business.phone}</a>
              <p className="mt-2 text-sm text-[var(--muted)]">Tap to call from mobile.</p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--muted)]">WhatsApp</p>
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="mt-3 block text-xl font-black text-[var(--brand)]">{business.whatsapp}</a>
              <p className="mt-2 text-sm text-[var(--muted)]">Best for product enquiries and photos.</p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--muted)]">Showroom</p>
              <Link href="/showroom" className="mt-3 block text-xl font-black text-[var(--brand)]">Visit details →</Link>
              <p className="mt-2 text-sm text-[var(--muted)]">Location, directions and contact options.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactPanel title="Have a room, project or tile idea in mind?" />
    </main>
  );
}
