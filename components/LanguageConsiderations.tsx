"use client";

import Image from "next/image";

const considerations = [
  {
    text: "Program yoğunlukları (genel, yarı-yoğun, yoğun) ve sınav hazırlık seçeneklerini karşılaştırın.",
    isPrimary: true,
  },
  {
    text: "Haftalık fiyat aralıkları ve promosyon dönemleri için danışmanızdan güncel teklif isteyin.",
    isPrimary: false,
  },
  {
    text: "Work and Study ve yarı zamanlı çalışma izinleri gibi vize avantajlarını değerlendirin.",
    isPrimary: false,
  },
  {
    text: "Okulun şehir merkezine, toplu taşımaya ve öğrenci konaklama olanaklarına yakınlığını inceleyin.",
    isPrimary: false,
  },
];

export default function LanguageConsiderations() {
  return (
    <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div>
            {/* Title with vertical line */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-1 h-16"
                style={{ backgroundColor: "#800000" }}
              ></div>
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: "#1a1a1a" }}>
                Dil Okulu Seçerken Nelere Dikkat Etmelisiniz?
              </h2>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: "#666666" }}>
              Aka Eğitim, hedeflerinize uygun programı belirlerken dil seviyeniz, bütçeniz, çalışma planlarınız ve vize koşullarını analiz eder. Destinasyon seçimi yaparken yıl boyu yaşam maliyetlerini, konaklama alternatiflerini ve kültürel uyum sürecinizi birlikte planlarız.
            </p>

            {/* Information Blocks */}
            <div className="space-y-4">
              {considerations.map((consideration, index) => (
                <div
                  key={index}
                  className="rounded-lg p-4 transition-all duration-300"
                  style={{
                    backgroundColor: consideration.isPrimary ? "#800000" : "#F5EFEF",
                    color: consideration.isPrimary ? "#FFFFFF" : "#333333",
                  }}
                >
                  <p className="text-base leading-relaxed">{consideration.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-full min-h-[500px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/heartland-cps-school-perfect-balance-academia-physical-education.png"
                alt="Dil Okulu Öğrencileri"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
