"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProgramImageRow {
  id: string;
  program_id: string;
  image_url: string;
  caption: string | null;
  order_index: number;
}

export default function ProgramlarList() {
  const [images, setImages] = useState<ProgramImageRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/program-images");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setImages(data || []);
      } catch (e) {
        console.error("Görseller yüklenirken hata:", e);
        setImages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#f0771b] border-t-transparent mb-4" />
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <p className="text-gray-600 text-lg">Henüz görsel eklenmemiştir.</p>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="flex flex-wrap gap-6 justify-center">
        {images.map((img, idx) => (
          <motion.figure
            key={img.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[1200px]">
              <Image
                src={img.image_url}
                alt={img.caption || "Program görseli"}
                width={1200}
                height={900}
                className="w-full h-auto object-contain rounded-lg"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
            {img.caption && (
              <figcaption className="mt-2 text-sm text-gray-600 text-center">
                {img.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
