"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LanguageSchoolHeroFinland() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center mt-20 md:mt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ backgroundColor: "#4A0F18" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="max-w-3xl">
          <motion.nav
            className="mb-4 md:mb-6 text-xs sm:text-sm text-white opacity-90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="hover:underline">Anasayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/dil-egitimi" className="hover:underline">Dil Eğitimi</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">Finlandiya Dil Okulu Programları</span>
          </motion.nav>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Finlandiya Dil Okulu Programları
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-white mb-0 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Finlandiya&apos;da İngilizce öğrenmek, İskandinav yaşam tarzını deneyimleme ve dünya&apos;nın en iyi eğitim sistemini yakından tanıma fırsatıdır. Modern dil okullarında kaliteli İngilizce eğitimi alabilirsiniz.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
