"use client";

export default function ApplicationSupport() {
  const supportServices = [
    {
      number: "1",
      text: "Üniversite ve bölüm araştırması sonrasında kişisel başvuru stratejisi oluşturuyoruz.",
    },
    {
      number: "2",
      text: "Gerekli akademik ve dil belgelerinin doğruluğunu ve resmi tercümesini kontrol ediyoruz.",
    },
    {
      number: "3",
      text: "Uni-Assist, Studielink gibi platformlarda başvuru dosyanızı birlikte tamamlıyoruz.",
    },
    {
      number: "4",
      text: "Vize mülakatı, bloke hesap ve sağlık sigortası gibi kritik aşamalarda rehberlik sunuyoruz.",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div
          className="rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12"
          style={{ backgroundColor: "#6A0B1C" }}
        >
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Başvuru Sürecinde Nasıl Destek Oluyoruz?
          </h2>

          {/* Introduction */}
          <p className="text-sm sm:text-base md:text-lg text-white mb-6 md:mb-8 leading-relaxed">
            Aka Eğitim olarak program karşılaştırması, başvuru takvimi planlaması, motivasyon mektubu hazırlığı, burs ve finansal planlama, öğrenci vizesi ve konaklama süreçlerinin her adımında yanınızdayız. Süreci şeffaf biçimde yöneterek belgelerinizin eksiksiz ve zamanında gönderilmesini sağlıyoruz.
          </p>

          {/* Numbered List */}
          <div className="space-y-4 md:space-y-6">
            {supportServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4">
                {/* Number Circle */}
                <div
                  className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg"
                  style={{ backgroundColor: "#f0771b" }}
                >
                  {service.number}
                </div>
                {/* Text */}
                <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed flex-1 pt-0.5 md:pt-1">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
