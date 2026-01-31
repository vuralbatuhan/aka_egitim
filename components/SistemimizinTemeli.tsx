"use client";

const items = [
  {
    title: "Karakter Analizi",
    description:
      "Karakterine en uygun mesleki planlamanın yapılması için öğrenci detaylı olarak tanınır. Her öğrenci benzersiz yetenekleri ile değerlendirilir.",
    iconType: "person-equals",
  },
  {
    title: "Doğru Yönlendirme",
    description:
      "Bu rotaya uygun okul tercihinin belirlenmesi ve eğitim süresince takibi sağlanır. Öğretmen rehberliğinde en uygun programlar seçilir.",
    iconType: "scroll",
  },
  {
    title: "Sürekli Takip",
    description:
      "Gençlerimizin ülkeleri adına bilinçli ve donanımlı bireyler olarak geri dönmeleri için süreç boyunca öğretmen rehberliğinde takip edilir.",
    iconType: "checkmark",
  },
  {
    title: "Öğretmen Eşliği",
    description:
      "Türkiye'de evinden alınıp havalimanından uğurlanır; gittiği ülkede Türk öğretmen tarafından karşılanır. Asla yalnız bırakılmaz.",
    iconType: "group",
  },
];

function CardIcon({ type, className }: { type: string; className?: string }) {
  const c = className || "w-6 h-6 md:w-7 md:h-7";
  switch (type) {
    case "person-equals":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="6" r="3" />
          <path d="M4 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <line x1="15" y1="9" x2="21" y2="9" />
          <line x1="15" y1="13" x2="21" y2="13" />
        </svg>
      );
    case "scroll":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          <path d="M8 3v4a2 2 0 0 0 2 2h4" />
          <path d="M8 12h8" />
          <path d="M8 16h8" />
        </svg>
      );
    case "checkmark":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "group":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SistemimizinTemeli() {
  return (
    <section
      className="relative py-10 md:py-16 px-4 lg:px-8 w-full"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">
        <div className="max-w-[1200px] mx-auto">
        {/* Header: title + intro — aynı grid ile sağdaki kartların başında hizalı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="h-12 md:h-14 w-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#800000" }}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Sistemimizin Temeli
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed md:mt-0 flex items-center">
            Sistemimiz; öğrencinin henüz yurt dışına çıkmadan tüm
            <br />
            yetenek ve özellikleri ile tanınması esasına dayanır.
          </p>
        </div>

        {/* 2x2 Grid - cards with left accent bar, white icon circle with border, title, description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex gap-4 p-6 md:p-8 rounded-xl bg-white overflow-hidden shadow-md border border-gray-100 cursor-pointer transition-colors duration-300 hover:shadow-lg hover:border-gray-200"
            >
              {/* Left: vertical accent bar + circular icon — normal: grey, hover: maroon */}
              <div className="flex flex-shrink-0 gap-3">
                <div
                  className="w-1.5 rounded-full min-h-[72px] bg-gray-700 transition-colors duration-300 group-hover:bg-[#800000]"
                />
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white bg-gray-700 transition-colors duration-300 group-hover:bg-[#800000]"
                >
                  <CardIcon type={item.iconType} />
                </div>
              </div>
              {/* Right: title + description */}
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
