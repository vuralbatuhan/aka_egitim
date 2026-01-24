"use client";

import Image from "next/image";
import Link from "next/link";

export default function LanguageDestinations() {
  const destinations = [
    {
      name: "İngiltere",
      image: "/images/1ec1d4a296c8860bf4765bb90d75a641-1200.png",
      description: "İngiltere'de İngilizce öğrenmek, dilin doğduğu yerde aksan ve kültürünü deneyimleme fırsatıdır. British Council onaylı kaliteli dil okullarında eğitim alabilirsiniz.",
      buttonColor: "#FF8C00",
    },
    {
      name: "Finlandiya",
      image: "/images/ingiltere-vizesi.png",
      description: "Finlandiya'da İngilizce öğrenmek, İskandinav yaşam tarzını deneyimleme ve dünya'nın en iyi eğitim sistemini yakından tanıma fırsatıdır.",
      buttonColor: "#333333",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
                  {destination.name}
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#666666" }}>
                  {destination.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: destination.buttonColor }}
                >
                  Detaylı Bilgi
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
