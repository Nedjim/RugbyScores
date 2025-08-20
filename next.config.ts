import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.1.25:3000"],
  redirects: async () => [
    { source: "/", destination: "/competitions", permanent: true },
  ],
  images: {
    domains: ["img.icons8.com"],
  },
};

const nextConfig = withBundleAnalyzer(baseConfig);

export default nextConfig;
