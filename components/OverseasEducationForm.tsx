"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function OverseasEducationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    programType: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            city: formData.city || null,
            program_type: formData.programType || null,
            program: formData.program || null,
            message: formData.message || null,
          },
        ])
        .select();

      if (error) throw error;

      setSubmitStatus({ 
        type: 'success', 
        message: 'Formunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.' 
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        programType: "",
        program: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Bir hata oluştu. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header Text Section */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mb-6 md:mb-8 items-start">
          <div className="flex items-start gap-3 flex-shrink-0">
            <div className="w-1 bg-blue-500 rounded-full min-h-[50px] md:min-h-[60px]"></div>
            <h2
              className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-[34px] leading-tight"
            >
              Yurt Dışı Eğitim<br />
              Yolculuğunuza Başlayın
            </h2>
          </div>
          <p
            className="text-gray-600 flex-1 text-sm md:text-[15px] leading-relaxed ml-0 lg:ml-auto lg:max-w-md lg:text-right"
          >
            Formu doldurun, uzman danışmanlarımız en kısa sürede sizinle
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            iletişime geçsin ve size özel eğitim planınızı oluşturalım
          </p>
        </div>

        {/* Form and Image Container with Rounded Corners */}
        <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Form */}
            <div className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900 font-bold text-base md:text-lg">
                      Kişisel Bilgiler
                    </h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "#4A90E2" }}
                    >
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2" style={{ fontSize: "14px" }}>
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Adınız Soyadınız"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontSize: "15px" }}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" style={{ fontSize: "14px" }}>
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Adınız Soyadınız"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontSize: "15px" }}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" style={{ fontSize: "14px" }}>
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon Numaranız"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontSize: "15px" }}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" style={{ fontSize: "14px" }}>
                        Bulunduğunuz Şehir
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Bulunduğunuz Şehir"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontSize: "15px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Education Preferences Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900 font-bold text-base md:text-lg">
                      Eğitim Tercihleri
                    </h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "#4A90E2" }}
                    >
                      <path
                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 2V8H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 13H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 17H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 9H9H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2 text-sm">
                        Program Türünü Seçin
                      </label>
                      <div className="relative">
                        <select
                          name="programType"
                          value={formData.programType}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                          style={{ fontSize: "15px" }}
                        >
                          <option value="">Program Türünü Seçin</option>
                          <option value="undergraduate">Lisans</option>
                          <option value="graduate">Yüksek Lisans</option>
                          <option value="phd">Doktora</option>
                          <option value="language">Dil Eğitimi</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-900"
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
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" style={{ fontSize: "14px" }}>
                        Bir Program Seçin
                      </label>
                      <div className="relative">
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                          style={{ fontSize: "15px" }}
                        >
                          <option value="">Bir Program Seçin</option>
                          <option value="engineering">Mühendislik</option>
                          <option value="business">İşletme</option>
                          <option value="medicine">Tıp</option>
                          <option value="arts">Sanat</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-900"
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
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900 font-bold text-base md:text-lg">
                      Mesajınız
                    </h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "#4A90E2" }}
                    >
                      <path
                        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <div>
                    <label className="block text-gray-700 mb-2" style={{ fontSize: "14px" }}>
                      Detayları Bizimle Paylaşın
                    </label>
                    <textarea
                      name="message"
                      placeholder="Detayları Bizimle Paylaşın"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      style={{ fontSize: "15px" }}
                    />
                  </div>
                </div>

                {/* Submit Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    padding: "14px 32px",
                    background: "linear-gradient(to right, #1E88E5, #26C6DA)",
                    fontSize: "16px",
                  }}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Ücretsiz Danışmanlık Alın'}
                  {!isSubmitting && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        d="M21 2L3 10.53V11.5L9.84 14.16L12.5 21H13.46L21 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-full rounded-r-2xl overflow-hidden">
                <Image
                  src="/images/photo-realistic-student-with-backpack-graduation-cap-whimsical-background-school-graduati.png"
                  alt="Yurt dışı eğitim öğrencisi"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Benefit Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-6 md:mt-8">
          {/* Card 2: 24 Saat İçinde */}
          <div
            className="flex items-center gap-3 p-4 md:p-5 rounded-2xl min-w-[300px] max-w-[420px]"
            style={{
              backgroundColor: "#E8F3F8",
              border: "2px solid #60A5FA",
            }}
          >
            <div
              className="shrink-0 rounded-full flex items-center justify-center w-12 h-12 md:w-[60px] md:h-[60px]"
              style={{
                backgroundColor: "#60A5FA",
              }}
            >
              <Image
                src="/images/wall-clock_833602.svg"
                alt="Saat ikonu"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div>
              <h4
                className="font-bold mb-0.5 md:mb-1 text-base md:text-lg"
                style={{ color: "#1a1a1a" }}
              >
                24 Saat İçinde
              </h4>
              <p
                className="text-sm md:text-[15px]"
                style={{ color: "#1a1a1a" }}
              >
                Hızlı Geri Dönüş
              </p>
            </div>
          </div>

          {/* Card 3: Uzman Kadro */}
          <div
            className="flex items-center gap-3 p-4 md:p-5 rounded-2xl min-w-[300px] max-w-[420px]"
            style={{
              backgroundColor: "#FFF0F0",
              border: "2px solid #B91C1C",
            }}
          >
            <div
              className="shrink-0 rounded-full flex items-center justify-center w-12 h-12 md:w-[60px] md:h-[60px]"
              style={{
                backgroundColor: "#B91C1C",
              }}
            >
              <Image
                src="/images/people_3171593.svg"
                alt="İnsanlar ikonu"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div>
              <h4
                className="font-bold mb-0.5 md:mb-1 text-base md:text-lg"
                style={{ color: "#1a1a1a" }}
              >
                Uzman Kadro
              </h4>
              <p
                className="text-sm md:text-[15px]"
                style={{ color: "#1a1a1a" }}
              >
                Profesyonel Destek
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
