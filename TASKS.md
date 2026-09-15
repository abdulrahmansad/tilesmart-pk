# TASKS

This is the execution source of truth. Keep it current as work is completed.

## Phase 0 — Foundation
- [x] Confirm official brand name: Tile Mart
- [x] Establish project brief
- [x] Establish architecture
- [x] Establish roadmap
- [x] Add autonomous `/continue` workflow for optional agent use
- [x] Add specialist review-agent guidance

## Phase 1 — Research and content
- [x] Audit accessible public business information and owner-provided sources
- [x] Build `content/business.ts` using verified/high-confidence facts only
- [x] Create local competitor/search-intent research notes
- [x] Define initial product/category taxonomy without inventing live stock
- [x] Document facts/assets that must not be invented (`RESEARCH.md`)

## Phase 2 — Application foundation
- [x] Initialize Next.js + TypeScript + Tailwind
- [x] Configure linting and TypeScript compatibility
- [x] Add responsive global design tokens
- [x] Add the owner-supplied Tile Mart logo asset and brand treatment
- [x] Build accessible responsive header/mobile navigation
- [x] Build footer and persistent conversion actions

## Phase 3 — Core experience
- [x] Build homepage
- [x] Build tiles hub
- [x] Build floor/wall/bathroom/kitchen tile landing pages
- [x] Build sanitary ware hub
- [x] Build about page
- [x] Build showroom page with map/directions
- [x] Build contact page
- [x] Build reusable page hero, contact, header, footer and category patterns
- [x] Add truthful empty-state/content strategy instead of fake inventory
- [ ] BLOCKED(owner): replace abstract tile/product visuals with real Tile Mart product/showroom photography when real assets are available

## Phase 4 — SEO and conversion
- [x] Add per-page metadata
- [x] Add canonical strategy
- [x] Add sitemap
- [x] Add robots.txt
- [x] Add accurate local-business structured data
- [x] Add WhatsApp enquiry flows
- [x] Add phone and directions flows
- [x] Add social links
- [x] Add generated Open Graph social preview
- [x] Audit internal linking with automated crawler

## Phase 5 — Verification
- [x] Typecheck passes in GitHub Actions
- [x] Lint passes in GitHub Actions
- [x] Production build passes in GitHub Actions
- [x] Automated core-route smoke tests pass
- [x] Automated internal broken-link crawl passes
- [x] Responsive implementation review completed for core layouts/navigation
- [x] Accessibility code review: semantic structure, keyboard focus, skip link, reduced motion, descriptive labels
- [x] SEO/content-integrity review: unverified claims are explicitly excluded
- [ ] Performance/Lighthouse audit on production-equivalent deployment

## Phase 6 — Launch readiness
- [x] Document deployment steps
- [x] Document domain/DNS assumptions
- [x] Prepare Search Console setup checklist
- [ ] Prepare analytics implementation checklist
- [x] Explicitly document owner-only blockers
- [ ] Final production review after a deployable preview/production URL exists

## Owner-only blockers

These do **not** block continued code work, but they limit what can truthfully be published or measured:

- `BLOCKED(owner):` final website domain / canonical production URL
- `BLOCKED(owner):` hosting/deployment account authorization if deployment is performed outside GitHub Actions
- `BLOCKED(owner):` confirmed business opening hours
- `BLOCKED(owner):` real showroom/product photography and any current catalogue
- `BLOCKED(owner):` exact stocked brands, prices, warranties, delivery/installation/trade policies if the site should claim them
- `BLOCKED(owner):` analytics/Search Console account IDs or authorization for live setup

## Completion rule

Do not mark the project complete just because pages render. Completion requires all independent quality gates to pass. Owner-only items remain clearly blocked rather than guessed. The final production review, real performance measurement and search/analytics account setup happen only after a real deployment URL/account authorization exists.
