"use client";

import { useState, useEffect } from "react";

export default function ValuesBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const values = [
    { text: "Azim", color: "from-red-600 to-red-700" },
    { text: "Kararlılık", color: "from-white to-gray-100" },
    { text: "Ayrıcalık", color: "from-red-700 to-red-800" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 3000); // Her 3 saniyede değiş

    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Arka Plan Deseni */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(220, 38, 38, 0.1) 10px, rgba(220, 38, 38, 0.1) 20px)`,
          }}
        />
      </div>

      {/* Dekoratif Elementler */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-40 h-40 bg-red-300 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Üst Başlık */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2 tracking-wide">
              Değerlerimiz
            </h2>
            <div className="h-1 bg-gradient-to-r from-red-600 via-white to-red-600 rounded-full" />
          </div>
        </div>

        {/* Ana Banner - Döngüsel Kelimeler */}
        <div className="relative h-32 sm:h-40 lg:h-48 flex items-center justify-center">
          {values.map((value, index) => (
            <div
              key={value.text}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                index === activeIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <div
                className={`
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
                font-extrabold
                bg-gradient-to-r ${value.color}
                ${
                  index === 1
                    ? "text-transparent bg-clip-text"
                    : "text-transparent bg-clip-text"
                }
                drop-shadow-2xl
                animate-pulse-slow
                tracking-tight
              `}
                style={{
                  textShadow:
                    index === 1
                      ? "2px 2px 4px rgba(220, 38, 38, 0.3)"
                      : "2px 2px 8px rgba(0, 0, 0, 0.1)",
                  fontFamily: "Montserrat, Poppins, sans-serif",
                }}
              >
                {value.text}
              </div>
            </div>
          ))}
        </div>

        {/* Alt Göstergeler */}
        <div className="flex justify-center gap-3 mt-8">
          {values.map((value, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                h-2 rounded-full transition-all duration-500
                ${
                  index === activeIndex
                    ? "w-12 bg-gradient-to-r from-red-600 to-red-700"
                    : "w-2 bg-gray-300 hover:bg-red-400"
                }
              `}
              aria-label={`${value.text} değerini göster`}
            />
          ))}
        </div>

        {/* Statik Tüm Değerler (Mobil için yedek) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={value.text}
              className={`
                group relative overflow-hidden
                bg-white rounded-2xl p-6 sm:p-8
                border-2 ${
                  index === activeIndex
                    ? "border-red-600 shadow-xl"
                    : "border-gray-200 hover:border-red-300"
                }
                transition-all duration-500
                hover:shadow-2xl hover:scale-105
              `}
            >
              {/* Arka Plan Gradient */}
              <div
                className={`
                absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                bg-gradient-to-br ${value.color}
              `}
              />

              {/* İçerik */}
              <div className="relative z-10 text-center">
                {/* Numara Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white font-bold mb-4 shadow-lg">
                  {index + 1}
                </div>

                {/* Değer Başlığı */}
                <h3
                  className={`
                  text-2xl sm:text-3xl font-bold mb-3
                  ${index === 1 ? "text-gray-900" : "text-red-700"}
                  transition-colors duration-300
                `}
                >
                  {value.text}
                </h3>

                {/* Açıklama */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {index === 0 &&
                    "Hedeflerinize ulaşma yolunda kararlı adımlar"}
                  {index === 1 &&
                    "Eğitim yolculuğunuzda yanınızda kalma taahhüdü"}
                  {index === 2 && "Her öğrenciye eşit fırsat ve şeffaf süreç"}
                </p>
              </div>

              {/* Dekoratif Çizgi */}
              <div
                className={`
                absolute bottom-0 left-0 right-0 h-1 
                bg-gradient-to-r ${value.color}
                transform origin-left
                ${index === activeIndex ? "scale-x-100" : "scale-x-0"}
                transition-transform duration-1000
              `}
              />
            </div>
          ))}
        </div>

        {/* Alt Dekoratif Çizgi */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />
        </div>
      </div>

      {/* CSS Animasyonları */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.02);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @media (max-width: 640px) {
          .text-responsive {
            font-size: clamp(2.5rem, 12vw, 5rem);
          }
        }
      `}</style>
    </section>
  );
}
