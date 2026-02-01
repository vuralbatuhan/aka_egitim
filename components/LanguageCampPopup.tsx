"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const POPUP_STORAGE_KEY = "aka-language-camp-popup-closed";

export default function LanguageCampPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const closedAt = sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (!closedAt) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        requestAnimationFrame(() => setIsVisible(true));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      sessionStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString());
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Dil kampı tanıtımı"
      className={`fixed inset-0 z-[9999] flex items-end sm:items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ padding: "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)" }}
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={`relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-w-4xl sm:max-w-3xl w-full max-h-[92vh] sm:max-h-[80vh] overflow-hidden transition-transform duration-300 flex flex-col ${
          isVisible ? "translate-y-0 scale-100" : "translate-y-4 sm:translate-y-0 sm:scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 sm:py-0 sm:absolute sm:top-0 sm:right-0 sm:left-auto sm:px-0 sm:pt-3 sm:pr-3 sm:bg-transparent border-b sm:border-b-0 bg-gray-50/80 sm:bg-transparent z-10">
          <p className="text-sm font-medium text-gray-700 sm:hidden">
            Dil Kampı Seçenekleri
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="min-w-[44px] min-h-[44px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition-colors shadow-lg touch-manipulation -mr-1"
            aria-label="Kapat"
          >
            <span className="text-2xl sm:text-xl font-bold leading-none">×</span>
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain p-2 sm:p-3">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <div className="flex-shrink-0 sm:flex-1 min-w-0">
              <a
                href="/dil-okullari"
                className="block rounded-xl overflow-hidden border-2 border-transparent hover:border-amber-500 active:border-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <div className="relative w-full h-[32vh] sm:h-auto sm:aspect-[2/3] sm:max-h-[50vh]">
                  <Image
                    src="/images/dil-kampi-cambridge-aka-egitim-1.png"
                    alt="Londra & Cambridge Dil Kampı - 8 Gün 7 Gece, Haziran Temmuz Ağustos"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain sm:object-cover sm:object-top"
                    priority
                  />
                </div>
              </a>
              <p className="text-center text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 font-medium">
                Londra & Cambridge Dil Kampı
              </p>
            </div>
            <div className="flex-shrink-0 sm:flex-1 min-w-0">
              <a
                href="/dil-okullari/finlandiya"
                className="block rounded-xl overflow-hidden border-2 border-transparent hover:border-amber-500 active:border-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <div className="relative w-full h-[32vh] sm:h-auto sm:aspect-[2/3] sm:max-h-[50vh]">
                  <Image
                    src="/images/finlandiya-aka-egitim-anadolu.png"
                    alt="Helsinki & Huvitus Dil Kampı - 8 Gün 7 Gece, Yaz Boyu Hareketlilik"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain sm:object-cover sm:object-top"
                    priority
                  />
                </div>
              </a>
              <p className="text-center text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 font-medium">
                Helsinki & Huvitus Dil Kampı
              </p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 bg-gray-50 px-4 py-3 text-center text-xs sm:text-sm text-gray-600 border-t pb-[env(safe-area-inset-bottom)] sm:pb-3">
          Dil kamplarımız hakkında bilgi almak için kartlara tıklayın.
        </div>
      </div>
    </div>
  );
}
