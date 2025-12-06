import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Turbopack ayarları
  turbopack: {
    resolveExtensions: [
      '.mdx',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
    ],
  },
  // Performance optimizasyonları
  compress: true,
  // SEO optimizasyonları
  poweredByHeader: false,
  generateEtags: false,
  // Pages Router için optimizasyonlar
  reactStrictMode: true,
  // Static export için gerekli ayarlar
  trailingSlash: false,
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  // Webpack ayarları (eski webpack kullanılırsa)
  webpack: (config, { dev, isServer }) => {
    // Development mode'da HMR hatalarını yakala
    if (dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
    }
    return config;
  },
};

export default nextConfig;
