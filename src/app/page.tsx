import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
// import EducationalDestinations from "@/components/sections/EducationalDestinations";
// import Benefits from "@/components/sections/Benefits";
// import Features from "@/components/sections/Features";
// import Programs from "@/components/sections/Programs";
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

// const WorldGlobe = dynamic(() => import("@/components/sections/WorldGlobe"), {
//   loading: () => (
//     <div className="flex items-center justify-center h-[600px] bg-gradient-to-br from-gray-900 to-gray-800">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//         <p className="text-white/70">Dünya küresi yükleniyor...</p>
//       </div>
//     </div>
//   ),
// });

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
  title:
    "AKA Eğitim - Öğretmen Rehberliğinde Yurtdışı Eğitim | Dil Okulu, Üniversite, Yüksek Lisans",
  description:
    "AKA Eğitim - Ayhan KORKMAZ Akademi. Öğretmen rehberliğinde yurtdışı dil okulu, üniversite ve yüksek lisans programları. Evden havalimanına öğretmen eşliği. ✓ 50+ ülke ✓ 500+ okul ✓ Azim, Kararlılık, Ayrıcalık",
  keywords: [
    "aka eğitim",
    "aka egitim",
    "akaegitim",
    "aka eğitim danışmanlık",
    "aka egitim danışmanlık",
    "aka eğitim yurtdışı",
    "aka egitim yurtdışı",
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
    "finlandiya dil okulu",
    "yurtdışı eğitim danışmanı",
    "yurtdışı eğitim ajansı",
  ],
  alternates: {
    canonical: "https://www.akaegitim.com.tr/",
  },
  openGraph: {
    url: "https://www.akaegitim.com.tr/",
    title:
      "AKA Eğitim - Öğretmen Rehberliğinde Yurtdışı Eğitim | 50+ Ülke, 500+ Okul",
    description:
      "Öğretmen rehberliğinde yurtdışı dil okulu, üniversite, yüksek lisans programları. Evden havalimanına öğretmen eşliği ile güvenli eğitim yolculuğu!",
    images: [
      {
        url: "https://www.akaegitim.com.tr/logo.jpg",
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
    images: ["https://www.akaegitim.com.tr/logo.jpg"],
  },
};

export const revalidate = 3600; // 1 saat

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <WorldGlobe /> */}
      {/* <EducationalDestinations /> */}
      <RepresentativesMapDB />
      {/* <Benefits /> */}
      {/* <Features /> */}
      {/* <Programs /> */}
      {/* <PopularCountries /> */}
      <ValuesBanner />

      <CTA />
      <ContactForm />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Aka Eğitim nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aka Eğitim (aka egitim), yurtdışı dil okulu, üniversite, yüksek lisans ve work and study programları için profesyonel eğitim danışmanlığı hizmeti sunan güvenilir bir eğitim ajansıdır. 50'den fazla ülkede 500'den fazla okulla çalışmaktayız.",
                },
              },
              {
                "@type": "Question",
                name: "Aka Egitim hangi ülkelere eğitim programları sunuyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aka Eğitim olarak İngiltere, Almanya, İtalya, Malta, Finlandiya, İsviçre, Belçika, Hollanda, Kazakistan, İspanya, İsveç, Amerika, Kanada, Avustralya ve 50'den fazla ülkede dil okulu ve üniversite eğitim programları sunuyoruz.",
                },
              },
              {
                "@type": "Question",
                name: "Aka Eğitim danışmanlığı ücretli mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır, Aka Eğitim (aka egitim) olarak size tamamen ücretsiz danışmanlık hizmeti sunuyoruz. Ülke seçimi, okul önerileri, başvuru süreci ve vize işlemlerinde size rehberlik ediyoruz.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Ana Sayfa",
                item: "https://www.akaegitim.com.tr/",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
