"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BizKimizHero() {
  return (
    <section
      className="w-full px-4 lg:px-8 flex items-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px] mt-20 md:mt-24"
      style={{ backgroundColor: "#641a29" }}
    >
      <div className="w-full max-w-[1200px] mx-auto py-6 md:pt-8 lg:pt-12">
        {/* Breadcrumbs */}
        <motion.div
          className="mb-3 md:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <nav className="text-xs sm:text-sm">
            <Link href="/" className="text-white hover:text-[#f0771b] transition-colors">
              Anasayfa
            </Link>
            <span className="mx-1.5 md:mx-2 text-white">/</span>
            <span className="font-semibold" style={{ color: "#f0771b" }}>
              Biz Kimiz
            </span>
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
          Biz Kimiz
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-4xl leading-relaxed mb-6 md:mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Öğretmen rehberliğinde yurtdışı eğitim hareketliliğinin öncüsü. Azim, Kararlılık ve Ayrıcalık ilkeleriyle öğrencilerimizin güvenli eğitim yolculuğunu sağlıyoruz.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 md:gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="/iletisim"
            className="px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg text-sm md:text-base"
            style={{ backgroundColor: "#f0771b" }}
          >
            İletişim
          </Link>
          <Link
            href="/dil-egitimi"
            className="px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-white border-2 transition-all hover:opacity-90 text-sm md:text-base"
            style={{ borderColor: "rgba(255,255,255,0.5)", backgroundColor: "transparent" }}
          >
            Programları İncele
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
