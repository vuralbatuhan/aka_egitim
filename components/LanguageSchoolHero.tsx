"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LanguageSchoolHero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center mt-20 md:mt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yurtdisi-dil-egitiminin-favori-ulkesi-ingiltere.png"
          alt="İngiltere Dil Okulu"
          fill
          className="object-cover"
          priority
        />
        {/* Red overlay with reduced opacity */}
        <div className="absolute inset-0" style={{ backgroundColor: "#800000", opacity: 0.5 }}></div>
        {/* Dark overlay gradient with reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <motion.div 
            className="mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <nav className="text-xs sm:text-sm text-white opacity-90">
              <span>Anasayfa</span>
              <span className="mx-2">/</span>
              <span className="font-semibold">Dil Okulları</span>
            </nav>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            İngiltere Dil Okulu Programları
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-white mb-6 md:mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            İngiltere'de İngilizce öğrenmek, dilin doğduğu yerde aksan ve kültürünü deneyimleme fırsatıdır. British Council onaylı kaliteli dil okullarında eğitim alabilirsiniz.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="px-6 py-3 md:px-8 md:py-4 rounded-lg text-white font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg text-sm md:text-base"
            style={{ backgroundColor: "#FF8C00" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Programları İncele
          </motion.button>
        </div>
      </div>
    </section>
  );
}
