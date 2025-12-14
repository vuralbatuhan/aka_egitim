"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

interface CountryData {
  name: string;
  slug: string;
  iso: string;
  lat: number;
  lng: number;
  color: string;
  description: string;
}

const HIGHLIGHTED_COUNTRIES: CountryData[] = [
  {
    name: "Almanya",
    slug: "almanya",
    iso: "DEU",
    lat: 51.1657,
    lng: 10.4515,
    color: "#14b8a6",
    description: "Ücretsiz üniversite eğitimi",
  },
  {
    name: "İtalya",
    slug: "italya",
    iso: "ITA",
    lat: 41.8719,
    lng: 12.5674,
    color: "#14b8a6",
    description: "Sanat ve kültür merkezi",
  },
  {
    name: "İngiltere",
    slug: "ingiltere",
    iso: "GBR",
    lat: 55.3781,
    lng: -3.436,
    color: "#14b8a6",
    description: "Dünya çapında tanınan eğitim",
  },
  {
    name: "Finlandiya",
    slug: "finlandiya",
    iso: "FIN",
    lat: 61.9241,
    lng: 25.7482,
    color: "#14b8a6",
    description: "En kaliteli eğitim sistemi",
  },
];

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

export default function WorldGlobe() {
  const router = useRouter();
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(
    null
  );

  const handleCountryClick = (country: CountryData) => {
    router.push(`/ulkeler/${country.slug}`);
  };

  const isHighlighted = (geo: any) => {
    const name = geo.properties?.name || "";
    const id = geo.id || "";

    return (
      name === "Germany" ||
      name === "Italy" ||
      name === "United Kingdom" ||
      name === "Finland" ||
      id === "276" || // Germany
      id === "380" || // Italy
      id === "826" || // UK
      id === "246"    // Finland
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: "var(--primary)" }}>Global</span> Eğitim
            Ağımız
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Avrupa'da 4 farklı ülkede eğitim fırsatları sunuyoruz. Turkuaz
            renkli ülkelere tıklayarak detayları keşfedin.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Map Container */}
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-gray-200">
            <div className="relative h-[600px] flex items-center justify-center">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  center: [15, 54],
                  scale: 400,
                }}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const highlighted = isHighlighted(geo);

                      // Sadece Avrupa ülkelerini göster
                      const name = geo.properties?.name || "";
                      const europeanCountries = [
                        "Germany", "Italy", "United Kingdom", "Finland",
                        "France", "Spain", "Portugal", "Netherlands", "Belgium",
                        "Switzerland", "Austria", "Poland", "Czech Republic",
                        "Slovakia", "Hungary", "Romania", "Bulgaria", "Greece",
                        "Denmark", "Sweden", "Norway", "Ireland", "Croatia",
                        "Serbia", "Bosnia and Herzegovina", "Albania", "Macedonia",
                        "Slovenia", "Montenegro", "Estonia", "Latvia", "Lithuania",
                        "Belarus", "Ukraine", "Moldova"
                      ];

                      if (!europeanCountries.includes(name)) {
                        return null;
                      }

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={highlighted ? "#14b8a6" : "#E5E7EB"}
                          stroke="#9CA3AF"
                          strokeWidth={0.5}
                          style={{
                            default: {
                              fill: highlighted ? "#14b8a6" : "#E5E7EB",
                              stroke: "#9CA3AF",
                              strokeWidth: 0.5,
                              outline: "none",
                            },
                            hover: {
                              fill: highlighted ? "#0d9488" : "#D1D5DB",
                              stroke: "#6B7280",
                              strokeWidth: 1,
                              outline: "none",
                              cursor: highlighted ? "pointer" : "default",
                            },
                            pressed: {
                              fill: highlighted ? "#0f766e" : "#D1D5DB",
                              stroke: "#6B7280",
                              strokeWidth: 1,
                              outline: "none",
                            },
                          }}
                          onClick={() => {
                            const country = HIGHLIGHTED_COUNTRIES.find(
                              (c) =>
                                geo.properties.geounit?.includes(c.name) ||
                                geo.properties.name?.includes(c.name) ||
                                (geo.properties.name?.includes("Germany") &&
                                  c.iso === "DEU") ||
                                (geo.properties.name?.includes("Italy") &&
                                  c.iso === "ITA") ||
                                (geo.properties.name?.includes(
                                  "United Kingdom"
                                ) &&
                                  c.iso === "GBR") ||
                                (geo.properties.name?.includes("Finland") &&
                                  c.iso === "FIN")
                            );
                            if (country) handleCountryClick(country);
                          }}
                          onMouseEnter={() => {
                            const country = HIGHLIGHTED_COUNTRIES.find(
                              (c) =>
                                geo.properties.geounit?.includes(c.name) ||
                                geo.properties.name?.includes(c.name) ||
                                (geo.properties.name?.includes("Germany") &&
                                  c.iso === "DEU") ||
                                (geo.properties.name?.includes("Italy") &&
                                  c.iso === "ITA") ||
                                (geo.properties.name?.includes(
                                  "United Kingdom"
                                ) &&
                                  c.iso === "GBR") ||
                                (geo.properties.name?.includes("Finland") &&
                                  c.iso === "FIN")
                            );
                            if (country) setHoveredCountry(country);
                          }}
                          onMouseLeave={() => setHoveredCountry(null)}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Ülke etiketleri */}
                {HIGHLIGHTED_COUNTRIES.map((country) => (
                  <Marker
                    key={country.slug}
                    coordinates={[country.lng, country.lat]}
                  >
                    <text
                      textAnchor="middle"
                      y={-10}
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "14px",
                        fontWeight: "bold",
                        fill: "#0f766e",
                        stroke: "#fff",
                        strokeWidth: 3,
                        paintOrder: "stroke",
                        cursor: "pointer",
                      }}
                      onClick={() => handleCountryClick(country)}
                    >
                      {country.name}
                    </text>
                    <circle
                      r={5}
                      fill="#14b8a6"
                      stroke="#fff"
                      strokeWidth={2}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCountryClick(country)}
                    />
                  </Marker>
                ))}
              </ComposableMap>
            </div>

            {/* Hover Tooltip */}
            {hoveredCountry && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-xl border border-gray-200">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: hoveredCountry.color }}
                >
                  {hoveredCountry.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {hoveredCountry.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Detaylar için tıklayın
                </p>
              </div>
            )}
          </div>

          {/* Ülke Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {HIGHLIGHTED_COUNTRIES.map((country) => (
              <button
                key={country.slug}
                onClick={() => handleCountryClick(country)}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center border border-gray-100 hover:scale-105"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: country.color }}
                ></div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {country.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {country.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
