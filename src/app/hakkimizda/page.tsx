import Navbar from '@/components/layout/Navbar'
import PageHero from '@/components/sections/PageHero'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda | Aka Eğitim Yurtdışı Eğitim Danışmanlığı',
  description:
    'Aka Eğitim, 15 yılı aşkın deneyimiyle dil okulu, üniversite, yüksek lisans ve work and study programlarında binlerce öğrencinin yurtdışı eğitim hedefini gerçekleştirdi.',
  keywords: [
    'aka eğitim hakkında',
    'yurtdışı eğitim danışmanlık şirketi',
    'aka eğitim referansları',
    'uluslararası eğitim danışmanlığı',
  ],
  alternates: {
    canonical: '/hakkimizda',
  },
  openGraph: {
    url: 'https://akaegitim.com.tr/hakkimizda',
    title: 'Aka Eğitim Hakkında',
    description:
      'Öğrenci odaklı yaklaşımımız ve global partner ağımızla yurtdışı eğitimde güvenilir çözüm ortağınız.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim ekibi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aka Eğitim Hakkında',
    description:
      'Yurtdışı eğitim süreçlerinde şeffaf ve uzman danışmanlık yaklaşımımızı keşfedin.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
}

export const revalidate = 3600

export default function Hakkimizda() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <PageHero 
          title="Hakkımızda"
          subtitle="Yurtdışı eğitimde güvenilir partneriniz"
          description="15 yıllık deneyimimiz ve binlerce başarılı öğrencimizle yurtdışı eğitim konusunda profesyonel hizmet veriyoruz."
        />
        
        {/* Hakkımızda İçeriği */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Misyonumuz
                </h2>
                <p className="text-lg text-white/90">
                  Öğrencilerimizin yurtdışında kaliteli eğitim almalarını sağlamak ve kariyer hedeflerine ulaşmalarına yardımcı olmak.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">15+</div>
                  <div className="text-white/80">Yıllık Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">5000+</div>
                  <div className="text-white/80">Başarılı Öğrenci</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80">Ülke Seçeneği</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h3>
                <p className="text-white/90 mb-4">
                  Türkiye&apos;nin en güvenilir yurtdışı eğitim danışmanlık firması olmak ve öğrencilerimizin hayallerini gerçeğe dönüştürmek.
                </p>
                <p className="text-white/90">
                  Kaliteli hizmet, şeffaf iletişim ve öğrenci odaklı yaklaşımımızla fark yaratıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Neden Aka Eğitim?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Aka Eğitim, yurtdışı eğitim süreçlerinin her adımını planlayan, şeffaf raporlama sağlayan ve öğrencilerinin 
                kariyer hedeflerine uygun çözümler sunan bir danışmanlık ekibidir. Partner kurumlarımızla doğrudan çalışır,
                başvurularda öncelik tanınmasını sağlar ve vize süreçlerini deneyimli danışmanlarımızla yürütürüz.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Partner Ağımız</h3>
                  <p className="text-gray-700">
                    25+ ülkede 300&apos;den fazla eğitim kurumu ile resmi temsilcilik anlaşmalarımız bulunuyor.
                    Öğrenci kabul şartları, kampüs yaşamı ve burs fırsatları hakkında güncel bilgi paylaşıyoruz.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Öğrenci Başarı Takibi</h3>
                  <p className="text-gray-700">
                    Başvuru aşamasından mezuniyete kadar süreklilik sağlayan danışmanlık modelimiz ile öğrencilerimizin karşılaşabileceği
                    zorlukları proaktif olarak çözüyoruz. Mezunlarımızı küresel kariyer ağına dahil ediyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}

