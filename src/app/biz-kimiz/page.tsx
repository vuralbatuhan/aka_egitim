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
  title: 'Biz Kimiz | AKA Eğitim - Ayhan KORKMAZ Akademi | Öğretmen Rehberliğinde Yurtdışı Eğitim',
  description:
    'AKA–Ayhan KORKMAZ Akademi: Azim, Kararlılık ve Ayrıcalık ilkeleriyle öğretmen rehberliğinde yurtdışı eğitim. Öğrencilerimize evden havalimanına öğretmen eşliğinde güvenli eğitim yolculuğu sunuyoruz.',
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
          subtitle="AKA – Ayhan KORKMAZ Akademi"
          description="Öğretmen rehberliğinde yurtdışı eğitim hareketliliğinin öncüsü. Azim, Kararlılık ve Ayrıcalık ilkeleriyle öğrencilerimizin güvenli eğitim yolculuğunu sağlıyoruz."
        />

        {/* Misyon ve Değerler Bölümü */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Kimiz?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  AKA–Ayhan KORKMAZ Akademi; <strong>&ldquo;Konu ülkenin geleceği ise özne eğitimdir.&rdquo;</strong> ilkesiyle yola çıkan öğretmenlerin kurduğu öncü bir eğitim oluşumudur.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Azim, Kararlılık ve Ayrıcalık</strong> ilkelerini güven temeliyle birleştiren eğitimciler tarafından dayanışma ruhuyla hayata geçirilmiştir.
                </p>
                <p className="text-lg text-gray-700">
                  Bünyemiz, uluslararası öğrenci ve öğretmen hareketliliğini bizzat eğitimci bakış açısıyla yöneten profesyonellerden oluşmaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  AKA Güvencesi
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Öğretmen Rehberliği</h3>
                      <p className="text-gray-700">Sürece başladığı andan itibaren öğrencimize atanan bir meslek rehberi öğretmen ile ilerler.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Evden Havalimanına Eşlik</h3>
                      <p className="text-gray-700">Türkiye&apos;de öğretmeni tarafından evinden alınıp havalimanından uğurlanır; gittiği ülkede Türk öğretmen tarafından karşılanır.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Asla Yalnız Değil</h3>
                      <p className="text-gray-700">Kayıt ve konaklama dahil tüm süreçlerde öğrencimiz asla yalnız yürümez. Öğretmen eşliğinde her adım takip edilir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Faaliyet Alanlarımız
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Uluslararası eğitim hareketliliğini üç ana eksende yönetiyoruz
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      Dil Okulu ve Gelişim
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Ortaöğretim öğrencilerimiz için akran öğrenmesi ve özgüven gelişimini merkeze alan, öğretmen gözetiminde kısa süreli dil okulu programları. Program sonunda detaylı &ldquo;Gelişim Raporu&rdquo; sunulur.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      Akademik Danışmanlık
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Hem yurt dışında üniversite okumak isteyen Türk öğrencilere hem de Türkiye&apos;de eğitim almak isteyen uluslararası öğrencilere hedeflerine uygun üniversite yerleşimi için rehberlik.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      Öğretmen Hareketliliği
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Öğretmenlerimizin mesleki gelişimleri için uzmanlar tarafından hazırlanmış tematik gelişim programları ve uluslararası geçerliliğe sahip sertifika programları yürütüyoruz.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

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

