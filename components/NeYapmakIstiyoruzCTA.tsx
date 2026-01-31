"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NeYapmakIstiyoruzCTA() {
  return (
    <section className="py-12 md:py-16 px-4 lg:px-8">
      <div className="container mx-auto" style={{ maxWidth: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl py-12 md:py-16 px-6 md:px-12 text-center"
          style={{ backgroundColor: "#6B1C28" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Birlikte{" "}
            <span
              className="underline"
              style={{ color: "#F48B21", textDecorationColor: "#F48B21" }}
            >
              Başarıya Ulaşalım
            </span>
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Yurtdışı eğitim yolculuğunuzda yanınızdayız. Hayallerinizi gerçeğe dönüştürmek için bugün bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90 text-center"
              style={{ backgroundColor: "#F48B21" }}
            >
              Ücretsiz Danışmanlık
            </Link>
            <a
              href="tel:+902121234567"
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/50 hover:bg-white/10 transition-all text-center"
            >
              Bizi Arayın
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
