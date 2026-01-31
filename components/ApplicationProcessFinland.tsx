"use client";

const requirementsTeacher = [
  "Lisans diploması (eğitim veya ilgili alan)",
  "İngilizce yeterlilik (IELTS 6.5-7.0)",
  "Öğretmenlik deneyimi (tercih edilir)",
  "Motivasyon mektubu",
  "2 referans mektubu",
  "Mülakat",
];

const processStepsTeacher = [
  "Program seçimi ve araştırma",
  "Studyinfo.fi üzerinden başvuru",
  "Belgelerinin hazırlanması",
  "Mülakat",
  "Kabul ve kayıt işlemleri",
  "Residence permit başvurusu",
  "Eğitime başlama ve staj",
];

const requirementsLanguage = [
  "18 yaş ve üzeri olmak",
  "Pasaport (en az 6 ay geçerli)",
  "Dil okulu kabul mektubu",
  "Finansal yeterlilik belgesi (€6720/yıl)",
  "Sağlık sigortası",
  "Konaklama belgesi",
];

const processStepsLanguage = [
  "Dil okulu ve program seçimi",
  "Online başvuru ve kayıt",
  "Kabul mektubunun alınması",
  "Konaklama ayarlamaları",
  "Residence permit başvurusu",
  "Sağlık sigortası düzenleme",
  "Finlandiya'ya varış ve kayıt",
];

type ApplicationProcessFinlandVariant = "teacher" | "language";

export default function ApplicationProcessFinland({ variant = "teacher" }: { variant?: ApplicationProcessFinlandVariant }) {
  const requirements = variant === "language" ? requirementsLanguage : requirementsTeacher;
  const processSteps = variant === "language" ? processStepsLanguage : processStepsTeacher;
  return (
    <section className="py-10 md:py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div className="bg-[#800000] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                Başvuru Gereksinimleri
              </h3>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-white text-base leading-relaxed">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                Başvuru Süreci
              </h3>
              <ul className="space-y-4">
                {processSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </span>
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
