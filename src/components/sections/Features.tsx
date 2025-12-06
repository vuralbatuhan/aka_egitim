'use client'

import { Card, CardBody } from "@heroui/react";
import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentCheckIcon
} from "@heroicons/react/24/outline";

export default function Features() {
  const features = [
    {
      icon: AcademicCapIcon,
      title: "Profesyonel Danışmanlık",
      description: "Uzman ekibimiz size en uygun programı bulmak için yanınızda",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"
    },
    {
      icon: GlobeAltIcon,
      title: "25+ Ülkede Eğitim",
      description: "Dünya çapında eğitim fırsatları ve çeşitli destinasyonlar",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80"
    },
    {
      icon: UserGroupIcon,
      title: "Deneyimli Kadro",
      description: "20 yılı aşkın tecrübemizle binlerce öğrenciye hizmet verdik",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80"
    },
    {
      icon: ShieldCheckIcon,
      title: "Güvenilir İşlemler",
      description: "Tüm süreçlerde şeffaf ve güvenli danışmanlık hizmeti",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80"
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "7/24 Destek",
      description: "Eğitim sürecinizin her aşamasında destek ve rehberlik",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80"
    },
    {
      icon: DocumentCheckIcon,
      title: "Vize Desteği",
      description: "Başvuru sürecinden vize alımına kadar tam destek",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Yurtdışı eğitim hayalinizi gerçeğe dönüştürmek için ihtiyacınız olan tüm destekler
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const colorClasses = [
              "bg-primary/20",
              "bg-primary/20", 
              "bg-primary/20",
              "bg-primary/20",
              "bg-primary/20",
              "bg-primary/20"
            ];
            const colorClass = colorClasses[index % colorClasses.length];
            
            return (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <CardBody className="relative p-0 h-[320px] overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full ${colorClass} backdrop-blur-sm mb-4 self-start`}>
                      <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white drop-shadow-lg">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white drop-shadow-md">
                      {feature.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

