"use client";

export default function FaaliyetAlanlari() {
  const services = [
    {
      title: "Dil Okulu ve Gelişim",
      description:
        'Ortaöğretim öğrencilerimiz için akran öğrenmesi ve özgüven gelişimini merkeze alan, öğretmen gözetiminde kısa süreli dil okulu programları. Program sonunda detaylı "Gelişim Raporu" sunulur.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "Akademik Danışmanlık",
      description:
        "Hem yurt dışında üniversite okumak isteyen Türk öğrencilere hem de Türkiye'de eğitim almak isteyen uluslararası öğrencilere hedeflerine uygun üniversite yerleşimi için rehberlik.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "Öğretmen Hareketliliği",
      description:
        "Öğretmenlerimizin mesleki gelişimleri için uzmanlar tarafından hazırlanmış tematik gelişim programları ve uluslararası geçerliliğe sahip sertifika programları yürütüyoruz.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 lg:px-8 bg-[#F5F5F5]">
      <div
        className="relative flex flex-col items-center overflow-hidden py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 rounded-2xl md:rounded-3xl w-full max-w-[1200px] mx-auto"
        style={{
          backgroundColor: "#520717",
        }}
      >
        <div className="w-full">
          {/* Header Section - centered */}
          <div className="mb-6 md:mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6 md:gap-10 lg:gap-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Faaliyet Alanlarımız
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-white/90 whitespace-nowrap font-bold">
                Uluslararası eğitim hareketliliğini üç ana eksende yönetiyoruz
              </p>
            </div>
          </div>

          {/* Feature Cards Container - same as Kuruluş Amacımız */}
          <div
            className="w-full border border-white/30 rounded-xl md:rounded-2xl p-3 sm:p-4 lg:p-6"
            style={{ backgroundColor: "#6e0a1f" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
              {services.map((item, index) => (
                <div key={index} className="relative flex">
                  {/* Vertical divider for desktop */}
                  {index > 0 && (
                    <div className="hidden sm:block absolute left-0 top-4 bottom-4 w-px bg-white/30" />
                  )}
                  <div className="flex flex-col items-center text-center px-3 sm:px-4 lg:px-6 py-2 w-full">
                    {/* Icon Circle */}
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#8b2d42" }}
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 text-white">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
