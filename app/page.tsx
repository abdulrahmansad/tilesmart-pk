import { business, primaryCategories } from "@/content/business";

const whatsappHref = `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hello Tile Mart, I would like to ask about your tiles and sanitary products."
)}`;

export default function HomePage() {
  return (
    <main>
      <header className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="container flex min-h-20 items-center justify-between gap-6 py-4">
          <a href="#top" className="flex items-end gap-2" aria-label="Tile Mart home">
            <span className="text-2xl font-black tracking-[0.16em] text-[var(--brand)]">TILE</span>
            <span className="pb-0.5 text-xl font-semibold italic text-[var(--brand)]">Mart</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Primary navigation">
            <a href="#tiles">Tiles</a>
            <a href="#sanitary">Sanitary Ware</a>
            <a href="#showroom">Showroom</a>
          </nav>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section id="top" className="tile-grid bg-[var(--brand-dark)] text-white">
        <div className="container grid min-h-[72vh] items-end gap-12 py-16 md:grid-cols-[1.3fr_.7fr] md:py-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-white/70">Peshawar · Pakistan</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.05em] sm:text-6xl md:text-8xl">
              Tiles that shape the whole space.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Explore tile and sanitary solutions for homes, renovations and building projects from Tile Mart in Peshawar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#tiles" className="rounded-full bg-white px-6 py-3.5 font-bold text-[var(--brand-dark)]">
                Explore tiles
              </a>
              <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-6 py-3.5 font-bold text-white">
                Get directions
              </a>
            </div>
          </div>
          <div className="border-l border-white/30 pl-6 text-sm leading-7 text-white/70">
            <p className="font-bold uppercase tracking-[0.16em] text-white">Start with the surface.</p>
            <p className="mt-3">Compare styles, finishes and room applications, then contact Tile Mart directly for current options and availability.</p>
          </div>
        </div>
      </section>

      <section id="tiles" className="container py-20 md:py-28">
        <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand)]">Collections</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">Find the right finish for the room.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--muted)] md:justify-self-end">
            Browse by application first. Detailed product photography, sizes, brands and live availability will be added only from verified Tile Mart inventory.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {primaryCategories.map((category, index) => (
            <article key={category.slug} className="min-h-72 bg-[var(--surface)] p-8 md:p-10">
              <p className="text-sm font-bold text-[var(--brand)]">0{index + 1}</p>
              <h3 className="mt-12 text-3xl font-black tracking-[-0.03em]">{category.name}</h3>
              <p className="mt-4 max-w-md leading-7 text-[var(--muted)]">{category.description}</p>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex border-b border-black pb-1 text-sm font-bold">
                Ask about this category
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="sanitary" className="bg-[#171717] py-20 text-white md:py-28">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/55">Beyond tiles</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">Complete the bathroom in one conversation.</h2>
          </div>
          <div className="max-w-xl md:justify-self-end">
            <p className="text-lg leading-8 text-white/70">
              Tile Mart also works with sanitary and bathroom products. Tell us what you are building or renovating and ask what is currently available.
            </p>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 font-bold text-black">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="showroom" className="container py-20 md:py-28">
        <div className="grid overflow-hidden rounded-3xl bg-[var(--surface)] shadow-[0_24px_80px_rgba(0,0,0,.08)] md:grid-cols-[.8fr_1.2fr]">
          <div className="bg-[var(--brand)] p-8 text-white md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Tile Mart Peshawar</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">See products in person.</h2>
            <p className="mt-5 leading-7 text-white/80">Visit the showroom or contact the team before you travel if you are looking for a specific tile or sanitary item.</p>
          </div>
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Call</p>
              <a className="mt-3 block text-xl font-black" href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">WhatsApp</p>
              <a className="mt-3 block text-xl font-black" href={whatsappHref} target="_blank" rel="noreferrer">{business.whatsapp}</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Location</p>
              <p className="mt-3 text-xl font-black">Peshawar, Khyber Pakhtunkhwa</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Directions</p>
              <a className="mt-3 inline-block text-xl font-black text-[var(--brand)]" href={business.directionsUrl} target="_blank" rel="noreferrer">Open map ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="container flex flex-col gap-6 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Tile Mart. Peshawar, Pakistan.</p>
          <div className="flex flex-wrap gap-5">
            <a href={business.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={business.social.tiktok} target="_blank" rel="noreferrer">TikTok</a>
            <a href={business.social.youtube} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
