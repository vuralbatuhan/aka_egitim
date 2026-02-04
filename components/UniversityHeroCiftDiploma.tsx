"use client";

import { motion } from "framer-motion";

export default function UniversityHeroCiftDiploma() {
  return (
    <section
      className="w-full flex items-center min-h-[220px] sm:min-h-[260px] md:min-h-[320px] mt-20 md:mt-24"
      style={{ background: "linear-gradient(90deg, #5e101e 0%, #7b1829 100%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] py-6 md:pt-8 lg:pt-12">
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
            <span className="text-white font-semibold">Çift Diploma</span>
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
          Çift Diploma
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-white max-w-3xl leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Hem mevcut lise eğitiminize devam ederken hem de Amerikan lise programı ile
          global bir diploma sahibi olun. AP dersleri ile üniversiteye bir adım önde başlayın.
        </motion.p>
      </div>
    </section>
  );
}

