import { business } from "@/content/business";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const phoneHref = `tel:${business.phone.replace(/[^+\d]/g, "")}`;

export function whatsappHref(message = "Hello Tile Mart, I would like to ask about your tiles and sanitary products.") {
  return `https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
