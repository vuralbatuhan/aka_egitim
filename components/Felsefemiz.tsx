"use client";

import { motion } from "framer-motion";

export default function Felsefemiz() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 lg:px-8">
      <div className="container mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left - Title + Content */}
          <div className="lg:col-span-6 flex flex-col min-w-0">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div
                className="h-12 md:h-14 w-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#6B1C28" }}
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Felsefemiz
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-base md:text-lg leading-relaxed text-gray-700 max-w-[60rem] space-y-0"
            >
              <span className="block">
                AKADER, öğrenmenin ve öğretmenin evrenselliğine inanır.
              </span>
              <span className="block">
                Her yeni gözlemin ve yaşantının öğretmen rehberliğinde
              </span>
              <span className="block">
                öğrencilere aktarılan cümlelerde olduğuna inanır.
              </span>
            </motion.div>
          </div>

          {/* Right - Quote Box (daha geniş sütun = kutu width artar) */}
          <div className="lg:col-span-6 flex items-stretch w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-xl border-2 flex flex-col justify-center items-center text-center py-10 md:py-14 px-6 md:px-10 min-h-[220px] md:min-h-[280px]"
              style={{
                borderColor: "#6B1C28",
                backgroundColor: "#FDF2F4",
              }}
            >
              <p
                className="text-lg md:text-xl font-bold leading-relaxed mb-4"
                style={{ color: "#6B1C28" }}
              >
                &quot;Her ülke öğretmen için bir ansiklopedidir.&quot;
              </p>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "#6B1C28" }}
              >
                &quot;Konu ülkenin geleceği ise özne eğitim, eğitimin öznesi ise
                değerli kılınmış öğretmendir.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
