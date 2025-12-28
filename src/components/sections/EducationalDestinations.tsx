"use client";

import { Card, CardBody, CardFooter } from "@heroui/react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";

import almanya from "../../app/assets/country_images/almanya.jpg";
import italya from "../../app/assets/country_images/italya.jpg";
import ingiltere from "../../app/assets/country_images/ingiltere.jpg";
import finlandiya from "../../app/assets/country_images/finlandiya.jpg";
// import fransa from "../../app/assets/country_images/finlandiya.jpg";

interface Country {
  name: string;
  slug: string;
  image: StaticImageData;
  bgImage: string;
  description: string;
  programs: string[];
  price: string;
}

const COUNTRIES: Country[] = [
  {
    name: "İtalya",
    slug: "italya",
    image: italya,
    bgImage:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80",
    description:
      "Sanat, kültür ve gastronomi ile İngilizce veya İtalyanca dil eğitimi fırsatı.",
    programs: ["Genel İngilizce", "İtalyanca Kursları", "Akademik Hazırlık"],
    price: "€150-320/hafta",
  },
  {
    name: "Finlandiya",
    slug: "finlandiya",
    image: finlandiya,
    bgImage:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=1400&q=80",
    description:
      "Dünya'nın en kaliteli eğitim sistemi ve modern yaşam standartları.",
    programs: ["Genel İngilizce", "Fince Kursları", "Üniversite Hazırlık"],
    price: "€180-340/hafta",
  },
  {
    name: "Almanya",
    slug: "almanya",
    image: almanya,
    bgImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80",
    description:
      "Ücretsiz üniversite seçenekleri ve yoğun Almanca kursları ile öne çıkan ülke.",
    programs: ["Genel Almanca", "TestDaF Hazırlık", "Üniversite Hazırlık"],
    price: "€180-360/hafta",
  },
  {
    name: "İngiltere",
    slug: "ingiltere",
    image: ingiltere,
    bgImage:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1400&q=80",
    description:
      "İngilizce konuşulan ortam ve modern eğitim sistemi ile dil eşleştirmeli programlar.",
    programs: ["Genel İngilizce", "IELTS Hazırlık", "Akademik Hazırlık"],
    price: "€200-380/hafta",
  },
  // {
  //   name: "Fransa",
  //   slug: "fransa",
  //   image: fransa,
  //   bgImage:
  //     "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80",
  //   description:
  //     "Sanat, moda ve gastronomi başkenti. Fransızca dil eğitimi ve kültürel deneyim.",
  //   programs: ["Genel Fransızca", "DELF/DALF Hazırlık", "Mutfak Sanatları"],
  //   price: "€180-350/hafta",
  // },
];

export default function EducationalDestinations() {
  const router = useRouter();

  return (
    <section className="pt-0 pb-20 bg-gradient-to-br from-gray-50 to-white w-full">
      {/* GRID */}
      <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {COUNTRIES.map((country) => (
            <Card
              key={country.slug}
              isPressable
              onPress={() => router.push(`/ulkeler/${country.slug}`)}
              className="relative h-full flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]  "
            >
              {/* ✅ ÜLKEYE ÖZEL ARKAPLAN */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 blur-xl scale-110"
                style={{ backgroundImage: `url(${country.bgImage})` }}
              />
              {/* ✅ Okunabilirlik için overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

              {/* CONTENT (üstteki bg'lerin üstüne) */}
              <div className="relative z-10 flex flex-col h-full">
                <CardBody className="p-0 flex flex-col flex-1">
                  {/* IMAGE */}
                  <div className="relative h-32 sm:h-36 lg:h-56 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={country.image}
                      alt={`${country.name} dil okulu`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 text-2xl sm:text-3xl font-bold text-white drop-shadow">
                      {country.name}
                    </h3>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <p className="text-sm sm:text-base text-foreground/80 mb-4 leading-relaxed">
                      {country.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {country.programs.map((program) => (
                        <span
                          key={program}
                          className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-primary/10 text-primary font-medium"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>

                {/* FOOTER */}
                <CardFooter className="px-4 sm:px-5 pb-5 pt-0">
                  {/* Visual button (not a real button to avoid nested button error) */}
                  <div className="w-full bg-primary text-primary-foreground font-semibold rounded-md py-3 px-4 flex items-center justify-center gap-2">
                    <span>Detayları Gör</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
