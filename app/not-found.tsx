import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="container grid min-h-[60vh] place-items-center py-20 text-center">
      <div className="max-w-xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">404</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.05em]">This page is not in the showroom.</h1>
        <p className="mt-5 leading-7 text-[var(--muted)]">The link may be old or the page may have moved. Return to Tile Mart and continue browsing.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-black text-white">
          Back to home
        </Link>
      </div>
    </main>
  );
}
