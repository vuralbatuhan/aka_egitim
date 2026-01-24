"use client";

export default function TeacherMobilityContent() {
  const services = [
    {
      number: "1",
      text: "CELTA, DELTA, TESOL gibi uluslararası öğretmenlik sertifikaları için başvuru desteği.",
    },
    {
      number: "2",
      text: "Avrupa Birliği Erasmus+ öğretmen hareketliliği programlarına başvuru rehberliği.",
    },
    {
      number: "3",
      text: "Yurtdışında öğretmen eğitimi ve mesleki gelişim kursları için danışmanlık.",
    },
    {
      number: "4",
      text: "Yabancı dil öğretimi metodolojileri ve sertifika programları hakkında bilgilendirme.",
    },
    {
      number: "5",
      text: "Program sonrası iş bulma ve kariyer planlama desteği.",
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
            Öğretmen Hareketliliği Nedir?
          </h2>

          {/* Introduction */}
          <p className="text-sm sm:text-base md:text-lg text-white mb-6 md:mb-8 leading-relaxed">
            Öğretmen hareketliliği programları, eğitimcilerin yurtdışında eğitim metodolojileri öğrenmesi, sertifika alması ve profesyonel gelişimini sürdürmesi için tasarlanmış programlardır. Aka Eğitim olarak, öğretmenlerin kariyerlerini uluslararası platformda geliştirmelerine destek oluyoruz.
          </p>

          {/* Numbered List */}
          <div className="space-y-4 md:space-y-6">
            {services.map((service, index) => (
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
