"use client";

import Image from "next/image";

const faqs = [
  {
    question: "Hangi dil sınavını tercih etmeliyim?",
    answer: "IELTS, İngiltere'de en çok kabul gören sınavdır. Üniversite başvuruları için IELTS Academic tercih edilir.",
  },
  {
    question: "Homestay nedir?",
    answer: "İngiliz bir ailenin yanında kalarak hem konaklama hem de kültür deneyimi yaşama imkanıdır.",
  },
];

export default function LanguageFAQ() {
  return (
    <section className="py-10 md:py-20 bg-[#F5F5F5]">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - FAQ */}
          <div>
            {/* Title with vertical line */}
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div
                className="w-1.5 md:w-2 h-14 md:h-20"
                style={{ backgroundColor: "#800000" }}
              ></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#1a1a1a" }}>
                Sıkça Sorulan Sorular
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-300 hover:border-[#800000] transition-all duration-300 cursor-pointer group"
                >
                  <div className="px-4 md:px-6 py-3">
                    <div className="flex items-start gap-3 md:gap-4 mb-2">
                      <div className="w-1.5 md:w-2 h-12 md:h-16 bg-gray-300 group-hover:bg-[#800000] transition-all duration-300 flex-shrink-0"></div>
                      <h3 className="text-base md:text-lg font-bold" style={{ color: "#1a1a1a" }}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className="pl-5 md:pl-11">
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[310px] mt-0 lg:mt-28">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/multiethnic-group-young-students.png"
                alt="Çeşitli Öğrenci Grubu"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
