"use client";

import { motion } from "framer-motion";

export default function UniversityAbroadHero() {
  return (
    <section
      className="w-full flex items-center min-h-[260px] sm:min-h-[300px] md:min-h-[360px] mt-20 md:mt-24"
      style={{ backgroundColor: "#641a29" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:pt-8 lg:pt-12">
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
            <span className="text-white">Üniversite</span>
            <span className="mx-1.5 md:mx-2 text-white">/</span>
            <span className="text-[#f0771b] font-semibold">
              Yurt Dışı Üniversite
            </span>
          </nav>
        </motion.div>

        {/* Page Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
          style={{ color: "#f0771b" }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Yurt Dışı Üniversite
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-white max-w-3xl leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Amerika, Kanada, Avrupa ve daha birçok ülkede üniversite ve yabancı
          dil programlarını tek ekranda keşfedin. AKADER’in öğretmen
          danışmanlığı ile size en uygun programı birlikte seçelim.
        </motion.p>
      </div>
    </section>
  );
}
