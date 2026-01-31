"use client";

import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="relative py-8 sm:py-10 md:py-16 px-4 sm:px-5 lg:px-8 w-full overflow-x-hidden">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Üst satır: Başlık (sol) + Açıklama (sağ) - mobilde tek sütun */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-16">
          <div className="flex items-start sm:items-center gap-3 md:gap-4">
            <div
              className="h-10 sm:h-12 md:h-14 w-1 rounded-full flex-shrink-0 mt-1 sm:mt-0"
              style={{ backgroundColor: "#007bff" }}
            />
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ color: "#333333" }}
            >
              Bizimle Yol Yürümeye
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              Var Mısınız?
            </h2>
          </div>

          <p
            className="text-sm sm:text-base leading-relaxed flex items-center text-left md:text-left"
            style={{ color: "#666666" }}
          >
            Türkiye&apos;nin farklı şehirlerinde ofislerimiz ve deneyimli temsilcilerimiz
            sizlere en iyi hizmeti sunmak için hazır. Harita üzerinde şehirlere tıklayarak
            temsilcilerimizi görebilirsiniz.
          </p>
        </div>

        {/* Harita - mobilde daha yüksek oran, taşmayı önlemek için */}
        <div className="relative max-w-[900px] mx-auto mt-2 sm:mt-4 md:mt-6 aspect-[2.5/1] sm:aspect-[2.5/1] min-h-[140px] sm:min-h-[180px] md:min-h-[200px] pl-0 pr-12 sm:pr-14 md:pr-0">
          <Image
            src="/images/tr.png"
            alt="Türkiye Haritası - Temsilcilikler"
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 900px"
          />
          {/* Mobilde sağ üstte küçük, taşmayı önlemek için pr ile alan bırakıldı */}
          <div className="absolute -top-4 right-0 sm:-top-4 sm:-right-4 md:-top-8 md:-right-8 z-10 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
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
