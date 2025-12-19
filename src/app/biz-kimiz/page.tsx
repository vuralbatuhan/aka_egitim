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
  title: 'Biz Kimiz | Aka Eğitim Ekibi ve Danışmanlık Yaklaşımı',
  description:
    'Aka Eğitim ekibinin misyonu, değerleri ve yurtdışı eğitim deneyimi. Öğrencilerimize sunduğumuz danışmanlık modeli ve başarılarımız hakkında bilgi alın.',
  keywords: [
    'aka eğitim ekibi',
    'yurtdışı eğitim danışmanları',
    'aka eğitim misyon',
    'aka eğitim değerler',
  ],
  alternates: {
    canonical: '/biz-kimiz',
  },
  openGraph: {
    url: 'https://www.akaegitim.com.tr/biz-kimiz',
    title: 'Aka Eğitim Ekibi | Biz Kimiz',
    description:
      'Yurtdışı eğitim danışmanlığında uzmanlaşmış ekibimizi, çalışma prensiplerimizi ve öğrenci başarılarımızı keşfedin.',
    images: [
      {
        url: 'https://www.akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim danışmanlık ekibi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aka Eğitim Danışmanları | Biz Kimiz',
    description:
      'Deneyimli yurtdışı eğitim danışmanlarımız ile tanışın ve öğrenci odaklı yaklaşımımızı keşfedin.',
    images: ['https://www.akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function BizKimiz() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero
          title="Biz Kimiz"
          subtitle="Yurtdışı eğitim konusunda güvenilir partneriniz"
          description="Öğrencilerimizin hayallerini gerçeğe dönüştürmek için çalışan deneyimli bir ekibiz"
        />

        {/* Misyon ve Değerler Bölümü */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Misyonumuz
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Öğrencilerimizin yurtdışında en kaliteli eğitimi almalarını sağlamak ve kariyer hedeflerine ulaşmalarına yardımcı olmak misyonumuzdur.
                </p>
                <p className="text-lg text-gray-700">
                  Her öğrencinin benzersiz olduğunu bilerek, kişiye özel eğitim planları ve kapsamlı danışmanlık hizmeti sunuyoruz.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Değerlerimiz
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Güvenilirlik</h3>
                      <p className="text-gray-700">15 yıllık deneyimimiz ve şeffaf iletişimimizle öğrencilerimize güven sağlıyoruz.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Öğrenci Odaklılık</h3>
                      <p className="text-gray-700">Her öğrencinin ihtiyacına göre kişiselleştirilmiş çözümler sunuyoruz.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mükemmellik</h3>
                      <p className="text-gray-700">Sürekli gelişim anlayışımızla en kaliteli hizmeti sunmayı hedefliyoruz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ekibimiz Bölümü */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Ekip
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Alanında uzman danışmanlarımız ve destek ekibimiz sizlerle
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      Uzman Danışmanlar
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Her biri kendi alanında uzmanlaşmış, deneyimli danışmanlarımız öğrencilerimize en doğru yönlendirmeyi yapar.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      Vize Uzmanları
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Vize başvuru süreçlerinde yılların deneyimine sahip uzmanlarımız, başvurunuzun kabul edilmesi için her detayı takip eder.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      Destek Ekibi
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    7/24 ulaşılabilir destek ekibimiz, öğrencilerimizin her anında yanında ve her sorularına anında cevap verir.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Başarılarımız */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Başarılarımız
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">5000+</div>
                <div className="text-gray-600">Başarılı Öğrenci</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600">Partner Kurum</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">%98</div>
                <div className="text-gray-600">Memnuniyet Oranı</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <LazyContactForm />
      <Footer />
    </main>
  )
}

