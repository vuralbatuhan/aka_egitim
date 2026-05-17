"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Uye } from "./page";

type Props = { uyeler: Uye[] };

function DefaultAvatar() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="64" cy="64" r="64" fill="#DDE3EA" />
      <circle cx="64" cy="50" r="22" fill="#A0AEBA" />
      <ellipse cx="64" cy="108" rx="36" ry="24" fill="#A0AEBA" />
    </svg>
  );
}

export default function IlTemsilcileriClient({ uyeler }: Props) {
  const [aramaMetni, setAramaMetni] = useState("");

  const filtreliler = useMemo(() => {
    const q = aramaMetni.toLocaleLowerCase("tr");
    if (!q) return uyeler;
    return uyeler.filter(
      (u) =>
        u.ad.toLocaleLowerCase("tr").includes(q) ||
        u.soyad.toLocaleLowerCase("tr").includes(q) ||
        u.gorev_il.toLocaleLowerCase("tr").includes(q)
    );
  }, [aramaMetni, uyeler]);

  return (
    <section
      className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      style={{ maxWidth: "1200px" }}
    >
      {/* Başlık + istatistik + arama */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">İl Temsilcileri Listesi</h2>
        <p className="text-sm text-gray-500 mb-6">
          Toplam <span className="font-semibold" style={{ color: "#6A0B1C" }}>{uyeler.length}</span> il temsilcisi listelenmiştir.
        </p>

        <div className="relative max-w-sm">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="İsim veya il ara..."
            value={aramaMetni}
            onChange={(e) => setAramaMetni(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:border-[#6A0B1C] transition-colors"
          />
        </div>
      </div>

      {filtreliler.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <svg className="w-12 h-12 mb-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 1 0-2.828 2.828l4.243 4.243m0 0L21 21m-3.343-4.343A8 8 0 1 1 5.373 5.373a8 8 0 0 1 12.284 12.284z" />
          </svg>
          <p className="text-sm">Sonuç bulunamadı.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtreliler.map((uye, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.5) }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Fotoğraf */}
              <div className="flex justify-center pt-7 pb-4 px-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
                  {uye.foto_url ? (
                    <img
                      src={uye.foto_url}
                      alt={`${uye.ad} ${uye.soyad}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <DefaultAvatar />
                  )}
                </div>
              </div>

              {/* Bilgiler */}
              <div className="text-center px-4 pb-4 flex-1 flex flex-col">
                <p className="font-bold text-gray-800 text-sm leading-snug">
                  {uye.ad} {uye.soyad}
                </p>
                <p
                  className="text-xs font-semibold tracking-widest mt-1.5"
                  style={{ color: "#6A0B1C" }}
                >
                  {uye.gorev_il.toLocaleUpperCase("tr")}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {uye.gorev_unvan || "İl Temsilcisi"}
                </p>
              </div>

              {/* E-posta */}
              <div className="border-t border-gray-100 px-4 py-2.5 text-center">
                <a
                  href={`mailto:${uye.email}`}
                  className="text-xs text-gray-500 hover:underline truncate block"
                  style={{ color: "#555" }}
                >
                  {uye.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
