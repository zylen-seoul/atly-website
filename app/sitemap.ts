import type { MetadataRoute } from "next";
import { locales } from "@/lib/content";

const siteUrl = "https://atly.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "ko" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(locales.map((item) => [item, `${siteUrl}/${item}`]))
    }
  }));
}
