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
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 40%, var(--primary-light) 100%)' }}
    >
      {/* Background Image - Students */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-[55%] bg-cover bg-center opacity-25"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80)',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
          }}
        ></div>

        {/* Animated Background Elements */}
        <div
          className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full blur-3xl animate-float"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        ></div>
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-3xl animate-float-slow"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        ></div>

        {/* Small decorative elements */}
        <div className="absolute top-20 left-[15%] w-3 h-3 bg-white/40 rounded-full animate-float-reverse"></div>
        <div className="absolute top-40 right-[25%] w-4 h-4 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-[30%] w-2 h-2 bg-white/25 rounded-full animate-float-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 text-left py-8 pt-20">
        <div className="animate-fade-in max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full mb-4 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold tracking-wide text-sm">Yurtdışı Eğitim Danışmanlığı</span>
          </div>

          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-white"
            style={{ textShadow: '0 3px 20px rgba(0,0,0,0.2)' }}
          >
            Konu Ülkenin Geleceği İse
            <span
              className="block text-transparent bg-clip-text animate-gradient-x mt-1"
              style={{
                backgroundImage: 'linear-gradient(90deg, #fef08a, #fde047, #facc15, #fde047, #fef08a)',
                backgroundSize: '200% 100%',
                filter: 'drop-shadow(0 0 20px rgba(253,224,71,0.4))'
              }}
            >
              Özne Eğitimdir
            </span>
          </h1>
          <p
            className="text-sm sm:text-base md:text-base lg:text-lg mb-5 leading-relaxed text-white/90"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            Dil eğitiminden üniversite programlarına kadar yurtdışı eğitim
            yolculuğunuzda profesyonel danışmanlık hizmetiyle yanınızdayız
          </p>
        </div>

        <div className="animate-slide-up max-w-2xl">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <Button
              as={Link}
              href="/iletisim"
              size="lg"
              className="font-bold hover:scale-105 transition-all duration-300 w-full sm:w-auto px-8 py-6 text-base shadow-xl rounded-xl"
              style={{ background: 'white', color: 'var(--primary-dark)' }}
            >
              Ücretsiz Danışmanlık Al
            </Button>
            <Button
              as={Link}
              href="/dil-okullari"
              size="lg"
              className="text-white font-bold hover:scale-105 transition-all duration-300 w-full sm:w-auto px-8 py-6 text-base backdrop-blur-md rounded-xl"
              style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)' }}
            >
              Programları İncele
            </Button>
          </div>

          {/* İstatistikler */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
            <div
              ref={countries.ref}
              className="backdrop-blur-lg rounded-lg p-4 hover:scale-105 transition-all duration-300 shadow-lg group"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center justify-center mb-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                {countries.count}+
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/90">Ülkede Eğitim</div>
            </div>

            <div
              ref={schools.ref}
              className="backdrop-blur-lg rounded-lg p-4 hover:scale-105 transition-all duration-300 shadow-lg group"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center justify-center mb-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                {schools.count}+
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/90">Partner Okul</div>
            </div>

            <div
              ref={students.ref}
              className="backdrop-blur-lg rounded-lg p-4 hover:scale-105 transition-all duration-300 shadow-lg group"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-center justify-center mb-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                {students.count.toLocaleString('tr-TR')}+
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/90">Mutlu Öğrenci</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// CSS için stil ekliyoruz
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
