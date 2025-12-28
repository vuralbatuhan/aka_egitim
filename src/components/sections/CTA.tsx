'use client'

import { Button } from "@heroui/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-turquoise-600 via-sky-600 to-emerald-600 relative overflow-hidden isolate">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-turquoise-500/20 via-transparent to-violet-500/20 pointer-events-none"></div>

      {/* Animated Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-bounce-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
          <span className="text-sm font-semibold text-white px-4 py-1">🎓 Profesyonel Danışmanlık</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          Hayalinizdeki Eğitim Bir Adım Uzağınızda
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in">
          Aka Eğitim (aka egitim) profesyonel danışmanlarımızla görüşün ve size özel yurtdışı eğitim planınızı oluşturalım
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            as={Link}
            href="/iletisim"
            size="lg"
            className="bg-white text-gray-900 font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-2xl"
            radius="lg"
            endContent={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            Hemen Başvur
          </Button>
          <Button
            as={Link}
            href="/hakkimizda"
            size="lg"
            variant="bordered"
            className="border-2 border-white text-white font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            radius="lg"
          >
            Hakkımızda
          </Button>
        </div>
      </div>
    </section>
  );
}

