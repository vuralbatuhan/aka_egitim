"use client";

export default function TeacherMobilityContent() {
  const aims = [
    "Öğretmenlerin yurt dışında eğitim alma, gözlem yapma, iyi uygulamaları inceleme ve akademik gelişimlerini destekleme fırsatı elde etmesi,",
    "Sürecin, öğretmenin bağlı bulunduğu kurumun mevzuatına uygun biçimde, resmî izin ve etik sorumluluk çerçevesinde yürütülmesi,",
    "Program öncesinde görev ve sorumlulukların açık biçimde belirlenmesi; program sonunda ise mesleki çıktı üretimi ve yansıtma raporu beklenmesi,",
    "Katılımcıya program sonunda katılım belgesi veya sertifika sunulması.",
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
            Programlarımız
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/95 mt-3 md:mt-4 leading-relaxed max-w-3xl">
            Programlarımız; öğretmenin mesleki yetkinliğini güçlendirmeyi, farklı eğitim sistemlerini yerinde gözlemlemeyi ve öğretmenin edindiği deneyimi kendi eğitim ortamına nitelikli biçimde aktarabilmeyi hedefler.
          </p>
        </div>

        {/* İçerik alanı - beyaz kart */}
        <div className="bg-white rounded-b-2xl md:rounded-b-3xl shadow-lg border border-gray-100 border-t-0 p-6 sm:p-8 md:p-10 lg:p-12 -mt-px">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold mb-5 md:mb-6">
            AKA bünyesinde yürütülen öğretmen hareketliliği programları şu amaçlara dayanır:
          </p>

          {/* Amaçlar - numaralı kartlar */}
          <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12">
            {aims.map((aim, index) => (
              <li key={index} className="flex gap-4 md:gap-5 items-start group">
                <span
                  className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold text-white"
                  style={{ backgroundColor: "#6A0B1C" }}
                >
                  {index + 1}
                </span>
                <span className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed pt-0.5">
                  {aim}
                </span>
              </li>
            ))}
          </ul>

          {/* AKA farkı ve ilkeler - vurgulu kutu */}
          <div
            className="rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 border-l-4"
            style={{ backgroundColor: "#FDF8F6", borderLeftColor: "#F07D2C" }}
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              AKA&apos;nın öğretmen hareketliliğindeki temel farkı, sürecin öğretmenler tarafından planlanması ve yine öğretmenler tarafından yürütülmesidir. Bu yaklaşım, kurumun kuruluş felsefesinin merkezinde yer alan:
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4"
              style={{ color: "#F07D2C" }}
            >
              Azim – Kararlılık – Ayrıcalık
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              ilkeleriyle doğrudan ilişkilidir. Öğretmen, bu sistemde yalnızca katılımcı değil; sürecin aslî öznesidir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
