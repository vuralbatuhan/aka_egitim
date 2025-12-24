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
  title: 'Niçin Kurduk | AKA Eğitim Kuruluş Amacı - Atatürk Vizyonu',
  description:
    'AKA Eğitim, Atatürk\'ün "Kıvılcım olarak gönderiyorum, alev olarak dönmelisiniz" vizyonuyla kuruldu. Öğretmen rehberliğinde yurtdışı eğitim hareketliliğinin öncüsü.',
  keywords: [
    'aka eğitim niçin kuruldu',
    'yurtdışı eğitim kuruluş hikayesi',
    'aka eğitim vizyonu',
    'yurtdışı danışmanlık farkı',
  ],
  alternates: {
    canonical: '/nicin-kurduk',
  },
  openGraph: {
    url: 'https://www.akaegitim.com.tr/nicin-kurduk',
    title: 'Aka Eğitim Neden Kuruldu?',
    description:
      'Kuruluş hikayemiz, öğrenci odaklı hizmet yaklaşımımız ve yurtdışı eğitimde sunduğumuz çözümler.',
    images: [
      {
        url: 'https://www.akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim kuruluş hikayesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aka Eğitim Neden Kuruldu?',
    description:
      'Öğrencilere şeffaf ve özelleştirilmiş yurtdışı eğitim danışmanlığı sunmak amacıyla nasıl yola çıktığımızı keşfedin.',
    images: ['https://www.akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function NicinKurduk() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero
          title="Niçin Kurduk"
          subtitle="Atatürk'ün Vizyonuyla Yola Çıktık"
          description="Kıvılcım olarak gönderilen öğrencilerin, alev olarak dönmesi için öğretmen rehberliğinde güvenli eğitim yolculuğu sunmak üzere kurulduk"
        />

        {/* Kuruluş Hikayesi */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Kuruluş Amacımız
              </h2>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="text-xl text-gray-800 italic mb-4">
                  &ldquo;Sizleri birer kıvılcım olarak gönderiyorum, alevler olarak geri dönmelisiniz!&rdquo;
                </p>
                <p className="text-gray-700">
                  — Gazi Mustafa Kemal Atatürk (1924)
                </p>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Yol haritamız, Gazi Mustafa Kemal Atatürk&apos;ün 1924 yılında yurt dışına gönderilen öğrencilere hitaben söylediği bu sözüdür.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                <strong>Bu vizyonla;</strong> Yurt dışına gidecek her öğrencimizin, ülkesine katma değer sağlayacak donanımla ve özgüvenle geri dönmesini sağlamak,
                eğitim hareketliliğini öğretmen rehberliğinde pedagojik bir süreç olarak yürütmek için kurulduk.
              </p>
              <p className="text-xl text-gray-700">
                Öğrencilerimizi karakterlerine en uygun mesleklere ve okullara yönlendirerek, <strong>&ldquo;Yeni nesil sizin eserinizdir!&rdquo;</strong> düsturuyla
                üzerimize düşen sorumluluğu yerine getirmek misyonumuzdur.
              </p>
            </div>
          </div>
        </section>

        {/* Neden Bu İhtiyaç Vardı? */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Sistemimizin Temeli
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Sistemimiz; öğrencinin henüz yurt dışına çıkmadan tüm yetenek ve özellikleri ile tanınması esasına dayanır
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      Karakter Analizi
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Karakterine en uygun mesleki planlamanın yapılması için öğrenci detaylı olarak tanınır.
                    Her öğrenci benzersiz yetenekleri ile değerlendirilir.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      Doğru Yönlendirme
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Bu rotaya uygun okul tercihinin belirlenmesi ve eğitim süresince takibi sağlanır.
                    Öğretmen rehberliğinde en uygun programlar seçilir.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      Sürekli Takip
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Gençlerimizin ülkeleri adına bilinçli ve donanımlı bireyler olarak geri dönmeleri için
                    süreç boyunca öğretmen rehberliğinde takip edilir.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow border-l-4 border-primary">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      Öğretmen Eşliği
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Türkiye&apos;de evinden alınıp havalimanından uğurlanır; gittiği ülkede Türk öğretmen tarafından karşılanır.
                    Asla yalnız bırakılmaz.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Çözümümüz */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Çözümümüz
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Öğrenci odaklı, şeffaf ve kapsamlı hizmet anlayışı
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Şeffaf Fiyatlandırma</h3>
                <p className="text-gray-700">
                  Tüm maliyetleri baştan netleştiriyor, gizli ücret olmadan %100 şeffaf hizmet sunuyoruz.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kapsamlı Danışmanlık</h3>
                <p className="text-gray-700">
                  Başvurudan mezuniyete kadar tüm süreci yönetiyor, tek noktadan hizmet sunuyoruz.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Uzman Kadro</h3>
                <p className="text-gray-700">
                  Her ülke ve program konusunda uzmanlaşmış danışmanlarımız en doğru yönlendirmeyi yapar.
                </p>
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

