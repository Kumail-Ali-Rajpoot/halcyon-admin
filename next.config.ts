import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors from breaking the build
  },
  typescript: {
    ignoreBuildErrors: true, // <-- THIS disables TypeScript errors during build
  },

  // add other config options below as needed
};

export default nextConfig;