"use client";

const programs = [
  {
    title: "Genel İngilizce Kursları",
    description:
      "İngilizcesini geliştirmek, gramer bilgisi ve kelime haznesini güçlendirmek isteyen adaylar için standart, yarı-yoğun ve yoğun programlar.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    items: [
      "Standart Program (15-20 saat/hafta)",
      "Yarı-Yoğun Program (20-25 saat/hafta)",
      "Yoğun Program (25-30 saat/hafta)",
      "Başlangıç seviyesinden ileri seviyeye",
    ],
  },
  {
    title: "Akademik İngilizce Kursları",
    description:
      "IELTS, TOEFL gibi uluslararası sınavlara hazırlanan, lisans ya da yüksek lisans eğitimi almayı düşünen adaylar için hazırlanmış programlar.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    items: [
      "IELTS Hazırlık Programları",
      "TOEFL Hazırlık Programları",
      "Cambridge Sınav Hazırlığı",
      "Akademik Yazma ve Okuma",
    ],
  },
  {
    title: "İş İngilizcesi",
    description:
      "İş dünyasında kullanılan İngilizceyi öğrenmek isteyen profesyoneller için özel olarak tasarlanmış programlar.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      "İş Toplantıları İngilizcesi",
      "Sunum Teknikleri",
      "E-posta ve Rapor Yazma",
      "Mülakat Hazırlığı",
    ],
  },
  {
    title: "Özel Programlar",
    description:
      "Teacher Training, Havacılık İngilizcesi, Hukuk İngilizcesi gibi özel alanlar için tasarlanmış programlar.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      "Teacher Training Kursları",
      "Havacılık İngilizcesi",
      "Hukuk İngilizcesi",
      "30 Yaş Üstü Programlar",
    ],
  },
];

export default function DilEgitimiProgramTypes() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#641a29" }}>
          Dil Okulu Program Türleri
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Size uygun program türünü seçin ve hedeflerinize ulaşın.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white"
            >
              <div
                className="px-6 py-5 text-white"
                style={{ backgroundColor: "#641a29" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-white">{program.icon}</span>
                  <h3 className="text-lg font-bold">{program.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/90 leading-relaxed">
                  {program.description}
                </p>
              </div>
              <div className="px-6 py-5 bg-gray-50/80">
                <ul className="space-y-2">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="shrink-0 mt-0.5" style={{ color: "#f0771b" }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
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
