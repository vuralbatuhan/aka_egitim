"use client";

import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

interface Country {
  name: string;
  slug: string;
  image: string;
  description: string;
  programs: string[];
  price: string;
}

const COUNTRIES: Country[] = [
  {
    name: "İtalya",
    slug: "italya",
    image:
      "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?w=500&q=80",
    description:
      "Sanat, kültür ve gastronomi ile İngilizce veya İtalyanca dil eğitimi fırsatı.",
    programs: ["Genel İngilizce", "İtalyanca Kursları", "Akademik Hazırlık"],
    price: "€150-320/hafta",
  },
  {
    name: "Belçika",
    slug: "belcika",
    image:
      "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?w=500&q=80",
    description:
      "Avrupa Birliği merkezinde Fransızca, Flamanca ve İngilizce programlar.",
    programs: ["Genel İngilizce", "Fransızca Kursları", "Üniversite Hazırlık"],
    price: "€180-340/hafta",
  },
  {
    name: "Almanya",
    slug: "almanya",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
    description:
      "Ücretsiz üniversite seçenekleri ve yoğun Almanca kursları ile öne çıkan ülke.",
    programs: ["Genel Almanca", "TestDaF Hazırlık", "Üniversite Hazırlık"],
    price: "€180-360/hafta",
  },
  {
    name: "Kazakistan",
    slug: "kazakistan",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80",
    description:
      "Uygun maliyetli İngilizce ve Rusça dil programları ile Türk öğrenciler için ideal.",
    programs: ["Genel İngilizce", "Rusça Kursları", "Work & Study"],
    price: "$120-220/hafta",
  },
  {
    name: "Hollanda",
    slug: "hollanda",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=500&q=80",
    description:
      "İngilizce konuşulan ortam ve modern eğitim sistemi ile dil eşleştirmeli programlar.",
    programs: ["Genel İngilizce", "IELTS Hazırlık", "Akademik Hazırlık"],
    price: "€200-380/hafta",
  },
];

export default function CountryGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Popüler Dil Okulu Destinasyonları
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
            Dünyanın en iyi dil okullarında İngilizce öğrenin ve hayalinizdeki
            eğitimi yaşayın
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {COUNTRIES.map((country) => (
            <Card
              key={country.slug}
              className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardBody className="p-0">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={country.image}
                    alt={`${country.name} dil okulu ve eğitim programları`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                      {country.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-foreground/80 mb-6 text-base leading-relaxed">
                    {country.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {country.programs.map((program) => (
                      <span
                        key={program}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6 bg-primary/5 rounded-lg p-4">
                    <span className="text-foreground/70 font-medium">
                      Haftalık Fiyat
                    </span>
                    <span className="text-xl font-bold text-primary">
                      {country.price}
                    </span>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0 px-6 sm:px-8 pb-6 sm:pb-8">
                <Button
                  as={Link}
                  href={`/ulkeler/${country.slug}`}
                  color="primary"
                  variant="solid"
                  size="lg"
                  className="w-full font-bold focus:outline-none focus:ring-0"
                  endContent={
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
                  }
                >
                  Detaylı Bilgi Al
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
