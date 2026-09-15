import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { whatsappHref } from "@/lib/site";

const nav = [
  { href: "/tiles", label: "Tiles" },
  { href: "/sanitary-ware", label: "Sanitary Ware" },
  { href: "/about", label: "About" },
  { href: "/showroom", label: "Showroom" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-[color:var(--surface)/.94] backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-6 py-3">
        <BrandMark compact />
        <nav className="hidden items-center gap-6 text-sm font-bold lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--brand)] focus-visible:text-[var(--brand)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full border border-black/12 px-4 py-2.5 text-sm font-bold sm:inline-flex"
          >
            Visit / Contact
          </Link>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--brand)] px-4 py-2.5 text-sm font-black text-white transition hover:bg-[var(--brand-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <nav className="container flex gap-5 overflow-x-auto border-t border-black/6 py-2.5 text-xs font-bold lg:hidden" aria-label="Mobile navigation">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap py-1">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
