'use client'

import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function HighSchoolCountries() {
  const countries = [
    {
      name: "Almanya",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&q=80",
      description: "Ücretsiz eğitim, kaliteli okullar ve güçlü akademik sistem",
      programs: ["Gymnasium", "IGCSE", "IB Programı", "Abitur"],
      duration: "1-3 yıl",
      href: "/ulkeler/almanya"
    },
    {
      name: "Hollanda",
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=500&q=80",
      description: "İngilizce eğitim ve uluslararası tanınan diploma",
      programs: ["International Baccalaureate", "VWO", "HAVO", "İngilizce Lise"],
      duration: "1-4 yıl",
      href: "/ulkeler/hollanda"
    },
    {
      name: "İtalya",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&q=80",
      description: "Sanat, kültür ve akademik mükemmellik bir arada",
      programs: ["Liceo Classico", "Liceo Scientifico", "IB Programı"],
      duration: "1-5 yıl",
      href: "/ulkeler/italya"
    },
    {
      name: "Belçika",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
      description: "Çok dilli eğitim ve Avrupa Birliği okulları",
      programs: ["International School", "European School", "IB Programı"],
      duration: "1-4 yıl",
      href: "/ulkeler/belcika"
    },
    {
      name: "Kazakistan",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
      description: "Uygun maliyetli uluslararası eğitim ve Türk kültürüne yakınlık",
      programs: ["International School", "NIS AEO", "Rus Dili Programı"],
      duration: "1-4 yıl",
      href: "/ulkeler/kazakistan"
    },
        {
      name: "İngiltere",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&q=80",
      description: "Sanat, kültür ve akademik mükemmellik bir arada",
      programs: ["Liceo Classico", "Liceo Scientifico", "IB Programı"],
      duration: "1-5 yıl",
      href: "/ulkeler/ingiltere"
    },
        {
      name: "Finlandiya",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&q=80",
      description: "Sanat, kültür ve akademik mükemmellik bir arada",
      programs: ["Liceo Classico", "Liceo Scientifico", "IB Programı"],
      duration: "1-5 yıl",
      href: "/ulkeler/finlandiya"
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lise Eğitimi Destinasyonları
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Dünyanın en iyi lise eğitim sistemlerinde geleceğinizi şekillendirin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {countries.map((country) => (
            <Card 
              key={country.name}
              className="hover:shadow-2xl transition-all duration-300"
            >
              <CardBody className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={country.image}
                    alt={`${country.name} lise eğitimi ve uluslararası programlar`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {country.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.programs.map((program) => (
                      <span 
                        key={program}
                        className="px-3 py-1 bg-turquoise-100 text-turquoise-700 text-xs sm:text-sm rounded-full font-medium"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-turquoise-600 mb-4">
                    Süre: {country.duration}
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0 px-6 pb-6">
                <Button 
                  as={Link}
                  href={country.href}
                  color="primary"
                  variant="flat"
                  className="w-full font-semibold"
                >
                  Detaylı Bilgi
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
