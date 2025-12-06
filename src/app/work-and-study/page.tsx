import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/sections/PageHero'
import WorkStudyPrograms from '@/components/sections/WorkStudyPrograms'
import Benefits from '@/components/sections/Benefits'
import ContactForm from '@/components/forms/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work and Study Programları ile Yurtdışında Çalışarak Dil Öğrenin',
  description:
    'İngilizce öğrenirken yarı zamanlı çalışma izni sunan Work and Study programları. İtalya, Almanya, Hollanda, Belçika ve Kazakistan’da iş ve eğitim fırsatları.',
  keywords: [
    'work and study',
    'yurtdışında çalışarak dil öğrenmek',
    'çalışma izinli dil okulu',
    'work and travel alternatifi',
    'yurtdışı iş ve eğitim programı',
  ],
  alternates: {
    canonical: '/work-and-study',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/work-and-study',
    title: 'Work and Study Programları | Aka Eğitim',
    description:
      'Çalışma izni içeren dil okullarında eğitim alırken yaşam masraflarınızı karşılayın. Vize, konaklama ve iş bulma desteği.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Work and Study programı danışmanlığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work and Study Programları | Aka Eğitim',
    description:
      'Yurtdışında dil öğrenirken yarı zamanlı çalışma imkanı sunan programlar için ücretsiz danışmanlık alın.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function WorkAndStudyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero 
        title="Work and Study"
        subtitle="Çalışarak dil öğrenin, deneyim kazanın ve kariyerinizi geliştirin"
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
      />
      <WorkStudyPrograms />
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Work and Study Programlarının Avantajları
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Aka Eğitim ekibi olarak çalışma izni sağlayan dil okullarını seçerken iş bulma desteği, minimum maaş beklentisi,
            şehir bazlı yaşam maliyetleri ve haftalık ders saatleri gibi kritik parametreleri analiz ediyoruz.
            Öğrencilerimizin iş-yaşam dengesini koruyacak programlara yerleşmesini sağlıyoruz.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vize ve İzin Süreçleri</h3>
              <p className="text-gray-700">
                Çalışma izinli öğrenci vizesi başvurularında gerekli evraklar, finansal kanıtlar ve iş teklifleri konusunda
                kapsamlı rehberlik sunuyoruz. Vize sonrası oturum kartı ve sigorta işlemlerini birlikte planlıyoruz.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kariyer Gelişimi</h3>
              <p className="text-gray-700">
                Dil eğitiminizi sürdürürken CV hazırlama, iş görüşmesi ve sektörel network desteği ile uluslararası iş deneyimi elde etmenize yardımcı oluyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Benefits />
      <ContactForm />
      <Footer />
    </main>
  )
}

