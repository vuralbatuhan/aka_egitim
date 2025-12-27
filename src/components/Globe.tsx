"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0.3,

      dark: 0,
      diffuse: 0,
      mapSamples: 15000,
      mapBrightness: 3,

      baseColor: [0.08, 0.43, 0.52],

      markerColor: [0, 1, 0],

      glowColor: [0.08, 0.43, 0.52],
      markers: [
        { location: [46.948, 7.4474], size: 0.08 },
        { location: [51.5074, -0.1278], size: 0.08 },
        { location: [41.9028, 12.4964], size: 0.08 },
        { location: [52.52, 13.405], size: 0.08 },
        { location: [60.1699, 24.9384], size: 0.08 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        style={{
          width: 400,
          height: 400,
          maxWidth: "100%",
          aspectRatio: 1,
          filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))",
        }}
      />
    </div>
  );
}
