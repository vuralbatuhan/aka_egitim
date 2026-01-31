"use client";

const features = [
  { text: "Dünya'nın en iyi eğitim sistemi" },
  { text: "Prestijli öğretmen yetiştirme programları" },
  { text: "Uluslararası tanınırlık" },
  { text: "Modern pedagojik yaklaşımlar" },
  { text: "Staj ve uygulama okulları" },
  { text: "Yüksek maaş ve saygınlık" },
];

const requirements = [
  "Lisans diploması (eğitim veya ilgili alan)",
  "İngilizce yeterlilik (IELTS 6.5-7.0)",
  "Öğretmenlik deneyimi (tercih edilir)",
  "Motivasyon mektubu",
  "2 referans mektubu",
  "Mülakat",
];

const processSteps = [
  "Program seçimi ve araştırma",
  "Studyinfo.fi üzerinden başvuru",
  "Belgelerinin hazırlanması",
  "Mülakat",
  "Kabul ve kayıt işlemleri",
  "Residence permit başvurusu",
  "Eğitime başlama ve staj",
];

export default function WhyFinland() {
  return (
    <section className="py-10 md:py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div
                className="w-1 md:w-1.5 h-12 md:h-16 rounded"
                style={{ backgroundColor: "#800000" }}
              ></div>
              <h2 id="neden" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#1a1a1a" }}>
                Neden Finlandiya Öğretmen Eğitimi?
              </h2>
            </div>

            <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
              Finlandiya, dünya&apos;nın en iyi eğitim sistemine sahip olup, öğretmen yetiştirme programları da son derece prestijlidir. Öğretmenlik mesleği Finlandiya&apos;da çok saygın bir meslektir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-y-6 md:gap-x-8 flex-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-lg p-3 md:p-4 flex flex-col items-start justify-start gap-2 md:gap-3 transition-all duration-300 cursor-pointer bg-white text-[#333333] border border-gray-200 hover:bg-[#800000] hover:text-white hover:border-transparent hover:shadow-md w-full min-h-[80px] md:min-h-[100px]"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-colors duration-300 text-[#800000] group-hover:text-[#FF8C00]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-xs sm:text-sm lg:text-base leading-relaxed transition-colors duration-300 text-left break-words">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: "#800000" }}>
                Başvuru Gereksinimleri
              </h3>
              <ul className="space-y-3">
                {requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#800000] text-white flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200 shadow-md">
              <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: "#800000" }}>
                Başvuru Süreci
              </h3>
              <ul className="space-y-3">
                {processSteps.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#800000] text-white flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    {item}
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
