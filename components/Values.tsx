"use client";

import Image from "next/image";

const values = [
  {
    title: "Azim",
    description: "Hedeflerinize ulaşma yolunda kararlı adımlar",
    icon: "/images/perseverance_18331941.svg",
  },
  {
    title: "Kararlılık",
    description: "Eğitim yolculuğunuzda yanınızda kalma taahhüdü",
    icon: "/images/stability_4923204.svg",
  },
  {
    title: "Ayrıcalık",
    description: "Her öğrenciye eşit fırsat ve şeffaf süreç",
    icon: "/images/rating_2191153.svg",
  },
];

export default function Values() {
  return (
    <section className="py-10 md:py-20 px-4 lg:px-8 bg-[#F5F5F5]">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 md:mb-12">
          {/* Title with vertical line */}
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="w-1 h-10 md:h-16"
              style={{ backgroundColor: "#60091b" }}
            ></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#1a1a1a" }}>
              Değerlerimiz
            </h2>
          </div>

          {/* Logo */}
          <div className="hidden sm:flex flex-col items-end">
            <Image
              src="/images/Group 33 (1).png"
              alt="AKÆĞİTİM Logo"
              width={140}
              height={56}
              className="object-contain w-24 md:w-32 lg:w-[140px]"
            />
          </div>
        </div>

        {/* Value Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full"
        >
        {values.map((value, index) => {
          // Format description with line breaks as shown in the image
          const formatDescription = (desc: string) => {
            if (desc === "Hedeflerinize ulaşma yolunda kararlı adımlar") {
              return (
                <>
                  Hedeflerinize ulaşma
                  <br className="hidden md:block" />
                  <span className="md:hidden"> </span>
                  yolunda kararlı adımlar
                </>
              );
            }
            if (desc === "Eğitim yolculuğunuzda yanınızda kalma taahhüdü") {
              return (
                <>
                  Eğitim yolculuğunuzda yanınızda
                  <br className="hidden md:block" />
                  <span className="md:hidden"> </span>
                  kalma taahhüdü
                </>
              );
            }
            if (desc === "Her öğrenciye eşit fırsat ve şeffaf süreç") {
              return (
                <>
                  Her öğrenciye eşit fırsat ve
                  <br className="hidden md:block" />
                  <span className="md:hidden"> </span>
                  şeffaf süreç
                </>
              );
            }
            return desc;
          };

          return (
            <div
              key={value.title}
              className="value-card group flex flex-col items-start justify-start relative cursor-pointer transition-all duration-300 bg-white border border-[#E5E5E5] rounded-xl md:rounded-2xl p-5 md:p-8 min-h-[180px] md:min-h-[235px]"
            >
              {/* Icon Circle - Top Left */}
              <div
                className="icon-container rounded-full flex items-center justify-center mb-3 md:mb-4 transition-all duration-300 overflow-hidden w-12 h-12 md:w-[60px] md:h-[60px]"
                style={{
                  backgroundColor: "#E5E5E5",
                }}
              >
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={36}
                  height={36}
                  className="icon-image object-contain transition-all duration-300 w-7 h-7 md:w-9 md:h-9"
                  style={{
                    filter: "none",
                  }}
                />
              </div>

              {/* Title - Left Aligned */}
              <h3
                className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-left transition-colors duration-300 group-hover:text-white"
                style={{ color: "#1a1a1a" }}
              >
                {value.title}
              </h3>

              {/* Description - Left Aligned */}
              <p
                className="text-sm md:text-base leading-relaxed text-left transition-colors duration-300 group-hover:text-white"
                style={{ color: "#1a1a1a" }}
              >
                {formatDescription(value.description)}
              </p>

              {/* Hover Styles */}
              <style jsx global>{`
                .value-card:hover {
                  background-color: #8B253A !important;
                  border-color: #8B253A !important;
                  box-shadow: 0 4px 12px rgba(139, 37, 58, 0.2) !important;
                }
                .value-card:hover h3,
                .value-card:hover .text-2xl {
                  color: #FFFFFF !important;
                }
                .value-card:hover p,
                .value-card:hover .text-base {
                  color: #FFFFFF !important;
                }
                .value-card:hover .icon-container {
                  background-color: #F26721 !important;
                }
                .value-card:hover .icon-image,
                .value-card:hover img.icon-image {
                  filter: brightness(0) saturate(100%) invert(1) !important;
                  -webkit-filter: brightness(0) saturate(100%) invert(1) !important;
                }
              `}</style>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
