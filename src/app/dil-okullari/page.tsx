'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CountryGrid from '@/components/cards/CountryGrid'
import ProgramTypes from '@/components/sections/ProgramTypes'
import ContactForm from '@/components/forms/ContactForm'

export default function DilOkullariPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2FD4C6] via-[#2BB8AC] to-[#1E8B82] py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Eğitim Destinasyonlarımız
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Dünyanın dört bir yanındaki en iyi eğitim kurumlarıyla iş birliği yapıyoruz.
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

      <CountryGrid />
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

