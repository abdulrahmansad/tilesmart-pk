# ARCHITECTURE

## Stack
- Next.js with App Router
- TypeScript
- Tailwind CSS
- Static-first rendering where possible
- Minimal client-side JavaScript
- No database required for V1

## Planned routes
- `/` — Home
- `/tiles` — Tile category hub
- `/tiles/[slug]` — Tile category/detail landing pages as content becomes available
- `/sanitary` — Sanitary ware hub
- `/about` — Business/about page
- `/showroom` — Location, directions, contact and visit information
- `/contact` — Contact/enquiry page

Avoid thin SEO pages. A route should exist only when it provides distinct user value and credible content.

## Core components
- Header / mobile navigation
- Hero
- Product-category cards
- Product/gallery grid
- WhatsApp CTA
- Phone CTA
- Showroom/directions CTA
- Trust/content sections
- Social proof section only when real proof exists
- Footer with NAP/contact consistency

## Data model
Use typed local content objects for V1. Keep product/category content separated from presentation so the site can later migrate to a CMS without a rewrite.

## SEO
- Unique titles and descriptions
- Canonicals
- Open Graph and social metadata
- `sitemap.xml`
- `robots.txt`
- structured data using the most accurate applicable schema
- semantic heading hierarchy
- descriptive internal linking
- useful image alt text
- local entity consistency
- no keyword stuffing or doorway pages

## Performance
- Responsive images
- Next image optimization where appropriate
- local/system fonts or optimized web fonts
- reserve image dimensions to reduce layout shift
- avoid heavy animation libraries unless justified
- lazy-load non-critical media
- target excellent Core Web Vitals on real mobile devices

## Accessibility
- Semantic HTML
- Keyboard usable navigation
- Visible focus states
- Sufficient contrast
- Reduced-motion handling
- Form labels and meaningful accessible names
- Decorative images excluded from the accessibility tree

## Analytics readiness
Prepare integration points for Google Search Console and privacy-conscious analytics. Do not hard-code unverifiable tracking IDs.

## Deployment
Keep the app compatible with Vercel and standard Node deployments. Deployment-specific configuration should stay minimal and documented.
