"use client";

export default function MissionStatement() {
  const features = [
    {
      title: "Öğretmen Rehberliği",
      description: (
        <>
          Eğitim hareketliliğini öğretmen<br />
          rehberliğinde pedagojik bir süreç<br />
          olarak yürütüyoruz.
        </>
      ),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Teacher with whiteboard icon */}
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M7 8h4" />
          <path d="M7 11h6" />
          <circle cx="17" cy="8" r="2" />
          <path d="M17 10v2" />
        </svg>
      ),
    },
    {
      title: "Karakter Odaklı",
      description: (
        <>
          Öğrencinin henüz yurt dışına<br />
          çıkmadan tüm yetenek ve özellikleri ile<br />
          tanınması esasına dayanırız.
        </>
      ),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Person with focus/character icon */}
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <circle cx="12" cy="8" r="1" fill="white" />
        </svg>
      ),
    },
    {
      title: "Tam Destek",
      description: (
        <>
          Evden havalimanına, kayıt ofisine<br />
          kadar öğretmen eşliğinde<br />
          sürekli destek.
        </>
      ),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Handshake/support icon */}
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
          <path d="M12 5.5v5.5" />
          <path d="M9 8.5l3 2.5 3-2.5" />
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
          {/* Header Section */}
          <div className="mb-6 md:mb-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6 mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Kuruluş Amacımız
              </h2>
              <div className="lg:max-w-md">
                <p className="text-xs sm:text-sm lg:text-base text-white/90">
                  Yol haritamız, Gazi Mustafa Kemal Atatürk'ün 1924 yılında
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  yurt dışına gönderilen öğrencilere hitaben söylediği;
                </p>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl italic text-white leading-relaxed lg:max-w-[calc(100%-18rem)]">
              "Sizleri birer kıvılcım olarak gönderiyorum, alevler olarak geri dönmelisiniz!"
            </p>
          </div>

          {/* Feature Cards Container */}
          <div 
            className="w-full border border-white/30 rounded-xl md:rounded-2xl p-3 sm:p-4 lg:p-6"
            style={{ backgroundColor: "#6e0a1f" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
              {features.map((feature, index) => (
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
                      {feature.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 text-white">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/80">
                      {feature.description}
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
