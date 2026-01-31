"use client";

export default function BizKimizGuarantee() {
  const items = [
    {
      title: "Öğretmen Rehberliği",
      description:
        "Sürece başladığı andan itibaren öğrencimize atanan bir meslek rehberi öğretmen ile ilerler.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#8C1C35" strokeWidth={2} viewBox="0 0 24 24">
          {/* Person with pointer/podium */}
          <circle cx="12" cy="7" r="3" />
          <path d="M12 10v4" />
          <path d="M8 18h8" />
          <path d="M12 14l-2 4h4l-2-4" />
          <path d="M12 10l3 3-3 3-3-3 3-3z" />
        </svg>
      ),
    },
    {
      title: "Evden Havalimanına Eşlik",
      description:
        "Türkiye'de öğretmeni tarafından evinden alınıp havalimanından uğurlanır; gittiği ülkede Türk öğretmen tarafından karşılanır.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#8C1C35" strokeWidth={2} viewBox="0 0 24 24">
          {/* Airplane */}
          <path d="M12 2l-2 6-6 2 2 6 6-2 2-6-2-6z" />
          <path d="M8 8l8 8" />
          <path d="M16 8l-8 8" />
        </svg>
      ),
    },
    {
      title: "Asla Yalnız Değil",
      description:
        "Kayıt ve konaklama dahil tüm süreçlerde öğrencimiz asla yalnız yürümez. Öğretmen eşliğinde her adım takip edilir.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#8C1C35" strokeWidth={2} viewBox="0 0 24 24">
          {/* Group of 4 people */}
          <circle cx="7" cy="6" r="2" />
          <circle cx="17" cy="6" r="2" />
          <circle cx="5" cy="13" r="2" />
          <circle cx="19" cy="13" r="2" />
          <path d="M7 8v3M17 8v3M5 15v2M19 15v2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 md:py-16 px-4 lg:px-8 w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="h-10 md:h-12 w-1 rounded-full" style={{ backgroundColor: "#8C1C35" }} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#1a1a1a" }}>
              AKA Güvencesi
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 md:p-5 border border-gray-200 shadow-sm transition-colors duration-500 ease-in-out hover:bg-[#8C1C35] hover:border-[#8C1C35] group"
            >
              <div className="flex justify-start mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 bg-white border border-gray-200 group-hover:border-white/30 transition-colors duration-500 ease-in-out"
                >
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-left text-[#1a1a1a] group-hover:text-white transition-colors duration-500 ease-in-out">
                {item.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-left text-[#666666] group-hover:text-white transition-colors duration-500 ease-in-out">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
