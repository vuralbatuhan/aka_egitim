"use client";

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

interface GeoProperties {
  name?: string;
  NAME_1?: string;
  region?: string;
  [key: string]: unknown;
}

interface Geography {
  rsmKey: string;
  properties: GeoProperties;
  [key: string]: unknown;
}

export interface CountryMapConfig {
  geoDataPath: string;
  center: [number, number];
  scale: number;
  defaultFill?: string;
  hoverFill?: string;
  strokeColor?: string;
}

interface CountryMapProps {
  config: CountryMapConfig;
  onRegionClick?: (region: string) => void;
  highlightedRegions?: string[];
}

const CountryMap: React.FC<CountryMapProps> = ({
  config,
  onRegionClick,
  highlightedRegions = [],
}) => {
  const [geoData, setGeoData] = useState<unknown>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string>("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // GeoJSON dosyasını yükle
    fetch(config.geoDataPath)
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error("GeoJSON yükleme hatası:", error));
  }, [config.geoDataPath]);

  const handleMouseEnter = (geo: Geography, event: React.MouseEvent) => {
    const regionName = geo.properties.name || geo.properties.NAME_1 || "";
    setHoveredRegion(regionName);
    setTooltipPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredRegion) {
      setTooltipPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredRegion("");
  };

  const handleClick = (geo: Geography) => {
    const regionName = geo.properties.name || geo.properties.NAME_1 || "";
    if (onRegionClick) {
      onRegionClick(regionName);
    }
  };

  if (!geoData) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full" onMouseMove={handleMouseMove}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: config.scale,
          center: config.center,
        }}
        className="w-full h-auto"
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <ZoomableGroup center={config.center} zoom={1}>
          <Geographies geography={geoData}>
            {({ geographies }: { geographies: Geography[] }) =>
              geographies.map((geo: Geography) => {
                const regionName =
                  geo.properties.name || geo.properties.NAME_1 || "";
                const isHighlighted = highlightedRegions.includes(regionName);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(event) => handleMouseEnter(geo, event)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(geo)}
                    style={{
                      default: {
                        fill: isHighlighted
                          ? "#3b82f6"
                          : config.defaultFill || "#10b981",
                        stroke: config.strokeColor || "#ffffff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: config.hoverFill || "#ffffff",
                        stroke: config.defaultFill || "#10b981",
                        strokeWidth: 0.75,
                        outline: "none",
                        // cursor: 'pointer',
                      },
                      pressed: {
                        fill: "#f9fafb",
                        stroke: config.defaultFill || "#10b981",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {hoveredRegion && (
        <div
          className="fixed z-50 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm pointer-events-none"
          style={{
            left: `${tooltipPosition.x + 10}px`,
            top: `${tooltipPosition.y + 10}px`,
            transform: "translate(0, -50%)",
          }}
        >
          {hoveredRegion}
        </div>
      )}
    </div>
  );
};

export default CountryMap;
