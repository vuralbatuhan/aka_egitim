import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const LazyContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  ssr: true
})

export const metadata: Metadata = {
  title: 'Almanya\'da Ücretsiz Üniversite Eğitimi Rehberi',
  description:
    'Almanya’da ücretsiz üniversite eğitiminin şartları, Uni-Assist başvuru süreci, vize, bloke hesap ve yaşam giderleri hakkında kapsamlı rehber.',
  keywords: [
    'almanya ücretsiz üniversite',
    'almanya üniversite başvurusu',
    'uni-assist başvuru rehberi',
    'almanya öğrenci vizesi',
    'almanya yaşam maliyeti',
  ],
  alternates: {
    canonical: '/blog/almanya-ucretsiz-universite',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/blog/almanya-ucretsiz-universite',
    type: 'article',
    title: 'Almanya\'da Ücretsiz Üniversite Eğitimi Rehberi',
    description:
      'Başvuru şartları, dil gereklilikleri, bloke hesap ve yaşam maliyetleri dahil Almanya’da ücretsiz üniversite eğitimi için bilmeniz gerekenler.',
    publishedTime: '2024-12-10T08:00:00+03:00',
    modifiedTime: '2024-12-10T08:00:00+03:00',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Almanya ücretsiz üniversite rehberi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Almanya\'da Ücretsiz Üniversite Eğitimi Rehberi',
    description:
      'Almanya’da ücretsiz üniversite okumak için başvuru adımları, gereken belgeler ve maliyet detayları.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function AlmanyaUcretsizUniversite() {
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
            headline: "Almanya'da Ücretsiz Üniversite Eğitimi Rehberi",
            description:
              "Almanya'da ücretsiz üniversite eğitimi almak için başvuru şartları, dil gereksinimleri, Uni-Assist süreçleri ve yaşam maliyetleri.",
            datePublished: '2024-12-10T08:00:00+03:00',
            dateModified: '2024-12-10T08:00:00+03:00',
            mainEntityOfPage: 'https://akaegitim.com.tr/blog/almanya-ucretsiz-universite',
            author: {
              '@type': 'Organization',
              name: 'Aka Eğitim',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Aka Eğitim',
              logo: {
                '@type': 'ImageObject',
                url: 'https://akaegitim.com.tr/logo.jpg',
              },
            },
            image: 'https://akaegitim.com.tr/logo.jpg',
            inLanguage: 'tr-TR',
          }),
        }}
      />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero 
          title="Almanya'da Ücretsiz Üniversite Eğitimi"
          subtitle="Kaliteli eğitim, sıfır öğrenim ücreti ve parlak bir gelecek"
          description="Almanya üniversite sistemi hakkında bilmeniz gerekenler"
        />
        
        {/* Blog İçeriği */}
        <article className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-sm text-gray-500 mb-8">
                <span>10 Aralık 2024</span> • <span>Yazar: Eğitim Danışmanları</span> • <span>12 dakika okuma</span>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Almanya Neden Ücretsiz Eğitim Sunuyor?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Almanya, 2014 yılında uluslararası öğrenciler için öğrenim ücretini kaldırmış, 
                  eğitimi temel bir hak olarak görmüştür. Baden-Württemberg eyaleti dışında tüm devlet 
                  üniversitelerinde öğrenim ücreti alınmamaktadır.
                </p>
                <p className="text-lg text-gray-700">
                  Bu sayede dünyanın her yerinden öğrenciler, ücretsiz ve yüksek kaliteli eğitim alma 
                  fırsatına sahip oluyor.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Başvuru Süreci ve Gereksinimler
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                1. Dil Gereksinimleri
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Almanca eğitim almak için dil yeterliliğinizi kanıtlamanız gerekir:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li><strong>TestDaF:</strong> En yaygın sınav, TDN 4 seviyesi istenir</li>
                <li><strong>DSH:</strong> Üniversite tarafından düzenlenir, DSH-2/3 geçerlidir</li>
                <li><strong>Goethe-Institut:</strong> C1 seviyesi sertifikası kabul edilir</li>
                <li><strong>IELTS/TOEFL:</strong> İngilizce programlar için (bazı üniversiteler)</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-2">💡 İpucu:</h4>
                <p className="text-blue-800">
                  Türkiye&apos;den başvuru yapmadan önce dil hazırlık kursu almak mantıklıdır. 
                  Almanya&apos;da da bir yıl hazırlık eğitimi (Studienkolleg) alınabilir.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                2. Akademik Gereksinimler
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Türkiye&apos;den direkt üniversiteye başvuru için Abitur eşdeğeri diploma gerekir:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Lise diploması geçerlilik süresi: 2020 sonrası mezunlar</li>
                <li>Kamu üniversitelerinde 1 yıllık hazırlık (Studienkolleg) gerekebilir</li>
                <li>Not ortalaması: Minimum 2.5 (iyi üniversiteler için daha yüksek gerekebilir)</li>
                <li>Ayrıca bazı programlar için SAT, AP gibi ek sınavlar istenebilir</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                3. Uni-Assist Başvuru Sistemi
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Çoğu Almanya üniversitesi için başvurular Uni-Assist üzerinden yapılır:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Uni-Assist merkezi başvuru platformudur</li>
                <li>Başvuru ücreti: İlk başvuru €75, her ek başvuru €30</li>
                <li>Tüm belgelerin noter onaylı tercümesi gerekir</li>
                <li>Başvuru süresi genellikle Nisan-Temmuz aylarıdır</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Maliyetler
              </h2>
              
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8 mb-8 border-2 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
                  Almanya&apos;da Eğitim Maliyeti
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Öğrenim Ücreti</h4>
                    <p className="text-3xl font-bold text-green-600 mb-2">€0/yıl</p>
                    <p className="text-sm text-gray-600 mb-4">Devlet üniversiteleri (Baden-Württemberg hariç)</p>
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-700">Semester ücreti: €150-€400/dönem</p>
                      <p className="text-xs text-gray-600">Toplu taşıma kartı dahil</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Yaşam Maliyeti</h4>
                    <p className="text-3xl font-bold text-blue-600 mb-2">€800-€1,200/ay</p>
                    <p className="text-sm text-gray-600 mb-4">Şehre göre değişir</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Konaklama: €300-€600/ay</p>
                      <p>• Yemek: €200-€300/ay</p>
                      <p>• Ulaşım: Semester ücreti dahil</p>
                      <p>• Diğer: €150-€300/ay</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                Bloke Hesap (Blocked Account)
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Vize başvurusu için yeterli finansal kaynağınızı kanıtlamanız gerekir:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>2024 için gerekli tutar: €11,208/yıl (yaklaşık 1,000 TL)</li>
                <li>Hesap Deutsche Bank, Sparkasse veya Fintiba&apos;da açılabilir</li>
                <li>Her ay €934 çekilebilir</li>
                <li>Bu parayı Almanya&apos;ya girmeden önce yatırmanız gerekir</li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="font-bold text-orange-900 mb-2">⚠️ Önemli:</h4>
                <p className="text-orange-800">
                  Baden-Württemberg eyaletindeki üniversiteler için yıllık €1,500 öğrenim ücreti alınır. 
                  Diğer eyaletlerde ücretsizdir.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Vize Süreci
              </h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">1. Student Visa (Öğrenci Vizesi)</h4>
                  <p className="text-gray-700">
                    Kabul mektubu aldıktan sonra Almanya Konsolosluğu&apos;na vize başvurusu yapılır. 
                    Süreç yaklaşık 8-12 hafta sürer.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">2. Gereksinimler</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Kabul mektubu (Zulassungsbescheid)</li>
                    <li>Bloke hesap kanıtı veya sponsor mektubu</li>
                    <li>Dil sertifikası</li>
                    <li>Sağlık sigortası (Almanya&apos;da geçerli)</li>
                    <li>Pasaport ve fotoğraflar</li>
                    <li>Evrakların noter onaylı tercümesi</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Çalışma İzni ve Staj İmkanları
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Almanya&apos;da öğrenim gören uluslararası öğrenciler:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Haftada maksimum 20 saat çalışabilir</li>
                <li>Tatil dönemlerinde tam zamanlı çalışma izni vardır</li>
                <li>Minimum ücret: €12/saat (2024)</li>
                <li>Yılda 120 tam gün veya 240 yarım gün çalışılabilir</li>
                <li>Mezuniyet sonrası 18 ay oturma izni verilir</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Konaklama Seçenekleri
              </h2>
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Studentenwohnheim (Üniversite Yurdu)</h4>
                  <p className="text-gray-700 mb-2">En ekonomik seçenek. Aylık €200-€500 arası.</p>
                  <p className="text-sm text-gray-600">• Odalar genellikle küçük ve paylaşımlı banyoludur</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">WG (Wohngemeinschaft)</h4>
                  <p className="text-gray-700 mb-2">Diğer öğrencilerle paylaşımlı ev. €300-€700/ay.</p>
                  <p className="text-sm text-gray-600">• En popüler konaklama türü, sosyal yaşam sunar</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-gray-900 mb-2">Özel Yurt</h4>
                  <p className="text-gray-700 mb-2">Modern tesisler, özel banyolar. €400-€800/ay.</p>
                  <p className="text-sm text-gray-600">• Daha konforlu ama maliyetli</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                En Popüler Üniversiteler ve Programlar
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Mühendislik</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• RWTH Aachen University</li>
                    <li>• Technical University of Munich</li>
                    <li>• University of Stuttgart</li>
                    <li>• Karlsruhe Institute of Technology</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">İşletme</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• WHU - Otto Beisheim School</li>
                    <li>• Frankfurt School of Finance</li>
                    <li>• University of Mannheim</li>
                    <li>• ESMT Berlin</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Tıp</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Charité - Berlin</li>
                    <li>• LMU Munich</li>
                    <li>• Heidelberg University</li>
                    <li>• University of Bonn</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Bilgisayar Bilimleri</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Saarland University</li>
                    <li>• Technical University of Berlin</li>
                    <li>• University of Freiburg</li>
                    <li>• University of Hamburg</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-turquoise-50 to-blue-50 rounded-2xl p-8 my-12 border border-turquoise-200">
                <h3 className="text-2xl font-bold text-turquoise-900 mb-4">
                  Sonuç ve Tavsiyeler
                </h3>
                <p className="text-lg text-turquoise-800 mb-4">
                  Almanya, kaliteli eğitim, ücretsiz öğrenim ve mezuniyet sonrası iş fırsatları 
                  sunduğu için uluslararası öğrenciler için ideal bir destinasyondur.
                </p>
                <p className="text-lg text-turquoise-800">
                  Başvuru süreci zahmetli görünebilir, ancak doğru planlama ve profesyonel destekle 
                  bu süreci başarıyla tamamlayabilirsiniz. Erken başvuru ve iyi hazırlık anahtarınızdır.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Almanya Üniversite Başvurunuz İçin Destek Alın
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Uni-Assist başvurularından bloke hesap açılışına, vize süreçlerinden yerleşime kadar her adımda yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="px-8 py-4 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-50 transition-colors"
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

