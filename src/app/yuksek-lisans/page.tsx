import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/sections/PageHero'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yurtdışında Yüksek Lisans ve MBA Programları',
  description:
    'Aka Eğitim, yurtdışında yüksek lisans ve MBA başvurularında program seçimi, motivasyon mektubu hazırlığı, burs ve vize süreçleri için uzman danışmanlık sunar.',
  keywords: [
    'yurtdışında yüksek lisans',
    'MBA başvurusu',
    'master programı danışmanlığı',
    'yurtdışı bursları',
    'aka eğitim yüksek lisans',
  ],
  alternates: {
    canonical: '/yuksek-lisans',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/yuksek-lisans',
    title: 'Yurtdışında Yüksek Lisans | Aka Eğitim',
    description:
      'MBA, master ve doktora programları için okul seçimi, burslar ve vize süreçlerinde kapsamlı danışmanlık.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Yurtdışında yüksek lisans danışmanlığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yurtdışında Yüksek Lisans | Aka Eğitim',
    description:
      'Kariyer hedeflerinize uygun yurtdışı yüksek lisans programları için Aka Eğitim uzmanlarıyla çalışın.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function YuksekLisans() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero 
          title="Yurtdışında Yüksek Lisans"
          subtitle="Kariyerinizi bir üst seviyeye taşıyın"
          description="MBA, Master programları ve uzmanlık alanlarında yurtdışında yüksek lisans eğitimi için profesyonel danışmanlık."
        />
        
        {/* Yüksek Lisans İçeriği */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Yüksek Lisans Programları
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dünya standartlarında yüksek lisans eğitimi ile kariyerinizi geliştirin.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">MBA Programları</h3>
                <p className="text-gray-600 mb-4">Küresel şirketlerde yönetim ve liderlik rolüne hazırlanmak için uluslararası MBA seçenekleri.</p>
                <Link href="/iletisim" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Ücretsiz Danışmanlık Al →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Master Programları</h3>
                <p className="text-gray-600 mb-4">Mühendislikten tasarıma, sağlık bilimlerinden veri analitiğine kadar master programları.</p>
                <Link href="/iletisim" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Program Önerisi İste →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Burs İmkanları</h3>
                <p className="text-gray-600 mb-4">Erasmus+, DAAD, Merit ve kurum burslarıyla yüksek lisans maliyetlerini düşürün.</p>
                <Link href="/iletisim" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Burs Başvurusu için Destek Al →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Başvuru Dokümanlarınızı Güçlendirin</h2>
              <p className="text-lg text-gray-600 mb-4">
                Başvuru paketinizin her aşamasını uzman ekibimizle birlikte planlarız. Program gerekliliklerine göre akademik transkriptlerinizi,
                referans mektuplarınızı ve motivasyon yazınızı değerlendirip revize ederiz.
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>GRE, GMAT, IELTS ve TOEFL skor hedefleri için hazırlık partnerlerimizle yönlendirme yapıyoruz.</li>
                <li>Üniversite profesörlerine etkili referans talebi oluşturmanızı sağlayan şablonlar sunuyoruz.</li>
                <li>Kariyer hedeflerinizi akademik amaçlarınıza bağlayan güçlü motivasyon mektupları hazırlıyoruz.</li>
                <li>Ön kabul sonrası vize ve konaklama süreçlerini planlayarak kesintisiz bir geçiş sağlıyoruz.</li>
              </ul>
            </div>
          </div>
        </section>

        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}

