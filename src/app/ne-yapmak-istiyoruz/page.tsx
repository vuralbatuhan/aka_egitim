import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/sections/PageHero'
import Footer from '@/components/layout/Footer'
import { Card, CardBody } from '@heroui/react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

// ContactForm'u lazy load et
const LazyContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  ssr: true
})

export const metadata: Metadata = {
  title: 'Ne Yapmak İstiyoruz | Aka Eğitim’in Gelecek Vizyonu',
  description:
    'Aka Eğitim’in yurtdışı eğitim sektöründe erişilebilirlik, kalite ve inovasyon odaklı hedeflerini ve bu hedeflere ulaşmak için izlediği stratejileri keşfedin.',
  keywords: [
    'aka eğitim vizyonu',
    'yurtdışı eğitim hedeflerimiz',
    'aka eğitim stratejileri',
    'eğitim danışmanlığı vizyon',
  ],
  alternates: {
    canonical: '/ne-yapmak-istiyoruz',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/ne-yapmak-istiyoruz',
    title: 'Aka Eğitim’in Gelecek Hedefleri',
    description:
      'Öğrenciler için erişilebilir, kaliteli ve yenilikçi yurtdışı eğitim deneyimleri oluşturmak için yürüttüğümüz projeler ve stratejiler.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim vizyonu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aka Eğitim’in Gelecek Hedefleri',
    description:
      'Yurtdışı eğitimde sürdürülebilir başarı için odaklandığımız hedefler ve stratejik yol haritalarımız.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function NeYapmakIstiyoruz() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero 
          title="Ne Yapmak İstiyoruz"
          subtitle="Geleceği birlikte şekillendiriyoruz"
          description="Türkiye'nin en güvenilir yurtdışı eğitim danışmanlık firması olmak ve öğrencilerimizin hayallerini gerçeğe dönüştürmek vizyonumuz"
        />
        
        {/* Vizyonumuz */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Vizyonumuz
              </h2>
              <p className="text-2xl text-primary font-semibold mb-8">
                Türkiye&apos;nin En Güvenilir Yurtdışı Eğitim Danışmanlık Firması Olmak
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Her öğrencinin yurtdışında kaliteli eğitim alma hayalini gerçeğe dönüştürmek için 
                sürekli gelişen, yenilikçi ve güvenilir hizmet sunmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Hedeflerimiz */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Hedeflerimiz
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Vizyonumuzu gerçekleştirmek için koyduğumuz hedefler
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">01</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Erişilebilirlik
                  </h3>
                  <p className="text-gray-700">
                    Daha fazla öğrenciye ulaşarak yurtdışı eğitim fırsatlarını herkes için erişilebilir kılmak.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">02</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Kalite
                  </h3>
                  <p className="text-gray-700">
                    Partner üniversite ve kurum ağımızı genişleterek daha kaliteli eğitim seçenekleri sunmak.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">03</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    İnovasyon
                  </h3>
                  <p className="text-gray-700">
                    Teknolojik çözümlerle süreçleri kolaylaştırarak öğrenci deneyimini iyileştirmek.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">04</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Global Ağ
                  </h3>
                  <p className="text-gray-700">
                    Dünya çapında güçlü bir eğitim ağı kurarak öğrencilere daha fazla seçenek sunmak.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">05</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Destek
                  </h3>
                  <p className="text-gray-700">
                    Mezuniyet sonrası kariyer danışmanlığı ile öğrencilerimizin başarısını sürdürmek.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="text-4xl font-bold text-primary mb-4">06</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Toplumsal Etki
                  </h3>
                  <p className="text-gray-700">
                    Eğitim erişimini artırarak Türkiye&apos;nin global rekabet gücüne katkı sağlamak.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Nasıl Başaracağız? */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Nasıl Başaracağız?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Hedeflerimizi gerçekleştirmek için kullandığımız stratejiler
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Sürekli İyileştirme
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Hizmetlerimizi sürekli gözden geçirerek öğrenci geri bildirimlerini değerlendiriyor ve 
                      süreçlerimizi optimize ediyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Güçlü Ekip
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Alanında uzman, tutkulu ve öğrenci odaklı danışmanlarımızla en kaliteli hizmeti sunmaya devam ediyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Teknolojik Altyapı
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Modern teknolojilerle süreçleri dijitalleştirerek öğrencilerimize 7/24 erişilebilir platform sağlıyoruz.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Partner Ağı
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Dünya çapındaki tanınmış üniversite ve eğitim kurumlarıyla stratejik iş birlikleri kuruyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Güven ve Şeffaflık
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Açık iletişim, şeffaf fiyatlandırma ve güvenilir hizmet anlayışımızla sektörde fark yaratıyoruz.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Büyüme ve Gelişim
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Her gün daha fazla öğrenciye ulaşarak hizmet kapasitemizi artırıyor ve sektörde lider olmaya devam ediyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Başarıya Doğru */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Birlikte Başarıya Ulaşalım
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Yurtdışı eğitim yolculuğunuzda yanınızdayız. Hayallerinizi gerçeğe dönüştürmek için 
              bugün bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-50 transition-colors"
              >
                Ücretsiz Danışmanlık Al
              </a>
              <a
                href="tel:+902123456789"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Bizi Arayın
              </a>
            </div>
          </div>
        </section>
      </div>

      <LazyContactForm />
      <Footer />
    </main>
  )
}

