"use client";

import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Checkbox,
} from "@heroui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    program: "",
    country: "",
    message: "",
    acceptTerms: false,
  });
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.max(120, textarea.scrollHeight)}px`;
    }
  }, [formData.message]);

  const programs = [
    { key: "dil-okulu", label: "Dil Okulu" },
    { key: "universite", label: "Üniversite" },
    { key: "ogretmen-hareketliligi", label: "Öğretmen Hareketliliği" },
  ];

  // Program türüne göre ülkeleri filtrele
  const getCountriesForProgram = (programKey: string) => {
    switch (programKey) {
      case "dil-okulu":
        return [
          { key: "ingiltere", label: "İngiltere" },
          { key: "finlandiya", label: "Finlandiya" },
        ];
      case "universite":
        return [
          { key: "italya", label: "İtalya" },
          { key: "ingiltere", label: "İngiltere" },
          { key: "finlandiya", label: "Finlandiya" },
          { key: "almanya", label: "Almanya" },
        ];
      case "ogretmen-hareketliligi":
        return [
          { key: "finlandiya", label: "Finlandiya" },
          { key: "isvicre", label: "İsviçre" },
        ];
      default:
        return [];
    }
  };

  const availableCountries = formData.program
    ? getCountriesForProgram(formData.program)
    : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setValidationErrors({});

    // Basic validation
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Ad Soyad gereklidir";
    if (!formData.email.trim()) errors.email = "E-posta gereklidir";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Geçerli bir e-posta adresi giriniz";
    }
    if (!formData.phone.trim()) errors.phone = "Telefon numarası gereklidir";
    if (!formData.city.trim()) errors.city = "Şehir gereklidir";
    if (!formData.program) errors.program = "Program seçimi gereklidir";
    if (!formData.country) errors.country = "Ülke seçimi gereklidir";
    if (!formData.acceptTerms) errors.acceptTerms = "KVKK onayı gereklidir";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setLoading(false);
      return;
    }

    try {
      // Supabase'e kaydet
      const { submitContactForm } = await import("@/lib/supabase");

      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        program: formData.program,
        country: formData.country,
        message: formData.message || undefined,
      });

      alert("Başvurunuz alındı! En kısa sürede sizinle iletişime geçeceğiz.");

      // Form reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        program: "",
        country: "",
        message: "",
        acceptTerms: false,
      });
      setValidationErrors({});
    } catch (error) {
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary px-4 py-1">
              Ücretsiz Danışmanlık
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-5">
            Yurt Dışı Eğitim Yolculuğunuza Başlayın
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Formu doldurun, uzman danışmanlarımız en kısa sürede sizinle
            iletişime geçsin ve size özel eğitim planınızı oluşturalım
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardBody className="p-6 sm:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Kişisel Bilgiler Bölümü */}
              <div className="space-y-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Kişisel Bilgiler
                    </h3>
                    <p className="text-sm text-gray-500">
                      Size ulaşmamız için gerekli bilgiler
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input
                    placeholder="Adınız ve soyadınız"
                    labelPlacement="outside"
                    value={formData.name}
                    onValueChange={(value) => {
                      setFormData({ ...formData, name: value });
                      if (validationErrors.name) {
                        setValidationErrors({ ...validationErrors, name: "" });
                      }
                    }}
                    isRequired
                    variant="bordered"
                    errorMessage={validationErrors.name}
                    isInvalid={!!validationErrors.name}
                    size="lg"
                    classNames={{
                      base: "w-full",
                      input: "bg-white text-gray-900 placeholder:text-gray-400",
                      inputWrapper:
                        "border-2 border-gray-200 hover:border-primary/60 data-[hover=true]:border-primary/60 group-data-[focus=true]:border-primary focus-within:!outline-none focus-within:!ring-0 data-[focus=true]:!outline-none data-[focus=true]:!ring-0 shadow-sm hover:shadow-md transition-all duration-200 !outline-none !ring-0",
                      label: "text-sm font-semibold text-gray-700 mb-2",
                    }}
                    startContent={
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    }
                  />
                  <Input
                    type="email"
                    placeholder="ornek@email.com"
                    labelPlacement="outside"
                    value={formData.email}
                    onValueChange={(value) => {
                      setFormData({ ...formData, email: value });
                      if (validationErrors.email) {
                        setValidationErrors({ ...validationErrors, email: "" });
                      }
                    }}
                    isRequired
                    variant="bordered"
                    errorMessage={validationErrors.email}
                    isInvalid={!!validationErrors.email}
                    size="lg"
                    classNames={{
                      base: "w-full",
                      input: "bg-white text-gray-900 placeholder:text-gray-400",
                      inputWrapper:
                        "border-2 border-gray-200 hover:border-primary/60 data-[hover=true]:border-primary/60 group-data-[focus=true]:border-primary focus-within:!outline-none focus-within:!ring-0 data-[focus=true]:!outline-none data-[focus=true]:!ring-0 shadow-sm hover:shadow-md transition-all duration-200 !outline-none !ring-0",
                      label: "text-sm font-semibold text-gray-700 mb-2",
                    }}
                    startContent={
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    }
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input
                    type="tel"
                    placeholder="0555 555 55 55"
                    labelPlacement="outside"
                    value={formData.phone}
                    onValueChange={(value) => {
                      setFormData({ ...formData, phone: value });
                      if (validationErrors.phone) {
                        setValidationErrors({ ...validationErrors, phone: "" });
                      }
                    }}
                    isRequired
                    variant="bordered"
                    errorMessage={validationErrors.phone}
                    isInvalid={!!validationErrors.phone}
                    size="lg"
                    classNames={{
                      base: "w-full",
                      input: "bg-white text-gray-900 placeholder:text-gray-400",
                      inputWrapper:
                        "border-2 border-gray-200 hover:border-primary/60 data-[hover=true]:border-primary/60 group-data-[focus=true]:border-primary focus-within:!outline-none focus-within:!ring-0 data-[focus=true]:!outline-none data-[focus=true]:!ring-0 shadow-sm hover:shadow-md transition-all duration-200 !outline-none !ring-0",
                      label: "text-sm font-semibold text-gray-700 mb-2",
                    }}
                    startContent={
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    }
                  />
                  <Input
                    placeholder="Bulunduğunuz şehir"
                    labelPlacement="outside"
                    value={formData.city}
                    onValueChange={(value) => {
                      setFormData({ ...formData, city: value });
                      if (validationErrors.city) {
                        setValidationErrors({ ...validationErrors, city: "" });
                      }
                    }}
                    isRequired
                    variant="bordered"
                    errorMessage={validationErrors.city}
                    isInvalid={!!validationErrors.city}
                    size="lg"
                    classNames={{
                      base: "w-full",
                      input: "bg-white text-gray-900 placeholder:text-gray-400",
                      inputWrapper:
                        "border-2 border-gray-200 hover:border-primary/60 data-[hover=true]:border-primary/60 group-data-[focus=true]:border-primary focus-within:!outline-none focus-within:!ring-0 data-[focus=true]:!outline-none data-[focus=true]:!ring-0 shadow-sm hover:shadow-md transition-all duration-200 !outline-none !ring-0",
                      label: "text-sm font-semibold text-gray-700 mb-2",
                    }}
                    startContent={
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>

              {/* Eğitim Tercihleri Bölümü */}
              <div className="space-y-7 pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Eğitim Tercihleri
                    </h3>
                    <p className="text-sm text-gray-500">
                      Hangi program ve ülkeyle ilgileniyorsunuz?
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Program Dropdown */}
                  <div className="w-full">
                    <Dropdown onOpenChange={setIsProgramOpen}>
                      <DropdownTrigger>
                        <Button
                          variant="bordered"
                          className={`w-full h-14 justify-between bg-white border-2 ${
                            validationErrors.program
                              ? "border-red-500"
                              : "border-gray-200 hover:border-primary/60 data-[hover=true]:border-primary/60"
                          } shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-0`}
                          endContent={
                            <ChevronDownIcon
                              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                                isProgramOpen ? "rotate-180" : ""
                              }`}
                            />
                          }
                          startContent={
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          }
                        >
                          <span className="text-gray-900 font-normal flex-1 text-left">
                            {formData.program
                              ? programs.find((p) => p.key === formData.program)
                                  ?.label
                              : "Program türünü seçin"}
                          </span>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Program Seçimi"
                        selectionMode="single"
                        selectedKeys={
                          formData.program ? [formData.program] : []
                        }
                        onSelectionChange={(keys) => {
                          const selectedKey = Array.from(keys)[0] as string;
                          // Program değiştiğinde ülkeyi resetle
                          setFormData({
                            ...formData,
                            program: selectedKey || "",
                            country: "",
                          });
                          setValidationErrors({
                            ...validationErrors,
                            program: "",
                          });
                        }}
                        itemClasses={{
                          base: "rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6] data-[hover=true]:bg-[rgba(47,212,198,0.1)] data-[hover=true]:text-[#2FD4C6] border-b border-gray-100 last:border-b-0 focus:outline-none focus:ring-0",
                        }}
                        classNames={{
                          base: "w-[360px] bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl p-3 space-y-2 focus:outline-none focus:ring-0",
                        }}
                      >
                        {programs.map((program) => (
                          <DropdownItem
                            key={program.key}
                            className="hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6]"
                          >
                            {program.label}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                    {validationErrors.program && (
                      <p className="text-red-500 text-sm mt-2">
                        {validationErrors.program}
                      </p>
                    )}
                  </div>

                  {/* Country Dropdown */}
                  <div className="w-full">
                    <Dropdown
                      onOpenChange={setIsCountryOpen}
                      isDisabled={!formData.program}
                    >
                      <DropdownTrigger>
                        <Button
                          variant="bordered"
                          isDisabled={!formData.program}
                          className={`w-full h-14 justify-between bg-white border-2 ${
                            validationErrors.country
                              ? "border-red-500"
                              : "border-gray-200 hover:border-primary/60 data-[hover=true]:border-primary/60"
                          } ${
                            !formData.program
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          } shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-0`}
                          endContent={
                            <ChevronDownIcon
                              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                                isCountryOpen ? "rotate-180" : ""
                              }`}
                            />
                          }
                          startContent={
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          }
                        >
                          <span className="text-gray-900 font-normal flex-1 text-left">
                            {formData.country
                              ? availableCountries.find(
                                  (c) => c.key === formData.country
                                )?.label
                              : !formData.program
                              ? "Lütfen bir program seçin"
                              : "Hedef ülkeyi seçin"}
                          </span>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Ülke Seçimi"
                        selectionMode="single"
                        selectedKeys={
                          formData.country ? [formData.country] : []
                        }
                        onSelectionChange={(keys) => {
                          const selectedKey = Array.from(keys)[0] as string;
                          setFormData({
                            ...formData,
                            country: selectedKey || "",
                          });
                          setValidationErrors({
                            ...validationErrors,
                            country: "",
                          });
                        }}
                        itemClasses={{
                          base: "rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6] data-[hover=true]:bg-[rgba(47,212,198,0.1)] data-[hover=true]:text-[#2FD4C6] border-b border-gray-100 last:border-b-0 focus:outline-none focus:ring-0",
                        }}
                        classNames={{
                          base: "w-[360px] bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl p-3 space-y-2 focus:outline-none focus:ring-0",
                        }}
                      >
                        {availableCountries.map((country) => (
                          <DropdownItem
                            key={country.key}
                            className="hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6]"
                          >
                            {country.label}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                    {validationErrors.country && (
                      <p className="text-red-500 text-sm mt-2">
                        {validationErrors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Mesaj Bölümü */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Mesajınız
                    </h3>
                    <p className="text-sm text-gray-500">
                      Detayları bizimle paylaşın (İsteğe bağlı)
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <textarea
                    ref={textareaRef}
                    placeholder="Öğrenmek istediğiniz detayları, sorularınızı veya özel taleplerinizi buraya yazabilirsiniz..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white text-gray-900 placeholder:text-gray-400 rounded-xl border-2 border-gray-200 hover:border-primary/60 focus:border-primary focus:outline-none focus:ring-0 shadow-sm hover:shadow-md transition-all duration-200 p-4 text-base resize-none overflow-hidden"
                    style={{ minHeight: "120px" }}
                  />
                </div>
              </div>

              {/* Gizlilik ve Güvenlik Bölümü */}
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 rounded-2xl p-6 sm:p-8 pt-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                        Gizlilik ve Güvenlik
                      </h4>
                      <p className="text-sm text-gray-600">
                        Verileriniz güvende, %100 güvenli işlem
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-gray-200">
                        <Checkbox
                          isSelected={formData.acceptTerms}
                          onValueChange={(checked) => {
                            setFormData({ ...formData, acceptTerms: checked });
                            if (validationErrors.acceptTerms) {
                              setValidationErrors({
                                ...validationErrors,
                                acceptTerms: "",
                              });
                            }
                          }}
                          isRequired
                          size="lg"
                          color="success"
                          className="mt-0.5"
                          classNames={{
                            base: validationErrors.acceptTerms
                              ? "border-red-500"
                              : "",
                          }}
                        />
                        <label
                          className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1 cursor-pointer"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              acceptTerms: !formData.acceptTerms,
                            })
                          }
                        >
                          <a
                            href="/kvkk"
                            target="_blank"
                            className="text-primary font-bold hover:underline hover:text-primary/80 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            KVKK Bilgilendirmesi
                          </a>{" "}
                          ve{" "}
                          <a
                            href="/acik-riza"
                            target="_blank"
                            className="text-primary font-bold hover:underline hover:text-primary/80 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Açık Rıza Beyan Metni
                          </a>
                          &apos;ni okudum, onaylıyorum.
                        </label>
                      </div>
                      {validationErrors.acceptTerms && (
                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg ml-0">
                          <svg
                            className="w-5 h-5 text-red-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-red-600 text-sm font-medium">
                            {validationErrors.acceptTerms}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-bold text-base sm:text-lg shadow-2xl h-14 sm:h-16 bg-gradient-to-r from-primary via-primary to-blue-600 text-white border-0 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  isLoading={loading}
                  radius="lg"
                  endContent={
                    !loading && (
                      <svg
                        className="w-6 h-6 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    )
                  }
                >
                  {loading ? "Gönderiliyor..." : "Ücretsiz Danışmanlık Alın"}
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="group bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5 text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-green-900 mb-1">
                      100% Ücretsiz
                    </p>
                    <p className="text-xs text-green-700">
                      Danışmanlık Hizmeti
                    </p>
                  </div>

                  <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5 text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-blue-900 mb-1">
                      24 Saat İçinde
                    </p>
                    <p className="text-xs text-blue-700">Hızlı Geri Dönüş</p>
                  </div>

                  <div className="group bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5 text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-purple-900 mb-1">
                      Uzman Kadro
                    </p>
                    <p className="text-xs text-purple-700">
                      Profesyonel Destek
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
