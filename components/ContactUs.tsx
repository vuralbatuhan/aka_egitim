"use client";

import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-16 px-4 lg:px-8 bg-[#F5F5F5]">
      <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header Section - White Background */}
        <div className="w-full mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left - Title with vertical bar */}
            <div className="flex items-center gap-4">
              <div
                className="h-16 w-1"
                style={{ backgroundColor: "#000000" }}
              />
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ color: "#000000" }}
              >
                Bizimle Yol Yürümeye<br />Var Mısınız?
              </h2>
            </div>

            {/* Right - Description */}
            <div className="flex-1 lg:max-w-2xl lg:ml-auto">
              <div className="flex justify-end">
                <p
                  className="text-sm lg:text-base leading-relaxed italic text-right"
                  style={{ color: "#555555" }}
                >
                  Türkiye'nin farklı şehirlerinde ofislerimiz ve deneyimli<br />
                  temsilcilerimiz sizlere en iyi hizmeti sunmak için hazır.<br />
                  Harita üzerinde şehirlere tıklayarak temsilcilerimizi<br />
                  görebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Earth Image - Separate Container */}
        <div className="relative w-full flex justify-center" style={{ marginBottom: "-250px", zIndex: 20 }}>
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-white" style={{ borderWidth: "20px" }}>
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
          className="relative rounded-3xl overflow-hidden mx-auto"
          style={{
            backgroundColor: "#3699BF",
            padding: "60px 40px",
            width: "1200px",
            height: "966px",
          }}
        >
          <div className="relative w-full h-full">
            {/* Top Section - Statistics */}
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
              {/* Left Column - Statistics Boxes */}
              <div className="flex flex-col gap-6 z-10 order-1 lg:order-1">
                {/* Top Box - 12 Cities */}
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{
                    backgroundColor: "#4BAECF",
                    minWidth: "280px",
                  }}
                >
                  <div
                    className="text-7xl font-bold mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    12
                  </div>
                  <div
                    className="text-lg font-normal"
                    style={{ color: "#FFFFFF" }}
                  >
                    Şehirde Ofisimiz
                  </div>
                </div>

                {/* Bottom Box - 50+ Representatives */}
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{
                    backgroundColor: "#4BAECF",
                    minWidth: "280px",
                  }}
                >
                  <div
                    className="text-7xl font-bold mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    50+
                  </div>
                  <div
                    className="text-lg font-normal"
                    style={{ color: "#FFFFFF" }}
                  >
                    Deneyimli Temsilci
                  </div>
                </div>
              </div>

              {/* Placeholder for Earth - maintains layout */}
              <div className="relative z-10 shrink-0 mx-4 lg:mx-8 order-2 lg:order-2" style={{ width: "300px", height: "300px", visibility: "hidden" }}>
              </div>

              {/* Right Column - Support and CTA */}
              <div className="flex flex-col items-center gap-6 z-10 order-3 lg:order-3">
                {/* Support Box */}
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{
                    backgroundColor: "#4BAECF",
                    minWidth: "280px",
                  }}
                >
                  <div
                    className="text-7xl font-bold mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    7/24
                  </div>
                  <div
                    className="text-lg font-normal"
                    style={{ color: "#FFFFFF" }}
                  >
                    Destek Hattı
                  </div>
                </div>

                {/* CTA Text and Button */}
                <div className="flex flex-col items-center gap-4">
                  <p
                    className="text-xl font-normal text-center"
                    style={{ color: "#FFFFFF" }}
                  >
                    Şehrimizdeki Temsilcimiz Olmak İster Misiniz?
                  </p>
                  <button
                    className="rounded-full px-8 py-4 font-semibold transition-all hover:opacity-90"
                    style={{
                      border: "2px solid #FFFFFF",
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                      fontSize: "16px",
                    }}
                  >
                    Bize Ulaşın
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section - Map of Turkey */}
            <div className="relative w-full mt-4">
              <div
                className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  backgroundColor: "transparent",
                  minHeight: "400px",
                  padding: "20px 40px 40px 40px",
                }}
              >
                {/* Map container */}
                <div className="relative w-full h-full" style={{ maxWidth: "1000px" }}>
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
