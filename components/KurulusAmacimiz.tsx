"use client";

export default function KurulusAmacimiz() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-10 md:py-16 px-4 lg:px-8 w-full">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">
        <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left - Title + Content */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
              <div
                className="h-12 md:h-14 w-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#800000" }}
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Kuruluş Amacımız
              </h2>
            </div>
            <div className="space-y-4 md:space-y-5">
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Yol haritamız, Gazi Mustafa Kemal Atatürk&apos;ün 1924 yılında yurt dışına gönderilen öğrencilere hitaben söylediği bu sözüdür.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Bu vizyonla; Yurt dışına gidecek her öğrencimizin, ülkesine katma değer sağlayacak donanımla ve özgüvenle geri dönmesini sağlamak, eğitim hareketliliğini öğretmen rehberliğinde pedagojik bir süreç olarak yürütmek için kurulduk.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Öğrencilerimizi karakterlerine en uygun mesleklere ve okullara yönlendirerek, &quot;Yeni nesil sizin eserinizdir!&quot; düsturuyla üzerimize düşen sorumluluğu yerine getirmek misyonumuzdur.
              </p>
            </div>
          </div>

          {/* Right - Quote Box (centered) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="w-full max-w-md rounded-xl border-2 p-6 md:p-8 bg-white text-center"
              style={{ borderColor: "#800000" }}
            >
              <p
                className="text-lg md:text-xl font-semibold leading-relaxed mb-4"
                style={{ color: "#800000" }}
              >
                &quot;Sizleri birer kıvılcım olarak gönderiyorum, alevler olarak geri dönmelisiniz!&quot;
              </p>
              <p className="text-sm md:text-base text-gray-600">
                — Gazi Mustafa Kemal Atatürk (1924)
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
