import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Card, CardBody, Button } from '@heroui/react'
import { getCountryMapConfig } from '@/lib/representatives'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { getAllCountrySlugs, getCountryBySlug } from '@/data/countries'
import Link from 'next/link'
import { ReactNode } from 'react'

// Heavy components'leri lazy load et (SEO için SSR korunuyor)
const CountryMap = dynamic(() => import('@/components/sections/CountryMap'), {
  loading: () => (
    <div className="flex items-center justify-center h-[400px] bg-gradient-to-br from-primary/5 to-blue-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Harita yükleniyor...</p>
      </div>
    </div>
  ),
  ssr: true // SEO için SSR aktif
})

const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  loading: () => (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="animate-pulse text-gray-400">Form yükleniyor...</div>
      </div>
    </div>
  ),
  ssr: true // SEO için SSR aktif
})

interface PageProps {
  params: Promise<{ country: string }>
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { country } = await params
  const info = getCountryBySlug(country.toLowerCase())

  if (!info) {
    return {
      title: 'Sayfa Bulunamadı | Aka Eğitim'
    }
  }

  return {
    title: `${info.title} | Aka Eğitim`,
    description: info.description,
    keywords: [
      `${info.name.toLowerCase()} eğitim danışmanlığı`,
      `${info.name.toLowerCase()} dil okulu`,
      `${info.name.toLowerCase()} üniversite eğitimi`,
      'yurtdışı eğitim danışmanlığı',
      'aka eğitim',
    ],
    alternates: {
      canonical: `/ulkeler/${country.toLowerCase()}`,
    },
    openGraph: {
      url: `https://akaegitim.com.tr/ulkeler/${country.toLowerCase()}`,
      title: `${info.title} | Aka Eğitim`,
      description: info.description,
      images: [
        {
          url: 'https://akaegitim.com.tr/logo.jpg',
          width: 1200,
          height: 630,
          alt: `${info.name} eğitim danışmanlığı`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${info.title} | Aka Eğitim`,
      description: info.description,
      images: ['https://akaegitim.com.tr/logo.jpg'],
    },
  }
}

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({
    country: slug,
  }))
}

export const revalidate = 3600 // 1 saat

// Icon helper component
const getIcon = (iconName: string) => {
  const icons: Record<string, ReactNode> = {
    users: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    school: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    building: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    calendar: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    star: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  }
  return icons[iconName] || icons.users
}

export default async function CountryPage({ params }: PageProps) {
  const { country } = await params
  const info = getCountryBySlug(country.toLowerCase())
  const mapConfig = info ? getCountryMapConfig(info.name) : null

  if (!info || !mapConfig) {
    notFound()
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: `${info.name} Eğitim Danışmanlığı`,
            provider: {
              '@type': 'Organization',
              name: 'Aka Eğitim',
              url: 'https://akaegitim.com.tr',
              logo: 'https://akaegitim.com.tr/logo.jpg',
            },
            areaServed: info.name,
            description: info.description,
            url: `https://akaegitim.com.tr/ulkeler/${country.toLowerCase()}`,
          }),
        }}
      />

      {/* Hero Section - Modern Gradient Background */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-blue-100/50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl -z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full mb-4 animate-fade-in border border-primary/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-sm">{info.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent leading-tight">
              {info.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed mb-8">
              {info.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#contact-form">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-blue-500 text-white font-bold shadow-lg hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 px-8"
                >
                  <span>Ücretsiz Danışmanlık Al</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
              <a href="tel:+902123456789">
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 px-8"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Hemen Arayın</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Colorful Cards */}
      <section className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {info.statistics.map((stat, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
              >
                <CardBody className="p-6 text-center">
                  <div className="flex justify-center mb-3 text-primary group-hover:scale-110 transition-transform duration-300">
                    {getIcon(stat.icon)}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Language Programs Section - Only for countries with language programs */}
      {info.languagePrograms && info.languagePrograms.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-primary/15 via-primary/5 to-blue-50 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-3">
                Dil Programları
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {info.name} dilini öğrenmek için özel hazırlanmış programlarımız
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {info.languagePrograms.map((program, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/30 bg-white/80 backdrop-blur-sm"
                >
                  <CardBody className="p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {program.name}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">{program.duration}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section - Grid with Icons */}
      <section className="py-12 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-3">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Yıllara dayanan tecrübemiz ve başarı hikayelerimizle yanınızdayız
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {info.whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-transparent hover:border-primary"
              >
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-primary group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {reason}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Two Column Cards */}
      <section className="py-12 bg-gradient-to-br from-primary/10 via-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-3">
              Hizmetlerimiz
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A'dan Z'ye tüm eğitim sürecinizde yanınızdayız
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {info.services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-5 bg-white rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-blue-50/50 transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-gray-700 font-medium group-hover:text-gray-900">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life in Country Section - Info Cards */}
      <section className="py-12 bg-gradient-to-b from-white to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-3">
              {info.name}'da Yaşam
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Eğitim hayatınız boyunca sizi bekleyen yaşam koşulları
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Aylık Maliyet', value: info.lifeInCountry.cost, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: 'Dil', value: info.lifeInCountry.language, icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' },
              { label: 'İklim', value: info.lifeInCountry.climate, icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
              { label: 'Kültür', value: info.lifeInCountry.culture, icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-primary/5">
                <CardBody className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      {item.label}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      {item.value}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section - Only if available */}
      {info.universities && info.universities.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-primary/15 via-primary/5 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-3">
                Partner Üniversitelerimiz
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {info.name}'nın en prestijli eğitim kurumlarıyla iş birliğimiz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {info.universities.map((uni, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
                >
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                          {uni.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {uni.city}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {uni.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Interactive Map Section */}
      <section className="py-12 bg-gradient-to-b from-white to-primary/10 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent mb-3">
              Bölgesel Temsilcilerimiz
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Türkiye'nin her yerinden bize kolayca ulaşabilirsiniz
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-primary/5 rounded-2xl border-2 border-blue-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900 mb-2 text-lg">Nasıl Kullanılır?</h4>
                  <p className="text-blue-800">
                    Harita üzerindeki bölgelerin üzerine gelerek bölge adını görebilir,
                    tıklayarak o bölgedeki temsilcilerimizin iletişim bilgilerini görüntüleyebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-2xl p-6">
              <CountryMap config={mapConfig} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Gradient */}
      <section className="relative py-16 bg-gradient-to-br from-primary via-primary to-blue-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Hayalinizdeki Eğitime Bir Adım Kaldı!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 text-white/90 leading-relaxed">
            {info.name} eğitim yolculuğunuza bugün başlayın. Uzman ekibimiz size özel çözümler sunmaya hazır.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/iletisim">
              <Button
                size="lg"
                className="bg-white text-primary font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] hover:bg-gray-50 transition-all duration-300 px-8"
              >
                <span>Hemen Başvur</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
            <a href="tel:+902123456789">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 px-8 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Bizi Arayın</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* İletişim Formu */}
      <ContactForm />
      <Footer />
    </main>
  )
}
