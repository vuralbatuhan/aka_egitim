"use client";

import Image from "next/image";

export default function BizKimizContent() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-10 md:py-16 px-4 lg:px-8 w-full">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Left - Title + Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="h-10 md:h-12 w-1 rounded-full" style={{ backgroundColor: "#800000" }} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#1a1a1a" }}>
              Biz Kimiz?
            </h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "#666666" }}>
              AKA-Ayhan KORKMAZ Akademi; &quot;Konu ülkenin geleceği ise özne eğitimdir.&quot; ilkesiyle yola çıkan öğretmenlerin kurduğu öncü bir eğitim oluşumudur.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "#666666" }}>
              Azim, Kararlılık ve Ayrıcalık ilkelerini güven temeliyle birleştiren eğitimciler tarafından dayanışma ruhuyla hayata geçirilmiştir.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "#666666" }}>
              Bünyemiz, uluslararası öğrenci ve öğretmen hareketliliğini bizzat eğitimci bakış açısıyla yöneten profesyonellerden oluşmaktadır.
            </p>
          </div>
        </div>
        {/* Right - Image */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="relative rounded-xl overflow-hidden w-full max-w-[648px] aspect-[648/350]">
            <Image
              src="/images/multiethnic-group-young-students.png"
              alt="Öğrenciler kampüste"
              width={648}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
