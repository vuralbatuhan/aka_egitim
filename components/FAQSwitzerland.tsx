"use client";

const faqs = [
  {
    question: "İsviçre'de hangi dilde eğitim alacağım?",
    answer: "Programlar genellikle İngilizce, Almanca veya Fransızca olarak sunulmaktadır. Program seçimine göre değişiklik gösterebilir.",
  },
  {
    question: "Erasmus+ kapsamında program var mı?",
    answer: "Evet, İsviçre birçok Erasmus+ öğretmen hareketliliği programına ev sahipliği yapmaktadır.",
  },
  {
    question: "Sertifika uluslararası geçerliliğe sahip mi?",
    answer: "Evet, İsviçre'den alacağınız sertifikalar dünya çapında tanınmakta ve geçerliliğe sahiptir.",
  },
  {
    question: "Konaklama desteği sağlanıyor mu?",
    answer: "Birçok program, konuk evi veya otel konaklaması konusunda destek sağlamaktadır. Detaylar program sağlayıcıya göre değişir.",
  },
];

export default function FAQSwitzerland() {
  return (
    <section className="py-10 md:py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 text-center">
            <div
              className="w-1.5 md:w-2 h-14 md:h-20"
              style={{ backgroundColor: "#800000" }}
            ></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#1a1a1a" }}>
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-300 hover:border-[#800000] transition-all duration-300 cursor-pointer group text-left bg-white"
              >
                <div className="px-4 md:px-6 py-4 h-full flex flex-col">
                  <div className="flex items-start gap-3 md:gap-4 mb-2">
                    <div className="w-1.5 md:w-2 h-12 md:h-16 bg-gray-300 group-hover:bg-[#800000] transition-all duration-300 flex-shrink-0"></div>
                    <h3 className="text-base md:text-lg font-bold" style={{ color: "#1a1a1a" }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className="pl-5 md:pl-11 flex-1">
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
