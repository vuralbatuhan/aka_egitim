"use client";

export default function ContactInfo() {
  return (
    <section className="py-10 md:py-16 lg:py-24 px-4" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-stretch">
          {/* Phone Card */}
          <div 
            className="flex-1 max-w-2xl rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 flex items-center gap-4 md:gap-6"
            style={{ 
              backgroundColor: "#FFF5F5",
              borderColor: "#6A0B1C"
            }}
          >
            {/* Phone Icon */}
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#6A0B1C" }}
            >
              <svg 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" 
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
            </div>

            {/* Phone Content */}
            <div className="flex flex-col">
              <span 
                className="text-sm sm:text-base lg:text-lg font-medium mb-1 md:mb-2"
                style={{ color: "#6A0B1C" }}
              >
                Telefon
              </span>
              <a 
                href="tel:+905426230724"
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:opacity-80 transition-opacity"
                style={{ color: "#6A0B1C" }}
              >
                +90 542 623 07 24
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div 
            className="flex-1 max-w-2xl rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 flex items-center gap-4 md:gap-6"
            style={{ 
              backgroundColor: "#FFF5F5",
              borderColor: "#6A0B1C"
            }}
          >
            {/* Email Icon */}
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#6A0B1C" }}
            >
              <svg 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" 
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
            </div>

            {/* Email Content */}
            <div className="flex flex-col min-w-0">
              <span 
                className="text-sm sm:text-base lg:text-lg font-medium mb-1 md:mb-2"
                style={{ color: "#6A0B1C" }}
              >
                e-posta
              </span>
              <a 
                href="mailto:info@akaegitim.com.tr"
                className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold hover:opacity-80 transition-opacity break-all"
                style={{ color: "#6A0B1C" }}
              >
                info@akaegitim.com.tr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
