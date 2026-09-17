import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { business } from "@/content/business";
import { phoneHref, whatsappHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-[var(--brand)] bg-[#101820] text-white">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.2fr_.8fr_.8fr] md:py-18">
        <div>
          <BrandMark compact light />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
            Tiles and sanitary ware in Peshawar. Browse ideas online, then confirm current designs, sizes and availability directly with Tile Mart.
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
            {business.address.street}, {business.address.locality}, {business.address.country}
          </p>
        </div>
        <div>
          <p className="eyebrow text-white/42">Explore</p>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/78">
            <Link className="transition hover:text-white" href="/tiles">Tiles</Link>
            <Link className="transition hover:text-white" href="/sanitary-ware">Sanitary Ware</Link>
            <Link className="transition hover:text-white" href="/showroom">Showroom</Link>
            <Link className="transition hover:text-white" href="/about">About Tile Mart</Link>
            <Link className="transition hover:text-white" href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-white/42">Contact</p>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/78">
            <a className="transition hover:text-white" href={phoneHref}>{business.phone}</a>
            <a className="transition hover:text-white" href={whatsappHref()} target="_blank" rel="noreferrer">WhatsApp {business.whatsapp}</a>
            <a className="transition hover:text-white" href={business.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a className="transition hover:text-white" href={business.social.tiktok} target="_blank" rel="noreferrer">TikTok</a>
            <a className="transition hover:text-white" href={business.social.youtube} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tile Mart. All rights reserved.</p>
          <p>Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
