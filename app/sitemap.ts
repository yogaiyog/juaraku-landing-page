import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}`])
  ) as Record<string, string>;

  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: lang === "id" ? 1 : 0.9,
    alternates: { languages },
  }));
}
