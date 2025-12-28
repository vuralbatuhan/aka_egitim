"use client";

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

interface GeoProperties {
  name?: string;
  NAME_1?: string;
  [key: string]: unknown;
}

interface Geography {
  rsmKey: string;
  properties: GeoProperties;
  [key: string]: unknown;
}

interface TurkeyMapProps {
  onProvinceClick?: (province: string) => void;
  highlightedProvinces?: string[];
}

const TurkeyMap: React.FC<TurkeyMapProps> = ({ onProvinceClick }) => {
  const [geoData, setGeoData] = useState<unknown>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string>("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // GeoJSON dosyasını yükle
    fetch("/data/tr.json")
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error("GeoJSON yükleme hatası:", error));
  }, []);

  const handleMouseEnter = (geo: Geography, event: React.MouseEvent) => {
    const provinceName = geo.properties.name || geo.properties.NAME_1 || "";
    console.log("Mouse enter:", provinceName, geo.properties);
    if (provinceName) {
      setHoveredProvince(provinceName);
      setTooltipPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredProvince) {
      setTooltipPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredProvince("");
  };

  const handleClick = (geo: Geography) => {
    const provinceName = geo.properties.name || geo.properties.NAME_1 || "";
    if (onProvinceClick) {
      onProvinceClick(provinceName);
    }
  };

  if (!geoData) {
    return (
      <div className="flex items-center justify-center h-[600px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full" onMouseMove={handleMouseMove}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 2300,
          center: [35, 39], // Türkiye'nin merkezi
        }}
        className="w-full h-auto"
      >
        <Geographies geography={geoData}>
          {({ geographies }: { geographies: Geography[] }) =>
            geographies.map((geo: Geography) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(geo)}
                  style={{
                    default: {
                      fill: "#ef4444",
                      stroke: "#ffffff",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#ffffff",
                      stroke: "#ef4444",
                      strokeWidth: 0.75,
                      outline: "none",
                      // cursor: "pointer",
                    },
                    pressed: {
                      fill: "#f9fafb",
                      stroke: "#ef4444",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip */}
      {hoveredProvince && (
        <div
          className="fixed z-50 bg-black text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium pointer-events-none border border-gray-600"
          style={{
            left: `${tooltipPosition.x + 15}px`,
            top: `${tooltipPosition.y - 10}px`,
            transform: "translate(0, -100%)",
          }}
        >
          {hoveredProvince}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

export default TurkeyMap;
