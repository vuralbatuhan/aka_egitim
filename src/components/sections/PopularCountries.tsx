'use client'

import { useState } from 'react'
import { Card, CardBody, Button } from "@heroui/react"
import Link from 'next/link'
import CountryMap from './CountryMap'
import { getCountryMapConfig } from '@/lib/representatives'

interface Country {
  name: string
  slug: string
  description: string
  programs: string[]
}

const COUNTRIES: Country[] = [
  {
    name: "İtalya",
    slug: "italya",
    description: "Sanat, kültür ve kaliteli eğitim bir arada",
    programs: ["Dil Okulu", "Üniversite", "Yüksek Lisans"],
  },
  {
    name: "Belçika",
    slug: "belcika",
    description: "Avrupa'nın kalbinde çok kültürlü eğitim fırsatları",
    programs: ["Üniversite", "Yüksek Lisans"],
  },
  {
    name: "Almanya",
    slug: "almanya",
    description: "Ücretsiz eğitim fırsatları ve güçlü ekonomi",
    programs: ["Üniversite", "Yüksek Lisans"],
  },
  {
    name: "Kazakistan",
    slug: "kazakistan",
    description: "Uygun maliyetli eğitim ve Türk kültürüne yakınlık",
    programs: ["Dil Okulu", "Üniversite"],
  },
  {
    name: "Hollanda",
    slug: "hollanda",
    description: "İngilizce programlar ve uluslararası ortam",
    programs: ["Üniversite", "Yüksek Lisans"],
  },
]

export default function PopularCountries() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  const toggleExpand = (slug: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(slug)) {
        newSet.delete(slug)
      } else {
        newSet.add(slug)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popüler Destinasyonlar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Haritalar üzerinden ülkeleri keşfedin ve bölgesel temsilcilerimizle tanışın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COUNTRIES.map((country) => {
            const mapConfig = getCountryMapConfig(country.name)
            const isExpanded = expandedCards.has(country.slug)
            const needsTruncation = country.description.length > 50 // Yaklaşık 1 satır uzunluğu
            
            return (
              <Card key={country.slug} className="hover:shadow-2xl transition-all duration-300">
                <CardBody className="p-0">
                  {mapConfig && (
                    <div className="relative h-40 w-full bg-gray-50 overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 flex items-center justify-center scale-75 transform">
                        <CountryMap config={mapConfig} />
                      </div>
                      <div className="absolute inset-0 bg-transparent" />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{country.name}</h3>
                      <div className="mb-4 min-h-[1.5rem]">
                        {isExpanded ? (
                          <p 
                            onClick={() => toggleExpand(country.slug)}
                            className="text-gray-600 cursor-pointer"
                          >
                            {country.description}
                          </p>
                        ) : (
                          <div className="flex items-start gap-1">
                            <p 
                              onClick={() => toggleExpand(country.slug)}
                              className={`text-gray-600 line-clamp-1 flex-1 ${needsTruncation ? 'cursor-pointer' : ''}`}
                            >
                              {country.description}
                              {needsTruncation && <span className="text-primary"> ...</span>}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {country.programs.map((program) => (
                          <span
                            key={program}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      as={Link}
                      href={`/ulkeler/${country.slug}`}
                      className="w-full font-bold bg-white text-black border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                      size="lg"
                      radius="lg"
                      endContent={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      }
                    >
                      Bizi Seçin
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
