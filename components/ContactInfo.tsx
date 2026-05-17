"use client";

export default function ContactInfo() {
  return (
    <section
      className="py-10 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap gap-4 sm:gap-5 md:gap-8 justify-center items-stretch">
          {/* Phone Card */}
          <div
            className="flex-1 min-w-0 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-5 border-2 flex items-center gap-4 md:gap-5"
            style={{
              backgroundColor: "#FFF5F5",
              borderColor: "#6A0B1C",
            }}
          >
            {/* Phone Icon */}
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#6A0B1C" }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
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
            <div className="flex flex-col min-w-0">
              <span
                className="text-sm sm:text-base font-medium mb-1"
                style={{ color: "#6A0B1C" }}
              >
                Telefon
              </span>
              <a
                href="tel:05464400297"
                className="text-base sm:text-lg md:text-xl font-bold hover:opacity-80 transition-opacity truncate"
                style={{ color: "#6A0B1C" }}
              >
                0546 440 02 97
              </a>
              <a
                href="tel:05464400292"
                className="text-base sm:text-lg md:text-xl font-bold hover:opacity-80 transition-opacity truncate"
                style={{ color: "#6A0B1C" }}
              >
                0546 440 02 92
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div
            className="flex-1 min-w-0 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-5 border-2 flex items-center gap-4 md:gap-5"
            style={{
              backgroundColor: "#FFF5F5",
              borderColor: "#6A0B1C",
            }}
          >
            {/* Email Icon */}
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#6A0B1C" }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
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
                className="text-sm sm:text-base font-medium mb-1"
                style={{ color: "#6A0B1C" }}
              >
                e-posta
              </span>
              <a
                href="mailto:info@akaegitim.com.tr"
                className="text-base sm:text-lg md:text-xl font-bold hover:opacity-80 transition-opacity break-all"
                style={{ color: "#6A0B1C" }}
              >
                info@akaegitim.com.tr
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div
            className="flex-1 min-w-0 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-5 border-2 flex items-center gap-4 md:gap-5"
            style={{
              backgroundColor: "#FFF5F5",
              borderColor: "#6A0B1C",
            }}
          >
            {/* Location Icon */}
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "#6A0B1C" }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
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
            </div>

            {/* Address Content */}
            <div className="flex flex-col min-w-0">
              <span
                className="text-sm sm:text-base font-medium mb-1"
                style={{ color: "#6A0B1C" }}
              >
                Adres
              </span>
              <span
                className="text-base sm:text-lg md:text-xl font-bold break-words"
                style={{ color: "#6A0B1C" }}
              >
                Cevizlik mah. Hüsreviye sok. Dış Kapı No:1 Karaca İş Hanı İç
                Kapı No: 46 Bakırköy/İstanbul
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
