import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const LazyContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  ssr: true
})

export const metadata: Metadata = {
  title: "İngiltere'de Üniversite Eğitimi Rehberi",
  description:
    'İngiltere’de üniversite eğitimi almak için UCAS başvurusu, dil yeterlilikleri, vize gereksinimleri, burslar ve maliyetler hakkında kapsamlı rehber.',
  keywords: [
    'ingiltere üniversite başvurusu',
    'ucas rehberi',
    'ingiltere öğrenci vizesi',
    'ingiltere üniversite maliyetleri',
    'aka eğitim ingiltere',
  ],
  alternates: {
    canonical: '/blog/ingiltere-universite-rehberi',
  },
  openGraph: {
    url: 'https://www.akaegitim.com.tr/blog/ingiltere-universite-rehberi',
    type: 'article',
    title: "İngiltere'de Üniversite Eğitimi Rehberi",
    description:
      'UCAS başvurusu, dil gereksinimleri, vize ve maliyetler dahil İngiltere’de üniversite okumak için bilmeniz gerekenler.',
    publishedTime: '2024-12-15T08:00:00+03:00',
    modifiedTime: '2024-12-15T08:00:00+03:00',
    images: [
      {
        url: 'https://www.akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'İngiltere üniversite rehberi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "İngiltere'de Üniversite Eğitimi Rehberi",
    description:
      'İngiltere’de üniversite eğitimi planlayan öğrenciler için başvuru süreçleri, maliyetler ve konaklama seçenekleri.',
    images: ['https://www.akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function IngiltereUniversiteRehberi() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: "İngiltere'de Üniversite Eğitimi Rehberi",
            description:
              'İngiltere’de üniversite eğitimi için UCAS başvurusu, dil gereksinimleri, vize ve maliyetler üzerine kapsamlı rehber.',
            datePublished: '2024-12-15T08:00:00+03:00',
            dateModified: '2024-12-15T08:00:00+03:00',
            mainEntityOfPage: 'https://www.akaegitim.com.tr/blog/ingiltere-universite-rehberi',
            author: {
              '@type': 'Organization',
              name: 'Aka Eğitim',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Aka Eğitim',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.akaegitim.com.tr/logo.jpg',
              },
            },
            image: 'https://www.akaegitim.com.tr/logo.jpg',
            inLanguage: 'tr-TR',
          }),
        }}
      />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero
          title="İngiltere'de Üniversite Eğitimi Rehberi"
          subtitle="Köklü eğitim geleneği ve dünya çapında tanınan diplomalar"
          description="İngiltere üniversiteleri hakkında bilmeniz gerekenler"
        />

        {/* Blog İçeriği */}
        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-sm text-gray-500 mb-8">
                <span>15 Aralık 2024</span> • <span>Yazar: Eğitim Danışmanları</span> • <span>10 dakika okuma</span>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Neden İngiltere?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  İngiltere, dünya çapında en prestijli üniversitelere ev sahipliği yapan ülkelerden biridir.
                  University of Oxford, University of Cambridge, Imperial College London gibi kurumlar
                  global eğitim sektöründe lider konumdadır.
                </p>
                <p className="text-lg text-gray-700">
                  İngiltere üniversitelerinde aldığınız diploma, iş dünyasında yüksek değer görür ve
                  kariyer fırsatlarınızı önemli ölçüde artırır.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Başvuru Süreci
              </h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                1. UCAS Başvurusu
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                İngiltere üniversitelerine başvuru yapmak için UCAS (Universities and Colleges Admissions Service)
                sistemi kullanılır. Bu sistem aracılığıyla en fazla 5 üniversite ve program seçeneği sunabilirsiniz.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Başvurular genellikle Eylül-Aralık ayları arasında açılır</li>
                <li>A-Level veya eşdeğer diploma gereklidir</li>
                <li>IELTS/TOEFL dil yeterlilik belgesi şarttır</li>
                <li>Motivasyon mektubu ve referans mektupları gerekir</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                2. Eğitim Sistemi
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                İngiltere üniversite sistemi 3 yıl süren lisans eğitimi, 1 yıl master eğitimi sunar.
                Bu yoğun program, 4 yıllık sistemlere göre daha hızlı mezun olmanızı sağlar.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-2">Önemli Not:</h4>
                <p className="text-blue-800">
                  İngiltere üniversitelerinde öğrenim süresi genellikle İskoçya hariç 3 yıldır.
                  İskoçya&apos;da ise 4 yıllık programlar yaygındır.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                3. Dil Gereksinimleri
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                İngilizce eğitim almak için yeterli dil seviyesine sahip olmanız şarttır.
                Genel gereksinimler:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>IELTS: Genellikle 6.0-7.0 arası (programa göre değişir)</li>
                <li>TOEFL: 80-100 arası puan gerekir</li>
                <li>Bazı üniversiteler kendi dil sınavlarını kabul eder</li>
                <li>Foundation yılı ile dil eksiğinizi tamamlayabilirsiniz</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Maliyetler
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2">Öğrenim Ücreti</h4>
                  <p className="text-2xl font-bold text-green-700 mb-2">£9,250-£40,000/yıl</p>
                  <p className="text-sm text-green-800">Programa göre değişir</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">Yaşam Maliyeti</h4>
                  <p className="text-2xl font-bold text-blue-700 mb-2">£10,000-£15,000/yıl</p>
                  <p className="text-sm text-blue-800">Şehir ve konaklamaya göre</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Toplam Yıllık</h4>
                  <p className="text-2xl font-bold text-purple-700 mb-2">£19,000-£55,000</p>
                  <p className="text-sm text-purple-800">Ortalama maliyet</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                Burs İmkanları
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                İngiltere üniversiteleri uluslararası öğrenciler için çeşitli burs imkanları sunar:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Üniversite özel bursları (akademik başarıya göre)</li>
                <li>Chevening Bursları (hükümet desteği)</li>
                <li>Marshall Bursları (seçkin öğrenciler için)</li>
                <li>Foundation bursları</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Vize Süreci
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                İngiltere&apos;de eğitim almak için Student Visa başvurusu yapmalısınız.
                Süreç yaklaşık 2-3 ay sürebilir.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 mb-8 border border-orange-200">
                <h4 className="font-bold text-orange-900 mb-4">Vize Gereksinimleri:</h4>
                <ul className="list-disc list-inside space-y-2 text-orange-900">
                  <li>CAS (Confirmation of Acceptance for Studies) belgesi</li>
                  <li>Yeterli finansal kaynak kanıtı (Öğrenim + Yaşam maliyeti)</li>
                  <li>Dil yeterlilik belgesi</li>
                  <li>Sağlık sigortası</li>
                  <li>Pasaport ve fotoğraflar</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Konaklama Seçenekleri
              </h2>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Üniversite Yurtları</h4>
                  <p className="text-gray-700">
                    Kampüs içinde veya yakınında konforlu, güvenli konaklama. £100-£200/hafta arası fiyatlar.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Özel Yurtlar</h4>
                  <p className="text-gray-700">
                    Modern tesisler, genellikle özel banyolu odalar. £150-£300/hafta arası.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Paylaşımlı Ev</h4>
                  <p className="text-gray-700">
                    Diğer öğrencilerle paylaşımlı ev kiralama. £80-£150/hafta arası fiyatlar.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Çalışma İzni
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                İngiltere&apos;de öğrenim gören uluslararası öğrenciler haftada maksimum 20 saat yarı zamanlı çalışabilir.
                Tatil dönemlerinde tam zamanlı çalışma izni verilir.
              </p>

              <div className="bg-gradient-to-br from-turquoise-50 to-blue-50 rounded-2xl p-8 my-12 border border-turquoise-200">
                <h3 className="text-2xl font-bold text-turquoise-900 mb-4">
                  Sonuç
                </h3>
                <p className="text-lg text-turquoise-800 mb-4">
                  İngiltere&apos;de üniversite eğitimi almak, akademik kariyeriniz için büyük bir adımdır.
                  Köklü eğitim geleneği, dünya çapında tanınan diplomalar ve kültürel zenginlik
                  bu ülkeyi öğrenciler için cazip kılar.
                </p>
                <p className="text-lg text-turquoise-800">
                  Başvuru sürecinden mezuniyete kadar her aşamada profesyonel destek almak,
                  başarınızı artıracaktır.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              İngiltere Üniversite Başvurunuz İçin Bize Ulaşın
            </h2>
            <p className="text-xl mb-8 opacity-90">
              UCAS başvuru süreçlerinde, vize işlemlerinde ve tüm danışmanlık hizmetlerinde yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-50 transition-colors"
              >
                Ücretsiz Danışmanlık
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

