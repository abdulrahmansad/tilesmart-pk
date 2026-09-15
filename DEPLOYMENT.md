# Deployment & Launch

The application is a standard Next.js site and can be deployed to Vercel, Cloudflare, or another Node-compatible platform. Vercel is the simplest default unless the owner chooses another host.

## Required production setting

Set:

```bash
NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN
```

Use the exact canonical HTTPS origin with no trailing slash.

## Pre-deploy checks

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

All must pass.

## DNS / domain

The final domain has not been supplied yet. Do not hard-code or publish an invented Tile Mart domain.

Once a domain is chosen:

1. Add it to the hosting provider.
2. Configure DNS exactly as the provider requests.
3. Make the preferred hostname canonical (either apex or `www`).
4. Redirect the non-preferred hostname to the preferred one.
5. Confirm HTTPS is active.
6. Set `NEXT_PUBLIC_SITE_URL` to that canonical origin and redeploy.

## Search launch

After production is live:

1. Open `/robots.txt` and verify the sitemap URL uses the production domain.
2. Open `/sitemap.xml` and verify all URLs use the production domain.
3. Test homepage and each core page on mobile.
4. Validate structured data with Google's Rich Results Test / Schema Markup Validator.
5. Create/verify Google Search Console property.
6. Submit `/sitemap.xml`.
7. Add the website to Tile Mart's Google Business Profile and social profiles.
8. Keep NAP (name, address, phone) identical across important listings.

## Owner-only information still useful after launch

The site can launch without these, but should be updated when confirmed:

- Opening hours
- Final domain
- Business email if one is created
- Real product/showroom photography
- Exact stocked brands
- Any confirmed delivery, installation, trade or warranty policies
