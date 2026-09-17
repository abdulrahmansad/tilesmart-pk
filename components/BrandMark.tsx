import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-4"
      aria-label="Tile Mart Peshawar home"
    >
      <span className={`logo-shell ${light ? "logo-shell-light" : ""}`}>
        <img
          src={`${basePath}/tile-mart-logo.webp`}
          alt="Tile Mart"
          className={`${compact ? "h-9 sm:h-10" : "h-11 sm:h-12"} w-auto object-contain`}
        />
      </span>
      <span className="hidden border-l border-current/15 pl-3 text-[10px] font-extrabold uppercase leading-[1.35] tracking-[0.18em] text-[var(--muted)] sm:block">
        Tiles & sanitary ware
        <br />
        Peshawar
      </span>
    </Link>
  );
}
