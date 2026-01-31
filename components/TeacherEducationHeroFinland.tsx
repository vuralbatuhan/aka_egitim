"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TeacherEducationHeroFinland() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center mt-20 md:mt-24" style={{ backgroundColor: "#4A0F18" }}>

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
            <Link href="/ogretmen-hareketliligi" className="hover:underline">Öğretmen Hareketliliği</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">Finlandiya</span>
          </motion.nav>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Finlandiya Öğretmen Eğitim Programları
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-white mb-6 md:mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Finlandiya, dünya&apos;nın en iyi eğitim sistemine sahip olup, öğretmen yetiştirme programları da son derece prestijlidir. Öğretmenlik mesleği Finlandiya&apos;da çok saygın bir meslektir.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
