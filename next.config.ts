import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Sources are already WebP, and AVIF is far slower to generate on a first visit
    formats: ["image/webp"],
    qualities: [75, 78],
    deviceSizes: [390, 640, 828, 1080, 1280, 1536, 1920],
    imageSizes: [64, 128, 256, 384, 512],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
