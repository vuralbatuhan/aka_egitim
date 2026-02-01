import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "AKA Eğitim - Anadolu",
  shortName: "AKA Eğitim",
  description:
    "AKA Eğitim; öğretmenlerin kurduğu, yurtdışı dil eğitimi, üniversite danışmanlığı ve öğretmen hareketliliği programları sunan eğitim oluşumu. Öğretmen güvenirliği ile yurtdışı hedeflerinizi gerçekleştirin.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aka-omervordexs-projects.vercel.app",
  locale: "tr_TR",
  ogImage: "/images/baskl.png",
} as const;

export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  image,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
}): Metadata {
  const fullTitle = title.includes(SITE_CONFIG.shortName) ? title : `${title} | ${SITE_CONFIG.shortName}`;
  const canonicalUrl = path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url;
  const ogImageUrl = image ? `${SITE_CONFIG.url}${image}` : `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    keywords: [
      "yurtdışı eğitim",
      "dil okulu",
      "üniversite danışmanlığı",
      "öğretmen hareketliliği",
      "AKA Eğitim",
      "yurtdışı dil eğitimi",
      "Finlandiya dil okulu",
      "İngiltere üniversite",
    ],
  };
}
