"use client";

import { motion } from "framer-motion";

const strategies = [
  {
    id: 1,
    title: "Sürekli İyileştirme",
    description: "Hizmetlerimizi sürekli gözden geçirerek öğrenci geri bildirimlerini değerlendiriyor ve süreçlerimizi optimize ediyoruz.",
    highlighted: true,
  },
  {
    id: 2,
    title: "Partner Ağı",
    description: "Dünya çapındaki tanınmış üniversite ve eğitim kurumlarıyla stratejik iş birlikleri kuruyoruz.",
    highlighted: false,
  },
  {
    id: 3,
    title: "Güçlü Ekip",
    description: "Alanında uzman, tutkulu ve öğrenci odaklı danışmanlarımızla en kaliteli hizmeti sunmaya devam ediyoruz.",
    highlighted: false,
  },
  {
    id: 4,
    title: "Güven ve Şeffaflık",
    description: "Açık iletişim, şeffaf fiyatlandırma ve güvenilir hizmet anlayışımızla sektörde fark yaratıyoruz.",
    highlighted: false,
  },
  {
    id: 5,
    title: "Teknolojik Altyapı",
    description: "Modern teknolojilerle süreçleri dijitalleştirerek öğrencilerimize 7/24 erişilebilir platform sağlıyoruz.",
    highlighted: false,
  },
  {
    id: 6,
    title: "Büyüme ve Gelişim",
    description: "Her gün daha fazla öğrenciye ulaşarak hizmet kapasitemizi artırıyor ve sektörde lider olmaya devam ediyoruz.",
    highlighted: false,
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function NasilBasaracagiz() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 lg:px-8">
      <div className="container mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-10 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="h-12 md:h-14 w-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#222222" }}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Nasıl Başaracağız?
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:max-w-md lg:text-right">
            Hedeflerimizi gerçekleştirmek için kullandığımız stratejiler
          </p>
        </div>

        {/* Strategy Cards Grid: 3 satır x 2 sütun (2 kart yan yana, alt alta 3 sıra), kart yükseklikleri eşit */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 gap-6 md:gap-8 items-stretch">
          {strategies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group rounded-xl overflow-hidden p-6 md:p-8 flex flex-col h-full transition-all duration-300 bg-white text-gray-900 border border-gray-100 shadow-md hover:shadow-lg hover:bg-[#6B1C28] hover:text-white hover:border-[#6B1C28]"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 bg-gray-200 group-hover:bg-[#F48B21]">
                <StarIcon className="transition-colors duration-300 text-gray-700 group-hover:text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed transition-colors duration-300 text-gray-600 group-hover:text-white/90">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
