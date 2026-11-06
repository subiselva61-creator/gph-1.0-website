import type { MetadataRoute } from "next";
import { siteConfig, sitePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitePages.map((page) => ({
    url: new URL(page.href, siteConfig.url).toString(),
    lastModified,
    changeFrequency: page.href === "/" || page.href === "/book" ? "weekly" : "monthly",
    priority: page.href === "/" ? 1 : page.href === "/book" ? 0.8 : 0.6,
  }));
}
