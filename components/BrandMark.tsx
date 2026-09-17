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
      <span
        className={`inline-flex items-center justify-center ${light ? "bg-white px-2 py-1" : ""}`}
      >
        <img
          src={`${basePath}/tile-mart-logo-official.webp`}
          alt="Tile Mart"
          width={360}
          height={235}
          className={`${compact ? "w-[156px] sm:w-[178px]" : "w-[182px] sm:w-[208px]"} h-auto object-contain`}
        />
      </span>
    </Link>
  );
}
