import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { sanitaryCategories } from "@/content/business";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sanitary Ware in Peshawar | Wash Basins & Bathroom Sets",
  description:
    "Explore sanitary ware, wash basins and bathroom sets from Tile Mart Peshawar. Contact the showroom to confirm current products and availability.",
  alternates: { canonical: "/sanitary-ware" },
};

export default function SanitaryWarePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Sanitary ware in Peshawar"
        title="Finish the bathroom beyond the tile."
        description="Tile Mart also deals in sanitary ware, wash basins and bathroom sets. Use this page to organise what you need, then confirm current showroom options directly."
      />

      <section className="container py-20 md:py-28">
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {sanitaryCategories.map((category, index) => (
            <article key={category.slug} className="card-lift overflow-hidden bg-white">
              <div className={`relative h-52 ${index === 1 ? "surface-grid bg-[#dbe6eb]" : "material-board"}`} aria-hidden="true">
                <span className="absolute left-5 top-5 border border-black/10 bg-white/90 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand)] backdrop-blur">0{index + 1}</span>
              </div>
              <div className="p-8 md:p-9">
                <p className="eyebrow text-[var(--brand)]">Bathroom</p>
                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.03em]">{category.name}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{category.description}</p>
                <a
                  href={whatsappHref(`Hello Tile Mart, I am looking for ${category.name.toLowerCase()}. Please share current options and availability.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex text-sm font-black text-[var(--brand)]"
                >
                  Ask about {category.name.toLowerCase()} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="eyebrow text-[var(--brand)]">Plan the set together</p>
            <h2 className="display-title mt-5 text-4xl md:text-6xl">A bathroom looks stronger when the pieces belong together.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              When you enquire, share your bathroom size, tile colours and the sanitary products you need. That gives the showroom better context for discussing current combinations.
            </p>
          </div>
          <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-1">
            {["Bathroom size / layout", "Tile colour or planned finish", "Wash basin requirement", "Other sanitary items needed"].map((item, index) => (
              <div key={item} className="bg-[var(--background)] p-6 font-extrabold">
                <span className="mr-3 text-xs font-black text-[var(--brand)]">0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactPanel title="Planning a complete bathroom?" message="Send Tile Mart the room details and what sanitary products you need. The showroom can confirm current options before you visit." />
    </main>
  );
}
