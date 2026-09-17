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
      className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-4"
      aria-label="Tile Mart Peshawar home"
    >
      <span className={`logo-shell ${light ? "logo-shell-light" : ""}`}>
        <img
          src={`${basePath}/tile-mart-logo.webp`}
          alt="Tile Mart"
          className={`${compact ? "h-12 sm:h-14" : "h-14 sm:h-16"} w-auto object-contain`}
        />
      </span>
    </Link>
  );
}
