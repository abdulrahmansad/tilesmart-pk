import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { tileCategories } from "@/content/business";
import { whatsappHref } from "@/lib/site";

const guidance = {
  "floor-tiles": {
    intent: "Floor tile choices affect the visual scale of a room, cleaning, movement and how the whole interior feels.",
    prompts: ["Room type and expected traffic", "Preferred colour and visual style", "Approximate floor area", "Any size or finish preference"],
  },
  "wall-tiles": {
    intent: "Wall tiles can be quiet background surfaces or the strongest design feature in a room.",
    prompts: ["Which wall or room", "Full-height or feature area", "Preferred colour / pattern", "Approximate wall area"],
  },
  "bathroom-tiles": {
    intent: "Bathroom tile selection works best when floor, wall and sanitary choices are considered together rather than separately.",
    prompts: ["Bathroom size", "Floor and wall requirements", "Preferred colour scheme", "Sanitary ware needed as well"],
  },
  "kitchen-tiles": {
    intent: "Kitchen tiles need to work visually with cabinets, worktops and the practical demands of the space.",
    prompts: ["Floor, wall or splash area", "Kitchen colour palette", "Approximate tiled area", "Preferred pattern / finish"],
  },
} as const;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tileCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = tileCategories.find((item) => item.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} in Peshawar`,
    description: `${category.description} Browse guidance from Tile Mart Peshawar and contact the showroom for current availability.`,
    alternates: { canonical: `/tiles/${category.slug}` },
  };
}

export default async function TileCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = tileCategories.find((item) => item.slug === slug);
  if (!category) notFound();
  const details = guidance[category.slug as keyof typeof guidance];

  return (
    <main id="main-content">
      <PageHero
        eyebrow={`${category.name} · Peshawar`}
        title={`${category.name} for real spaces, not just sample boards.`}
        description={category.description}
      />

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">Plan before choosing</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] md:text-5xl">Start with how the room needs to work.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{details.intent}</p>
            <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">
              Tile Mart&apos;s online guide intentionally avoids showing invented stock. Send your requirements to the showroom and ask for current products that fit the application.
            </p>
          </div>
          <div className="tile-sample-light aspect-[4/3] rounded-[2rem] border border-[var(--line)]" aria-hidden="true" />
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">Send these details</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">Make the first message useful.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {details.prompts.map((prompt) => (
              <div key={prompt} className="rounded-2xl border border-[var(--line)] p-6">
                <p className="font-black">{prompt}</p>
              </div>
            ))}
            <a
              href={whatsappHref(`Hello Tile Mart, I am looking for ${category.name.toLowerCase()}. Please share current options and availability.`)}
              target="_blank"
              rel="noreferrer"
              className="sm:col-span-2 rounded-2xl bg-[var(--brand)] p-5 text-center text-sm font-black text-white"
            >
              Ask about {category.name.toLowerCase()} on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <Link href="/tiles" className="text-sm font-black text-[var(--brand)]">← Back to all tile categories</Link>
      </section>

      <ContactPanel title={`Ask Tile Mart about current ${category.name.toLowerCase()}.`} />
    </main>
  );
}
