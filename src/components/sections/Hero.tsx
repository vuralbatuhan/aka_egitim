'use client'

import { Button } from "@heroui/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

export default function Hero() {
  const countries = useCounter(25);
  const schools = useCounter(500);
  const students = useCounter(10000);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1d9bf0] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[#1d9bf0]/20 animate-pulse pointer-events-none"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#1383ce]/30 rounded-full animate-bounce-slow pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-[#1383ce]/30 rounded-full animate-bounce-slow delay-1000 pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-[#1383ce]/30 rounded-full animate-bounce-slow delay-2000 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 drop-shadow-2xl leading-tight text-white">
            Konu Ülkenin Geleceği İse 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 animate-gradient-x drop-shadow-[0_0_30px_rgba(253,224,71,0.5)]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              Özne Eğitimdir
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 max-w-4xl mx-auto drop-shadow-lg px-4 leading-relaxed text-white">
            Dil eğitiminden üniversite programlarına kadar yurtdışı eğitim 
            yolculuğunuzda profesyonel danışmanlık hizmetiyle yanınızdayız
          </p>
        </div>
        
        <div className="animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
            <Button 
              as={Link}
              href="/iletisim"
              size="lg"
              color="primary"
              className="font-bold hover:scale-105 transition-all duration-300 w-full sm:w-auto px-8 py-4 text-lg shadow-2xl text-white"
              radius="lg"
            >
              Ücretsiz Danışmanlık Al
            </Button>
            <Button 
              as={Link}
              href="/dil-okullari"
              size="lg"
              variant="bordered"
              className="border-2 border-white text-white font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto px-8 py-4 text-lg backdrop-blur-sm"
              radius="lg"
            >
              Programları İncele
            </Button>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div ref={countries.ref} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-white/25 transition-all duration-300 hover:scale-105 border border-white/20 shadow-2xl group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-white">
                {countries.count}+
              </div>
              <div className="text-lg sm:text-xl font-medium text-white">Ülkede Eğitim</div>
            </div>
            <div ref={schools.ref} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-white/25 transition-all duration-300 hover:scale-105 border border-white/20 shadow-2xl group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-white">
                {schools.count}+
              </div>
              <div className="text-lg sm:text-xl font-medium text-white">Partner Okul</div>
            </div>
            <div ref={students.ref} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 sm:p-8 hover:bg-white/25 transition-all duration-300 hover:scale-105 border border-white/20 shadow-2xl group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-white">
                {students.count.toLocaleString('tr-TR')}+
              </div>
              <div className="text-lg sm:text-xl font-medium text-white">Mutlu Öğrenci</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CSS için stil ekliyoruz (Tailwind config'e eklenebilir)
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
  `;
  if (!document.querySelector('style[data-hero-gradient]')) {
    style.setAttribute('data-hero-gradient', 'true');
    document.head.appendChild(style);
  }
}

