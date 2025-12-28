'use client'

import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import { Card, CardBody, CardFooter } from "@heroui/react"
import Image from "next/image"
import { getCountriesForEducationType } from '@/data/countries'

// Öğretmen programları sunan ülkeleri dinamik olarak al
const ALL_TEACHER_COUNTRIES = getCountriesForEducationType('teacherPrograms').map(country => ({
  name: country.name,
  slug: country.slug,
  description: country.teacherPrograms?.description || '',
  image: country.overview.heroImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80'
}))

// Sadece Finlandiya ve İsviçre'yi göster
const TEACHER_COUNTRIES = ALL_TEACHER_COUNTRIES.filter(
  (country) => country.slug === "finlandiya" || country.slug === "isvicre"
)

// Diğer ülkeler (yorum satırında):
// İtalya, İngiltere, vb.

export default function OgretmenHareketliligi() {

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[280px] flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 40%, var(--primary-light) 100%)"
        }}
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center py-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Öğretmen Hareketliliği Programları
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Öğretmenlerimizin mesleki gelişimleri için uzmanlar tarafından hazırlanmış tematik gelişim programları ve uluslararası geçerliliğe sahip sertifika programları yürütüyoruz.
          </p>
        </div>
      </section>

      {/* Country Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {TEACHER_COUNTRIES.map((country) => (
              <Link key={country.slug} href={`/ulkeler/${country.slug}/ogretmen`}>
                <Card
                  isPressable
                  className="relative h-full flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 blur-xl scale-110"
                    style={{ backgroundImage: `url(${country.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

                  <div className="relative z-10 flex flex-col h-full">
                    <CardBody className="p-0 flex flex-col flex-1">
                      <div className="relative h-32 sm:h-36 lg:h-56 w-full overflow-hidden rounded-t-lg">
                        <Image
                          src={country.image}
                          alt={`${country.name} öğretmen programları`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <h3 className="absolute bottom-3 left-4 text-2xl sm:text-3xl font-bold text-white drop-shadow">
                          {country.name}
                        </h3>
                      </div>

                      <div className="p-4 sm:p-5 flex flex-col flex-1">
                        <p className="text-sm sm:text-base text-foreground/80 mb-4 leading-relaxed">
                          {country.description}
                        </p>
                      </div>
                    </CardBody>

                    <CardFooter className="px-4 sm:px-5 pb-5 pt-0">
                      <div className="w-full bg-primary text-primary-foreground font-semibold rounded-md py-3 px-4 flex items-center justify-center gap-2">
                        <span>Detayları Gör</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </CardFooter>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Öğretmen Hareketliliği Nedir?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Öğretmen hareketliliği programları, eğitimcilerin yurtdışında eğitim metodolojileri öğrenmesi,
              sertifika alması ve profesyonel gelişimini sürdürmesi için tasarlanmış programlardır.
              Aka Eğitim olarak, öğretmenlerin kariyerlerini uluslararası platformda geliştirmelerine destek oluyoruz.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>CELTA, DELTA, TESOL gibi uluslararası öğretmenlik sertifikaları için başvuru desteği.</li>
              <li>Avrupa Birliği Erasmus+ öğretmen hareketliliği programlarına başvuru rehberliği.</li>
              <li>Yurtdışında öğretmen eğitimi ve mesleki gelişim kursları için danışmanlık.</li>
              <li>Yabancı dil öğretimi metodolojileri ve sertifika programları hakkında bilgilendirme.</li>
              <li>Program sonrası iş bulma ve kariyer planlama desteği.</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}
