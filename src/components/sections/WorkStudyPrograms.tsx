'use client'

import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function WorkStudyPrograms() {
  const programs = [
    {
      name: "İtalya Work & Study",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&q=80",
      description: "İtalyanca öğrenirken kültür ve sanat başkentinde çalışma fırsatı",
      duration: "24 hafta eğitim + çalışma izni",
      workHours: "20 saat/hafta",
      requirements: ["Temel İtalyanca", "18-30 yaş arası", "Avrupa Birliği pasaportu"],
      href: "/ulkeler/italya"
    },
    {
      name: "Hollanda Work & Study",
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=500&q=80",
      description: "İngilizce programlarda çalışarak dil öğrenin ve kariyer yapın",
      duration: "24 hafta eğitim + part-time çalışma",
      workHours: "16 saat/hafta",
      requirements: ["B1 İngilizce seviyesi", "18-30 yaş arası", "Vize"],
      href: "/ulkeler/hollanda"
    },
    {
      name: "Almanya Work & Study",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&q=80",
      description: "Ücretsiz eğitim ve part-time iş imkanları ile deneyim kazanın",
      duration: "24 hafta eğitim + çalışma izni",
      workHours: "20 saat/hafta",
      requirements: ["A2 Almanca", "18-30 yaş arası", "Vize"],
      href: "/ulkeler/almanya"
    },
    {
      name: "Belçika Work & Study",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&q=80",
      description: "Avrupa'nın kalbindeki fırsatlar ile çok dilli eğitim ve çalışma",
      duration: "24 hafta eğitim + part-time iş",
      workHours: "20 saat/hafta",
      requirements: ["Fransızca/Flemenkçe temel", "18-30 yaş arası", "Vize"],
      href: "/ulkeler/belcika"
    },
    {
      name: "Kazakistan Work & Study",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
      description: "Uygun maliyetli eğitim ve çalışma fırsatları",
      duration: "24 hafta eğitim + staj imkanı",
      workHours: "Staj programları",
      requirements: ["Temel Rusça/Kazakça", "18-25 yaş arası", "Vize"],
      href: "/ulkeler/kazakistan"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work and Study Programları
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Dil öğrenirken çalışın, deneyim kazanın ve masraflarınızı karşılayın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card 
              key={program.name}
              className="hover:shadow-2xl transition-all duration-300"
            >
              <CardBody className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={`${program.name} programı çalışarak dil eğitimi`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-turquoise-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">
                        <strong>Süre:</strong> {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-turquoise-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">
                        <strong>Çalışma:</strong> {program.workHours}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Gereksinimler:</h4>
                    <ul className="space-y-1">
                      {program.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-turquoise-500 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="pt-0 px-6 pb-6">
                <Button 
                  as={Link}
                  href={program.href}
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
