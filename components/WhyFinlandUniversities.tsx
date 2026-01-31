"use client";

const features = [
  { text: "Dünya'nın en iyi eğitim sistemi" },
  { text: "İngilizce lisans programları" },
  { text: "AB vatandaşları için ücretsiz eğitim" },
  { text: "Yüksek teknoloji ve inovasyon odaklı" },
  { text: "Küçük sınıf mevcutları" },
  { text: "Güvenli ve kaliteli yaşam ortamı" },
];

export default function WhyFinlandUniversities() {
  return (
    <section className="py-8 sm:py-10 md:py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]"
      >
        <div className="flex flex-col">
          {/* Başlık - mobilde daha kompakt ve okunaklı */}
          <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
            <div
              className="w-1 h-10 sm:h-12 md:h-16 rounded flex-shrink-0 min-h-[2.5rem]"
              style={{ backgroundColor: "#641a29" }}
            />
            <h2
              id="neden"
              className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pr-1"
              style={{ color: "#1a1a1a" }}
            >
              Neden Finlandiya Üniversiteleri?
            </h2>
          </div>

          <p className="text-gray-600 text-sm md:text-base mb-5 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl">
            Finlandiya&apos;nın dünyaca ünlü üniversiteleri, İngilizce lisans programları ve kaliteli eğitim sunar. AB vatandaşları için ücretsiz eğitim imkanı vardır.
          </p>

          {/* Kartlar - mobilde daha büyük dokunma alanı ve boşluk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-y-6 md:gap-x-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl sm:rounded-lg p-4 sm:p-3 md:p-4 flex flex-row sm:flex-col items-start gap-3 sm:gap-2 md:gap-3 transition-all duration-300 cursor-pointer bg-white text-[#333333] border border-gray-200 hover:bg-[#641a29] hover:text-white hover:border-transparent hover:shadow-md w-full min-h-0 active:scale-[0.98] touch-manipulation"
              >
                <svg
                  className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 transition-colors duration-300 text-[#641a29] group-hover:text-[#f0771b] mt-0.5 sm:mt-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-sm sm:text-sm lg:text-base leading-relaxed transition-colors duration-300 text-left flex-1 min-w-0">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
