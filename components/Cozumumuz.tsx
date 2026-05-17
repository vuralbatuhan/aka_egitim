"use client";

import Image from "next/image";

const items = [
  {
    title: "Şeffaf Fiyatlandırma",
    description:
      "Tüm maliyetleri baştan netleştiriyor, gizli ücret olmadan %100 şeffaf hizmet sunuyoruz.",
    icon: "/images/rating_2191153.svg",
  },
  {
    title: "Kapsamlı Danışmanlık",
    description:
      "Başvurudan mezuniyete kadar tüm süreci yönetiyor, tek noktadan hizmet sunuyoruz.",
    icon: "/images/rating_2191153.svg",
  },
  {
    title: "Uzman Kadro",
    description:
      "Her ülke ve program konusunda uzmanlaşmış danışmanlarımız en doğru yönlendirmeyi yapar.",
    icon: "/images/people_3171593.svg",
  },
];

export default function Cozumumuz() {
  return (
    <section className="relative py-10 md:py-16 px-4 lg:px-8 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">
        <div className="max-w-[1200px] mx-auto">
          {/* Title */}
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div
              className="h-12 md:h-14 w-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#800000" }}
            />
            {/* <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"> */}
            <p className="text-2xl md:text-2xl leading-relaxed font-bold text-gray-700">
              Çözüm ortaklarımız, Akader aracılığıyla öğrencilerimize aşağıdaki
              hizmetleri güvenle temin eder. Akader'in çözüm ortakları kendi
              felsefesi doğrultusunda eğitimcilerden kurulu firmalardır
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-lg border border-gray-100 min-h-[280px] bg-white cursor-pointer transition-colors duration-300 hover:bg-[#641a29] hover:border-[#641a29]"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 bg-gray-200 transition-colors duration-300 group-hover:bg-[#f0771b]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-7 h-7 md:w-8 md:h-8 object-contain opacity-90 brightness-0 transition-[filter] duration-300 group-hover:invert"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-[#f0771b]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
