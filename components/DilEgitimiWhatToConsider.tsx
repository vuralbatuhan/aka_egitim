"use client";

import Image from "next/image";

const considerations = [
  {
    text: "Program yoğunlukları (genel, yarı-yoğun, yoğun) ve sınav hazırlık seçeneklerini karşılaştırın.",
    dark: true,
  },
  {
    text: "Haftalık fiyat aralıkları ve promosyon dönemleri için danışmanınızdan güncel teklif isteyin.",
    dark: false,
  },
  {
    text: "Work and Study ve yarı zamanlı çalışma izinleri gibi vize avantajlarını değerlendirin.",
    dark: false,
  },
  {
    text: "Okulun şehir merkezine, toplu taşımaya ve öğrenci konaklama olanaklarına yakınlığını inceleyin.",
    dark: false,
  },
];

export default function DilEgitimiWhatToConsider() {
  return (
    <section className="w-full py-12 md:py-16" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] gap-10 lg:gap-12 items-end">
          <div className="flex flex-col max-w-md lg:max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 flex items-start gap-2">
              <span
                className="shrink-0 w-1.5 rounded-full mt-1.5 min-h-[2rem]"
                style={{ backgroundColor: "#641a29" }}
              />
              <span>Dil Okulu Seçerken<br />Nelere Dikkat Etmelisiniz?</span>
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              Aka Eğitim olarak öğrencilerimizin dil programlarını planlarken dil seviyesi, bütçe, çalışma planı, vize koşulları, yaşam maliyetleri, konaklama ve kültürel uyum gibi faktörleri birlikte değerlendiriyoruz.
            </p>
            <div className="space-y-3">
              {considerations.map((item) => (
                <div
                  key={item.text}
                  className="rounded-lg px-4 py-3 shadow-sm"
                  style={{
                    backgroundColor: item.dark ? "#641a29" : "#f5e6e8",
                    color: item.dark ? "#fff" : "#333",
                  }}
                >
                  <p className="text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg w-full aspect-[4/3] max-h-[480px] lg:max-h-[520px]">
            <Image
              src="/images/international-delegates-writing-notes-with-various-world-flags-background.png"
              alt="Uluslararası öğrenciler dil eğitimi ortamında"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
