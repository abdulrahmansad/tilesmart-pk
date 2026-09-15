# Tile Mart Analytics Plan

Analytics should measure useful business outcomes, not collect data for its own sake.

## Recommended launch setup

Use Google Analytics 4 if Tile Mart wants the simplest integration with Google's marketing/search ecosystem. A privacy-focused alternative such as Plausible can be used instead if preferred.

Do **not** hard-code a fake measurement ID. Add the real ID only after the analytics property exists.

## Core conversion events

Track these actions once a production analytics account is connected:

- `whatsapp_click` — visitor opens a Tile Mart WhatsApp enquiry
- `phone_click` — visitor taps the phone number
- `directions_click` — visitor opens showroom directions
- `social_click` — visitor opens Facebook, TikTok or YouTube
- `tile_category_view` — visitor views a floor/wall/bathroom/kitchen tile guide
- `sanitary_view` — visitor views the sanitary-ware section

## Useful dimensions

Where supported, attach only non-sensitive context such as:

- current page
- category slug
- CTA placement (header, hero, content panel, footer)

Never send WhatsApp message text, phone numbers, names or other personal information as analytics event parameters.

## Success metrics

Primary:

1. WhatsApp enquiries
2. Phone calls
3. Directions clicks / showroom intent

Secondary:

- organic-search landing sessions
- tile-category engagement
- mobile vs desktop conversion rate
- top landing pages

Page views alone are not a meaningful business KPI.

## Google Search Console

Search Console should remain separate from analytics. After the final domain is live:

1. verify the domain property;
2. submit `/sitemap.xml`;
3. confirm indexing of the homepage, `/tiles`, tile category pages, `/sanitary-ware`, `/showroom` and `/contact`;
4. monitor queries, pages, countries, devices and indexing problems;
5. do not change copy solely to chase impressions if it damages clarity or accuracy.

## Owner/account requirement

Live implementation is blocked until an analytics property/measurement ID or account authorization exists. The website itself remains fully functional without analytics.
