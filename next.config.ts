import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Always use static export for deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
