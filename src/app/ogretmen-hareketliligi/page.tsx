'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import { Card, CardBody, CardFooter, Button } from "@heroui/react"
import Image from "next/image"
import { getCountriesForEducationType } from '@/data/countries'

// Öğretmen programları sunan ülkeleri dinamik olarak al
const TEACHER_COUNTRIES = getCountriesForEducationType('teacherPrograms').map(country => ({
  name: country.name,
  slug: country.slug,
  description: country.teacherPrograms?.description || '',
  image: country.overview.heroImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80'
}))

export default function OgretmenHareketliligi() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Öğretmen Hareketliliği Programları
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Öğretmenler için yurtdışında eğitim, sertifika ve mesleki gelişim programları.
            Kariyerinizi uluslararası deneyimle güçlendirin.
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
            {TEACHER_COUNTRIES.map((country) => (
              <Card
                key={country.slug}
                className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardBody className="p-0">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={country.image}
                      alt={`${country.name} öğretmen programları`}
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
                    href={`/ulkeler/${country.slug}/ogretmen`}
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Öğretmen Hareketliliği Nedir?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Öğretmen hareketliliği programları, eğitimcilerin yurtdışında eğitim metodolojileri öğrenmesi,
              sertifika alması ve profesyonel gelişimini sürdürmesi için tasarlanmış programlardır.
              Aka Eğitim olarak, öğretmenlerin kariyerlerini uluslararası platformda geliştirmelerine destek oluyoruz.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>CELTA, DELTA, TESOL gibi uluslararası öğretmenlik sertifikaları için başvuru desteği.</li>
              <li>Avrupa Birliği Erasmus+ öğretmen hareketliliği programlarına başvuru rehberliği.</li>
              <li>Yurtdışında öğretmen eğitimi ve mesleki gelişim kursları için danışmanlık.</li>
              <li>Yabancı dil öğretimi metodolojileri ve sertifika programları hakkında bilgilendirme.</li>
              <li>Program sonrası iş bulma ve kariyer planlama desteği.</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
