import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { business } from "@/content/business";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tile Mart Peshawar | Tiles & Sanitary Ware",
    template: "%s | Tile Mart Peshawar",
  },
  description:
    "Explore tiles, wash basins and sanitary ware from Tile Mart in Peshawar. Contact the showroom directly for current designs, sizes and availability.",
  applicationName: "Tile Mart Peshawar",
  category: "Tiles and sanitary ware",
  keywords: [
    "tiles Peshawar",
    "tile shop Peshawar",
    "floor tiles Peshawar",
    "bathroom tiles Peshawar",
    "wall tiles Peshawar",
    "sanitary ware Peshawar",
    "Karkhano Market tiles",
  ],
  openGraph: {
    type: "website",
    siteName: "Tile Mart Peshawar",
    locale: "en_PK",
    title: "Tile Mart Peshawar | Tiles & Sanitary Ware",
    description: "Tiles and sanitary ware in Peshawar. Browse by space and contact Tile Mart for current availability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile Mart Peshawar | Tiles & Sanitary Ware",
    description: "Tiles and sanitary ware in Peshawar. Browse by space and contact Tile Mart for current availability.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f6ea8",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeGoodsStore",
  name: business.displayName,
  url: siteUrl,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coordinates.latitude,
    longitude: business.coordinates.longitude,
  },
  hasMap: business.directionsUrl,
  areaServed: {
    "@type": "City",
    name: "Peshawar",
  },
  sameAs: [business.social.facebook, business.social.tiktok, business.social.youtube],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
