import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import HighSchoolCountries from '@/components/sections/HighSchoolCountries'
import HighSchoolBenefits from '@/components/sections/HighSchoolBenefits'
import ContactForm from '@/components/forms/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yurtdışında Lise Eğitimi ve Uluslararası Diploma Danışmanlığı',
  description:
    'Aka Eğitim ile Almanya, Hollanda, İtalya, Belçika ve Kazakistan’da lise okumak; IB, Matura ve Abitur programlarına hazırlanmak için profesyonel destek alın.',
  keywords: [
    'yurtdışında lise',
    'uluslararası lise eğitimi',
    'ib diploma danışmanlığı',
    'yurtdışı lise fiyatları',
    'aka eğitim lise programları',
  ],
  alternates: {
    canonical: '/yurtdisinda-lise',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/yurtdisinda-lise',
    title: 'Yurtdışında Lise Eğitimi | Aka Eğitim',
    description:
      'Uluslararası diploma, konaklama ve aile yanı seçenekleriyle lise eğitiminizi yurtdışında planlayın.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Yurtdışında lise danışmanlığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yurtdışında Lise Eğitimi | Aka Eğitim',
    description:
      'Ailenizle birlikte akademik ve kültürel hedefleri analiz ederek doğru lise programını seçiyoruz.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function YurtdisindaLisePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Yurtdışında Lise"
        subtitle="Uluslararası lise eğitimi ile geleceğinizi şekillendirin"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />
      <HighSchoolCountries />
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Yurtdışında Lise Eğitimiyle Üniversiteye Güçlü Bir Başlangıç
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Öğrencilerimizin akademik hedeflerini, dil seviyelerini ve bütçelerini değerlendirerek IB, AP, Matura veya Abitur gibi 
            uluslararası diploma programlarına uygun okul seçenekleri sunuyoruz. Aile yanı konaklama, yurt ve kampüs içi yaşam 
            alternatiflerini detaylandırarak güvenli bir geçiş planlıyoruz.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Okul başvuru dosyası, niyet mektubu ve referans mektuplarını profesyonelce hazırlıyoruz.</li>
            <li>Veli-öğrenci oryantasyon toplantıları ile ülke ve okul kültürünü tanıtıyoruz.</li>
            <li>Veli iletişim planı ve akademik takip raporları ile eğitim sürecini şeffaf yönetiyoruz.</li>
            <li>Üniversiteye geçişte gerekli sınav ve başvuru hazırlıklarını lise son sınıf itibarıyla başlatıyoruz.</li>
          </ul>
        </div>
      </section>
      <HighSchoolBenefits />
      <ContactForm />
      <Footer />
    </main>
  )
}

