"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeacherEducationHeroSwitzerland() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center mt-20 md:mt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/zurih-city.png"
          alt="İsviçre Öğretmen Eğitim Programları"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "#800000", opacity: 0.5 }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
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
            <Link href="/ogretmen-hareketliligi" className="hover:underline">Öğretmen Hareketliliği</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">İsviçre</span>
          </motion.nav>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            İsviçre Öğretmen Eğitim Programları
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-white mb-6 md:mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            İsviçre, uluslararası eğitim standartları ve çok dilli eğitim sistemleri ile öğretmen yetiştirme programlarında öncü konumdadır. Pedagojik yaklaşımlar, çok kültürlü sınıf yönetimi ve modern eğitim teknolojileri konusunda uzmanlaşma fırsatı sunar.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
