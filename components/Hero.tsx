"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{
        height: "850px",
        backgroundImage: "url('/images/baskl.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      {/* Bordo overlay with blur - şekilleri çok soluk göstermek için */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#60091b",
          opacity: 0.98,
          zIndex: 1,
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      ></div>
      {/* Navigation Arrow - Left */}
      <button
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-110 transition-transform"
        aria-label="Önceki slayt"
        style={{ fontSize: "60px", fontWeight: "300" }}
      >
        ‹
      </button>

      {/* Navigation Arrow - Right */}
      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
        aria-label="Sonraki slayt"
        style={{ fontSize: "60px", fontWeight: "300", color: "#F07D2C" }}
      >
        ›
      </button>

      <div className="container mx-auto pl-20 pr-0 lg:pl-32 lg:pr-2 relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full pt-32 pb-16 lg:pt-40 lg:pb-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-6 pl-12">
            {/* Main Title */}
            <h1 className="leading-tight">
              <span
                className="text-white block mb-1"
                style={{ fontSize: "48px", fontWeight: "400" }}
              >
                Öğretmen Dokunuşuyla
              </span>
              <span
                className="block"
                style={{
                  fontSize: "72px",
                  fontWeight: "700",
                  color: "#F07D2C",
                }}
              >
                Dünya Keşfi
              </span>
            </h1>

            {/* Descriptive Text */}
            <p
              className="text-white leading-relaxed max-w-xl"
              style={{ fontSize: "18px" }}
            >
              AKA'da eğitime dair her yolculuk bir{" "}
              <span
                style={{
                  color: "#F07D2C",
                  fontWeight: "700",
                }}
              >
                öğretmen
              </span>
              <br />
              eşliğinde başlar ve{" "}
              <span
                style={{
                  color: "#F07D2C",
                  fontWeight: "700",
                }}
              >
                öğretmen
              </span>{" "}
              eşliğinde tamamlanır.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-row gap-4 pt-4">
              <button
                className="text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                style={{
                  padding: "16px 40px",
                  backgroundColor: "#F07D2C",
                  fontSize: "16px",
                }}
              >
                Ücretsiz Danışmanlık
              </button>
              <button
                className="bg-transparent text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                style={{
                  padding: "16px 40px",
                  border: "2px solid white",
                  fontSize: "16px",
                }}
              >
                Programları İncele
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative pr-0 translate-x-8 lg:translate-x-12">
            <div className="relative" style={{ width: "420px" }}>
              {/* Main Image with rounded corners */}
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/handsome-latin-man-helping-his-colleagues-out-by-explaining-some-his-work-library.png"
                  alt="Öğretmen ve öğrenciler kütüphanede"
                  width={420}
                  height={560}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Icon - Outside the image, bottom left */}
            <div
              className="absolute rounded-full flex items-center justify-center"
              style={{
                bottom: "-20px",
                left: "-20px",
                width: "90px",
                height: "90px",
                backgroundColor: "#F07D2C",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src="/images/Group 88.png"
                alt="Öğretmen dokunuşu ikonu"
                width={55}
                height={55}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
