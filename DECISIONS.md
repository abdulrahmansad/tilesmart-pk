# DECISIONS

## D-001 — Official brand name
**Decision:** Use `Tile Mart` as the official business name. `tilesmart-pk` is only the repository name.

## D-002 — V1 conversion model
**Decision:** Build a lead-generation/catalogue website rather than an e-commerce checkout. Primary conversions are WhatsApp, phone calls, and showroom visits.

## D-003 — Technical stack
**Decision:** Use Next.js App Router + TypeScript + Tailwind CSS with a static-first architecture and no database for V1.

**Why:** The site is content/catalogue focused, needs excellent performance/SEO, and does not currently require transactional state or admin workflows.

## D-004 — Content truth policy
**Decision:** Never invent brands, prices, opening hours, stock, warranties, delivery claims, awards, customer counts, reviews, years in business, or product availability.

**Why:** False commercial claims damage trust and local SEO quality. Unknown facts stay omitted or explicitly unverified.

## D-005 — SEO approach
**Decision:** Target real user intent and local relevance with high-quality category/location content. Do not create thin doorway pages or keyword-stuffed copy.

## D-006 — Images
**Decision:** Prefer real Tile Mart showroom/product photography when available. Temporary visual treatments must not masquerade as actual Tile Mart inventory.

## D-007 — Internationalization
**Decision:** Ship English-first in V1 while keeping content/data structures compatible with Urdu and Pashto expansion.

## D-008 — Continuous project command
**Decision:** Add a project-level OpenCode `/continue` command. It must inspect the source-of-truth docs, select the highest-value unfinished task, implement and verify it, update status, and immediately continue with the next task. It may stop only when the backlog is complete, a genuine owner-only blocker prevents all remaining work, or continuing would risk destructive/unsafe changes.
