import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import ContactForm from '@/components/forms/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim | Aka Eğitim Yurtdışı Eğitim Danışmanlığı',
  description:
    'Aka Eğitim danışmanlarıyla iletişime geçin. Yurtdışı eğitim, dil okulu, üniversite ve work and study başvurularınız için ücretsiz danışmanlık alın.',
  keywords: [
    'aka eğitim iletişim',
    'yurtdışı eğitim danışmanlık telefonu',
    'aka eğitim mail',
    'yurtdışı eğitim ücretsiz danışmanlık',
  ],
  alternates: {
    canonical: '/iletisim',
  },
  openGraph: {
    url: 'https://www.akaegitim.com.tr/iletisim',
    title: 'Aka Eğitim İletişim',
    description:
      'Yurtdışı eğitim hedeflerinizi planlamak için telefon, e-posta veya form üzerinden bize ulaşın.',
    images: [
      {
        url: 'https://www.akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim iletişim kanalları',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aka Eğitim İletişim',
    description:
      'Uzman danışmanlarımızla iletişime geçerek yurtdışı eğitim çözümleri hakkında bilgi alın.',
    images: ['https://www.akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function Iletisim() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero
          title="İletişim"
          subtitle="Ücretsiz Danışmanlık Alın"
          description="Size en uygun eğitim programını bulalım"
          backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
        />

        <ContactForm />

        {/* İletişim Bilgileri */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
                <p className="text-gray-700 mb-2">+90 542 623 07 24</p>
                {/* <p className="text-gray-700">+90 532 123 45 67</p> */}
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-posta</h3>
                <p className="text-gray-700 mb-2">info@akaegitim.com.tr</p>
                {/* <p className="text-gray-700">danismanlik@akaegitim.com</p> */}
              </div>

              {/* <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adres</h3>
                <p className="text-gray-700">Levent, Beyazıt Sk. No:12</p>
                <p className="text-gray-700">34330 Beşiktaş/İstanbul</p>
              </div> */}
            </div>

            {/* Çalışma Saatleri */}
            {/* <div className="mt-12 bg-gradient-to-br from-gray-50 to-primary/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Çalışma Saatleri</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div>
                  <p className="font-semibold text-gray-900">Pazartesi - Cuma</p>
                  <p className="text-gray-700">09:00 - 18:00</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Cumartesi</p>
                  <p className="text-gray-700">10:00 - 16:00</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Pazar günü kapalıyız</p>
            </div> */}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

