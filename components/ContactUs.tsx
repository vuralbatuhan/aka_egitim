"use client";

import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="relative py-10 md:py-16 px-4 lg:px-8 w-full">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Üst satır: Başlık (sol) + Açıklama (sağ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="h-12 md:h-14 w-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#007bff" }}
            />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ color: "#333333" }}
            >
              Bizimle Yol Yürümeye
              <br />
              Var Mısınız?
            </h2>
          </div>

          <p
            className="text-sm md:text-base leading-relaxed flex items-center"
            style={{ color: "#666666" }}
          >
            Türkiye&apos;nin farklı şehirlerinde ofislerimiz ve deneyimli temsilcilerimiz
            sizlere en iyi hizmeti sunmak için hazır. Harita üzerinde şehirlere tıklayarak
            temsilcilerimizi görebilirsiniz.
          </p>
        </div>

        {/* Harita - sadece section container içinde */}
        <div className="relative max-w-[900px] mx-auto mt-4 md:mt-6 aspect-[2.5/1] min-h-[160px] md:min-h-[200px]">
          <Image
            src="/images/tr.png"
            alt="Türkiye Haritası - Temsilcilikler"
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 900px"
          />
          <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 z-10 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white shadow-md">
            <Image
              src="/images/de06e4f5-d2dd-4b9a-8d9e-f9002c023db5.png"
              alt="Dünya"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
