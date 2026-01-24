"use client";

const programTypes = [
  {
    title: "Genel İngilizce Kursları",
    icon: "📖",
    description: "İngilizcesini geliştirmek, gramer bilgisi ve kelime haznesini güçlendirmek isteyen adaylar için standart, yarı-yoğun ve yoğun programlar.",
    programs: [
      "Standart Program (15-20 saat/hafta)",
      "Yarı-Yoğun Program (20-25 saat/hafta)",
      "Yoğun Program (25-30 saat/hafta)",
      "Başlangıç seviyesinden ileri seviyeye",
    ],
  },
  {
    title: "Akademik İngilizce Kursları",
    icon: "🎓",
    description: "IELTS, TOEFL gibi uluslararası sınavlara hazırlanan, lisans ya da yüksek lisans eğitimi almayı düşünen adaylar için hazırlanmış programlar.",
    programs: [
      "IELTS Hazırlık Programları",
      "TOEFL Hazırlık Programları",
      "Cambridge Sınav Hazırlığı",
      "Akademik Yazma ve Okuma",
    ],
  },
  {
    title: "İş İngilizcesi",
    icon: "📁",
    description: "İş dünyasında kullanılan İngilizceyi öğrenmek isteyen profesyoneller için özel olarak tasarlanmış programlar.",
    programs: [
      "İş Toplantıları İngilizcesi",
      "Sunum Teknikleri",
      "E-posta ve Rapor Yazma",
      "Mülakat Hazırlığı",
    ],
  },
  {
    title: "Özel Programlar",
    icon: "🎓",
    description: "Teacher Training, Havacılık İngilizcesi, Hukuk İngilizcesi gibi özel alanlar için tasarlanmış programlar.",
    programs: [
      "Teacher Training Kursları",
      "Havacılık İngilizcesi",
      "Hukuk İngilizcesi",
      "30 Yaş Üstü Programlar",
    ],
  },
];

export default function LanguageProgramTypes() {
  return (
    <section className="py-20" style={{ backgroundColor: "#F5F5F5" }}>
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#1a1a1a" }}>
            Dil Okulu Program Türleri
          </h2>
          <p className="text-lg" style={{ color: "#666666" }}>
            Size uygun program türünü seçin ve hedeflerinize ulaşın
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programTypes.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ backgroundColor: "#800000" }}
              >
                <span className="text-2xl">{program.icon}</span>
                <h3 className="text-xl font-bold text-white">{program.title}</h3>
              </div>

              {/* Body */}
              <div className="px-6 py-6" style={{ backgroundColor: "#F5F5F5" }}>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#666666" }}>
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.programs.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "#FF8C00" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base" style={{ color: "#333333" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
