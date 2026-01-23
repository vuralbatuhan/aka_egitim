"use client";

import Image from "next/image";

export default function ProfessionalConsultancy() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        backgroundColor: "#60091b",
        borderRadius: "24px",
        margin: "40px auto",
        maxWidth: "1200px",
        width: "100%",
        height: "480px",
        padding: "0 40px",
      }}
    >
      <div className="relative z-10 w-full h-full px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-4 h-full">
            {/* Tag/Label */}
            <div
              className="inline-block rounded-full px-4 py-2 text-white text-sm font-medium w-fit"
              style={{ backgroundColor: "#B5505C" }}
            >
              Profesyonel Danışmanlık
            </div>

            {/* Main Heading */}
            <h2 className="leading-tight">
              <span
                className="text-white block mb-1"
                style={{ fontSize: "42px", fontWeight: "700" }}
              >
                Hayalinizdeki Eğitim
              </span>
              <span
                className="block"
                style={{
                  fontSize: "42px",
                  fontWeight: "700",
                  color: "#EB702B",
                }}
              >
                Bir Adım Uzağınızda
              </span>
            </h2>

            {/* Descriptive Paragraph */}
            <p
              className="text-white leading-relaxed max-w-xl"
              style={{ fontSize: "16px", lineHeight: "1.6" }}
            >
              Aka Eğitim profesyonel danışmanlarımızla görüşün ve size özel
              yurtdışı eğitim planınızı oluşturalım
            </p>

            {/* Call-to-Action Button */}
            <button
              className="text-white rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 w-fit"
              style={{
                padding: "16px 40px",
                backgroundColor: "#EB702B",
                fontSize: "16px",
              }}
            >
              Hemen Başvur
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M2 5H8M8 5L5 2M8 5L5 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-end justify-center lg:justify-end h-full">
            <div
              className="relative"
              style={{ width: "100%", maxWidth: "350px", height: "100%" }}
            >
              <Image
                src="/images/375274645_96eb2f85-aa60-40d0-83f7-2674070a32e8.png"
                alt="Profesyonel danışmanlık - Genç danışman"
                width={350}
                height={480}
                className="w-full h-full"
                style={{ objectFit: "contain", objectPosition: "right bottom" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
