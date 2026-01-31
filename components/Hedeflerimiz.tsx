"use client";

import { motion } from "framer-motion";

const goals = [
  {
    id: 1,
    number: "01",
    title: "Erişilebilirlik",
    description: "Daha fazla öğrenciye ulaşarak yurtdışı eğitim fırsatlarını herkes için erişilebilir kılmak.",
    accent: "maroon",
  },
  {
    id: 2,
    number: "02",
    title: "Kalite",
    description: "Partner üniversite ve kurum ağımızı genişleterek daha kaliteli eğitim seçenekleri sunmak.",
    accent: "gray",
  },
  {
    id: 3,
    number: "03",
    title: "İnovasyon",
    description: "Teknolojik çözümlerle süreçleri kolaylaştırarak öğrenci deneyimini iyileştirmek.",
    accent: "gray",
  },
  {
    id: 4,
    number: "04",
    title: "Global Ağ",
    description: "Dünya çapında güçlü bir eğitim ağı kurarak öğrencilere daha fazla seçenek sunmak.",
    accent: "gray",
  },
  {
    id: 5,
    number: "05",
    title: "Destek",
    description: "Mezuniyet sonrası kariyer danışmanlığı ile öğrencilerimizin başarısını sürdürmek.",
    accent: "gray",
  },
  {
    id: 6,
    number: "06",
    title: "Toplumsal Etki",
    description: "Eğitim erişimini artırarak Türkiye'nin global rekabet gücüne katkı sağlamak.",
    accent: "gray",
  },
];

export default function Hedeflerimiz() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 lg:px-8">
      <div className="container mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-10 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="h-12 md:h-14 w-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#6B1C28" }}
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Hedeflerimiz
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:max-w-md lg:text-right">
            Vizyonumuzu gerçekleştirmek için koyduğumuz hedefler
          </p>
        </div>

        {/* Goals Grid - tüm kartlar aynı normal, hover'da bordo vurgu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-xl shadow-md overflow-hidden flex border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-1 flex-shrink-0 bg-[#222222] group-hover:bg-[#6B1C28] transition-colors duration-300" />
              <div className="p-5 md:p-6 flex-1">
                <span className="inline-block px-3 py-1 rounded-full text-white font-bold text-sm mb-3 bg-[#222222] group-hover:bg-[#6B1C28] transition-colors duration-300">
                  {goal.number}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {goal.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
