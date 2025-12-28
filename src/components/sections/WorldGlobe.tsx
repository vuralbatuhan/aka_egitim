"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
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

interface GeoProperties {
  name?: string;
  geounit?: string;
}

interface Geography {
  rsmKey: string;
  id?: string;
  properties: GeoProperties;
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

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

export default function WorldGlobe() {
  const router = useRouter();
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(
    null
  );
  const [position, setPosition] = useState({
    coordinates: [15, 20] as [number, number],
    zoom: 1,
  });

  const handleCountryClick = (country: CountryData) => {
    router.push(`/ulkeler/${country.slug}`);
  };

  const isHighlighted = (geo: Geography) => {
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
      id === "246" // Finland
    );
  };

  return (
    <section
      id="ulkeler"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: "var(--primary)" }}>Global</span> Eğitim
            Ağımız
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dünya genelinde 4 farklı ülkede eğitim fırsatları sunuyoruz. Turkuaz
            renkli ülkelere tıklayarak detayları keşfedin.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Map Container */}
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-gray-200">
            <div className="relative h-[600px] w-full flex items-center justify-center">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  center: [15, 20],
                  scale: 150,
                }}
                width={800}
                height={600}
                style={{ width: "100%", height: "100%" }}
              >
                <ZoomableGroup
                  zoom={position.zoom}
                  center={position.coordinates}
                  onMoveEnd={setPosition}
                  maxZoom={8}
                  minZoom={1}
                  translateExtent={[
                    [-100, -100],
                    [900, 700],
                  ]}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const highlighted = isHighlighted(geo);

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
                                // cursor: highlighted ? "pointer" : "default",
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
                          // cursor: "pointer",
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
                        // style={{ cursor: "pointer" }}
                        onClick={() => handleCountryClick(country)}
                      />
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>
            </div>

            {/* Zoom Kontrolleri */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-20">
              <button
                onClick={() =>
                  setPosition((pos) => ({
                    ...pos,
                    zoom: Math.min(pos.zoom * 1.5, 8),
                  }))
                }
                className="bg-white hover:bg-gray-100 text-gray-700 font-bold p-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
                title="Yakınlaştır"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setPosition((pos) => ({
                    ...pos,
                    zoom: Math.max(pos.zoom / 1.5, 1),
                  }))
                }
                className="bg-white hover:bg-gray-100 text-gray-700 font-bold p-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
                title="Uzaklaştır"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <button
                onClick={() => setPosition({ coordinates: [15, 20], zoom: 1 })}
                className="bg-white hover:bg-gray-100 text-gray-700 font-bold p-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-110"
                title="Sıfırla"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
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
        </div>
      </div>
    </section>
  );
}
