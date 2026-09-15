import type { Metadata } from "next";
import Link from "next/link";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { tileCategories } from "@/content/business";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tiles in Peshawar | Floor, Wall, Bathroom & Kitchen Tiles",
  description:
    "Explore floor, wall, bathroom and kitchen tile guidance from Tile Mart Peshawar, then ask the showroom for current designs, sizes and availability.",
  alternates: { canonical: "/tiles" },
};

const choosingSteps = [
  ["01", "Choose the space", "Start with where the tile will be used: floor, wall, bathroom or kitchen."],
  ["02", "Narrow the look", "Think about colour, pattern, finish and how much visual movement you want."],
  ["03", "Confirm practical needs", "Tell the showroom about the room and application so suitable current options can be discussed."],
  ["04", "Check live availability", "Sizes, designs and stock can change, so confirm before finalising your project."],
] as const;

export default function TilesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Tiles in Peshawar"
        title="Choose by room first. Then choose the tile."
        description="Tile Mart helps customers explore tile options for homes, renovations and building projects in Peshawar. Use these categories to narrow the search before checking current showroom availability."
      />

      <section className="container py-20 md:py-28">
        <div className="grid gap-4 md:grid-cols-2">
          {tileCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/tiles/${category.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white"
            >
              <div className={`h-52 ${index % 2 === 0 ? "tile-sample-light" : "surface-grid bg-[#dfe7e9]"}`} aria-hidden="true" />
              <div className="p-8 md:p-10">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--brand)]">Tile guide</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">{category.name}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">{category.description}</p>
                <p className="mt-7 text-sm font-black text-[var(--brand)]">Explore {category.name.toLowerCase()} →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">A better way to shop</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-6xl">Four steps before you buy.</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
            {choosingSteps.map(([number, title, copy]) => (
              <article key={number} className="bg-white p-7 md:p-8">
                <p className="text-sm font-black text-[var(--brand)]">{number}</p>
                <h3 className="mt-8 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">Before visiting</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">Send the room details first.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Room / application", "Approximate area", "Preferred colour or style", "Photos or inspiration"].map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <p className="font-black">{item}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Include this in your WhatsApp message so the conversation starts with useful context.</p>
              </div>
            ))}
            <a
              href={whatsappHref("Hello Tile Mart, I need help choosing tiles. I can share my room/application, approximate area and preferred style.")}
              target="_blank"
              rel="noreferrer"
              className="sm:col-span-2 rounded-2xl bg-[var(--brand)] p-6 text-center font-black text-white"
            >
              Start a tile enquiry on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ContactPanel title="Looking for a specific tile style or size?" />
    </main>
  );
}
