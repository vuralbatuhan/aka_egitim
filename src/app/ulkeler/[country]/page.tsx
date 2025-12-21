import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@heroui/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllCountrySlugs,
  getCountryBySlug,
  getAvailableEducationTypes,
} from "@/data/countries";
import Link from "next/link";
import { ReactNode } from "react";

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
    title: `${info.overview.title} | Aka Eğitim`,
    description: info.overview.description,
    keywords: [
      `${info.name.toLowerCase()} eğitim danışmanlığı`,
      `${info.name.toLowerCase()} dil okulu`,
      `${info.name.toLowerCase()} üniversite eğitimi`,
      "yurtdışı eğitim danışmanlığı",
      "aka eğitim",
    ],
    alternates: { canonical: `/ulkeler/${country.toLowerCase()}` },
    openGraph: {
      url: `https://www.akaegitim.com.tr/ulkeler/${country.toLowerCase()}`,
      title: `${info.overview.title} | Aka Eğitim`,
      description: info.overview.description,
      images: [
        {
          url: "https://www.akaegitim.com.tr/logo.jpg",
          width: 1200,
          height: 630,
          alt: `${info.name} eğitim danışmanlığı`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${info.overview.title} | Aka Eğitim`,
      description: info.overview.description,
      images: ["https://www.akaegitim.com.tr/logo.jpg"],
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

export default async function CountryOverviewPage({ params }: PageProps) {
  const { country } = await params;
  const info = getCountryBySlug(country.toLowerCase());
  const availableEducationTypes = info
    ? getAvailableEducationTypes(country.toLowerCase())
    : [];

  if (!info) {
    notFound();
  }

  const { overview } = info;

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
              url: "https://www.akaegitim.com.tr",
              logo: "https://www.akaegitim.com.tr/logo.jpg",
            },
            areaServed: info.name,
            description: overview.description,
            url: `https://www.akaegitim.com.tr/ulkeler/${country.toLowerCase()}`,
          }),
        }}
      />

      {/* Hero Section */}
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
                overview.heroImage ??
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {info.name}
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 opacity-90">
                Eğitim Danışmanlığı
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              {overview.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#egitim-turleri">
                <Button
                  size="lg"
                  style={{
                    background: "white",
                    color: "var(--primary-dark)",
                    fontWeight: "600",
                  }}
                  className="hover:scale-105 transition-transform"
                >
                  Eğitim Türlerini Keşfet
                </Button>
              </Link>
              <Link href="#iletisim">
                <Button
                  size="lg"
                  variant="bordered"
                  style={{
                    borderColor: "white",
                    color: "white",
                    fontWeight: "600",
                  }}
                  className="hover:bg-white/10 transition-all"
                >
                  İletişime Geç
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {overview.statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow group"
              >
                <div
                  className="flex justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ color: "var(--primary)" }}
                >
                  {getIcon(stat.icon)}
                </div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--primary-dark)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Types Section */}
      <section
        id="egitim-turleri"
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #e0f7f5 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--primary-dark)" }}
            >
              {info.name} Eğitim Programları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {info.name}&apos;da sunduğumuz çeşitli eğitim programlarını
              keşfedin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableEducationTypes
              // Geçici olarak Yüksek Lisans ve Doktora programlarını gizle
              .filter((type) => type.key !== 'mastersDegree' && type.key !== 'doctorate')
              .map((type, index) => {
              const typeData = info[
                type.key as keyof typeof info
              ] as unknown as { description: string };
              if (!typeData) return null;

              // Icon belirleme
              const typeIcons: Record<string, ReactNode> = {
                languageSchool: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                ),
                university: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                ),
                // mastersDegree: (
                //   <svg
                //     className="w-12 h-12"
                //     fill="none"
                //     stroke="currentColor"
                //     viewBox="0 0 24 24"
                //   >
                //     <path
                //       strokeLinecap="round"
                //       strokeLinejoin="round"
                //       strokeWidth={2}
                //       d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                //     />
                //   </svg>
                // ),
                // doctorate: (
                //   <svg
                //     className="w-12 h-12"
                //     fill="none"
                //     stroke="currentColor"
                //     viewBox="0 0 24 24"
                //   >
                //     <path
                //       strokeLinecap="round"
                //       strokeLinejoin="round"
                //       strokeWidth={2}
                //       d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                //     />
                //   </svg>
                // ),
                teacherPrograms: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              };

              return (
                <Link
                  key={index}
                  href={`/ulkeler/${country}/${type.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                    <div
                      className="mb-6 group-hover:scale-110 transition-transform"
                      style={{ color: "var(--primary)" }}
                    >
                      {typeIcons[type.key]}
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: "var(--primary-dark)" }}
                    >
                      {type.name}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {typeData.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform">
                      <span style={{ color: "var(--primary)" }}>
                        Detaylı Bilgi
                      </span>
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--primary-dark)" }}
            >
              Neden {info.name}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overview.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{ background: "var(--primary)" }}
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
                <p className="text-gray-700 font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life in Country Section */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              {info.name}&apos;da Yaşam
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Yaşam Maliyeti</h3>
              <p className="text-white/90">{overview.lifeInCountry.cost}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold mb-2">Dil</h3>
              <p className="text-white/90">{overview.lifeInCountry.language}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🌤️</div>
              <h3 className="text-xl font-bold mb-2">İklim</h3>
              <p className="text-white/90">{overview.lifeInCountry.climate}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold mb-2">Kültür</h3>
              <p className="text-white/90">{overview.lifeInCountry.culture}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="iletisim"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: "var(--primary-dark)" }}
          >
            {info.name} Eğitim Hayalinizi Gerçeğe Dönüştürün
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Uzman ekibimiz, {info.name} eğitim yolculuğunuzda size rehberlik
            etmeye hazır. Hemen iletişime geçin, ücretsiz danışmanlık hizmeti
            alın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim">
              <Button
                size="lg"
                style={{
                  background: "var(--primary)",
                  color: "white",
                  fontWeight: "600",
                }}
                className="hover:scale-105 transition-transform"
              >
                Ücretsiz Danışmanlık Al
              </Button>
            </Link>
            <Link href="tel:+902129999999">
              <Button
                size="lg"
                variant="bordered"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--primary)",
                  fontWeight: "600",
                }}
              >
                Hemen Ara
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
