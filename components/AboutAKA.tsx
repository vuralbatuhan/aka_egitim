"use client";

import Image from "next/image";

export default function AboutAKA() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-10 md:py-16 px-4 lg:px-8 bg-[#F5F5F5] w-full max-w-[1200px] mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center">
          {/* Heading with vertical bar */}
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div
              className="h-10 md:h-12 w-1 rounded-full"
              style={{ backgroundColor: "#800000" }}
            />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: "#1a1a1a" }}
            >
              AKADER Hakkında
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-3 md:space-y-4">
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{ color: "#666666" }}
            >
              Akader &quot;Öğretmen rehberliğinde yurtdışı eğitim
              hareketliliğinin adı soyadı&quot; sloganıyla yola çıkmıştır. Azim,
              Kararlılık ve Ayrıcalık ilkeleri ile öğrencilerin yurtdışı eğitim
              yolculuğuna ;öğretmen güvencesi ile rehberlik eder.
            </p>
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{ color: "#666666" }}
            >
              Akaderin amacı öğrencilerin yıllar içinde yurtdışında birbirlerini
              bulmaları, kulüpler oluşturmaları, ülkeleri için bir arada
              bulunmalarıdır.
            </p>
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{ color: "#666666" }}
            >
              Akader aileler ve öğrencilerle beraber ülkemiz adına güvenli bir
              kariyer planlaması gelecek planlaması hedefler
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full flex items-center justify-center lg:justify-end">
          <div className="relative rounded-lg overflow-hidden w-full max-w-[648px] aspect-[648/350]">
            <Image
              src="/images/high-angle-small-graduation-cap-pile-books.png"
              alt="Eğitim ve Mezuniyet"
              width={648}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
