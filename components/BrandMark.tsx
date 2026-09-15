import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  const textColor = light ? "text-white" : "text-[var(--brand)]";

  return (
    <Link href="/" className="inline-flex items-end gap-2" aria-label="Tile Mart Peshawar home">
      <span className={`inline-grid grid-cols-4 gap-0.5 ${textColor}`} aria-hidden="true">
        {"TILE".split("").map((letter) => (
          <span
            key={letter}
            className={`grid place-items-center bg-current ${compact ? "h-8 w-8" : "h-9 w-9 sm:h-10 sm:w-10"}`}
          >
            <span className={`${light ? "text-[var(--brand-dark)]" : "text-white"} text-lg font-black leading-none`}>
              {letter}
            </span>
          </span>
        ))}
      </span>
      <span className={`${textColor} ${compact ? "text-xl" : "text-2xl sm:text-3xl"} font-semibold italic leading-none`}>
        Mart
      </span>
    </Link>
  );
}
