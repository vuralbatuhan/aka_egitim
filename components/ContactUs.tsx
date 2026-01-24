"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-8 md:py-16 px-4 lg:px-8 bg-[#F5F5F5]">
      <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header Section - White Background */}
        <div className="w-full mb-6 md:mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-8">
            {/* Left - Title with vertical bar */}
            <div className="flex items-center gap-3 md:gap-4">
              <div
                className="h-12 md:h-16 w-1"
                style={{ backgroundColor: "#000000" }}
              />
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: "#000000" }}
              >
                Bizimle Yol Yürümeye<br />Var Mısınız?
              </h2>
            </div>

            {/* Right - Description */}
            <div className="flex-1 lg:max-w-2xl lg:ml-auto">
              <div className="flex justify-start lg:justify-end">
                <p
                  className="text-xs sm:text-sm lg:text-base leading-relaxed italic text-left lg:text-right"
                  style={{ color: "#555555" }}
                >
                  Türkiye'nin farklı şehirlerinde ofislerimiz ve deneyimli
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  temsilcilerimiz sizlere en iyi hizmeti sunmak için hazır.
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Harita üzerinde şehirlere tıklayarak temsilcilerimizi
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  görebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Earth Image - Separate Container */}
        <div className="relative w-full flex justify-center mb-[-80px] sm:mb-[-120px] md:mb-[-160px] lg:mb-[-200px] z-20">
          <div className="relative w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-white border-[10px] sm:border-[12px] md:border-[16px] lg:border-[20px]">
            <Image
              src="/images/de06e4f5-d2dd-4b9a-8d9e-f9002c023db5.png"
              alt="Dünya"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content Area - Teal Blue Rounded Container */}
        <div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden mx-auto w-full max-w-[1200px]"
          style={{
            backgroundColor: "#3699BF",
          }}
        >
          <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-10 py-8 md:py-12 lg:py-14">
            {/* Top Section - Statistics */}
            <div className="relative flex flex-col items-center gap-4 sm:gap-6 md:gap-8 pt-24 sm:pt-28 md:pt-40 lg:pt-48 mb-6 md:mb-8 lg:mb-12">
              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full max-w-4xl">
                {/* Box - 12 Cities */}
                <div
                  className="rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 text-center"
                  style={{
                    backgroundColor: "#4BAECF",
                  }}
                >
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-0.5 sm:mb-1 md:mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    12
                  </div>
                  <div
                    className="text-[10px] sm:text-xs md:text-base lg:text-lg font-normal leading-tight"
                    style={{ color: "#FFFFFF" }}
                  >
                    Şehirde Ofisimiz
                  </div>
                </div>

                {/* Box - 50+ Representatives */}
                <div
                  className="rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 text-center"
                  style={{
                    backgroundColor: "#4BAECF",
                  }}
                >
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-0.5 sm:mb-1 md:mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    50+
                  </div>
                  <div
                    className="text-[10px] sm:text-xs md:text-base lg:text-lg font-normal leading-tight"
                    style={{ color: "#FFFFFF" }}
                  >
                    Deneyimli Temsilci
                  </div>
                </div>

                {/* Support Box */}
                <div
                  className="rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 text-center"
                  style={{
                    backgroundColor: "#4BAECF",
                  }}
                >
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-0.5 sm:mb-1 md:mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    7/24
                  </div>
                  <div
                    className="text-[10px] sm:text-xs md:text-base lg:text-lg font-normal leading-tight"
                    style={{ color: "#FFFFFF" }}
                  >
                    Destek Hattı
                  </div>
                </div>
              </div>

              {/* CTA Text and Button */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 mt-2 md:mt-4">
                <p
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-center px-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Şehrimizdeki Temsilcimiz Olmak İster Misiniz?
                </p>
                <Link
                  href="/iletisim"
                  className="rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#3699BF]"
                >
                  Bize Ulaşın
                </Link>
              </div>
            </div>

            {/* Bottom Section - Map of Turkey */}
            <div className="relative w-full mt-4">
              <div
                className="relative w-full rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-10"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                {/* Map container */}
                <div className="relative w-full h-full max-w-[1000px]">
                  {/* Map image - direct usage without filters */}
                  <Image
                    src="/images/tr.png"
                    alt="Türkiye Haritası"
                    width={1000}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
