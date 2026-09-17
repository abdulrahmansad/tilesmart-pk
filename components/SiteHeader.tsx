import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { business } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/site";

const nav = [
  { href: "/tiles", label: "Tiles" },
  { href: "/sanitary-ware", label: "Sanitary Ware" },
  { href: "/about", label: "About" },
  { href: "/showroom", label: "Showroom" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/95 backdrop-blur-xl">
      <div className="hidden border-b border-black/6 bg-[#0f1f2a] text-white lg:block">
        <div className="container flex h-9 items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-white/65">
          <p>Karkhano Market · Peshawar</p>
          <div className="flex items-center gap-6">
            <a href={phoneHref} className="transition hover:text-white">{business.phone}</a>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">Get directions</a>
          </div>
        </div>
      </div>

      <div className="container flex min-h-[82px] items-center justify-between gap-6 py-3">
        <BrandMark compact />

        <nav className="hidden items-center gap-8 text-[13px] font-extrabold lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--brand)] after:transition-all hover:text-[var(--brand)] hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/showroom" className="btn btn-secondary">Visit showroom</Link>
          <a href={whatsappHref()} target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp</a>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-black/12 bg-white text-sm font-black [&::-webkit-details-marker]:hidden" aria-label="Open navigation menu">
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </summary>
          <div className="absolute right-0 top-[calc(100%+12px)] w-[min(86vw,340px)] border border-black/10 bg-white p-4 shadow-[0_24px_70px_rgba(15,31,42,.16)]">
            <nav className="grid" aria-label="Mobile navigation">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-black/7 px-2 py-4 text-base font-extrabold last:border-b-0">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a href={phoneHref} className="btn btn-secondary justify-center">Call</a>
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="btn btn-primary justify-center">WhatsApp</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
