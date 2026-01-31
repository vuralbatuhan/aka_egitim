"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ProgramImage {
  id: string;
  image_url: string;
  caption: string | null;
  order_index: number;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string | null;
  school_name: string | null;
  duration_text: string | null;
  dates_text: string | null;
  highlights: string[];
  included_items: string[];
  extra_advantages: string[];
  contact_name: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  images: ProgramImage[];
}

export default function ProgramCard({ program }: { program: Program }) {
  const images = program.images?.length
    ? [...program.images].sort((a, b) => a.order_index - b.order_index)
    : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
      style={{ backgroundColor: "#641a29" }}
    >
      <div className="p-6 md:p-8">
        {/* Subtitle & Title */}
        {program.subtitle && (
          <p className="text-white/90 text-sm md:text-base mb-1">{program.subtitle}</p>
        )}
        <h2
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{ color: "#f0771b" }}
        >
          {program.title}
        </h2>
        {program.school_name && (
          <p className="text-white text-sm md:text-base mb-4">{program.school_name}</p>
        )}
        {/* Badges: duration, dates */}
        <div className="flex flex-wrap gap-2 mb-6">
          {program.duration_text && (
            <span
              className="px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: "#f0771b" }}
            >
              {program.duration_text}
            </span>
          )}
          {program.dates_text && (
            <span
              className="px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: "#f0771b" }}
            >
              {program.dates_text}
            </span>
          )}
        </div>

        {/* Image gallery */}
        {images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {images.slice(0, 3).map((img) => (
              <div key={img.id} className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src={img.image_url}
                  alt={img.caption || program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                {img.caption && (
                  <div
                    className="absolute bottom-0 left-0 right-0 py-2 px-3 text-center text-sm font-medium text-white"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                  >
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Highlight boxes (Harry Potter, Konaklama vb.) */}
        {program.highlights?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {program.highlights.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3 rounded-lg bg-white/10 text-white text-sm"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">i</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tur Paketine Dahil Olanlar */}
        {program.included_items?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <span
                className="w-6 h-6 rounded flex items-center justify-center text-white text-sm"
                style={{ backgroundColor: "#641a29", border: "1px solid rgba(255,255,255,0.5)" }}
              >
                ★
              </span>
              Tur Paketine Dahil Olanlar
            </h3>
            <ul className="space-y-2">
              {program.included_items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white text-sm">
                  <span
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-white text-xs"
                    style={{ backgroundColor: "#641a29", border: "1px solid #f0771b" }}
                  >
                    ★
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ekstra Avantajlar */}
        {program.extra_advantages?.length > 0 && (
          <div
            className="p-4 rounded-lg mb-6"
            style={{ backgroundColor: "#f0771b" }}
          >
            <ul className="space-y-1 text-white text-sm font-medium">
              {program.extra_advantages.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact / Müracaat */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
          <div className="flex items-center gap-2 text-white text-sm">
            <span className="font-semibold">AKAEĞİTİM</span>
            <span className="text-white/80">— Azim Kararlılık Ayrıcalık</span>
          </div>
          {program.contact_name && (
            <p className="text-white text-sm">
              Müracaat: <strong>{program.contact_name}</strong>
            </p>
          )}
          <div className="flex flex-wrap gap-4 text-white text-sm">
            {program.contact_email && (
              <a href={`mailto:${program.contact_email}`} className="hover:underline">
                {program.contact_email}
              </a>
            )}
            {program.contact_phone && (
              <a href={`tel:${program.contact_phone}`} className="hover:underline">
                {program.contact_phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
