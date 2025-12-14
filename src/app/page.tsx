import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import EducationalDestinations from "@/components/sections/EducationalDestinations";
import Benefits from "@/components/sections/Benefits";
import Features from "@/components/sections/Features";
import Programs from "@/components/sections/Programs";
// import PopularCountries from '@/components/sections/PopularCountries'
import ValuesBanner from "@/components/sections/ValuesBanner";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// Heavy components'leri lazy load et (SEO için SSR korunuyor)
const RepresentativesMapDB = dynamic(
  () => import("@/components/sections/RepresentativesMapDB"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-[600px] bg-gradient-to-br from-gray-50 via-white to-primary/5">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Harita yükleniyor...</p>
        </div>
      </div>
    ),
    ssr: true, // SEO için SSR aktif
  }
);

const WorldGlobe = dynamic(
  () => import("@/components/sections/WorldGlobe"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-[600px] bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-white/70">Dünya küresi yükleniyor...</p>
        </div>
      </div>
    ),
  }
);

const ContactForm = dynamic(() => import("@/components/forms/ContactForm"), {
  loading: () => (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="animate-pulse text-gray-400">Form yükleniyor...</div>
      </div>
    </div>
  ),
  ssr: true, // SEO için SSR aktif
});

export const metadata: Metadata = {
  title: "Aka Eğitim - Yurtdışı Eğitim Danışmanlığı | Dil Okulu, Üniversite, Yüksek Lisans",
  description:
    "✓ Aka Eğitim ile yurtdışı dil okulu, üniversite ve yüksek lisans programlarına başvurun. İngiltere, Almanya, Malta, İtalya'da eğitim fırsatları. ✓ Ücretsiz danışmanlık ✓ 50+ ülke ✓ 500+ okul",
  keywords: [
    "aka eğitim",
    "aka egitim",
    "yurtdışı eğitim",
    "yurt dışı eğitim",
    "yurtdışı dil okulu",
    "dil okulu danışmanlığı",
    "yurtdışı üniversite",
    "yurt dışı üniversite",
    "yurtdışı yüksek lisans",
    "yabancı dil kursu",
    "work and study",
    "ingiltere dil okulu",
    "almanya dil okulu",
    "malta dil okulu",
    "italya dil okulu",
    "yurtdışı eğitim danışmanı",
    "yurtdışı eğitim ajansı",
  ],
  alternates: {
    canonical: "https://akaegitim.com.tr/",
  },
  openGraph: {
    url: "https://akaegitim.com.tr/",
    title: "Aka Eğitim - Yurtdışı Eğitim Danışmanlığı | 50+ Ülke, 500+ Okul",
    description:
      "Yurtdışı dil okulu, üniversite, yüksek lisans programları için profesyonel danışmanlık. Ücretsiz danışmanlık için hemen başvurun!",
    images: [
      {
        url: "https://akaegitim.com.tr/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aka Eğitim - Yurtdışı Eğitim Danışmanlığı",
      },
    ],
    type: "website",
    locale: "tr_TR",
    siteName: "Aka Eğitim",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aka Eğitim - Yurtdışı Eğitim Danışmanlığı",
    description:
      "Yurtdışı dil okulu, üniversite ve yüksek lisans programları. 50+ ülke, 500+ okul. Ücretsiz danışmanlık!",
    images: ["https://akaegitim.com.tr/logo.jpg"],
  },
};

export const revalidate = 3600; // 1 saat

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EducationalDestinations />
      <WorldGlobe />
      <RepresentativesMapDB />
      {/* <Benefits /> */}
      {/* <Features /> */}
      {/* <Programs /> */}
      {/* <PopularCountries /> */}
      <ValuesBanner />

      <CTA />
      <ContactForm />
      <Footer />

      {/* SEO - Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Aka Egitim nedir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aka Egitim, yurtdisi dil okulu, universite, yuksek lisans ve work and study programlari icin profesyonel egitim danismanligi hizmeti sunan guvenilir bir egitim ajansidir. 50'den fazla ulkede 500'den fazla okulla calismaktayiz."
                }
              },
              {
                "@type": "Question",
                "name": "Hangi ulkelere egitim programlari sunuyorsunuz?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ingiltere, Almanya, Italya, Malta, Finlandiya, Belcika, Hollanda, Kazakistan, Ispanya, Isvec, Amerika, Kanada, Avustralya ve 50'den fazla ulkede dil okulu ve universite egitim programlari sunuyoruz."
                }
              },
              {
                "@type": "Question",
                "name": "Dil okulu danismanligi ucretsiz mi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet, Aka Egitim olarak size tamamen ucretsiz danismanlik hizmeti sunuyoruz. Ulke secimi, okul onerileri, basvuru sureci ve vize islemlerinde size rehberlik ediyoruz."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://akaegitim.com.tr/"
              }
            ]
          })
        }}
      />
    </main>
  );
}
