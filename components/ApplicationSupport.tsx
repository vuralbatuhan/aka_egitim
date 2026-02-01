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
        {/* Başlık alanı - maroon şerit */}
        <div
          className="rounded-t-2xl md:rounded-t-3xl px-6 sm:px-8 md:px-10 lg:px-12 py-6 md:py-8"
          style={{ backgroundColor: "#6A0B1C" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Başvuru Sürecinde Nasıl Destek Oluyoruz?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/95 mt-3 md:mt-4 leading-relaxed max-w-3xl">
            Aka Eğitim olarak program karşılaştırması, başvuru takvimi planlaması, motivasyon mektubu hazırlığı, burs ve finansal planlama, öğrenci vizesi ve konaklama süreçlerinin her adımında yanınızdayız. Süreci şeffaf biçimde yöneterek belgelerinizin eksiksiz ve zamanında gönderilmesini sağlıyoruz.
          </p>
        </div>

        {/* İçerik alanı - beyaz kart */}
        <div className="bg-white rounded-b-2xl md:rounded-b-3xl shadow-lg border border-gray-100 border-t-0 p-6 sm:p-8 md:p-10 lg:p-12 -mt-px">
          <ul className="space-y-4 md:space-y-5">
            {supportServices.map((service, index) => (
              <li key={index} className="flex gap-4 md:gap-5 items-start">
                <span
                  className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold text-white"
                  style={{ backgroundColor: "#6A0B1C" }}
                >
                  {service.number}
                </span>
                <span className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed pt-0.5">
                  {service.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
