'use client'

import { useEffect } from 'react'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Unhandled rejection'ları yakala (HMR ping hatası için)
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // HMR ping mesajları gibi beklenen hataları sessizce yok say
      if (
        event.reason?.message?.includes('unrecognized HMR message') ||
        event.reason?.message?.includes('ping')
      ) {
        event.preventDefault();
        return;
      }
      
      // Diğer hataları logla ama uygulamayı durdurmadan devam et
      console.warn('Unhandled promise rejection:', event.reason);
      event.preventDefault();
    };

    // Unhandled error'ları yakala
    const handleError = (event: ErrorEvent) => {
      // HMR ile ilgili hataları yok say
      if (
        event.message?.includes('unrecognized HMR message') ||
        event.message?.includes('ping')
      ) {
        event.preventDefault();
        return;
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  )
}

