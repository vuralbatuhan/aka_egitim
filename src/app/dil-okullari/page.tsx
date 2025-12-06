import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import CountryGrid from '@/components/cards/CountryGrid'
import ProgramTypes from '@/components/sections/ProgramTypes'
import ContactForm from '@/components/forms/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yurtdışında Dil Okulları ve İngilizce Kursları',
  description:
    'İtalya, Belçika, Almanya, Hollanda ve Kazakistan’daki dil okulu seçenekleri; program ücretleri ve çalışma izinleri hakkında Aka Eğitim danışmanlığı ile bilgi alın.',
  keywords: [
    'yurtdışı dil okulu',
    'ingilizce kursu',
    'yurtdışında dil eğitimi',
    'aka eğitim dil danışmanlığı',
    'dil okulu fiyatları',
    'dil okulunda çalışmak',
  ],
  alternates: {
    canonical: '/dil-okullari',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/dil-okullari',
    title: 'Yurtdışında Dil Okulları | Aka Eğitim',
    description:
      'Popüler ülkelerde dil okulu programları, fiyat aralıkları ve başvuru süreçleri hakkında kapsamlı rehber.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Yurtdışı dil okulu danışmanlığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yurtdışında Dil Okulları | Aka Eğitim',
    description:
      'Dil okulu başvurusu, vize ve konaklama planlaması için Aka Eğitim’den uzman destek alın.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function DilOkullariPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Dil Okulları"
        subtitle="Yurtdışında ana dilini konuştuğu ülkede dil öğrenmenin en etkili yolu"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />
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

