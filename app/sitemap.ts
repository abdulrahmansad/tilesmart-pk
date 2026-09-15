import type { MetadataRoute } from "next";
import { tileCategories } from "@/content/business";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/tiles", "/sanitary-ware", "/about", "/showroom", "/contact"];
  const tilePages = tileCategories.map((category) => `/tiles/${category.slug}`);
  const lastModified = new Date();

  return [...staticPages, ...tilePages].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/tiles" || path === "/sanitary-ware" ? 0.9 : 0.7,
  }));
}
