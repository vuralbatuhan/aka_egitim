'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProgramTypes from '@/components/sections/ProgramTypes'
import ContactForm from '@/components/forms/ContactForm'
import { Card, CardBody, CardFooter } from "@heroui/react"
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
      <section
        className="relative py-20 sm:py-24 lg:py-32"
        style={{
          background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 40%, var(--primary-light) 100%)"
        }}
      >
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {LANGUAGE_SCHOOL_COUNTRIES.map((country) => (
              <Link key={country.slug} href={`/ulkeler/${country.slug}/dil-okulu`}>
                <Card
                  isPressable
                  className="relative h-full flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 blur-xl scale-110"
                    style={{ backgroundImage: `url(${country.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

                  <div className="relative z-10 flex flex-col h-full">
                    <CardBody className="p-0 flex flex-col flex-1">
                      <div className="relative h-32 sm:h-36 lg:h-56 w-full overflow-hidden rounded-t-lg">
                        <Image
                          src={country.image}
                          alt={`${country.name} dil okulu`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <h3 className="absolute bottom-3 left-4 text-2xl sm:text-3xl font-bold text-white drop-shadow">
                          {country.name}
                        </h3>
                      </div>

                      <div className="p-4 sm:p-5 flex flex-col flex-1">
                        <p className="text-sm sm:text-base text-foreground/80 mb-4 leading-relaxed">
                          {country.description}
                        </p>
                      </div>
                    </CardBody>

                    <CardFooter className="px-4 sm:px-5 pb-5 pt-0">
                      <div className="w-full bg-primary text-primary-foreground font-semibold rounded-md py-3 px-4 flex items-center justify-center gap-2">
                        <span>Detayları Gör</span>
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
                      </div>
                    </CardFooter>
                  </div>
                </Card>
              </Link>
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

