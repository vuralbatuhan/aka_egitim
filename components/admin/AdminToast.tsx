"use client";

import { useEffect } from "react";

export type ToastType = "success" | "error" | "info";

export interface ToastState {
  message: string;
  type: ToastType;
  show: boolean;
}

const typeStyles: Record<ToastType, string> = {
  success: "bg-emerald-600 text-white border-emerald-700",
  error: "bg-red-600 text-white border-red-700",
  info: "bg-aka-maroon text-white border-aka-dark-maroon",
};

export default function AdminToast({
  toast,
  onClose,
}: {
  toast: ToastState;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!toast.show) return;
    const t = setTimeout(onClose, 4500);
    return () => clearTimeout(t);
  }, [toast.show, onClose]);

  if (!toast.show) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] px-5 py-3 rounded-xl shadow-xl border flex items-center gap-3 transition-all duration-300 ${typeStyles[toast.type]}`}
      role="alert"
    >
      {toast.type === "success" && (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
      {toast.type === "error" && (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      <span className="text-sm font-medium">{toast.message}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-1 p-1 rounded hover:bg-white/20 transition-colors"
        aria-label="Kapat"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
