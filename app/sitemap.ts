import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

const staticRoutes: { url: string; lastModified?: string; changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"; priority?: number }[] = [
  { url: "", changeFrequency: "weekly", priority: 1 },
  { url: "/hakkimizda", changeFrequency: "monthly", priority: 0.9 },
  { url: "/kurucumuz-kimdir", changeFrequency: "monthly", priority: 0.8 },
  { url: "/nicin-kurduk", changeFrequency: "monthly", priority: 0.9 },
  { url: "/ne-yapmak-istiyoruz", changeFrequency: "monthly", priority: 0.9 },
  { url: "/dil-egitimi", changeFrequency: "weekly", priority: 0.9 },
  { url: "/dil-okullari", changeFrequency: "weekly", priority: 0.9 },
  { url: "/dil-okullari/finlandiya", changeFrequency: "weekly", priority: 0.8 },
  { url: "/universite", changeFrequency: "weekly", priority: 0.9 },
  { url: "/universite/finlandiya", changeFrequency: "weekly", priority: 0.8 },
  { url: "/universite/ingiltere", changeFrequency: "weekly", priority: 0.8 },
  { url: "/universite/italya", changeFrequency: "weekly", priority: 0.8 },
  { url: "/ogretmen-hareketliligi", changeFrequency: "weekly", priority: 0.9 },
  { url: "/ogretmen-hareketliligi/finlandiya", changeFrequency: "weekly", priority: 0.8 },
  { url: "/ogretmen-hareketliligi/belcika", changeFrequency: "weekly", priority: 0.8 },
  { url: "/ogretmen-hareketliligi/isvicre", changeFrequency: "weekly", priority: 0.8 },
  { url: "/programlar", changeFrequency: "weekly", priority: 0.9 },
  { url: "/iletisim", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url.replace(/\/$/, "");
  return staticRoutes.map((route) => ({
    url: route.url ? `${base}${route.url}` : base,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority ?? 0.7,
  }));
}
