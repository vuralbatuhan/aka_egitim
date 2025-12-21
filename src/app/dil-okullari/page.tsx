'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProgramTypes from '@/components/sections/ProgramTypes'
import ContactForm from '@/components/forms/ContactForm'
import { Card, CardBody, CardFooter, Button } from "@heroui/react"
import Image from "next/image"
import { getCountriesForEducationType } from '@/data/countries'

// Dil okulu programı sunan ülkeleri dinamik olarak al
const LANGUAGE_SCHOOL_COUNTRIES = getCountriesForEducationType('languageSchool').map(country => ({
  name: country.name,
  slug: country.slug,
  description: country.languageSchool?.description || '',
  image: country.overview.heroImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80'
}))

export default function DilOkullariPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Dil Okulu Destinasyonlarımız
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Dünyanın dört bir yanındaki en iyi dil okullarıyla iş birliği yapıyoruz.
            Hayalinizdeki ülkeyi seçin, gerisini bize bırakın.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {LANGUAGE_SCHOOL_COUNTRIES.map((country) => (
              <Card
                key={country.slug}
                className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardBody className="p-0">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={country.image}
                      alt={`${country.name} dil okulu programları`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">{country.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-foreground/80 mb-6 text-base leading-relaxed">
                      {country.description}
                    </p>
                  </div>
                </CardBody>
                <CardFooter className="pt-0 px-6 sm:px-8 pb-6 sm:pb-8">
                  <Button
                    as={Link}
                    href={`/ulkeler/${country.slug}/dil-okulu`}
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

      <ProgramTypes />

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Dil Okulu Seçerken Nelere Dikkat Etmelisiniz?
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Aka Eğitim, hedeflerinize uygun programı belirlerken dil seviyeniz, bütçeniz, çalışma planlarınız ve vize koşullarını analiz eder.
            Destinasyon seçimi yaparken yıl boyu yaşam maliyetlerini, konaklama alternatiflerini ve kültürel uyum sürecinizi birlikte planlarız.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Program yoğunlukları (genel, yarı-yoğun, yoğun) ve sınav hazırlık seçeneklerini karşılaştırın.</li>
            <li>Haftalık fiyat aralıkları ve promosyon dönemleri için danışmanınızdan güncel teklif isteyin.</li>
            <li>Work and Study ve yarı zamanlı çalışma izinleri gibi vize avantajlarını değerlendirin.</li>
            <li>Okulun şehir merkezine, toplu taşımaya ve öğrenci konaklama olanaklarına yakınlığını inceleyin.</li>
          </ul>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}

