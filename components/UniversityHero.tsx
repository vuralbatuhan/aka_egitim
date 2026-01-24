"use client";

import { motion } from "framer-motion";

export default function UniversityHero() {
  return (
    <section
      className="w-full px-4 lg:px-8 flex items-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px] mt-20 md:mt-24"
      style={{ backgroundColor: "#641a29" }}
    >
      <div
        className="container mx-auto w-full px-4 sm:px-6 md:pl-12 lg:pl-24 xl:pl-32 2xl:pl-40 py-6 md:pt-8 lg:pt-12"
        style={{ maxWidth: "1920px" }}
      >
        {/* Breadcrumbs */}
        <motion.div 
          className="mb-3 md:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <nav className="text-xs sm:text-sm">
            <span className="text-white">Anasayfa</span>
            <span className="mx-1.5 md:mx-2 text-white">/</span>
            <span className="text-white font-semibold">Üniversite</span>
          </nav>
        </motion.div>

        {/* Page Title */}
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
          style={{ color: "#f0771b" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Eğitim Destinasyonlarımız
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-4xl leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Hem yurt dışında üniversite okumak isteyen Türk öğrencilere hem de Türkiye'de eğitim almak isteyen uluslararası öğrencilere hedeflerine uygun üniversite yerleşimi için rehberlik hizmeti sunuyoruz.
        </motion.p>
      </div>
    </section>
  );
}
