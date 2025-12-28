"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Globe from "../Globe";

export default function Hero() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    "AKA'da eğitime dair her yolculuk bir öğretmen eşliğinde başlar ve öğretmen eşliğinde tamamlanır.",
    "AKA : Öğretmen pusulasında yurt dışı eğitim hareketliliğinin adı soyadı",
    "AKA ile her öğrenci yurt dışına kıvılcım olarak gider ateş olarak döner, bu bizim memleket ödevimizdir."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 40%, var(--primary-light) 100%)",
      }}
    >
      {/* Background Image - Students */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-[55%] bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          }}
        ></div>

        {/* Animated Background Elements */}
        <div
          className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full blur-3xl animate-float"
          style={{ background: "rgba(255,255,255,0.08)" }}
        ></div>
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-3xl animate-float-slow"
          style={{ background: "rgba(255,255,255,0.05)" }}
        ></div>

        {/* Small decorative elements */}
        <div className="absolute top-20 left-[15%] w-3 h-3 bg-white/40 rounded-full animate-float-reverse"></div>
        <div className="absolute top-40 right-[25%] w-4 h-4 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-[30%] w-2 h-2 bg-white/25 rounded-full animate-float-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 text-left py-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - İçerik */}
          <div>
            <div className="animate-fade-in max-w-2xl">
              <h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-white"
                style={{ textShadow: "0 3px 20px rgba(0,0,0,0.2)" }}
              >
                Konu Ülkenin Geleceği İse
                <span
                  className="block text-transparent bg-clip-text animate-gradient-x mt-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #fef08a, #fde047, #facc15, #fde047, #fef08a)",
                    backgroundSize: "200% 100%",
                    filter: "drop-shadow(0 0 20px rgba(253,224,71,0.4))",
                  }}
                >
                  Özne Eğitimdir
                </span>
              </h1>
            </div>

            <div className="animate-slide-up max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Button
                  as={Link}
                  href="/iletisim"
                  size="lg"
                  className="font-bold hover:scale-105 transition-all duration-300 w-full sm:w-auto px-8 py-6 text-base shadow-xl rounded-xl"
                  style={{ background: "white", color: "var(--primary-dark)" }}
                >
                  Ücretsiz Danışmanlık Al
                </Button>
                <Button
                  as={Link}
                  href="/dil-okullari"
                  size="lg"
                  className="text-white font-bold hover:scale-105 transition-all duration-300 w-full sm:w-auto px-8 py-6 text-base backdrop-blur-md rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "2px solid rgba(255,255,255,0.3)",
                  }}
                >
                  Programları İncele
                </Button>
              </div>

              {/* Dönen Cümleler */}
              <div className="mt-8">
                <div
                  className="backdrop-blur-lg rounded-2xl p-6 min-h-[120px] flex items-center justify-center shadow-xl relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  {quotes.map((quote, index) => (
                    <p
                      key={index}
                      className={`text-white text-base sm:text-lg font-medium text-center leading-relaxed absolute inset-0 flex items-center justify-center px-6 transition-all duration-700 ${
                        index === currentQuoteIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {quote}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Dönen Globe */}
          <div className="hidden lg:flex flex-col items-center justify-start space-y-6 pl-12 -mt-12">
            {/* Dönen 3D Dünya Küresi */}
            <div className="relative w-full max-w-[400px] flex items-center justify-center">
              <Globe />
            </div>

            {/* Logo */}
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.jpg"
                alt="AKA Logo"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metin */}
            <p className="text-white text-xl font-bold text-center max-w-xs tracking-wide drop-shadow-lg">
              Öğretmen Dokunuşuyla Dünya Keşfi
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

// CSS için stil ekliyoruz
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
  `;
  if (!document.querySelector("style[data-hero-gradient]")) {
    style.setAttribute("data-hero-gradient", "true");
    document.head.appendChild(style);
  }
}
