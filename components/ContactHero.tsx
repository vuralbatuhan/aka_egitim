"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden mt-20 md:mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/woman-using-smartphone.png"
          alt="İletişim"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Reddish Overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: "rgba(82, 7, 23, 0.75)",
            background: "linear-gradient(135deg, rgba(82, 7, 23, 0.85) 0%, rgba(106, 11, 28, 0.75) 100%)"
          }}
        />
      </div>

      {/* Content - aynı hizada: max-w-[1200px] + px-4 lg:px-8 (ContactInfo / OverseasEducationForm ile) */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-24 md:pb-16">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <motion.nav 
            className="mb-4 md:mb-6 text-xs sm:text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="text-white hover:text-[#f0771b] transition-colors">
              Anasayfa
            </Link>
            <span className="mx-1.5 md:mx-2 text-white">/</span>
            <span className="text-[#f0771b] font-semibold">İletişim</span>
          </motion.nav>

          {/* Main Title */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            style={{ color: "#f0771b" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            İletişim
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Bize ulaşın, size en uygun eğitim programını birlikte bulalım.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={() => {
              const element = document.getElementById("contact-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg text-sm md:text-base"
            style={{ backgroundColor: "#f0771b" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            İletişim
          </motion.button>
        </div>
      </div>
    </section>
  );
}
