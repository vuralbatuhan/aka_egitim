"use client";

import { useState } from "react";
import Image from "next/image";

const programs = [
  {
    title: "Master in Teacher Education",
    image: "/images/pretty-teenager-happy-be-back-university.png",
    duration: "2 yıl",
    price: "Ücretsiz (AB vatandaşları) / Ücretli",
    description: "Finlandiya üniversitelerinde İngilizce sunulan öğretmenlik master programları.",
  },
  {
    title: "Pedagojik Çalışmalar",
    image: "/images/photo-happy-student-holding-notebook-classroom.png",
    duration: "1-2 yıl",
    price: "Studyinfo.fi üzerinden",
    description: "Modern pedagoji ve öğretmen yetiştirme odaklı lisansüstü programlar.",
  },
  {
    title: "Erken Çocukluk Eğitimi",
    image: "/images/low-angle-cheerful-team-students-passed-test-by-preparing-all-together.png",
    duration: "2 yıl",
    price: "Üniversiteye göre değişir",
    description: "Okul öncesi ve erken çocukluk eğitimi alanında uzmanlaşma.",
  },
  {
    title: "Öğretmenlik Sertifika Programları",
    image: "/images/photo-happy-student-holding-notebook-classroom.png",
    duration: "6-12 ay",
    price: "Programa göre değişir",
    description: "Uluslararası öğretmenler için Finlandiya pedagojisi ve uygulama programları.",
  },
];

export default function LanguageProgramsFinland() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleCards >= programs.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? programs.length - visibleCards : prev - 1
    );
  };

  const visiblePrograms = programs.slice(currentIndex, currentIndex + visibleCards);

  return (
    <section id="programlar" className="py-10 md:py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="w-1 h-12 md:h-16"
              style={{ backgroundColor: "#800000" }}
            ></div>
            <div>
              <h2 id="programlar" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2" style={{ color: "#1a1a1a" }}>
                Öğretmen Eğitimi Programları
              </h2>
              <p className="text-sm md:text-lg" style={{ color: "#666666" }}>
                Finlandiya&apos;da öğretmen yetiştirme ve pedagoji programları
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#800000] hover:text-[#800000] transition-all duration-300"
              aria-label="Önceki"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-[#800000] flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-white transition-all duration-300"
              aria-label="Sonraki"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiblePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 text-sm" style={{ color: "#666666" }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{program.duration} | {program.price}</span>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: "#666666" }}>
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center"
            aria-label="Önceki"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(programs.length / visibleCards) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * visibleCards)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCards) === i ? "bg-[#800000] w-8" : "bg-gray-300"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border-2 border-[#800000] flex items-center justify-center text-[#800000]"
            aria-label="Sonraki"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
