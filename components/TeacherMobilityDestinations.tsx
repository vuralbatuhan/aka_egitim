"use client";

import Image from "next/image";
import Link from "next/link";

export default function TeacherMobilityDestinations() {
  const destinations = [
    {
      name: "Belçika",
      image: "/images/zurih-city.png",
      description: "Belçika'da sertifikalı öğretmen eğitim programları. AKA güvencesiyle, öğretmen dokunuşuyla mesleki gelişim ve pedagojik derinleşme fırsatı.",
      buttonColor: "#333333",
      href: "/ogretmen-hareketliligi/belcika",
    },
    {
      name: "Finlandiya",
      image: "/images/1ec1d4a296c8860bf4765bb90d75a641-1200.png",
      description: "Finlandiya'da sertifikalı öğretmen eğitim programları. AKA güvencesiyle, öğretmen dokunuşuyla mesleki gelişim ve pedagojik derinleşme fırsatı.",
      buttonColor: "#FF8C00",
      href: "/ogretmen-hareketliligi/finlandiya",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group w-full max-w-[500px] transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 group-hover:text-[#FF8C00] transition-colors duration-300">
                  {destination.name}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4 md:mb-6 text-gray-600 flex-grow">
                  {destination.description}
                </p>
                <Link
                  href={destination.href ?? "#"}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md w-fit bg-gray-800 group-hover:bg-[#FF8C00] group-hover:scale-105 group-hover:shadow-lg"
                >
                  Detaylı Bilgi
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
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
