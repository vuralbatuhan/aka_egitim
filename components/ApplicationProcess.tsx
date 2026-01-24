"use client";

const requirements = [
  "16 yaş ve üzeri olmak",
  "Pasaport (en az 6 ay geçerli)",
  "Dil okulu kabul mektubu",
  "Finansal yeterlilik belgesi",
  "Konaklama belgesi",
  "Öğrenci vizesi (6 aydan uzun kurslar için)",
];

const processSteps = [
  "Dil okulu ve şehir seçimi",
  "Online başvuru ve kayıt",
  "Kabul mektubunun alınması",
  "Konaklama ayarlamaları",
  "Student Visa başvurusu (gerekirse)",
  "CAS belgesi alımı",
  "Seyahat ve varış",
];

export default function ApplicationProcess() {
  return (
    <section className="py-10 md:py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div className="bg-[#800000] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Requirements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                Başvuru Gereksinimleri
              </h3>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
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
                    <span className="text-white text-base leading-relaxed">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Process */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                Başvuru Süreci
              </h3>
              <ul className="space-y-4">
                {processSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
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
                    <span className="text-white text-base leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
