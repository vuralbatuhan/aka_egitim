'use client'

import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
import Link from "next/link";
import { 
  AcademicCapIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

export default function Programs() {
  const programs = [
    {
      icon: BookOpenIcon,
      title: "Dil Okulları",
      description: "Yurtdışında ana dilini konuştuğu ülkede dil öğrenmenin en etkili yolu. İngiltere, Malta, İrlanda ve daha fazlası...",
      features: [
        "Genel İngilizce Kursları",
        "İş İngilizcesi",
        "IELTS/TOEFL Hazırlık",
        "Akademik Yıl Programları"
      ],
      color: "bg-blue-500",
      href: "/dil-okullari"
    },
    {
      icon: BuildingLibraryIcon,
      title: "Üniversite",
      description: "Dünya çapında tanınan üniversitelerde lisans eğitimi. YÖK tarafından tanınan kurumlarla çalışıyoruz.",
      features: [
        "Lisans Programları",
        "Foundation Yıl",
        "Transfer İmkanları",
        "Burs Olanakları"
      ],
      color: "bg-emerald-500",
      href: "/universite"
    },
    {
      icon: AcademicCapIcon,
      title: "Yüksek Lisans",
      description: "Kariyerinizi bir üst seviyeye taşıyacak master ve MBA programları.",
      features: [
        "Master Programları",
        "MBA Programları",
        "Doktora Programları",
        "Pre-Masters Programları"
      ],
      color: "bg-purple-500",
      href: "/yuksek-lisans"
    },
    {
      icon: GlobeAltIcon,
      title: "Yaz Okulları",
      description: "Yaz aylarında kısa süreli dil eğitimi ve kültür deneyimi programları.",
      features: [
        "Yaz Dil Kursları",
        "Kültürel Aktiviteler",
        "Yetişkin Programları",
        "Genç Programları"
      ],
      color: "bg-orange-500",
      href: "/yurtdisinda-lise"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Eğitim Programlarımız
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Size uygun eğitim programını seçin ve yurtdışı eğitim hayalinizi gerçekleştirin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((program) => (
            <Card 
              key={program.title}
              className="hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className={`${program.color} p-6 sm:p-8`}>
                <div className="w-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md mb-4">
                    <program.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    {program.description}
                  </p>
                </div>
              </CardHeader>
              <CardBody className="p-6 sm:p-8">
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className="w-6 h-6 text-turquoise-500 mr-2 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter className="px-6 sm:px-8 pb-6 sm:pb-8">
                <Button 
                  as={Link}
                  href={program.href}
                  className="w-full font-bold bg-primary text-black hover:bg-primary-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  size="lg"
                  radius="lg"
                  endContent={
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

