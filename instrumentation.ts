// Next.js Instrumentation - Server-side error handling
// Bu dosya Next.js 13+ tarafından otomatik olarak yüklenir ve sunucu tarafında çalışır

export async function register() {
  // Sadece development mode'da ve server-side'da çalışır
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Unhandled promise rejection'ları yakala
    process.on('unhandledRejection', (reason: unknown, promise: Promise<unknown>) => {
      // HMR ping mesajları gibi beklenen hataları sessizce yok say
      if (
        reason instanceof Error &&
        (reason.message?.includes('unrecognized HMR message') ||
         reason.message?.includes('ping') ||
         reason.message?.includes('HMR'))
      ) {
        // Bu hataları sessizce yok say - zararsızdır
        return;
      }
      
      // Diğer unhandled rejection'ları logla ama uygulamayı durdurma
      console.warn('Unhandled promise rejection:', reason);
    });

    // Uncaught exception'ları yakala
    process.on('uncaughtException', (error: Error) => {
      // HMR ile ilgili hataları yok say
      if (
        error.message?.includes('unrecognized HMR message') ||
        error.message?.includes('ping') ||
        error.message?.includes('HMR')
      ) {
        return;
      }
      
      // Diğer hataları logla
      console.error('Uncaught exception:', error);
    });
  }
}

