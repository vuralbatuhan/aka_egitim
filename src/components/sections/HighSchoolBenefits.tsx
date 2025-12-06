'use client'

import { Card, CardBody } from "@heroui/react";
import { 
  AcademicCapIcon,
  GlobeAltIcon,
  UserGroupIcon,
  TrophyIcon,
  LanguageIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

export default function HighSchoolBenefits() {
  const benefits = [
    {
      icon: AcademicCapIcon,
      title: "Uluslararası Diploma",
      description: "Dünya çapında tanınan lise diploması ile üniversite kapıları açılır"
    },
    {
      icon: GlobeAltIcon,
      title: "Küresel Bakış Açısı",
      description: "Farklı kültürlerden öğrencilerle eğitim alarak dünya vatandaşı olun"
    },
    {
      icon: UserGroupIcon,
      title: "Sosyal Gelişim",
      description: "Uluslararası arkadaşlıklar kurun ve sosyal becerilerinizi geliştirin"
    },
    {
      icon: TrophyIcon,
      title: "Üniversite Hazırlığı",
      description: "Dünya çapında üniversitelere giriş için gerekli donanımı kazanın"
    },
    {
      icon: LanguageIcon,
      title: "Dil Gelişimi",
      description: "Ana dil seviyesinde İngilizce öğrenin ve çok dilli birey olun"
    },
    {
      icon: HeartIcon,
      title: "Kişisel Gelişim",
      description: "Özgüven, bağımsızlık ve liderlik becerilerinizi geliştirin"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Yurtdışında Lise Eğitiminin Avantajları
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Geleceğinizi şekillendirecek eğitim deneyimi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-turquoise-500"
            >
              <CardBody className="text-center p-6 sm:p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-turquoise-100 text-turquoise-600 mb-4">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
