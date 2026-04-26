import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
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
