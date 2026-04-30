import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    missingSuspenseWithCSRBailout: false,
    optimizeCss: false,
    optimizePackageImports: [],
    appDir: true,
  },
  swcMinify: false,
  compress: false,
  poweredByHeader: false,
  generateEtags: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
      "react-router-dom": path.resolve(__dirname, "src/lib/router-shim.tsx"),
      "react-helmet-async": path.resolve(__dirname, "src/lib/helmet-shim.tsx"),
    };
    return config;
  },
};
export default nextConfig;
