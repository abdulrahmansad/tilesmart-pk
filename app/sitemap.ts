import type { MetadataRoute } from "next";
import { tileCategories } from "@/content/business";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/tiles", "/sanitary-ware", "/about", "/showroom", "/contact"];
  const tilePages = tileCategories.map((category) => `/tiles/${category.slug}`);

  return [...staticPages, ...tilePages].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/tiles" || path === "/sanitary-ware" ? 0.9 : 0.7,
  }));
}
