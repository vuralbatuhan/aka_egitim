"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

type HeroSlide = {
  id: string;
  image: string;
  alt: string;
} & ({ isDefault: true } | { country: string });

const SLIDES: HeroSlide[] = [
  // {
  //   id: "italya",
  //   country: "İtalya",
  //   image: "/images/pisa.png",
  //   alt: "Pisa Kulesi ve İtalya",
  // },
  // {
  //   id: "almanya",
  //   country: "Almanya",
  //   image: "/images/koln-katedrali.png",
  //   alt: "Köln Katedrali, Almanya",
  // },
  // {
  //   id: "cin",
  //   country: "Çin",
  //   image: "/images/cinin-teknolojik-yukselisi.png",
  //   alt: "Şangay silüeti, Çin",
  // },
  {
    id: "dunya-kesfi",
    isDefault: true,
    image:
      "/images/handsome-latin-man-helping-his-colleagues-out-by-explaining-some-his-work-library.png",
    alt: "Öğretmen ve öğrenciler kütüphanede",
  },
];

const HERO_DESCRIPTION =
  "AKA'da eğitime dair her yolculuk bir öğretmen eşliğinde başlar ve öğretmen eşliğinde tamamlanır.";

export default function Hero() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex((prev) => {
      if (index < 0) return SLIDES.length - 1;
      if (index >= SLIDES.length) return 0;
      return index;
    });
  }, []);

  const goNext = useCallback(
    () => goTo(currentIndex + 1),
    [currentIndex, goTo],
  );
  const goPrev = useCallback(
    () => goTo(currentIndex - 1),
    [currentIndex, goTo],
  );

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  const handleConsultationClick = () => router.push("/iletisim#contact-form");
  const handleProgramsClick = () => router.push("/dil-egitimi");

  const slide = SLIDES[currentIndex];

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden min-h-[560px] sm:min-h-[600px] md:min-h-[750px] lg:min-h-[850px]"
      style={{
        backgroundImage: "url('/images/baskl.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      {/* Bordo overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#5F1B22",
          opacity: 0.98,
          zIndex: 1,
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      />

      {/* Üniversite Tercih Formu - sağ üst; mobilde kompakt, header altında gap */}
      <div className="absolute top-[7.25rem] sm:top-32 md:top-36 right-3 sm:right-4 md:right-8 lg:right-12 z-20 pt-1">
        <Link
          href="/universite/basvuru-formu"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-white rounded-full font-semibold hover:opacity-90 transition-opacity text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 max-w-[calc(100vw-2rem)]"
          style={{ backgroundColor: "#F07D2C" }}
        >
          <span className="truncate">Üniversite Tercih Formu</span>
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:pl-32 lg:pr-2 relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-24 items-center w-full pt-40 sm:pt-28 pb-10 sm:pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
          {/* Sol - Metin ve butonlar; mobilde sonda (görsel üstte) */}
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 pl-0 lg:pl-12 text-center lg:text-left order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col space-y-4 md:space-y-6"
              >
                <h1 className="leading-tight">
                  {"isDefault" in slide && slide.isDefault ? (
                    <>
                      <span
                        className="text-white block mb-1 text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
                        style={{ fontWeight: "400" }}
                      >
                        Öğretmen Dokunuşuyla
                      </span>
                      <span
                        className="block text-4xl sm:text-5xl md:text-6xl sm:text-[72px]"
                        style={{ fontWeight: "700", color: "#F07D2C" }}
                      >
                        Güvenli Yurt Dışı Eğitim Yolculuğu
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className="block mb-1 text-2xl sm:text-3xl md:text-4xl lg:text-[42px]"
                        style={{ color: "#F07D2C", fontWeight: "600" }}
                      >
                        {"country" in slide && slide.country}
                      </span>
                      <span
                        className="block text-3xl sm:text-4xl md:text-5xl lg:text-[56px]"
                        style={{ color: "#F07D2C", fontWeight: "700" }}
                      >
                        Dil Kampı
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-white/95 leading-relaxed max-w-xl text-sm sm:text-base md:text-lg mx-auto lg:mx-0">
                  {"isDefault" in slide && slide.isDefault ? (
                    <>
                      AKA&apos;da eğitime dair her yolculuk bir{" "}
                      <span style={{ color: "#F07D2C", fontWeight: "700" }}>
                        öğretmen
                      </span>
                      <br className="hidden sm:block" />
                      <span className="sm:hidden"> </span>
                      eşliğinde başlar ve{" "}
                      <span style={{ color: "#F07D2C", fontWeight: "700" }}>
                        öğretmen
                      </span>{" "}
                      eşliğinde tamamlanır.
                    </>
                  ) : (
                    HERO_DESCRIPTION
                  )}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
                  <button
                    onClick={handleConsultationClick}
                    className="cursor-pointer text-white rounded-full font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 min-h-[44px] flex items-center justify-center touch-manipulation"
                    style={{ backgroundColor: "#F07D2C" }}
                  >
                    Bizimle İletişime Geçin
                  </button>
                  <button
                    onClick={handleProgramsClick}
                    className="cursor-pointer bg-transparent text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-white min-h-[44px] flex items-center justify-center touch-manipulation"
                  >
                    Programları İncele
                  </button>
                </div>

                {/* Pagination dots - mobilde tıklanabilir alan */}
                <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="rounded-full p-2 -m-2 lg:p-0 lg:m-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 touch-manipulation"
                      aria-label={`Slayt ${i + 1}`}
                    >
                      <span
                        className="block rounded-full transition-all duration-300"
                        style={{
                          width: i === currentIndex ? 28 : 12,
                          height: 6,
                          backgroundColor:
                            i === currentIndex
                              ? "#F07D2C"
                              : "rgba(255,255,255,0.5)",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sağ - Görsel; mobilde üstte küçük, masaüstünde sağda */}
          <div className="relative block lg:block pr-0 lg:translate-x-8 xl:translate-x-12 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="relative w-full max-w-[260px] sm:max-w-[320px] mx-auto lg:mx-0 lg:w-[380px] xl:w-[500px]"
              >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={420}
                    height={420}
                    className="w-full h-auto aspect-square object-cover rounded-2xl"
                    priority={currentIndex === 0}
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, (max-width: 1280px) 380px, 500px"
                  />
                </div>
                <div
                  className="absolute rounded-full flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] xl:w-[100px] xl:h-[100px] bottom-[-16px] left-[-16px] lg:bottom-[-22px] lg:left-[-22px] xl:bottom-[-24px] xl:left-[-24px]"
                  style={{
                    backgroundColor: "#F07D2C",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  <Image
                    src="/images/group-88.png"
                    alt="Öğretmen dokunuşu"
                    width={55}
                    height={55}
                    className="object-contain w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slider okları - mobilde dokunmatik alan 44px+ */}
      {/* <button
        onClick={goPrev}
        className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border-2 border-white/40 text-white/90 hover:border-white hover:text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent touch-manipulation"
        aria-label="Önceki slayt"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border-2 border-[#F07D2C] text-[#F07D2C] hover:bg-[#F07D2C] hover:text-white hover:border-[#F07D2C] focus:outline-none focus:ring-2 focus:ring-[#F07D2C] focus:ring-offset-2 focus:ring-offset-transparent touch-manipulation"
        aria-label="Sonraki slayt"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button> */}
    </section>
  );
}
