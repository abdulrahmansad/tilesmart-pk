import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  light?: boolean;
};

const tileLetters = ["T", "I", "L", "E"] as const;

export function BrandMark({ compact = false, light = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-4"
      aria-label="Tile Mart Peshawar home"
    >
      <span className="inline-flex items-center gap-3">
        <span className="flex gap-[2px]" aria-hidden="true">
          {tileLetters.map((letter) => (
            <span
              key={letter}
              className={`${compact ? "h-8 w-8 text-[17px]" : "h-9 w-9 text-[19px]"} inline-flex items-center justify-center bg-[var(--brand)] font-black leading-none text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.16)]`}
            >
              {letter}
            </span>
          ))}
        </span>
        <span className="flex flex-col leading-none">
          <span className={`${compact ? "text-[19px]" : "text-[22px]"} font-black tracking-[-0.055em] ${light ? "text-white" : "text-[var(--ink)]"}`}>
            MART
          </span>
          <span className={`${compact ? "mt-1 text-[7px]" : "mt-1.5 text-[8px]"} font-black uppercase tracking-[0.24em] ${light ? "text-white/45" : "text-[var(--muted)]"}`}>
            Peshawar
          </span>
        </span>
      </span>
    </Link>
  );
}
