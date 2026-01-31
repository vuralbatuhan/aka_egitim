"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NicinKurdukHero() {
  return (
    <section
      className="w-full px-4 lg:px-8 flex items-center min-h-[280px] sm:min-h-[320px] md:min-h-[400px] mt-20 md:mt-24"
      style={{ backgroundColor: "#641a29", backgroundImage: "linear-gradient(to bottom, #641a29, #4a1320)" }}
    >
      <div
        className="container mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40 py-6 md:pt-8 lg:pt-12"
      >
        <div className="max-w-[1200px] mx-auto">
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
              Niçin Kurduk
            </span>
          </nav>
        </motion.div>

        {/* Page Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3"
          style={{ color: "#f0771b" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Niçin Kurduk
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-white mb-3 md:mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <span className="font-semibold">Atatürk&apos;ün Vizyonuyla</span> Yola Çıktık
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-white max-w-4xl leading-relaxed mb-6 md:mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Kıvılcım olarak gönderilen öğrencilerin, alev olarak dönmesi için öğretmen rehberliğinde güvenli eğitim yolculuğu sunmak üzere kurulduk.
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
            Ücretsiz Danışmanlık
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
      </div>
    </section>
  );
}
