"use client";

import Image from "next/image";

const quoteBoxStyle = "rounded-xl p-4 md:p-5 text-center font-bold text-black";
const quoteBoxBg = { backgroundColor: "#f5d5dc" };

export default function KurucumuzKimdirContent() {
  return (
    <section className="w-full py-12 md:py-16" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sol sütun - Metin */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 flex items-start gap-3">
              <span className="w-1 flex-shrink-0 h-12 md:h-14 rounded-full" style={{ backgroundColor: "#641a29" }} aria-hidden />
              Kurucumuz Kimdir
            </h2>
            <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
              <p>
                1974 Bolu Göynük doğumlu Ayhan Korkmaz, edebiyata olan ilgisiyle şekillenen gençlik yıllarının ardından öğretmenliği hayatının yönü olarak seçti. Eğitim onun için sadece bir meslek değil; insan ilişkisi ve vicdanla yürünen bir yolculuktur.
              </p>
              <p>
                Yazar kimliğiyle &quot;Hüzzam Zamanlı Mısralar&quot; ve &quot;De Ayrı&quot; gibi eserlere imza atan Korkmaz, &quot;Sükûttan Söze&quot; altında 140 özdeyişi derleyerek özdeyişin Türkiye&apos;de edebi bir tür olarak tanınmasına katkıda bulunmuştur.
              </p>
              <p>
                Türkiye&apos;deki kamu ve özel eğitim kurumlarında edindiği deneyimin yanı sıra, Millî Eğitim Bakanlığı adına Kazakistan Almatı Eğitim Ataşesi olarak görev yaptı. Bu süreçte iki ülke arasında eğitim köprüleri kurdu, öğretmen ve öğrenci hareketliliğini destekledi; sahadan bağlı bir eğitimci olarak Kazakistan&apos;daki eğitim gerçekliğini yakından gözlemledi.
              </p>
              <p>
                Yılların deneyimiyle olgunlaşan düşünsel yapı, Ayhan Korkmaz Akademi (AKA) kuruluş felsefesine dönüştü. AKA, bir &quot;kurum&quot; olmadan önce bir &quot;anlayış&quot;tır; üç temel değer etrafında şekillenir.
              </p>
              <p>
                <strong>Azim</strong>: Öğrenci ve öğretmenlerin yollarını yarım bırakmamasını sağlamak. <strong>Kararlılık</strong>: Eğitimi yüzeysel değil, derinlikli inşa etmek. <strong>Ayrıcalık</strong>: Her öğrenciyi sıradan bir dosya değil, benzersiz ve tek bir birey olarak görmek.
              </p>
              <p>
                Bu değerler, Ayhan Korkmaz Akademi&apos;nin yaklaşımını yönlendirir: Öğrencileri tanımak, karakterine göre yönlendirmek, öğrenme sürecinin öğretmen rehberliğinde ilerlemesini ve öğrencinin asla yalnız kalmamasını sağlamak. AKA&apos;da eğitim, danışmanlık değil; güven duygusuyla yürütülen bir öğretmen yolculuğudur.
              </p>
              <p>
                Ayhan Korkmaz&apos;ın temel inancı nettir: Eğitim, sonuç üretmeden önce insan inşa etmektir. Bunu sözüyle, sesiyle ve emeğiyle savunmaktadır.
              </p>
            </div>
          </div>

          {/* Sağ sütun - Alıntılar ve görsel */}
          <div className="lg:col-span-1 flex flex-col gap-6 pt-8 md:pt-12 lg:pt-16">
            <div className={quoteBoxStyle} style={quoteBoxBg}>
              <p className="text-lg md:text-xl mb-2">&quot;Konu ülkenin geleceği ise özne eğitimdir.&quot;</p>
              <p className="text-sm font-normal text-gray-700">Bu ifade, onun düşünce dünyasının merkezinde yer alır.</p>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/quotstudents-tackling-challenging-math-problem-togetherquot.png"
                alt="Öğrencilerin birlikte çalışması"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              {/* Kırmızı overlay - opacity 50 */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: "rgba(100, 26, 41, 0.5)" }}
                aria-hidden
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/images/beyaz-logo.png"
                  alt="AKA Eğitim"
                  width={200}
                  height={80}
                  className="object-contain w-40 md:w-52 h-auto"
                />
              </div>
            </div>

            <div className={quoteBoxStyle} style={quoteBoxBg}>
              <p>Azim Kararlılık Ayrıcalık</p>
            </div>

            <div className={quoteBoxStyle} style={quoteBoxBg}>
              <p>Önce insan. Önce eğitim. Daima öğretmen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
