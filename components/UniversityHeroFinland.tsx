"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function UniversityHeroFinland() {
  return (
    <section
      className="w-full flex items-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px] mt-20 md:mt-24"
      style={{ backgroundColor: "#641a29" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:pt-8 lg:pt-12" style={{ maxWidth: "1200px" }}>
        <div className="max-w-3xl">
          <motion.nav
            className="mb-4 md:mb-6 text-xs sm:text-sm text-white opacity-90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="hover:underline">Anasayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/universite" className="hover:underline">Üniversite</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">Finlandiya Üniversite Programları</span>
          </motion.nav>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Finlandiya Üniversite Programları
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-white mb-6 md:mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Finlandiya&apos;nın dünyaca ünlü üniversiteleri, İngilizce lisans programları ve kaliteli eğitim sunar. AB vatandaşları için ücretsiz eğitim imkanı vardır.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
