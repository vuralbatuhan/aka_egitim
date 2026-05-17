"use client";

import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

const ILLER = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya",
  "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik",
  "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum",
  "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir",
  "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul",
  "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis",
  "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa",
  "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize",
  "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Şanlıurfa", "Şırnak", "Tekirdağ",
  "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak",
];

const KAN_GRUPLARI = ["A+", "A-", "B+", "B-", "AB+", "AB-", "0+", "0-"];

const EGITIM_DURUMLARI = [
  "İlkokul", "Ortaokul", "Lise", "Ön Lisans", "Lisans", "Yüksek Lisans", "Doktora",
];

export default function UyelikFormu() {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    tcKimlik: "",
    telefon: "",
    dogumTarihi: "",
    adres: "",
    gorevUnvan: "",
    kanGrubu: "",
    egitimDurumu: "",
    alanBrans: "",
    ikametIl: "",
    gorevIl: "",
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const [kayitSartlari, setKayitSartlari] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validationBanner, setValidationBanner] = useState(false);
  const formTopRef = useRef<HTMLDivElement>(null);

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFoto(file);
    setFotoPreview(URL.createObjectURL(file));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.ad.trim()) newErrors.ad = "Ad zorunludur.";
    if (!formData.soyad.trim()) newErrors.soyad = "Soyad zorunludur.";
    if (!formData.email.trim()) newErrors.email = "E-posta zorunludur.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Geçerli bir e-posta giriniz.";
    if (!formData.tcKimlik.trim()) newErrors.tcKimlik = "TC Kimlik zorunludur.";
    else if (formData.tcKimlik.length !== 11) newErrors.tcKimlik = "TC Kimlik 11 haneli olmalıdır.";
    if (!formData.telefon.trim()) newErrors.telefon = "Telefon zorunludur.";
    if (!formData.dogumTarihi) newErrors.dogumTarihi = "Doğum tarihi zorunludur.";
    if (!formData.adres.trim()) newErrors.adres = "Adres zorunludur.";
    if (!formData.ikametIl) newErrors.ikametIl = "İkamet ili zorunludur.";
    if (!formData.gorevIl) newErrors.gorevIl = "Görev ili zorunludur.";
    if (!kayitSartlari) newErrors.kayitSartlari = "Kayıt şartlarını kabul etmelisiniz.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationBanner(false);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setValidationBanner(true);
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setIsSubmitting(true);
    try {
      let foto_url: string | null = null;
      if (foto) {
        const ext = foto.name.split(".").pop();
        const dosyaAdi = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("uye-fotograflari")
          .upload(dosyaAdi, foto, { upsert: false });
        if (!uploadError && uploadData) {
          const { data: urlData } = supabase.storage
            .from("uye-fotograflari")
            .getPublicUrl(uploadData.path);
          foto_url = urlData.publicUrl;
        }
      }

      const { error } = await supabase.from("uyelik_basvurulari").insert([
        {
          ad: formData.ad,
          soyad: formData.soyad,
          email: formData.email,
          tc_kimlik: formData.tcKimlik,
          telefon: formData.telefon,
          dogum_tarihi: formData.dogumTarihi,
          adres: formData.adres,
          gorev_unvan: formData.gorevUnvan || null,
          kan_grubu: formData.kanGrubu || null,
          egitim_durumu: formData.egitimDurumu || null,
          alan_brans: formData.alanBrans || null,
          ikamet_il: formData.ikametIl,
          gorev_il: formData.gorevIl,
          kayit_sartlari: true,
          foto_url,
        },
      ]);
      if (error) throw error;
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6A0B1C]/30 focus:border-[#6A0B1C] transition-colors ${errors[field] ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
    }`;

  const labelClass = "block text-xs font-semibold text-gray-600 mb-1";

  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />

      {/* Hero Banner */}
      <section
        className="w-full flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px] mt-24 relative overflow-hidden"
        style={{ backgroundColor: "#5F1B22" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/baskl.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />
        <div className="relative z-10 text-center px-4 py-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-[0.15em] mb-3"
            style={{ color: "#F07D2C" }}
          >
            AKADER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/90 text-sm sm:text-base"
          >
            AKADER &amp; Yeni Üye Başvuru Sayfası
          </motion.p>
        </div>
      </section>

      {/* Form Card */}
      <section className="flex-1 flex justify-center px-4 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-10"
        >
          {submitStatus === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                style={{ backgroundColor: "#FBE9EC" }}
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#6A0B1C" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: "#6A0B1C" }}>
                Başvurunuz Alındı!
              </h2>
              <p className="text-gray-500 max-w-md">
                Üyelik başvurunuz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
              </p>
            </div>
          ) : (
            <>
              <div ref={formTopRef} className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: "#6A0B1C" }}>
                  AKADER | Üyelik Formu
                </h2>
                <p className="text-gray-500 text-sm">
                  Lütfen formu eksiksiz ve doğru doldurduğunuzdan emin olun
                </p>
              </div>

              {validationBanner && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 border border-red-200 mb-4">
                  <svg className="w-5 h-5 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                  <p className="text-sm text-red-700 font-medium">
                    Lütfen kırmızı işaretli zorunlu alanları eksiksiz doldurun.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Ad / Soyad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      Adınız <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="ad"
                      value={formData.ad}
                      onChange={handleChange}
                      placeholder="Adınızı yazınız"
                      className={inputClass("ad")}
                    />
                    {errors.ad && <p className="text-red-500 text-xs mt-1">{errors.ad}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>
                      Soyadınız <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="soyad"
                      value={formData.soyad}
                      onChange={handleChange}
                      placeholder="Soyadınızı yazınız"
                      className={inputClass("soyad")}
                    />
                    {errors.soyad && <p className="text-red-500 text-xs mt-1">{errors.soyad}</p>}
                  </div>
                </div>

                {/* E-Posta / TC Kimlik */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      E-Posta Adresiniz <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-Posta adresinizi yazınız"
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>
                      TC Kimlik Numaranız <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="tcKimlik"
                      value={formData.tcKimlik}
                      onChange={handleChange}
                      placeholder="Kimlik Numaranızı Yazınız"
                      maxLength={11}
                      className={inputClass("tcKimlik")}
                    />
                    {errors.tcKimlik && <p className="text-red-500 text-xs mt-1">{errors.tcKimlik}</p>}
                  </div>
                </div>

                {/* Telefon / Doğum Tarihi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      Telefon Numaranız <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      placeholder="(5xx) xxx-xxxx"
                      className={inputClass("telefon")}
                    />
                    {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>
                      Doğum Tarihiniz <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dogumTarihi"
                      value={formData.dogumTarihi}
                      onChange={handleChange}
                      className={inputClass("dogumTarihi")}
                    />
                    {errors.dogumTarihi && (
                      <p className="text-red-500 text-xs mt-1">{errors.dogumTarihi}</p>
                    )}
                  </div>
                </div>

                {/* Adres */}
                <div>
                  <label className={labelClass}>
                    Adresiniz <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="adres"
                    value={formData.adres}
                    onChange={handleChange}
                    placeholder="Adresinizi yazınız"
                    className={inputClass("adres")}
                  />
                  {errors.adres && <p className="text-red-500 text-xs mt-1">{errors.adres}</p>}
                </div>

                {/* Fotoğraf */}
                <div>
                  <label className={labelClass}>Profil Fotoğrafı</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0">
                      {fotoPreview ? (
                        <img src={fotoPreview} alt="Önizleme" className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      )}
                    </div>
                    <label className="flex-1 cursor-pointer">
                      <div className="w-full px-4 py-2.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 text-center hover:border-[#6A0B1C] hover:text-[#6A0B1C] transition-colors">
                        {foto ? foto.name : "Fotoğraf seç (JPG, PNG, WEBP)"}
                      </div>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={handleFotoChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* Görev/Ünvan / Kan Grubu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>
                      Göreviniz/Ünvanınız
                    </label>
                    <input
                      type="text"
                      name="gorevUnvan"
                      value={formData.gorevUnvan}
                      onChange={handleChange}
                      placeholder="Görev/Ünvan Yazınız"
                      className={inputClass("gorevUnvan")}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Kan Grubu</label>
                    <select
                      name="kanGrubu"
                      value={formData.kanGrubu}
                      onChange={handleChange}
                      className={inputClass("kanGrubu")}
                    >
                      <option value="">Kan Grubunuzu Seçiniz</option>
                      {KAN_GRUPLARI.map((kg) => (
                        <option key={kg} value={kg}>{kg}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Eğitim Durumu / Alan/Branş */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Eğitim Durumunuz</label>
                    <select
                      name="egitimDurumu"
                      value={formData.egitimDurumu}
                      onChange={handleChange}
                      className={inputClass("egitimDurumu")}
                    >
                      <option value="">Eğitim Durumu Seçiniz</option>
                      {EGITIM_DURUMLARI.map((ed) => (
                        <option key={ed} value={ed}>{ed}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Alanı/Branşı</label>
                    <input
                      type="text"
                      name="alanBrans"
                      value={formData.alanBrans}
                      onChange={handleChange}
                      placeholder="Alan/Branş Yazınız"
                      className={inputClass("alanBrans")}
                    />
                  </div>
                </div>

                {/* İkamet İli */}
                <div>
                  <label className={labelClass}>
                    İkamet Ettiğiniz İl <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="ikametIl"
                    value={formData.ikametIl}
                    onChange={handleChange}
                    className={inputClass("ikametIl")}
                  >
                    <option value="">İkamet İli Seçiminizi Yapınız</option>
                    {ILLER.map((il) => (
                      <option key={il} value={il}>{il}</option>
                    ))}
                  </select>
                  {errors.ikametIl && (
                    <p className="text-red-500 text-xs mt-1">{errors.ikametIl}</p>
                  )}
                </div>

                {/* Görev İli */}
                <div>
                  <label className={labelClass}>
                    Görev Yaptığınız İl <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gorevIl"
                    value={formData.gorevIl}
                    onChange={handleChange}
                    className={inputClass("gorevIl")}
                  >
                    <option value="">Görev Yaptığınız İli Seçiminizi Yapınız</option>
                    {ILLER.map((il) => (
                      <option key={il} value={il}>{il}</option>
                    ))}
                  </select>
                  {errors.gorevIl && (
                    <p className="text-red-500 text-xs mt-1">{errors.gorevIl}</p>
                  )}
                </div>

                {/* Kayıt Şartları */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={kayitSartlari}
                      onChange={(e) => {
                        setKayitSartlari(e.target.checked);
                        if (errors.kayitSartlari)
                          setErrors((prev) => ({ ...prev, kayitSartlari: "" }));
                      }}
                      className="mt-0.5 w-4 h-4 shrink-0 accent-[#6A0B1C] cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      AKADER üyelik koşullarını ve{" "}
                      <a
                        href="/gizlilik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#6A0B1C] transition-colors"
                        style={{ color: "#6A0B1C" }}
                      >
                        gizlilik politikasını
                      </a>{" "}
                      okudum, kabul ediyorum.
                    </span>
                  </label>
                  {errors.kayitSartlari && (
                    <p className="text-red-500 text-xs mt-1.5 ml-7">
                      {errors.kayitSartlari}
                    </p>
                  )}
                </div>

                {/* Submit */}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Bir hata oluştu. Lütfen tekrar deneyiniz.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg text-white font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#6A0B1C" }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Gönderiliyor...
                    </span>
                  ) : (
                    "Kayıt Ol"
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
