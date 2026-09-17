import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  const logoSrc = process.env.GITHUB_PAGES === "true"
    ? "/tilesmart-pk/tile-mart-logo-official.webp"
    : "/tile-mart-logo-official.webp";

  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-4"
      aria-label="Tile Mart Peshawar home"
    >
      <span className={`inline-flex items-center justify-center ${light ? "bg-white px-2.5 py-1.5" : ""}`}>
        <img
          src={logoSrc}
          alt="Tile Mart"
          width={516}
          height={333}
          className={`${compact ? "w-[126px] sm:w-[144px]" : "w-[148px] sm:w-[166px]"} h-auto object-contain`}
        />
      </span>
    </Link>
  );
}
