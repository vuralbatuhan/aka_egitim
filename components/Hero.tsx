"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleConsultationClick = () => {
    router.push("/iletisim#contact-form");
  };

  const handleProgramsClick = () => {
    router.push("/programlar");
  };

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden min-h-[600px] md:min-h-[750px] lg:min-h-[850px]"
      style={{
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

      <div className="container mx-auto px-4 sm:px-6 lg:pl-32 lg:pr-2 relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center w-full pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex flex-col space-y-4 md:space-y-6 pl-0 lg:pl-12 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <h1 className="leading-tight">
              <span
                className="text-white block mb-1 text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
                style={{ fontWeight: "400" }}
              >
                Öğretmen Dokunuşuyla
              </span>
              <span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-[72px]"
                style={{
                  fontWeight: "700",
                  color: "#F07D2C",
                }}
              >
                Dünya Keşfi
              </span>
            </h1>

            {/* Descriptive Text */}
            <p
              className="text-white leading-relaxed max-w-xl text-sm sm:text-base md:text-lg mx-auto lg:mx-0"
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
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
              <button
                onClick={handleConsultationClick}
                className="cursor-pointer text-white rounded-full font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4"
                style={{
                  backgroundColor: "#F07D2C",
                }}
              >
                Bizimle iletişime geçin
              </button>
              <button
                onClick={handleProgramsClick}
                className="cursor-pointer bg-transparent text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4"
                style={{
                  border: "2px solid white",
                }}
              >
                Programları İncele
              </button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative hidden lg:block pr-0 translate-x-8 lg:translate-x-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-[320px] xl:w-[420px]">
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
              className="absolute rounded-full flex items-center justify-center w-16 h-16 xl:w-[90px] xl:h-[90px]"
              style={{
                bottom: "-20px",
                left: "-20px",
                backgroundColor: "#F07D2C",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src="/images/group-88.png"
                alt="Öğretmen dokunuşu ikonu"
                width={55}
                height={55}
                className="object-contain w-10 h-10 xl:w-14 xl:h-14"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
