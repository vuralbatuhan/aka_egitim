"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const partners = [
  {
    name: "Pisa Educazione",
    logo: "/images/pisa%20edu.png",
    width: 260,
    height: 100,
  },
  {
    name: "Akademi Almanya",
    logo: "/images/Akademi%20Almanya%20-%20Logo%20(1600%20X%20600%20Piksel)%20-%202.png",
    width: 280,
    height: 105,
  },
];

export default function CozumOrtaklarimiz() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />

      <PageHeader
        title="Çözüm Ortaklarımız"
        breadcrumbs={["Anasayfa", "Çözüm Ortaklarımız"]}
        description="AKADER olarak yurt dışı eğitim süreçlerinde güvenilir iş ortaklarımızla birlikte öğrencilerimize en iyi hizmeti sunuyoruz."
      />

      <section className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" style={{ maxWidth: "1200px" }}>
        <motion.p
          className="text-center text-sm font-semibold tracking-widest uppercase mb-12"
          style={{ color: "#6A0B1C" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AKADER Çözüm Ortakları
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-8 hover:shadow-md transition-shadow duration-300"
              style={{ minHeight: "180px" }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="object-contain max-h-24 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
