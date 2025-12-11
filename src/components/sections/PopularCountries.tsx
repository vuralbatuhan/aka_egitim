'use client'

import { Card, CardBody, CardFooter, Button } from "@heroui/react"
import Link from 'next/link'
import Image from 'next/image'

interface Country {
  name: string
  slug: string
  flag: string
  image: string
  description: string
  programs: string[]
}

const COUNTRIES: Country[] = [
  {
    name: "Almanya",
    slug: "almanya",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    description: "Avrupa'nın kalbi Almanya'da dünya standartlarında eğitim fırsatları",
    programs: ["Dil Okulu", "Üniversite", "Work & Study"],
  },
  {
    name: "İngiltere",
    slug: "ingiltere",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    description: "Dünyanın en prestijli üniversitelerinde eğitim imkanı",
    programs: ["Dil Okulu", "Üniversite", "Yüksek Lisans"],
  },
  {
    name: "İtalya",
    slug: "italya",
    flag: "🇮🇹",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80",
    description: "Sanat, moda ve tasarımın başkentinde benzersiz deneyim",
    programs: ["Dil Okulu", "Üniversite", "Moda & Tasarım"],
  },
  {
    name: "İspanya",
    slug: "ispanya",
    flag: "🇪🇸",
    image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=800&q=80",
    description: "Akdeniz ikliminde İspanyolca öğrenme ve akademik kariyer",
    programs: ["Dil Okulu", "Üniversite", "Work & Study"],
  },
]

export default function PopularCountries() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-semibold text-sm sm:text-base mb-3 tracking-wide uppercase">
            Eğitim Destinasyonları
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hayalinizdeki Ülkeyi Seçin
          </h2>
          {/* <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            25'ten fazla ülkede 500'den fazla partner okul ile eğitim yolculuğunuza başlayın
          </p> */}
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {COUNTRIES.map((country) => (
            <Card
              key={country.slug}
              className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
            >
              <CardBody className="p-0">
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                  <Image
                    src={country.image}
                    alt={`${country.name} eğitim programları`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Country Name & Flag */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl">{country.flag}</span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                      {country.name}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                    {country.description}
                  </p>

                  {/* Program Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {country.programs.map((program) => (
                      <span
                        key={program}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </CardBody>

              {/* Footer Button */}
              <CardFooter className="pt-0 px-6 sm:px-8 pb-6 sm:pb-8">
                <Button
                  as={Link}
                  href={`/ulkeler/${country.slug}`}
                  className="w-full font-bold bg-primary hover:bg-primary-600 text-white hover:scale-105 transition-all duration-300"
                  size="lg"
                  radius="lg"
                >
                  Detayları Gör
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Countries Button */}
        <div className="text-center">
          <Button
            as={Link}
            href="/dil-okullari"
            size="lg"
            className="font-bold bg-white text-gray-900 border-2 border-gray-300 hover:border-primary hover:bg-gray-50 transition-all duration-300 px-8"
            endContent={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            Tüm Ülkeleri Gör
          </Button>
        </div>
      </div>
    </section>
  )
}
