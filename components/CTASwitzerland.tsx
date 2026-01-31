"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASwitzerland() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-10 md:py-20 bg-[#F5F5F5]"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1200px" }}
      >
        <div
          className="rounded-2xl md:rounded-3xl p-4 sm:p-6 lg:p-8"
          style={{ backgroundColor: "#4a0f18" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
                İsviçre Öğretmen Eğitimine{" "}
                <span>
                  <span className="relative inline-block">
                    <span className="text-[#F07D2C]">Başlamaya</span>
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px]"
                      style={{ backgroundColor: "#F07D2C" }}
                    ></span>
                  </span>
                  {" "}Hazır Mısınız?
                </span>
              </h2>

              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-1 md:mb-2 mt-3 md:mt-4">
                Uzman ekibimiz size İsviçre&apos;de öğretmen eğitimi programını seçmenizde yardımcı olacak.
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6">
                Hemen iletişime geçin!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Link href="/iletisim">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-lg font-semibold text-white text-sm sm:text-base md:text-lg transition-all hover:opacity-90"
                    style={{ backgroundColor: "#F07D2C" }}
                  >
                    Ücretsiz Danışmanlık
                  </motion.span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full hidden lg:flex items-center justify-center translate-x-4 translate-y-8"
            >
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/375274645_96eb2f85-aa60-40d0-83f7-2674070a32e8.png"
                  alt="İsviçre Öğretmen Eğitimi"
                  width={500}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
