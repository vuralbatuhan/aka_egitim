import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@heroui/react";
import { getCountryMapConfig } from "@/lib/representatives";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getAllCountrySlugs, getCountryBySlug } from "@/data/countries";
import Link from "next/link";
import { ReactNode } from "react";

// Heavy components'leri lazy load et
const CountryMap = dynamic(() => import("@/components/sections/CountryMap"), {
  loading: () => (
    <div
      className="flex items-center justify-center h-[400px]"
      style={{
        background: "linear-gradient(135deg, #e0f7f5 0%, #f0fdfa 100%)",
      }}
    >
      <div className="text-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
          style={{ borderColor: "var(--primary-dark)" }}
        ></div>
        <p style={{ color: " var(--primary)" }}>Harita yükleniyor...</p>
      </div>
    </div>
  ),
  ssr: true,
});

const ContactForm = dynamic(() => import("@/components/forms/ContactForm"), {
  loading: () => (
    <div
      className="py-12 sm:py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #e0f7f5 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="animate-pulse" style={{ color: "var(--primary-dark)" }}>
          Form yükleniyor...
        </div>
      </div>
    </div>
  ),
  ssr: true,
});

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country } = await params;
  const info = getCountryBySlug(country.toLowerCase());

  if (!info) {
    return { title: "Sayfa Bulunamadı | Aka Eğitim" };
  }

  return {
    title: `${info.title} | Aka Eğitim`,
    description: info.description,
    keywords: [
      `${info.name.toLowerCase()} eğitim danışmanlığı`,
      `${info.name.toLowerCase()} dil okulu`,
      `${info.name.toLowerCase()} üniversite eğitimi`,
      "yurtdışı eğitim danışmanlığı",
      "aka eğitim",
    ],
    alternates: { canonical: `/ulkeler/${country.toLowerCase()}` },
    openGraph: {
      url: `https://akaegitim.com.tr/ulkeler/${country.toLowerCase()}`,
      title: `${info.title} | Aka Eğitim`,
      description: info.description,
      images: [
        {
          url: "https://akaegitim.com.tr/logo.jpg",
          width: 1200,
          height: 630,
          alt: `${info.name} eğitim danışmanlığı`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${info.title} | Aka Eğitim`,
      description: info.description,
      images: ["https://akaegitim.com.tr/logo.jpg"],
    },
  };
}

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ country: slug }));
}

export const revalidate = 3600;

// Icon helper component
const getIcon = (iconName: string) => {
  const icons: Record<string, ReactNode> = {
    users: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    school: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    building: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    calendar: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    star: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  };
  return icons[iconName] || icons.users;
};

export default async function CountryPage({ params }: PageProps) {
  const { country } = await params;
  const info = getCountryBySlug(country.toLowerCase());
  const mapConfig = info ? getCountryMapConfig(info.name) : null;

  if (!info || !mapConfig) {
    notFound();
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: `${info.name} Eğitim Danışmanlığı`,
            provider: {
              "@type": "Organization",
              name: "Aka Eğitim",
              url: "https://akaegitim.com.tr",
              logo: "https://akaegitim.com.tr/logo.jpg",
            },
            areaServed: info.name,
            description: info.description,
            url: `https://akaegitim.com.tr/ulkeler/${country.toLowerCase()}`,
          }),
        }}
      />

      <section
        className="relative min-h-[70vh] overflow-hidden flex items-center"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 40%, var(--primary-light) 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full w-[60%] bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url(${
                info.heroImage ??
                "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1400&q=80"
              })`,
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 55%, transparent 100%)",
            }}
          ></div>

          <div
            className="absolute top-16 right-16 w-[520px] h-[520px] rounded-full blur-3xl animate-float"
            style={{ background: "rgba(255,255,255,0.12)" }}
          ></div>

          <div
            className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl animate-float-slow"
            style={{ background: "rgba(255,255,255,0.08)" }}
          ></div>

          {/* Decorative dots */}
          <div className="absolute top-24 right-[18%] w-3 h-3 bg-white/40 rounded-full animate-float-reverse"></div>
          <div className="absolute top-48 left-[25%] w-4 h-4 bg-white/30 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-[35%] w-2 h-2 bg-white/25 rounded-full animate-float-slow"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-24">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full mb-8 border border-white/30 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold tracking-wide">
                {info.name} Eğitim Fırsatları
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
            >
              {info.title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed mb-12">
              {info.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Link href="#contact-form">
                <Button
                  size="lg"
                  className="font-bold shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 px-10 py-7 text-lg rounded-xl"
                  style={{ background: "white", color: "var(--primary-dark)" }}
                >
                  Ücretsiz Danışmanlık Al
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Button>
              </Link>

              <a href="tel:+902123456789">
                <Button
                  size="lg"
                  className="backdrop-blur-md border-2 text-white font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 px-10 py-7 text-lg rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "2px solid rgba(255,255,255,0.35)",
                  }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Hemen Arayın
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {info.statistics.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                style={{ border: "1px solid #e0f7f5" }}
              >
                <div className="relative z-10">
                  <div
                    className="flex justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ color: "var(--primary)" }}
                  >
                    {getIcon(stat.icon)}
                  </div>
                  <div
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Programs Section */}
      {info.languagePrograms && info.languagePrograms.length > 0 && (
        <section
          className="py-16 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #e0f7f5 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
                style={{ background: "#e0f7f5", color: "var(--primary)" }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Dil Eğitimi
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: "var(--primary)" }}
              >
                Dil Programları
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                {info.name} dilini öğrenmek için özel hazırlanmış programlarımız
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {info.languagePrograms.map((program, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ border: "1px solid #d1fae5" }}
                >
                  {/* Top gradient bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 60%, var(--primary-light) 40%)",
                    }}
                  ></div>

                  <div className="flex items-start gap-5">
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--primary-dark), var(--primary)",
                      }}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {program.name}
                      </h3>
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-3"
                        style={{
                          background: "#e0f7f5",
                          color: "var(--primary",
                        }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {program.duration}
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
              style={{ background: "#e0f7f5", color: " var(--primary)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Avantajlarımız
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: " var(--primary)" }}
            >
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Yıllara dayanan tecrübemiz ve başarı hikayelerimizle yanınızdayız
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {info.whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                style={{ borderLeft: "4px solid var(--primary)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1 font-medium group-hover:text-gray-900 transition-colors">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-light) 100%)",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4 text-sm font-semibold border border-white/30">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Profesyonel Hizmetler
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
            >
              Hizmetlerimiz
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              A&apos;dan Z&apos;ye tüm eğitim sürecinizde yanınızdayız
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {info.services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-5 bg-white/15 backdrop-blur-md rounded-xl hover:bg-white/25 transition-all duration-300 border border-white/25 hover:border-white/40 hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 w-3 h-3 bg-white/80 rounded-full group-hover:scale-150 group-hover:bg-white transition-all duration-300"></div>
                <svg
                  className="w-5 h-5 text-white/80 flex-shrink-0 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-white font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life in Country Section */}
      <section
        className="py-16 relative"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f0fdfa 50%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
              style={{ background: "#e0f7f5", color: " var(--primary)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Yaşam Rehberi
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: " var(--primary)" }}
            >
              {info.name}&apos;da Yaşam
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Eğitim hayatınız boyunca sizi bekleyen yaşam koşulları
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Aylık Maliyet",
                value: info.lifeInCountry.cost,
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                label: "Dil",
                value: info.lifeInCountry.language,
                icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
              },
              {
                label: "İklim",
                value: info.lifeInCountry.climate,
                icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
              },
              {
                label: "Kültür",
                value: info.lifeInCountry.culture,
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ border: "1px solid #d1fae5" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--primary-dark),  var(--primary))",
                    }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider mb-2"
                    style={{ color: " var(--primary)" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-gray-900 font-semibold text-lg leading-snug">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      {info.universities && info.universities.length > 0 && (
        <section
          className="py-16 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #e0f7f5 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
                style={{ background: "#e0f7f5", color: " var(--primary)" }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Partner Kurumlar
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: " var(--primary)" }}
              >
                Partner Üniversitelerimiz
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                {info.name}&apos;nın en prestijli eğitim kurumlarıyla iş
                birliğimiz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {info.universities.map((uni, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                  style={{ border: "1px solid #d1fae5" }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--primary-dark),  var(--primary))",
                      }}
                    >
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                        {uni.name}
                      </h3>
                      <div
                        className="flex items-center gap-1.5"
                        style={{ color: "var(--primary-dark)" }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-sm font-medium">{uni.city}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {uni.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f0fdfa 50%, #e0f7f5 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
              style={{ background: "#e0f7f5", color: " var(--primary)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Türkiye Geneli Hizmet
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: " var(--primary)" }}
            >
              Bölgesel Temsilcilerimiz
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Türkiye&apos;nin her yerinden bize kolayca ulaşabilirsiniz
            </p>
          </div>

          <div
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 overflow-hidden"
            style={{ border: "1px solid #d1fae5" }}
          >
            <div
              className="mb-8 p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #e0f7f5 0%, #f0fdfa 100%)",
                border: "1px solid #a7f3d0",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                  }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4
                    className="font-bold mb-2 text-lg"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    Nasıl Kullanılır?
                  </h4>
                  <p style={{ color: "var(--primary-dark)" }}>
                    Harita üzerindeki bölgelerin üzerine gelerek bölge adını
                    görebilir, tıklayarak o bölgedeki temsilcilerimizin iletişim
                    bilgilerini görüntüleyebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "#f0fdfa", border: "1px solid #d1fae5" }}
            >
              <CountryMap config={mapConfig} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-light) 100%)",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full mb-6 text-sm font-semibold border border-white/30">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Hemen Başvurun
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
            style={{ textShadow: "0 2px 15px rgba(0,0,0,0.2)" }}
          >
            Hayalinizdeki Eğitime Bir Adım Kaldı!
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
            {info.name} eğitim yolculuğunuza bugün başlayın. Uzman ekibimiz size
            özel çözümler sunmaya hazır.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/iletisim">
              <Button
                size="lg"
                className="font-bold shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 px-10 py-7 text-lg rounded-xl"
                style={{ background: "white", color: "var(--primary-dark)" }}
              >
                <span>Hemen Başvur</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
            </Link>
            <a href="tel:+902123456789">
              <Button
                size="lg"
                className="backdrop-blur-md border-2 text-white font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 px-10 py-7 text-lg rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Bizi Arayın</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact-form">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
