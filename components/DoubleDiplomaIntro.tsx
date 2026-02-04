"use client";

import Image from "next/image";

export default function DoubleDiplomaIntro() {
  const handleScrollToForm = () => {
    if (typeof window === "undefined") return;
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-10 md:py-16" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className="w-1 rounded-full mt-1"
                style={{ backgroundColor: "#6A0B1C" }}
              />
              <div>
                <h2
                  className="font-bold text-2xl sm:text-3xl md:text-[32px] leading-snug text-gray-900"
                  style={{ letterSpacing: "0.01em" }}
                >
                  Hem Amerikan Lise Diploması
                  <br />
                  Hem AP Dersleri
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Mevcut okulunuzda devam ederken Amerika lise dersleri alıp çift diploma
              şansı ve direkt üniversitelere 2. sınıftan geçiş imkânı.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Çifte lise diploma programı ile AP Dersleri de alarak mevcut lise
              diplomanız yanında Amerikan Lise Diploması alabilirsiniz. Mevcut lise
              program transkriptinizi verin ve 9, 10, 11, 12. sınıflar arasında minimum
              6 ders ile ikinci lise diploması alabilirsiniz.
            </p>

            <button
              type="button"
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200"
              style={{
                backgroundColor: "#6A0B1C",
              }}
            >
              Başvur
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full h-full max-w-[520px] mx-auto">
            <div className="relative w-full pt-[70%] rounded-3xl overflow-hidden shadow-lg bg-gray-200">
              <Image
                src="/images/student-getting-diploma-1.png"
                alt="Diploma alan öğrenci"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

