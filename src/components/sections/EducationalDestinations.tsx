'use client'

import { Card, CardBody, CardFooter, Button } from "@heroui/react"
import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import almanya from "../../app/assets/country_images/almanya.jpg"
import italya from "../../app/assets/country_images/italya.jpg"
import ingiltere from "../../app/assets/country_images/ingiltere.jpg"
import finlandiya from "../../app/assets/country_images/finlandiya.jpg"

interface Country {
    name: string
    slug: string
    image: StaticImageData
    description: string
    programs: string[]
    price: string
}

const COUNTRIES: Country[] = [
    {
        name: "İtalya",
        slug: "italya",
        image: italya,
        description: "Sanat, kültür ve gastronomi ile İngilizce veya İtalyanca dil eğitimi fırsatı.",
        programs: ["Genel İngilizce", "İtalyanca Kursları", "Akademik Hazırlık"],
        price: "€150-320/hafta",
    },
    {
        name: "Finlandiya",
        slug: "finlandiya",
        image: finlandiya,
        description: "Avrupa Birliği merkezinde Fransızca, Flamanca ve İngilizce programlar.",
        programs: ["Genel İngilizce", "Fransızca Kursları", "Üniversite Hazırlık"],
        price: "€180-340/hafta",
    },
    {
        name: "Almanya",
        slug: "almanya",
        image: almanya,
        description: "Ücretsiz üniversite seçenekleri ve yoğun Almanca kursları ile öne çıkan ülke.",
        programs: ["Genel Almanca", "TestDaF Hazırlık", "Üniversite Hazırlık"],
        price: "€180-360/hafta",
    },
    {
        name: "İngiltere",
        slug: "ingiltere",
        image: ingiltere,
        description: "İngilizce konuşulan ortam ve modern eğitim sistemi ile dil eşleştirmeli programlar.",
        programs: ["Genel İngilizce", "IELTS Hazırlık", "Akademik Hazırlık"],
        price: "€200-380/hafta",
    },
]

export default function EducationalDestinations() {
    return (
        <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                        Popüler Dil Okulu Destinasyonları
                    </h2>
                    <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto px-4">
                        Dünyanın en iyi dil okullarında İngilizce öğrenin ve hayalinizdeki eğitimi yaşayın
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {COUNTRIES.map((country) => (
                        <Card
                            key={country.slug}
                            className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
                        >
                            <CardBody className="p-0 flex-1 flex flex-col">
                                <div className="relative h-40 sm:h-44 lg:h-48 w-full overflow-hidden rounded-t-lg">
                                    <Image
                                        src={country.image}
                                        alt={`${country.name} dil okulu ve eğitim programları`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute bottom-3 left-4">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                                            {country.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                                    <p className="text-foreground/80 mb-4 text-sm sm:text-base leading-relaxed">
                                        {country.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {country.programs.map((program) => (
                                            <span
                                                key={program}
                                                className="px-3 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm rounded-full font-medium"
                                            >
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </CardBody>

                            <CardFooter className="pt-0 px-5 sm:px-6 pb-5 sm:pb-6">
                                <Button
                                    as={Link}
                                    href={`/ulkeler/${country.slug}`}
                                    color="primary"
                                    variant="solid"
                                    size="md"
                                    className="w-full font-semibold focus:outline-none focus:ring-0"
                                    endContent={
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    }
                                >
                                    Detayları Gör
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
