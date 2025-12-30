import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@heroui/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCountryBySlug } from "@/data/countries";
import Link from "next/link";
import HighlightText from "@/components/ui/HighlightText";

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country } = await params;
  const info = getCountryBySlug(country.toLowerCase());

  if (!info?.teacherPrograms) {
    return { title: "Sayfa Bulunamadı | Aka Eğitim" };
  }

  return {
    title: `${info.teacherPrograms.title} | Aka Eğitim`,
    description: info.teacherPrograms.description,
    keywords: [
      `${info.name.toLowerCase()} öğretmen eğitimi`,
      `${info.name.toLowerCase()} öğretmenlik`,
      "yurtdışı öğretmen programları",
      "aka eğitim",
    ],
    alternates: {
      canonical: `/ulkeler/${country.toLowerCase()}/ogretmen`,
    },
  };
}

export const revalidate = 3600;

export default async function TeacherProgramsPage({ params }: PageProps) {
  const { country } = await params;
  const info = getCountryBySlug(country.toLowerCase());

  if (!info?.teacherPrograms) {
    notFound();
  }

  const { teacherPrograms } = info;

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] overflow-hidden flex items-center"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 40%, var(--primary-light) 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {teacherPrograms.heroImage && (
            <div
              className="absolute left-0 top-0 h-full w-full bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url(${teacherPrograms.heroImage})`,
              }}
            ></div>
          )}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 w-full">
          <div className="max-w-3xl">
            <nav className="text-white/80 mb-4 text-sm">
              <Link href={`/ulkeler/${country}`} className="hover:text-white">
                {info.name}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white"><HighlightText>Öğretmen Programları</HighlightText></span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {teacherPrograms.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {teacherPrograms.description}
            </p>
            <Link href="#programlar">
              <Button
                size="lg"
                style={{
                  background: "white",
                  color: "var(--primary-dark)",
                  fontWeight: "600",
                }}
                className="hover:scale-105 transition-transform"
              >
                Programları İncele
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose This Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--primary-dark)" }}
            >
              <HighlightText>Neden {info.name} Öğretmen Eğitimi?</HighlightText>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teacherPrograms.whyChooseThis.map((reason, index) => (
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
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programlar"
        className="py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #e0f7f5 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--primary-dark)" }}
            >
              <HighlightText>Öğretmen Eğitim Programları</HighlightText>
            </h2>
            <p className="text-xl text-gray-600">
              İhtiyacınıza uygun programı seçin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teacherPrograms.programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "var(--primary-dark)" }}
                >
                  {program.name}
                </h3>
                <div className="flex flex-wrap items-center text-gray-600 mb-4 gap-4">
                  <div className="flex items-center">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold">{program.duration}</span>
                  </div>
                  {program.tuitionFee && (
                    <div className="flex items-center">
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-semibold">
                        {program.tuitionFee}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--primary-dark)" }}
              >
                Başvuru Gereksinimleri
              </h2>
              <div className="space-y-4">
                {teacherPrograms.requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5"
                      style={{ background: "var(--primary)" }}
                    >
                      <span className="text-white font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--primary-dark)" }}
              >
                Başvuru Süreci
              </h2>
              <div className="space-y-4">
                {teacherPrograms.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5"
                      style={{
                        background:
                          index === teacherPrograms.process.length - 1
                            ? "var(--primary)"
                            : "var(--primary-light)",
                      }}
                    >
                      <span
                        className="font-semibold text-sm"
                        style={{
                          color:
                            index === teacherPrograms.process.length - 1
                              ? "white"
                              : "var(--primary-dark)",
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {teacherPrograms.faqs && teacherPrograms.faqs.length > 0 && (
        <section
          className="py-16 sm:py-20"
          style={{
            background:
              "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #e0f7f5 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ color: "var(--primary-dark)" }}
              >
                Sıkça Sorulan Sorular
              </h2>
            </div>

            <div className="space-y-6">
              {teacherPrograms.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "var(--primary-dark)" }}
          >
            {info.name} Öğretmen Eğitimine Başlamaya Hazır Mısınız?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Uzman ekibimiz size en uygun programı seçmenizde yardımcı olacak.
            Hemen iletişime geçin!
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
            <Link href={`/ulkeler/${country}`}>
              <Button
                size="lg"
                variant="bordered"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--primary)",
                  fontWeight: "600",
                }}
              >
                Diğer Programları İncele
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
