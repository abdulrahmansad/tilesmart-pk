# Tile Mart Peshawar

Official website project for **Tile Mart**, a tiles and sanitary-ware business in Peshawar, Pakistan.

## Business baseline

- Brand: Tile Mart
- Market-facing name: Tile Mart Peshawar
- Main category: tiles
- Additional categories: sanitary ware, wash basins, bathroom sets
- Showroom: Shops 24–27, Block B, Jan Plaza, Karkhano Market, Peshawar 25000, Pakistan
- Phone: +92 343 5511501
- WhatsApp: +92 333 9377919
- TikTok: https://www.tiktok.com/@tilesmartpk
- YouTube: https://www.youtube.com/@tilemartpeshawar9290/featured
- Facebook: https://www.facebook.com/profile.php?id=100063740152580
- Directions: https://share.google/1l9C81NCHb86DDrYF

## Product goal

A fast, mobile-first commercial website focused on three outcomes:

1. help Peshawar customers understand what Tile Mart deals in;
2. make tiles and sanitary products easier to browse by use case;
3. convert visitors into WhatsApp enquiries, phone calls and showroom visits.

The site deliberately avoids a fake stock catalogue. Brands, prices, exact products, opening hours and policies are published only when verified.

## Core routes

- `/` — main Tile Mart landing page
- `/tiles` — tile category hub
- `/tiles/floor-tiles`
- `/tiles/wall-tiles`
- `/tiles/bathroom-tiles`
- `/tiles/kitchen-tiles`
- `/sanitary-ware`
- `/about`
- `/showroom`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`

## Stack

- Next.js 16
- React 19
- TypeScript 6
- Tailwind CSS 4
- GitHub Actions CI

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Production environment

Set the final site origin before deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN
```

Do not leave the localhost fallback in production.

## Project documentation

- `PROJECT.md` — product scope
- `ARCHITECTURE.md` — technical architecture
- `ROADMAP.md` — phase plan
- `TASKS.md` — execution checklist
- `DECISIONS.md` — durable decisions
- `RESEARCH.md` — public business and market research
- `SEO.md` — local/search strategy
- `DEPLOYMENT.md` — launch instructions

## Accuracy rule

Do **not** publish unverified business claims. Unknown brands, prices, opening hours, warranties, stock levels, delivery/installation policies, founding history and similar claims remain unconfirmed until supported by the owner or a reliable first-party source.
