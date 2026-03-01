"use client";

import { useState, useRef, cloneElement } from "react";
import TurkeyMap, { type CityType } from "turkey-map-react";

// Sadece İstanbul turuncu ve pop-up alacak
const ORANGE_REGION_IDS = new Set(["istanbul"]);

const ISTANBUL_INFO = {
  name: "İstanbul",
  cities: "İstanbul",
  description:
    "İstanbul ve çevresinde ofislerimiz ve deneyimli temsilcilerimiz hizmetinizde.",
};

export default function ContactUs() {
  const [hoveredCity, setHoveredCity] = useState<CityType | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleHover = (city: CityType, e?: React.MouseEvent) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (e && mapContainerRef.current) {
      const rect = mapContainerRef.current.getBoundingClientRect();
      setPopupPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setHoveredCity(city);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => setHoveredCity(null), 100);
  };

  const handleMapClick = () => {
    setHoveredCity(null);
  };

  const handleIstanbulTap = (city: CityType, e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setHoveredCity((prev) => (prev?.id === "istanbul" ? null : city));
  };

  return (
    <section className="relative pt-6 sm:pt-10 md:pt-16 pb-2 sm:pb-4 md:pb-6 px-3 sm:px-5 lg:px-8 w-full overflow-x-hidden">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Üst satır: Başlık (sol) + Açıklama (sağ) - mobil uyumlu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-5 sm:mb-10 md:mb-16">
          <div className="flex items-start sm:items-center gap-3 md:gap-4">
            <div
              className="h-10 sm:h-12 md:h-14 w-1 rounded-full flex-shrink-0 mt-1 sm:mt-0"
              style={{ backgroundColor: "#007bff" }}
            />
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ color: "#333333" }}
            >
              Bizimle Yol Yürümeye
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              Var Mısınız?
            </h2>
          </div>

          <p
            className="text-sm sm:text-base leading-relaxed flex items-center text-left md:text-left"
            style={{ color: "#666666" }}
          >
            Türkiye&apos;nin farklı şehirlerinde ofislerimiz ve deneyimli
            temsilcilerimiz sizlere en iyi hizmeti sunmak için hazır. Harita
            üzerinde şehirlere tıklayarak temsilcilerimizi görebilirsiniz.
          </p>
        </div>

        {/* SVG Harita - kod ile */}
        <div
          ref={mapContainerRef}
          className="map-container relative w-full max-w-[1200px] mx-auto mt-2 sm:mt-4 md:mt-6 aspect-[2/1] sm:aspect-[2/1] min-h-[180px] sm:min-h-[280px] md:min-h-[340px] overflow-hidden touch-manipulation"
          onMouseLeave={handleMouseLeave}
          onClick={handleMapClick}
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden [&_svg]:w-full [&_svg]:h-full [&_svg]:object-contain">
            <TurkeyMap
              hoverable
              customStyle={{
                idleColor: "#6A0B1C",
                hoverColor: "#8B0D24",
              }}
              cityWrapper={(cityComponent, city) => {
                const isIstanbul = city.id === "istanbul";
                const el = isIstanbul
                  ? cloneElement(
                      cityComponent as React.ReactElement<{ fill?: string; style?: React.CSSProperties }>,
                      {
                        fill: "#F07D2C",
                        style: {
                          cursor: "pointer",
                          fill: "#F07D2C",
                        },
                      }
                    )
                  : cityComponent;
                return (
                  <g
                    {...(isIstanbul
                      ? {
                          fill: "#F07D2C",
                          style: { fill: "#F07D2C" },
                          "data-city": "istanbul",
                        }
                      : {})}
                    onMouseEnter={(e) => handleHover(city, e)}
                    onMouseMove={(e) =>
                      hoveredCity?.id === city.id && handleHover(city, e)
                    }
                    {...(isIstanbul && {
                      onClick: (e: React.MouseEvent) => {
                        e.stopPropagation();
                        handleIstanbulTap(city, e);
                      },
                    })}
                  >
                    {el}
                  </g>
                );
              }}
            />
          </div>

          {/* Pop-up - mobilde altta ortada, masaüstünde hover konumunda */}
          {hoveredCity?.id === "istanbul" && (
            <>
              {/* Mobil: altta sabit, tıklanabilir kapatma alanı için pointer-events */}
              <div
                className="absolute z-20 left-1/2 -translate-x-1/2 bottom-3 w-[calc(100%-1.5rem)] max-w-[280px] md:hidden pointer-events-auto"
                role="dialog"
                aria-label="İstanbul temsilcilik bilgisi"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rounded-xl shadow-xl border-2 border-orange-400 bg-white p-3 sm:p-4">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                    {ISTANBUL_INFO.name}
                  </h4>
                  <p className="text-orange-600 font-medium text-xs sm:text-sm mb-2">
                    {ISTANBUL_INFO.cities}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {ISTANBUL_INFO.description}
                  </p>
                </div>
              </div>
              {/* Masaüstü: hover konumunda */}
              <div
                className="absolute z-20 hidden md:block pointer-events-none transition-opacity duration-200"
                style={{
                  left: Math.min(Math.max(popupPosition.x, 140), 700),
                  top: Math.max(popupPosition.y - 160, 10),
                  transform: "translate(-50%, 0)",
                }}
              >
                <div className="rounded-lg shadow-xl border border-orange-400 bg-white p-4 min-w-[200px] max-w-[280px]">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {ISTANBUL_INFO.name}
                  </h4>
                  <p className="text-orange-600 font-medium text-xs mb-2">
                    {ISTANBUL_INFO.cities}
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {ISTANBUL_INFO.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
