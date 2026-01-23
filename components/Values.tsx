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
    <section className="py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          {/* Title with vertical line */}
          <div className="flex items-center gap-4">
            <div
              className="w-1 h-16"
              style={{ backgroundColor: "#60091b" }}
            ></div>
            <h2 className="text-5xl font-bold" style={{ color: "#1a1a1a" }}>
              Değerlerimiz
            </h2>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-end">
            <Image
              src="/images/Group 33 (1).png"
              alt="AKÆĞİTİM Logo"
              width={140}
              height={56}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Value Cards */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-6 mx-auto"
        style={{ width: "1100px", maxWidth: "100%" }}
      >
        {values.map((value, index) => {
          // Format description with line breaks as shown in the image
          const formatDescription = (desc: string) => {
            if (desc === "Hedeflerinize ulaşma yolunda kararlı adımlar") {
              return (
                <>
                  Hedeflerinize ulaşma
                  <br />
                  yolunda kararlı adımlar
                </>
              );
            }
            if (desc === "Eğitim yolculuğunuzda yanınızda kalma taahhüdü") {
              return (
                <>
                  Eğitim yolculuğunuzda yanınızda
                  <br />
                  kalma taahhüdü
                </>
              );
            }
            if (desc === "Her öğrenciye eşit fırsat ve şeffaf süreç") {
              return (
                <>
                  Her öğrenciye eşit fırsat ve
                  <br />
                  şeffaf süreç
                </>
              );
            }
            return desc;
          };

          return (
            <div
              key={value.title}
              className="group flex flex-col items-start justify-start shrink-0 relative cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E5",
                borderRadius: "24px",
                padding: "32px 24px",
                width: "370px",
                height: "235px",
              }}
            >
              {/* Icon Circle - Top Left */}
              <div
                className="icon-container rounded-full flex items-center justify-center mb-4 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: "#E5E5E5",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={36}
                  height={36}
                  className="icon-image object-contain transition-all duration-300"
                  style={{
                    filter: "none",
                  }}
                />
              </div>

              {/* Title - Left Aligned */}
              <h3
                className="text-2xl font-bold mb-3 text-left transition-colors duration-300 group-hover:text-[#8B253A]"
                style={{ color: "#1a1a1a" }}
              >
                {value.title}
              </h3>

              {/* Description - Left Aligned */}
              <p
                className="text-base leading-relaxed text-left transition-colors duration-300 group-hover:text-[#8B253A]"
                style={{ color: "#1a1a1a" }}
              >
                {formatDescription(value.description)}
              </p>

              {/* Hover Styles */}
              <style jsx global>{`
                .group:hover {
                  background-color: #f5efef !important;
                  border-color: #8b253a !important;
                }
                .group:hover .icon-container {
                  background-color: #8b253a !important;
                }
                .group:hover .icon-image,
                .group:hover img.icon-image {
                  filter: brightness(0) saturate(100%) invert(1) !important;
                  -webkit-filter: brightness(0) saturate(100%) invert(1) !important;
                }
              `}</style>
            </div>
          );
        })}
      </div>
    </section>
  );
}
