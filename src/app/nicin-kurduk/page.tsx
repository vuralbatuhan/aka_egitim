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
  title: 'Niçin Kurduk | Aka Eğitim’in Kuruluş Hikayesi',
  description:
    'Aka Eğitim’in yurtdışı eğitim danışmanlığındaki boşluğu doldurmak için nasıl kurulduğunu, öğrenci odaklı vizyonunu ve sunduğu çözümleri öğrenin.',
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
    url: 'https://akaegitim.com.tr/nicin-kurduk',
    title: 'Aka Eğitim Neden Kuruldu?',
    description:
      'Kuruluş hikayemiz, öğrenci odaklı hizmet yaklaşımımız ve yurtdışı eğitimde sunduğumuz çözümler.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
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
    images: ['https://akaegitim.com.tr/logo.jpg'],
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
          subtitle="Yurtdışı eğitim alanında fark yaratan bir vizyon"
          description="Öğrencilerimizin yurtdışı eğitim yolculuklarını daha kolay ve başarılı kılmak için kurulduk"
        />
        
        {/* Kuruluş Hikayesi */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Hikayemiz
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                15 yıl önce, kendimiz de yurtdışı eğitim deneyimi yaşamış bir ekip olarak, Türkiye&apos;deki öğrencilerin yaşadığı zorlukları bizzat deneyimledik.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Yurtdışı eğitim süreçlerinde öğrencilerin şeffaf bilgi alamaması, güvenilir danışmanlık hizmeti bulamaması ve süreçlerin karmaşık olması bizleri bu alanda bir fark yaratmaya itti.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Bugün, binlerce öğrencinin hayallerini gerçeğe dönüştürerek Türkiye&apos;nin en güvenilir yurtdışı eğitim danışmanlık firmalarından biri olmanın gururunu yaşıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Neden Bu İhtiyaç Vardı? */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Niçin Bu İhtiyaç Vardı?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      Karmaşık Süreçler
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Yurtdışı eğitim başvuruları, vize işlemleri ve konaklama süreçleri öğrenciler için oldukça karmaşıktı. 
                    Her aşamada farklı firmalarla çalışma zorunluluğu öğrencileri zorluyordu.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      Bilgi Eksikliği
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Öğrenciler güvenilir, güncel ve şeffaf bilgiye erişemiyordu. 
                    Yanlış bilgilendirme sonucu harcanan zaman ve kaybedilen fırsatlar nedeniyle hayaller gerçekleşmiyordu.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      Güven Sorunu
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Sektörde güvenilir ve şeffaf hizmet veren kurumların eksikliği, öğrencileri endişelendiriyordu. 
                    Gizli maliyetler, tutarsız hizmet kalitesi sorunlara yol açıyordu.
                  </p>
                </CardBody>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      Kişiselleştirme Eksikliği
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Her öğrencinin hedefi, bütçesi ve tercihleri farklı olmasına rağmen standart paketler sunuluyordu. 
                    Kişiye özel danışmanlık yaklaşımı eksikti.
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

