'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import { Card, CardBody, CardFooter, Button } from "@heroui/react"
import Image from "next/image"

const MASTERS_COUNTRIES = [
  {
    name: "İngiltere",
    slug: "ingiltere",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=80",
    description: "Dünyanın en prestijli MBA ve Master programlarına erişim",
    studentCount: "400+ yüksek lisans öğrencisi",
    programs: ["MBA", "Master", "PhD"]
  },
  {
    name: "Almanya",
    slug: "almanya",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&q=80",
    description: "Ücretsiz veya düşük harçlı yüksek lisans programları",
    studentCount: "500+ yüksek lisans öğrencisi",
    programs: ["Master", "MBA", "Doktora"]
  },
  {
    name: "Hollanda",
    slug: "hollanda",
    flag: "🇳🇱",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=500&q=80",
    description: "İngilizce yüksek lisans programları ve burs olanakları",
    studentCount: "300+ yüksek lisans öğrencisi",
    programs: ["Master", "MBA", "Research"]
  },
  {
    name: "Belçika",
    slug: "belcika",
    flag: "🇧🇪",
    image: "https://images.unsplash.com/photo-1609950611663-583b0c18c5e6?w=500&q=80",
    description: "Avrupa'nın merkezinde kaliteli yüksek lisans eğitimi",
    studentCount: "200+ yüksek lisans öğrencisi",
    programs: ["Master", "MBA"]
  },
  {
    name: "İtalya",
    slug: "italya",
    flag: "🇮🇹",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&q=80",
    description: "Sanat, tasarım ve mühendislikte yüksek lisans fırsatları",
    studentCount: "250+ yüksek lisans öğrencisi",
    programs: ["Master", "MBA", "Design"]
  },
  {
    name: "ABD",
    slug: "amerika",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&q=80",
    description: "Dünyanın en iyi MBA ve Master programları",
    studentCount: "150+ yüksek lisans öğrencisi",
    programs: ["MBA", "Master", "PhD"]
  }
]

export default function YuksekLisans() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2FD4C6] via-[#2BB8AC] to-[#1E8B82] py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Yüksek Lisans Destinasyonlarımız
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Kariyerinizi bir üst seviyeye taşıyacak MBA ve Master programları için
            dünyanın en iyi üniversitelerinde eğitim fırsatları.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Ülke veya program ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full text-lg border-2 border-white/20 bg-white/95 backdrop-blur-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Country Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {MASTERS_COUNTRIES.map((country) => (
              <Card
                key={country.slug}
                className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardBody className="p-0">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={country.image}
                      alt={`${country.name} yüksek lisans programları`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <span className="text-5xl">{country.flag}</span>
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">{country.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-sm text-primary font-semibold mb-2">{country.studentCount}</p>
                    <p className="text-foreground/80 mb-6 text-base leading-relaxed">
                      {country.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {country.programs.map((program) => (
                        <span
                          key={program}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {program}
                        </span>
                      ))}
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
                  >
                    Detayları İncele
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Başvuru Dokümanlarınızı Güçlendirin</h2>
            <p className="text-lg text-gray-600 mb-4">
              Başvuru paketinizin her aşamasını uzman ekibimizle birlikte planlarız. Program gerekliliklerine göre akademik transkriptlerinizi,
              referans mektuplarınızı ve motivasyon yazınızı değerlendirip revize ederiz.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>GRE, GMAT, IELTS ve TOEFL skor hedefleri için hazırlık partnerlerimizle yönlendirme yapıyoruz.</li>
              <li>Üniversite profesörlerine etkili referans talebi oluşturmanızı sağlayan şablonlar sunuyoruz.</li>
              <li>Kariyer hedeflerinizi akademik amaçlarınıza bağlayan güçlü motivasyon mektupları hazırlıyoruz.</li>
              <li>Ön kabul sonrası vize ve konaklama süreçlerini planlayarak kesintisiz bir geçiş sağlıyoruz.</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}

