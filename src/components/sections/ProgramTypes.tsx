'use client'

import { Card, CardHeader, CardBody } from "@heroui/react";
import { 
  BookOpenIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

export default function ProgramTypes() {
  const programs = [
    {
      icon: BookOpenIcon,
      title: "Genel İngilizce Kursları",
      description: "İngilizcesini geliştirmek, gramer bilgisi ve kelime haznesini güçlendirmek isteyen adaylar için standart, yarı-yoğun ve yoğun programlar.",
      features: [
        "Standart Program (15-20 saat/hafta)",
        "Yarı-Yoğun Program (20-25 saat/hafta)",
        "Yoğun Program (25-30 saat/hafta)",
        "Başlangıç seviyesinden ileri seviyeye"
      ]
    },
    {
      icon: AcademicCapIcon,
      title: "Akademik İngilizce Kursları",
      description: "IELTS, TOEFL gibi uluslararası sınavlara hazırlanan, lisans ya da yüksek lisans eğitimi almayı düşünen adaylar için hazırlanmış programlar.",
      features: [
        "IELTS Hazırlık Programları",
        "TOEFL Hazırlık Programları",
        "Cambridge Sınav Hazırlığı",
        "Akademik Yazma ve Okuma"
      ]
    },
    {
      icon: BriefcaseIcon,
      title: "İş İngilizcesi",
      description: "İş dünyasında kullanılan İngilizceyi öğrenmek isteyen profesyoneller için özel olarak tasarlanmış programlar.",
      features: [
        "İş Toplantıları İngilizcesi",
        "Sunum Teknikleri",
        "E-posta ve Rapor Yazma",
        "Mülakat Hazırlığı"
      ]
    },
    {
      icon: UserGroupIcon,
      title: "Özel Programlar",
      description: "Teacher Training, Havacılık İngilizcesi, Hukuk İngilizcesi gibi özel alanlar için tasarlanmış programlar.",
      features: [
        "Teacher Training Kursları",
        "Havacılık İngilizcesi",
        "Hukuk İngilizcesi",
        "30 Yaş Üstü Programlar"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Dil Okulu Program Türleri
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Size uygun program türünü seçin ve hedeflerinize ulaşın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="bg-cyan-500 p-6 sm:p-8">
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
                        className="w-5 h-5 sm:w-6 sm:h-6 text-turquoise-500 mr-2 flex-shrink-0 mt-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
