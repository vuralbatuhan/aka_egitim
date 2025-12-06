import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/sections/PageHero'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yurtdışında Üniversite Eğitimi ve Başvuru Danışmanlığı',
  description:
    'Almanya, İtalya, Belçika, Hollanda ve Kazakistan üniversite başvuruları için program seçimi, başvuru evrakları, burs ve vize süreçlerinde profesyonel danışmanlık.',
  keywords: [
    'yurtdışında üniversite',
    'ücretsiz üniversite eğitimi',
    'almanya üniversite başvurusu',
    'italya üniversite danışmanlığı',
    'hollanda lisans programları',
    'aka eğitim üniversite',
  ],
  alternates: {
    canonical: '/universite',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/universite',
    title: 'Yurtdışında Üniversite Eğitimi | Aka Eğitim',
    description:
      'Program seçimi, uni-assist başvuruları ve konaklama planlaması dahil yurtdışı üniversite eğitimi için kapsamlı danışmanlık.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Yurtdışında üniversite danışmanlığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yurtdışında Üniversite Eğitimi | Aka Eğitim',
    description:
      'Almanya, İtalya, Belçika, Hollanda ve Kazakistan üniversite başvurusu için uzman desteği alın.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function Universite() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero 
          title="Yurtdışında Üniversite Eğitimi"
          subtitle="Dünya standartlarında üniversite eğitimi alın"
          description="İngiltere, Almanya, Hollanda, İtalya, Kanada ve Amerika'da üniversite eğitimi için profesyonel danışmanlık hizmeti."
        />
        
        {/* Üniversite İçeriği */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Neden Yurtdışında Üniversite?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dünya standartlarında eğitim, uluslararası deneyim ve kariyer fırsatları için yurtdışında üniversite eğitimi alın.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">İngiltere Üniversiteleri</h3>
                <p className="text-gray-600 mb-4">Dünyanın en prestijli üniversitelerinde eğitim alın.</p>
                <Link href="/ulkeler/italya" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Detayları Gör →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Almanya Üniversiteleri</h3>
                <p className="text-gray-600 mb-4">Ücretsiz eğitim ve yüksek kalite standartları.</p>
                <Link href="/ulkeler/almanya" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Detayları Gör →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hollanda Üniversiteleri</h3>
                <p className="text-gray-600 mb-4">İngilizce eğitim ve uygun fiyatlar.</p>
                <Link href="/ulkeler/hollanda" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Detayları Gör →
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Belçika Üniversiteleri</h3>
                <p className="text-gray-600 mb-4">Çok kültürlü kampüsler ve AB staj fırsatları.</p>
                <Link href="/ulkeler/belcika" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Detayları Gör →
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kazakistan Üniversiteleri</h3>
                <p className="text-gray-600 mb-4">Uygun maliyetli İngilizce eğitim seçenekleri.</p>
                <Link href="/ulkeler/kazakistan" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Detayları Gör →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Başvuru Sürecinde Nasıl Destek Oluyoruz?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Aka Eğitim olarak program karşılaştırması, başvuru takvimi planlaması, motivasyon mektubu hazırlığı, 
                burs ve finansal planlama, öğrenci vizesi ve konaklama süreçlerinin her adımında yanınızdayız. 
                Süreci şeffaf biçimde yöneterek belgelerinizin eksiksiz ve zamanında gönderilmesini sağlıyoruz.
              </p>
              <ul className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Üniversite ve bölüm araştırması sonrasında kişisel başvuru stratejisi oluşturuyoruz.</li>
                <li>Gerekli akademik ve dil belgelerinin doğruluğunu ve resmi tercümesini kontrol ediyoruz.</li>
                <li>Uni-Assist, Studielink gibi platformlarda başvuru dosyanızı birlikte tamamlıyoruz.</li>
                <li>Vize mülakatı, bloke hesap ve sağlık sigortası gibi kritik aşamalarda rehberlik sunuyoruz.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

