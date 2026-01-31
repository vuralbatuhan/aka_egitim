"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfessionalConsultancy() {
  const router = useRouter();
  return (
    <section className="relative px-4 lg:px-8 my-6 md:my-10">
      <div className="w-full max-w-[1200px] mx-auto">
        <div
          className="relative flex items-center overflow-hidden rounded-2xl md:rounded-3xl w-full min-h-[400px] md:min-h-[480px] px-4 sm:px-6 md:px-10"
          style={{
            backgroundColor: "#60091b",
          }}
        >
          <div className="relative z-10 w-full py-8 md:py-0 md:h-full px-2 sm:px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center h-full">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-center space-y-3 md:space-y-4 h-full text-center lg:text-left">
                {/* Tag/Label */}
                <div
                  className="inline-block rounded-full px-3 py-1.5 md:px-4 md:py-2 text-white text-xs md:text-sm font-medium w-fit mx-auto lg:mx-0"
                  style={{ backgroundColor: "#B5505C" }}
                >
                  Profesyonel Danışmanlık
                </div>

                {/* Main Heading */}
                <h2 className="leading-tight">
                  <span
                    className="text-white block mb-1 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold"
                  >
                    Hayalinizdeki Eğitim
                  </span>
                  <span
                    className="block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold"
                    style={{
                      color: "#EB702B",
                    }}
                  >
                    Bir Adım Uzağınızda
                  </span>
                </h2>

                {/* Descriptive Paragraph */}
                <p
                  className="text-white leading-relaxed max-w-xl text-sm md:text-base mx-auto lg:mx-0"
                  style={{ lineHeight: "1.6" }}
                >
                  Aka Eğitim profesyonel danışmanlarımızla görüşün ve size özel
                  yurtdışı eğitim planınızı oluşturalım
                </p>

                {/* Call-to-Action Button */}
                <button
                  onClick={() => router.push("/iletisim")}
                  className="text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 w-fit mx-auto lg:mx-0 px-6 py-3 md:px-10 md:py-4 text-sm md:text-base hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
                  style={{
                    backgroundColor: "#EB702B",
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
              <div className="relative hidden lg:flex items-end justify-center lg:justify-end h-full">
                <div
                  className="relative w-full max-w-[450px] h-full translate-y-4"
                >
                  <Image
                    src="/images/375274645_96eb2f85-aa60-40d0-83f7-2674070a32e8.png"
                    alt="Profesyonel danışmanlık - Genç danışman"
                    width={450}
                    height={600}
                    className="w-full h-full"
                    style={{ objectFit: "contain", objectPosition: "right bottom" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
