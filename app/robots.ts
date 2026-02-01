import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const base = SITE_CONFIG.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/aka-2026-admin/", "/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
