"use client";

import { useState } from "react";
import Image from "next/image";

const programs = [
  {
    title: "Genel İngilizce Kursu",
    image: "/images/pretty-teenager-happy-be-back-university.png",
    duration: "2-48 hafta",
    price: "£250-400 / hafta",
    description: "Konuşma, okuma, yazma ve dinleme becerilerinizi geliştirin",
  },
  {
    title: "IELTS Hazırlık",
    image: "/images/photo-happy-student-holding-notebook-classroom.png",
    duration: "4-12 hafta",
    price: "£300-450 / hafta",
    description: "IELTS sınavına özel yoğun hazırlık programı",
  },
  {
    title: "Cambridge Hazırlık",
    image: "/images/pretty-teenager-happy-be-back-university.png",
    duration: "8-12 hafta",
    price: "£320-480 / hafta",
    description: "Cambridge sınavlarına yönelik kapsamlı hazırlık",
  },
  {
    title: "İş İngilizcesi",
    image: "/images/photo-happy-student-holding-notebook-classroom.png",
    duration: "4-24 hafta",
    price: "£350-500 / hafta",
    description: "Profesyonel iş hayatı için özel İngilizce programı",
  },
];

export default function LanguagePrograms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2; // Number of cards visible at once

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
    <section className="py-10 md:py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="w-1 h-12 md:h-16"
              style={{ backgroundColor: "#800000" }}
            ></div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2" style={{ color: "#1a1a1a" }}>
                Dil Programları
              </h2>
              <p className="text-sm md:text-lg" style={{ color: "#666666" }}>
                İhtiyacınıza uygun programı seçin
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#800000] hover:text-[#800000] transition-all duration-300"
              aria-label="Önceki"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-[#800000] flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-white transition-all duration-300"
              aria-label="Sonraki"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Program Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiblePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a1a" }}>
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 text-sm" style={{ color: "#666666" }}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
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

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center"
            aria-label="Önceki"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(programs.length / visibleCards) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * visibleCards)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCards) === i
                    ? "bg-[#800000] w-8"
                    : "bg-gray-300"
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
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
