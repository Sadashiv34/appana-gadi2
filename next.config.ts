import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tell Next.js to look for app directory in src/
  experimental: {
    srcDir: true,
  },
  // Only use static export during production build, not during development
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
