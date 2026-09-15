import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tile Mart Peshawar | Tiles & Sanitary Ware",
    template: "%s | Tile Mart Peshawar",
  },
  description:
    "Discover tiles and sanitary ware from Tile Mart in Peshawar. Explore product categories, contact the showroom, or enquire directly on WhatsApp.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
