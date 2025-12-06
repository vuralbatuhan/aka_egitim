import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Yurtdışı Eğitim Rehberi ve Güncel Haberler',
  description:
    'Yurtdışı eğitim, dil okulları, üniversite, yüksek lisans, work and study ve vize süreçleri hakkında uzman makaleler ve rehber içerikler.',
  keywords: [
    'yurtdışı eğitim blog',
    'dil okulu rehberi',
    'yurtdışı üniversite blog',
    'aka eğitim blog',
    'yurtdışı vize süreçleri',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/blog',
    title: 'Yurtdışı Eğitim Blogu | Aka Eğitim',
    description:
      'Dil okulu, üniversite, yüksek lisans ve work and study programlarına dair güncel rehberleri keşfedin.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yurtdışı Eğitim Blogu | Aka Eğitim',
    description:
      'Yurtdışı eğitim planlarken bilmeniz gereken adımlar ve ipuçları için blog yazılarımızı okuyun.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero 
          title="Blog"
          subtitle="Yurtdışı eğitim rehberi ve güncel bilgiler"
          description="Yurtdışı eğitim, dil okulları, üniversite ve yüksek lisans hakkında uzman yazılarımızı okuyun."
          backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        
        {/* Blog İçeriği */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Son Yazılarımız
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Yurtdışı eğitim konusunda güncel bilgiler ve uzman tavsiyeleri.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-gray-500 mb-2">15 Aralık 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  İngiltere&apos;de Üniversite Eğitimi Rehberi
                </h3>
                <p className="text-gray-600 mb-4">
                  İngiltere&apos;de üniversite eğitimi almak isteyenler için detaylı rehber.
                </p>
                <Link href="/blog/ingiltere-universite-rehberi" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Devamını Oku →
                </Link>
              </article>
              
              <article className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-gray-500 mb-2">10 Aralık 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Almanya&apos;da Ücretsiz Üniversite Eğitimi
                </h3>
                <p className="text-gray-600 mb-4">
                  Almanya&apos;da ücretsiz üniversite eğitimi alma şartları ve süreçleri.
                </p>
                <Link href="/blog/almanya-ucretsiz-universite" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Devamını Oku →
                </Link>
              </article>
              
              <article className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-gray-500 mb-2">5 Aralık 2024</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Yurtdışında Dil Okulu Seçimi
                </h3>
                <p className="text-gray-600 mb-4">
                  Doğru dil okulu seçimi için dikkat edilmesi gereken noktalar.
                </p>
                <Link href="/blog/dil-okulu-secimi" className="text-turquoise-450 font-semibold hover:text-turquoise-500">
                  Devamını Oku →
                </Link>
              </article>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

