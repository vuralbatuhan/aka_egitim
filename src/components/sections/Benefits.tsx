'use client'

import { Card, CardBody } from "@heroui/react";
import { 
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";
import Link from 'next/link';
import Image from 'next/image';

export default function Benefits() {
  
  const benefits = [
    {
      icon: UserGroupIcon,
      title: "Biz Kimiz",
      description: "Deneyimli ekibimiz ve misyonumuz hakkında bilgi edinin",
      link: "/biz-kimiz",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
    },
    {
      icon: LightBulbIcon,
      title: "Niçin Kurduk",
      description: "Kuruluş amacımız ve vizyonumuzu keşfedin",
      link: "/nicin-kurduk",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
    },
    {
      icon: RocketLaunchIcon,
      title: "Ne Yapmak İstiyoruz",
      description: "Hedeflerimiz ve gelecek planlarımızı öğrenin",
      link: "/ne-yapmak-istiyoruz",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Aka Eğitim ile Eğitim Yolculuğunuzu Planlayın
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kurumsal değerlerimizi ve öğrenci odaklı yaklaşımımızı keşfederek size en uygun yurtdışı eğitim çözümünü birlikte belirleyelim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <Link key={index} href={benefit.link} className="block">
              <Card 
                className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-turquoise-500 cursor-pointer overflow-hidden group h-full"
              >
              <CardBody className="p-0">
                {/* Resim */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={`${benefit.title} - Aka Eğitim`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* İkon */}
                  <div className="absolute top-4 right-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-turquoise-600 shadow-lg">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                </div>
                
                {/* İçerik */}
                <div className="p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Tıklama İpucu */}
                  <div className="mt-4 inline-flex items-center text-turquoise-600 text-sm font-medium group-hover:text-turquoise-700 transition-colors">
                    <span>Detayları Gör</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
