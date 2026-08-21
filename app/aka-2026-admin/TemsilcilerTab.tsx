"use client";

import { useState, useEffect } from "react";

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

type Temsilci = {
  id: string;
  ad: string;
  soyad: string;
  email: string;
  telefon: string | null;
  gorev_unvan: string | null;
  alan_brans: string | null;
  ikamet_il: string | null;
  gorev_il: string;
  foto_url: string | null;
  created_at: string;
};

type FormState = {
  ad: string;
  soyad: string;
  email: string;
  telefon: string;
  gorev_unvan: string;
  alan_brans: string;
  ikamet_il: string;
  gorev_il: string;
};

const emptyForm: FormState = {
  ad: "",
  soyad: "",
  email: "",
  telefon: "",
  gorev_unvan: "",
  alan_brans: "",
  ikamet_il: "",
  gorev_il: "",
};

function UserIcon() {
  return (
    <svg
      className="w-6 h-6 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
}

export default function TemsilcilerTab() {
  const [temsilciler, setTemsilciler] = useState<Temsilci[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Temsilci | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchTemsilciler();
  }, []);

  const fetchTemsilciler = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/uyelik-basvurulari");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setTemsilciler(data || []);
    } catch (err) {
      console.error("Temsilciler yüklenemedi:", err);
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setEditing(null);
    setForm(emptyForm);
    setFotoFile(null);
    setFotoPreview(null);
    setShowModal(true);
  };

  const openEditModal = (t: Temsilci) => {
    setEditing(t);
    setForm({
      ad: t.ad,
      soyad: t.soyad,
      email: t.email,
      telefon: t.telefon || "",
      gorev_unvan: t.gorev_unvan || "",
      alan_brans: t.alan_brans || "",
      ikamet_il: t.ikamet_il || "",
      gorev_il: t.gorev_il,
    });
    setFotoFile(null);
    setFotoPreview(t.foto_url || null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditing(null);
    setForm(emptyForm);
    setFotoFile(null);
    setFotoPreview(null);
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFotoFile(file);
    setFotoPreview(URL.createObjectURL(file));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!form.ad.trim() || !form.soyad.trim() || !form.email.trim() || !form.gorev_il) {
      alert("Ad, Soyad, E-posta ve Görev İli zorunludur.");
      return;
    }
    setSaving(true);
    try {
      let foto_url: string | null = editing?.foto_url || null;

      if (fotoFile) {
        const uploadForm = new FormData();
        uploadForm.append("file", fotoFile);
        uploadForm.append("bucket", "uye-fotograflari");
        const uploadRes = await fetch("/api/uploads", {
          method: "POST",
          body: uploadForm,
        });
        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          foto_url = uploadData.url;
        }
      }

      const payload = {
        ad: form.ad.trim(),
        soyad: form.soyad.trim(),
        email: form.email.trim(),
        telefon: form.telefon.trim() || null,
        gorev_unvan: form.gorev_unvan.trim() || null,
        alan_brans: form.alan_brans.trim() || null,
        ikamet_il: form.ikamet_il || null,
        gorev_il: form.gorev_il,
        foto_url,
      };

      const res = editing
        ? await fetch(`/api/uyelik-basvurulari/${editing.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/uyelik-basvurulari", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

      if (!res.ok) throw new Error("Failed to save");

      closeModal();
      fetchTemsilciler();
    } catch (err) {
      console.error("Kayıt hatası:", err);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu temsilciyi silmek istediğinize emin misiniz?")) return;
    try {
      const res = await fetch(`/api/uyelik-basvurulari/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      fetchTemsilciler();
    } catch (err) {
      console.error("Silme hatası:", err);
    }
  };

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#641a29]/30 focus:border-[#641a29] transition-colors bg-white";

  const labelClass = "block text-xs font-semibold text-gray-600 mb-1";

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Temsilciler</h2>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg text-sm font-medium"
          style={{ backgroundColor: "#641a29" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Yeni Temsilci Ekle
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div
              className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-t-transparent mb-4"
              style={{ borderColor: "#641a29", borderTopColor: "transparent" }}
            ></div>
            <p className="text-gray-600">Yükleniyor...</p>
          </div>
        </div>
      ) : temsilciler.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-600 text-lg">Henüz temsilci bulunmamaktadır</p>
          <button
            onClick={openAddModal}
            className="mt-4 px-6 py-2 text-white rounded-lg transition-all"
            style={{ backgroundColor: "#641a29" }}
          >
            İlk Temsilciyi Ekle
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Fotoğraf
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Ad Soyad
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    E-posta
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Görev İli
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Görev/Ünvan
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {temsilciler.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
                        {t.foto_url ? (
                          <img
                            src={t.foto_url}
                            alt={`${t.ad} ${t.soyad}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <UserIcon />
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {t.ad} {t.soyad}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      {t.email}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      {t.gorev_il}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                      {t.gorev_unvan || "-"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEditModal(t)}
                          className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-xs font-medium flex items-center gap-1"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Düzenle
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-xs font-medium flex items-center gap-1"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full my-8 mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold" style={{ color: "#641a29" }}>
                {editing ? "Temsilci Düzenle" : "Yeni Temsilci Ekle"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Fotoğraf */}
              <div>
                <label className={labelClass}>Fotoğraf</label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0">
                    {fotoPreview ? (
                      <img src={fotoPreview} alt="Önizleme" className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon />
                    )}
                  </div>
                  <label className="flex-1 cursor-pointer">
                    <div className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 text-center hover:border-[#641a29] hover:text-[#641a29] transition-colors">
                      {fotoFile ? fotoFile.name : "Fotoğraf seç (JPG, PNG, WEBP)"}
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

              {/* Ad / Soyad */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>
                    Ad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ad"
                    value={form.ad}
                    onChange={handleChange}
                    placeholder="Adı"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Soyad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="soyad"
                    value={form.soyad}
                    onChange={handleChange}
                    placeholder="Soyadı"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* E-posta */}
              <div>
                <label className={labelClass}>
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-posta adresi"
                  className={inputClass}
                />
              </div>

              {/* Telefon */}
              <div>
                <label className={labelClass}>Telefon</label>
                <input
                  type="tel"
                  name="telefon"
                  value={form.telefon}
                  onChange={handleChange}
                  placeholder="(5xx) xxx-xxxx"
                  className={inputClass}
                />
              </div>

              {/* Görev/Ünvan */}
              <div>
                <label className={labelClass}>Görev/Ünvan</label>
                <input
                  type="text"
                  name="gorev_unvan"
                  value={form.gorev_unvan}
                  onChange={handleChange}
                  placeholder="Görev veya ünvan"
                  className={inputClass}
                />
              </div>

              {/* Alan/Branş */}
              <div>
                <label className={labelClass}>Alan/Branş</label>
                <input
                  type="text"
                  name="alan_brans"
                  value={form.alan_brans}
                  onChange={handleChange}
                  placeholder="Alan veya branş"
                  className={inputClass}
                />
              </div>

              {/* İkamet İli */}
              <div>
                <label className={labelClass}>İkamet İli</label>
                <select
                  name="ikamet_il"
                  value={form.ikamet_il}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">İkamet İli Seçiniz</option>
                  {ILLER.map((il) => (
                    <option key={il} value={il}>
                      {il}
                    </option>
                  ))}
                </select>
              </div>

              {/* Görev İli */}
              <div>
                <label className={labelClass}>
                  Görev İli <span className="text-red-500">*</span>
                </label>
                <select
                  name="gorev_il"
                  value={form.gorev_il}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Görev İli Seçiniz</option>
                  {ILLER.map((il) => (
                    <option key={il} value={il}>
                      {il}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 px-6 py-3 text-white rounded-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: "#641a29" }}
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Kaydediliyor...
                  </>
                ) : editing ? (
                  "Güncelle"
                ) : (
                  "Ekle"
                )}
              </button>
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
