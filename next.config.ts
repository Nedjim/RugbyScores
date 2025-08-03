import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = withBundleAnalyzer({
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/competitions",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["img.icons8.com"],
  },
});

export default nextConfig;
