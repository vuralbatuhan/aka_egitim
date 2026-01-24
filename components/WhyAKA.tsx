"use client";

import Image from "next/image";

export default function WhyAKA() {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden py-10 md:py-16 px-4 lg:px-8 bg-[#F5F5F5] w-full max-w-[1200px] mx-auto"
    >
      {/* Header Section */}
      <div className="w-full mb-6 md:mb-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-8">
          {/* Left - Title with vertical bar */}
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="h-10 md:h-12 w-1 rounded-full"
              style={{ backgroundColor: "#EB702B" }}
            />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: "#1a1a1a" }}
            >
              Neden AKA Eğitim?
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex-1 lg:max-w-2xl lg:ml-auto">
            <p
              className="text-xs sm:text-sm lg:text-base leading-relaxed text-left lg:text-right"
              style={{ color: "#1a1a1a" }}
            >
              AKA Eğitim, yurtdışı eğitimin merkezine{" "}
              <span style={{ color: "#EB702B" }}>"Öğretmen Rehberliği"</span>{" "}
              koyar.
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Öğrencinizin yurtdışı eğitim yolculuğuna bir aile ferdi içtenliği
              ile bakar,
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              evinizden havalimanına{" "}
              <span style={{ color: "#EB702B" }}>danışman öğretmeni</span>{" "}
              sizinle beraber eşlik eder.
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Image Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left Content Block - Global Partner Network */}
        <div
          className="relative mx-auto w-full aspect-[4/3] md:aspect-[648/480]"
        >
          <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden">
            <Image
              src="/images/expanding-opportunities-people-networking-business-success-eide.png"
              alt="Global Partner Ağımız"
              width={648}
              height={480}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
              style={{
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            >
              <h3
                className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3"
                style={{
                  color: "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                Global Partner Ağımız
              </h3>
              <p
                className="text-xs md:text-sm leading-relaxed"
                style={{
                  color: "#ffffff",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
                }}
              >
                25+ ülkede 300'den fazla eğitim kurumu ile resmi temsilcilik
                anlaşmalarımız bulunuyor. Öğrenci kabul şartları, kampüs yaşamı
                ve burs fırsatları hakkında güncel bilgi paylaşıyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content Block - Student Future Tracking */}
        <div
          className="relative mx-auto w-full aspect-[4/3] md:aspect-[648/480]"
        >
          <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden">
            <Image
              src="/images/medium-shot-girl-posing-with-graduation-background.png"
              alt="Öğrenci Gelecek Takibi"
              width={648}
              height={480}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
              style={{
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            >
              <h3
                className="text-lg md:text-xl lg:text-2xl font-bold"
                style={{
                  color: "#ffffff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                Öğrenci Gelecek Takibi
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
