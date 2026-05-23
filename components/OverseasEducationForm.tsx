"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const HIGH_SCHOOL_TYPES = [
  "Anadolu Lisesi",
  "Fen Lisesi",
  "Sosyal Bilimler Lisesi",
  "Güzel Sanatlar Lisesi",
  "Spor Lisesi",
  "Meslek / Teknik Lisesi",
  "İmam Hatip Lisesi",
  "Özel Lise",
  "Diğer",
];

const TARGET_DEGREES = ["Lisans", "Ön Lisans", "Yüksek Lisans", "Doktora"];

interface FormData {
  full_name: string;
  tc_kimlik: string;
  email: string;
  phone: string;
  city: string;
  high_school: string;
  high_school_type: string;
  high_school_grade: string;
  yks_score: string;
  foreign_language: string;
  target_degree: string;
  target_department: string;
  preferred_country_city: string;
  preferred_university: string;
  target_education_language: string;
}

const EMPTY_FORM: FormData = {
  full_name: "",
  tc_kimlik: "",
  email: "",
  phone: "",
  city: "",
  high_school: "",
  high_school_type: "",
  high_school_grade: "",
  yks_score: "",
  foreign_language: "",
  target_degree: "",
  target_department: "",
  preferred_country_city: "",
  preferred_university: "",
  target_education_language: "",
};

export default function OverseasEducationForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "tc_kimlik") {
      const digits = value.replace(/\D/g, "").slice(0, 11);
      setFormData({ ...formData, tc_kimlik: digits });
      return;
    }
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 15);
      setFormData({ ...formData, phone: digits });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!kvkkAccepted) {
      setSubmitStatus({
        type: "error",
        message:
          "Formu göndermek için KVKK Aydınlatma Metni'ni kabul etmeniz gerekmektedir.",
      });
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          full_name: formData.full_name,
          tc_kimlik: formData.tc_kimlik,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          high_school: formData.high_school || null,
          high_school_type: formData.high_school_type || null,
          high_school_grade: formData.high_school_grade || null,
          yks_score: formData.yks_score || null,
          foreign_language: formData.foreign_language || null,
          target_degree: formData.target_degree || null,
          target_department: formData.target_department || null,
          preferred_country_city: formData.preferred_country_city || null,
          preferred_university: formData.preferred_university || null,
          target_education_language: formData.target_education_language || null,
          kvkk_accepted: true,
        },
      ]);

      if (error) throw error;

      setSubmitStatus({
        type: "success",
        message:
          "Kaydınız başarıyla tamamlandı! En kısa sürede sizinle iletişime geçeceğiz.",
      });
      setKvkkAccepted(false);
      setFormData(EMPTY_FORM);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Bir hata oluştu. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="kayit-formu"
      className="relative py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="w-full max-w-[700px] mx-auto">
        {/* Başlık */}
        <div className="text-center mb-8">
          <p
            className="font-extrabold text-lg mb-1"
            style={{ color: "#60091b" }}
          >
            AKADER
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Öğrenci Kayıt Formu
          </h2>
          <p className="text-gray-500 text-sm">
            Yurtdışı eğitim hayalinize ilk adımı atın.
          </p>
        </div>

        {/* Form Kartı */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* ── Kişisel Bilgiler ── */}
            <div>
              <h3
                className="text-base font-bold mb-4"
                style={{ color: "#3B82F6" }}
              >
                Kişisel Bilgiler
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Ad Soyad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    T.C. Kimlik No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="tc_kimlik"
                    required
                    inputMode="numeric"
                    maxLength={11}
                    pattern="\d{11}"
                    title="11 haneli T.C. kimlik numaranızı giriniz"
                    // placeholder="00000000000"
                    value={formData.tc_kimlik}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="numeric"
                    placeholder="05XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">
                    Yaşadığı Şehir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* ── Mevcut Eğitim Durumu ── */}
            <div>
              <h3
                className="text-base font-bold mb-4"
                style={{ color: "#3B82F6" }}
              >
                Mevcut Eğitim Durumu
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Mezun Olduğu / Okuduğu Lise
                  </label>
                  <input
                    type="text"
                    name="high_school"
                    value={formData.high_school}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Lise Türü
                  </label>
                  <div className="relative">
                    <select
                      name="high_school_type"
                      value={formData.high_school_type}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm"
                    >
                      <option value="">Seçiniz</option>
                      {HIGH_SCHOOL_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Lise Diploma Puanı (Örn: 85.50)
                  </label>
                  <input
                    type="text"
                    name="high_school_grade"
                    placeholder="Örn: 85.50"
                    value={formData.high_school_grade}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    YKS Puanı / Sıralaması
                  </label>
                  <input
                    type="text"
                    name="yks_score"
                    value={formData.yks_score}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">
                    Bilinen Yabancı Dil
                  </label>
                  <input
                    type="text"
                    name="foreign_language"
                    placeholder="Örn: İngilizce, Almanca"
                    value={formData.foreign_language}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* ── Hedeflenen Eğitim ── */}
            <div>
              <h3
                className="text-base font-bold mb-4"
                style={{ color: "#3B82F6" }}
              >
                Hedeflenen Eğitim
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Hedeflenen Derece
                  </label>
                  <div className="relative">
                    <select
                      name="target_degree"
                      value={formData.target_degree}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm"
                    >
                      <option value="">Seçiniz</option>
                      {TARGET_DEGREES.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <ChevronDown />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Hedeflenen Bölüm
                  </label>
                  <input
                    type="text"
                    name="target_department"
                    placeholder="Örn: Bilgisayar Mühendisliği"
                    value={formData.target_department}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Tercih Edilen Ülke / Şehir
                  </label>
                  <input
                    type="text"
                    name="preferred_country_city"
                    placeholder="Örn: Almanya / Münih"
                    value={formData.preferred_country_city}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Tercih Edilen Üniversite (Varsa)
                  </label>
                  <input
                    type="text"
                    name="preferred_university"
                    placeholder="Örn: Technical University of Munich"
                    value={formData.preferred_university}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">
                    Hedef Eğitim Dili
                  </label>
                  <input
                    type="text"
                    name="target_education_language"
                    placeholder="Örn: İngilizce veya %100 Almanca"
                    value={formData.target_education_language}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* KVKK */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="kvkkAccepted"
                checked={kvkkAccepted}
                onChange={(e) => setKvkkAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 shrink-0"
              />
              <label
                htmlFor="kvkkAccepted"
                className="text-sm text-gray-700 leading-tight cursor-pointer"
              >
                <Link
                  href="/gizlilik"
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium"
                >
                  KVKK Aydınlatma Metni
                </Link>
                &apos;ni okudum, kişisel verilerimin işlenmesini kabul ediyorum.
              </label>
            </div>

            {/* Durum mesajı */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Gönder butonu */}
            <button
              type="submit"
              disabled={isSubmitting || !kvkkAccepted}
              className="w-full text-white rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                padding: "14px 32px",
                background: "linear-gradient(to right, #1E88E5, #26C6DA)",
                fontSize: "16px",
              }}
            >
              {isSubmitting ? "Gönderiliyor..." : "Kaydımı Tamamla"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ChevronDown() {
  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-500"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
