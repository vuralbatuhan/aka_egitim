import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const LazyContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  ssr: true
})

export const metadata: Metadata = {
  title: 'Yurtdışında Dil Okulu Seçimi Rehberi',
  description:
    'Akreditasyon, program türleri, şehir ve konaklama seçenekleriyle yurtdışında doğru dil okulunu seçmek için bilmeniz gereken tüm detaylar.',
  keywords: [
    'dil okulu seçimi',
    'yurtdışı dil okulu rehberi',
    'dil okulu fiyatları',
    'dil okulu akreditasyon',
    'aka eğitim dil okulu önerisi',
  ],
  alternates: {
    canonical: '/blog/dil-okulu-secimi',
  },
  openGraph: {
    url: 'https://www.akaegitim.com.tr/blog/dil-okulu-secimi',
    type: 'article',
    title: 'Yurtdışında Dil Okulu Seçimi Rehberi',
    description:
      'Akreditasyon, konum, maliyet ve program türlerine göre en uygun dil okulunu seçin.',
    publishedTime: '2024-12-05T08:00:00+03:00',
    modifiedTime: '2024-12-05T08:00:00+03:00',
    images: [
      {
        url: 'https://www.akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Dil okulu seçimi rehberi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yurtdışında Dil Okulu Seçimi Rehberi',
    description:
      'Yurtdışında dil okulu planlarken dikkat edilmesi gereken kriterleri öğrenin.',
    images: ['https://www.akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function DilOkuluSecimi() {
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
            headline: 'Yurtdışında Dil Okulu Seçimi Rehberi',
            description:
              'Akreditasyon, program türleri, bütçe planlaması ve konaklama seçenekleriyle doğru dil okulunu seçmek için detaylı rehber.',
            datePublished: '2024-12-05T08:00:00+03:00',
            dateModified: '2024-12-05T08:00:00+03:00',
            mainEntityOfPage: 'https://www.akaegitim.com.tr/blog/dil-okulu-secimi',
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
          title="Yurtdışında Dil Okulu Seçimi"
          subtitle="Doğru karar vermek için bilmeniz gereken her şey"
          description="Dil okulu seçiminde dikkat edilmesi gerekenler"
        />

        {/* Blog İçeriği */}
        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-sm text-gray-500 mb-8">
                <span>5 Aralık 2024</span> • <span>Yazar: Eğitim Danışmanları</span> • <span>8 dakika okuma</span>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Neden Yurtdışında Dil Öğrenmeliyim?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Yurtdışında dil eğitimi almanın en büyük avantajı, dili ana vatanında öğrenmenizdir.
                  Etrafınızda sürekli hedef dili konuşan insanlarla yaşamanız, dil gelişiminizi
                  hızlandırır ve konuşma pratiği yapma fırsatı sunar.
                </p>
                <p className="text-lg text-gray-700">
                  Ayrıca kültürel deneyim, yeni arkadaşlıklar ve uluslararası bir bakış açısı kazanmak
                  gibi önemli artıları vardır.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                1. Akreditasyon ve Kalite
              </h2>

              <p className="text-lg text-gray-700 mb-4">
                Dil okulu seçerken en önemli faktörlerden biri okulun akreditasyonudur:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3">British Council</h4>
                  <p className="text-sm text-blue-800">
                    İngiltere&apos;deki İngilizce dil okulları için en prestijli akreditasyondur.
                    Kalite, öğretim ve tesisler standartlara uygunluğu garanti eder.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-green-900 mb-3">EAQUALS</h4>
                  <p className="text-sm text-green-800">
                    Avrupa genelinde dil eğitim kalitesini garanti eden önemli bir akreditasyondur.
                    40+ ülkede 130+ okul bu standartlara sahiptir.
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <h4 className="font-bold text-yellow-900 mb-3">IALC</h4>
                  <p className="text-sm text-yellow-800">
                    Independent Association of Language Centres - Bağımsız dil merkezleri ağı.
                    Öğretim kalitesini sürekli denetler.
                  </p>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h4 className="font-bold text-red-900 mb-3">ACELS</h4>
                  <p className="text-sm text-red-800">
                    İrlanda&apos;da İngilizce eğitim sunan okulları denetleyen resmi kurumdur.
                    İrlanda için önemli bir referanstır.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-bold text-orange-900 mb-2">⚠️ Önemli Uyarı</h4>
                <p className="text-orange-800">
                  Akredite olmayan okullardan kaçının! Bu okullar genellikle düşük kaliteli eğitim sunar,
                  hatta bazıları vize başvurularında sorun yaratabilir.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                2. Konum ve Şehir Seçimi
              </h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                Başkent mi Küçük Şehir mi?
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Her iki seçenek de artı ve eksileriyle gelir:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-4">🏙️ Büyük Şehirler</h4>
                  <p className="text-blue-900 mb-3 font-semibold">Artılar:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 mb-4 text-sm">
                    <li>Daha fazla sosyal aktivite</li>
                    <li>Kültürel etkinlikler</li>
                    <li>Toplu taşıma imkanları</li>
                    <li>Uluslararası atmosfer</li>
                    <li>Kariyer fırsatları</li>
                  </ul>
                  <p className="text-blue-900 mb-2 font-semibold">Eksiler:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Yüksek yaşam maliyeti</li>
                    <li>Yoğun ve stresli</li>
                    <li>Türkçe konuşma fırsatı daha çok</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-900 mb-4">🏘️ Küçük Şehirler</h4>
                  <p className="text-green-900 mb-3 font-semibold">Artılar:</p>
                  <ul className="list-disc list-inside space-y-1 text-green-800 mb-4 text-sm">
                    <li>Daha ucuz yaşam maliyeti</li>
                    <li>Daha az Türkçe konuşma</li>
                    <li>Daha sakin ortam</li>
                    <li>Doğa ve kültür</li>
                    <li>Daha hızlı dil gelişimi</li>
                  </ul>
                  <p className="text-green-900 mb-2 font-semibold">Eksiler:</p>
                  <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                    <li>Daha az aktivite</li>
                    <li>Eğlence seçenekleri sınırlı</li>
                    <li>İş imkanları az</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                3. Program Türleri
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">📚 Genel İngilizce (General English)</h4>
                  <p className="text-gray-700">
                    Haftalık 15-20 saat ders. Temel dil becerileri (okuma, yazma, dinleme, konuşma)
                    geliştirilir. Başlangıç seviyesinden ileri seviyeye kadar herkese uygun.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">💡 Kimler için: İlk kez yurtdışında dil eğitimi alanlar</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">🎯 IELTS/TOEFL Hazırlık</h4>
                  <p className="text-gray-700">
                    Sınav tekniklerine odaklanan programlar. Haftalık 20-30 saat. Akademik sınavlara
                    hazırlık için ideal. Denemeler ve geri bildirim içerir.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">💡 Kimler için: Üniversiteye hazırlanan öğrenciler</p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">💼 İş İngilizcesi (Business English)</h4>
                  <p className="text-gray-700">
                    Profesyonel ortamda İngilizce kullanımına odaklanır. Sunum teknikleri, görüşme
                    becerileri, email yazımı gibi konular işlenir.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">💡 Kimler için: Kariyer odaklı profesyoneller</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">📖 Akademik Yıl (Academic Year)</h4>
                  <p className="text-gray-700">
                    24 hafta veya daha uzun süreli programlar. Genellikle indirimli fiyatlarla sunulur.
                    Kapsamlı dil gelişimi için ideal.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">💡 Kimler için: Uzun süreli dil eğitimi isteyenler</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                4. Sınıf Büyüklüğü ve Uluslararası Karışım
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Sınıf büyüklüğü dil öğrenim performansınızı doğrudan etkiler:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>İdeal sınıf:</strong> 8-12 öğrenci (maksimum 15)</li>
                <li><strong>Farklı ülkelerden öğrenciler:</strong> Türkçe konuşma fırsatını azaltır</li>
                <li><strong>Küçük sınıflar:</strong> Daha fazla bireysel ilgi ve pratik</li>
                <li><strong>Grup dersleri + Özel ders:</strong> Kombine programlar etkilidir</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                5. Maliyet ve Bütçe Planlaması
              </h2>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8 mb-8 border-2 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
                  Ortalama Maliyetler (4 hafta için)
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span className="text-gray-900">💷 İngiltere</span>
                    <span className="text-2xl font-bold text-green-600">£800-1,500</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span className="text-gray-900">🌍 Malta</span>
                    <span className="text-2xl font-bold text-green-600">€400-800</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span className="text-gray-900">🍀 İrlanda</span>
                    <span className="text-2xl font-bold text-green-600">€600-1,200</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span className="text-gray-900">🇨🇦 Kanada</span>
                    <span className="text-2xl font-bold text-green-600">CAD$800-1,500</span>
                  </div>
                </div>
                <p className="text-center text-sm text-green-800 mt-4">
                  * Fiyatlar program türüne, okula ve şehre göre değişir
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                Gizli Maliyetler
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Sadece ders ücretini değil, diğer maliyetleri de hesaba katın:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Kurs kayıt ücreti: €50-€150</li>
                <li>Malzeme ücreti: €30-€100</li>
                <li>Konaklama ayarlama ücreti: €50-€100</li>
                <li>Havalimanı karşılama: €50-€150</li>
                <li>Sağlık sigortası: €20-€50/ay</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-2">💡 İpucu:</h4>
                <p className="text-blue-800">
                  Erken rezervasyon yaparak %15-20 tasarruf edebilirsiniz. Akademik yıl programları
                  da haftalık maliyeti düşüren seçeneklerdendir.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                6. Konaklama Seçenekleri
              </h2>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">🏠 Aile Yanı (Homestay)</h4>
                  <p className="text-gray-700 mb-2">
                    Yerel bir aileyle kalma. Hedef dili pratik yapma şansı yüksek. Genellikle
                    yemek dahil. Haftalık £150-£350 arası.
                  </p>
                  <p className="text-sm text-gray-600">✓ Güvenli | ✓ Kültürel deneyim | △ Özgürlük sınırlı</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">🏫 Öğrenci Yurdu (Residence)</h4>
                  <p className="text-gray-700 mb-2">
                    Diğer öğrencilerle birlikte konaklama. Sosyal aktiviteler bol. Haftalık £150-£400.
                  </p>
                  <p className="text-sm text-gray-600">✓ Sosyal ortam | ✓ Özgürlük | ✓ Eğlence | ✗ Yemek yok</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">🏢 Özel Apartman</h4>
                  <p className="text-gray-700 mb-2">
                    Kendi alanınız, mutlak özgürlük. Diğer öğrencilerle paylaşabilirsiniz.
                    Haftalık £200-£600.
                  </p>
                  <p className="text-sm text-gray-600">✓ Tam özgürlük | ✓ Rahatlık | △ Daha az pratik | △ Maliyet</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                7. Önemli Kontroller
              </h2>

              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-red-900 mb-4">✅ Seçim Yapmadan Önce Sorun:</h3>
                <ul className="space-y-2 text-red-900">
                  <li>✓ Okul hangi akreditasyonlara sahip?</li>
                  <li>✓ Sınıflar ne kadar büyük? (Ortalama öğrenci sayısı)</li>
                  <li>✓ Öğrenciler hangi ülkelerden geliyor? (Türk oranı)</li>
                  <li>✓ Öğretmenler nitelikli mi? (sertifikaları var mı?)</li>
                  <li>✓ Tesisler nasıl? (kütüphane, bilgisayar, öğrenci salonu)</li>
                  <li>✓ Acil durum desteği var mı?</li>
                  <li>✓ Gerçek öğrenci yorumları ne diyor?</li>
                  <li>✓ İptal ve değişiklik politikası nedir?</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                8. Vize ve Belgeler
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Başvuru sırasında gerekli belgeler:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Pasaport (en az 6 ay geçerli)</li>
                <li>Vize başvuru formu</li>
                <li>Dil okulu kabul mektubu (CAS/Letter of Acceptance)</li>
                <li>Finansal kanıt (genellikle 3-6 aylık)</li>
                <li>Gerekirse sponsor mektubu</li>
                <li>Sağlık sigortası</li>
              </ul>

              <div className="bg-gradient-to-br from-turquoise-50 to-blue-50 rounded-2xl p-8 my-12 border border-turquoise-200">
                <h3 className="text-2xl font-bold text-turquoise-900 mb-4">
                  Sonuç: Doğru Dil Okulunu Bulmak
                </h3>
                <p className="text-lg text-turquoise-800 mb-4">
                  Doğru dil okulu seçimi, eğitim hedeflerinize, bütçenize ve kişilik yapınıza uygun
                  olmalıdır. Aceleci davranmayın, araştırın ve profesyonel danışmanlık alın.
                </p>
                <p className="text-lg text-turquoise-800">
                  Unutmayın: En pahalı okul en iyi okul demek değildir. Sizin ihtiyaçlarınıza uygun
                  olan okul, sizin için en iyi okuldur.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Size En Uygun Dil Okulunu Bulalım
            </h2>
            <p className="text-xl mb-8 opacity-90">
              15 yıllık deneyimimizle size en uygun programı önerelim. Başvurudan vizeye kadar her adımda destek sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-50 transition-colors"
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

