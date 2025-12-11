import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import EducationalDestinations from '@/components/sections/EducationalDestinations'
import Benefits from '@/components/sections/Benefits'
import Features from '@/components/sections/Features'
import Programs from '@/components/sections/Programs'
// import PopularCountries from '@/components/sections/PopularCountries'
import ValuesBanner from '@/components/sections/ValuesBanner'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Heavy components'leri lazy load et (SEO için SSR korunuyor)
const RepresentativesMapDB = dynamic(() => import('@/components/sections/RepresentativesMapDB'), {
  loading: () => (
    <div className="flex items-center justify-center h-[600px] bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Harita yükleniyor...</p>
      </div>
    </div>
  ),
  ssr: true // SEO için SSR aktif
})

const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  loading: () => (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="animate-pulse text-gray-400">Form yükleniyor...</div>
      </div>
    </div>
  ),
  ssr: true // SEO için SSR aktif
})

export const metadata: Metadata = {
  title: 'Yurtdışı Eğitim Danışmanlığı ve Dil Okulları',
  description:
    'Aka Eğitim ile İngiltere, Almanya, Malta, İtalya ve dünyanın dört bir yanında dil okulu, üniversite, yüksek lisans ve work and study programlarına güvenle başvurun.',
  keywords: [
    'yurtdışı eğitim',
    'dil okulu danışmanlığı',
    'yurtdışı üniversite',
    'yabancı dil kursu',
    'work and study programları',
    'aka eğitim danışmanlık',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/',
    title: 'Yurtdışı Eğitim Danışmanlığı ve Dil Okulları | Aka Eğitim',
    description:
      'Dil okulu, üniversite, yüksek lisans ve work and study programları için profesyonel yurtdışı eğitim danışmanlığı.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim yurtdışı eğitim danışmanlığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yurtdışı Eğitim Danışmanlığı ve Dil Okulları | Aka Eğitim',
    description:
      'Yurtdışı dil eğitimi ve akademik program seçiminde Aka Eğitim uzmanlarına güvenin.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600 // 1 saat

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EducationalDestinations />
      {/* <Benefits /> */}
      {/* <Features /> */}
      <Programs />
      {/* <PopularCountries /> */}
      <ValuesBanner />
      <RepresentativesMapDB />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  )
}

