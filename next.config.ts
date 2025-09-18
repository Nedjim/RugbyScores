import type { NextConfig } from "next";
import path from "path";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.1.25:3000"],
  experimental: {
    reactCompiler: true,
  },
  redirects: async () => [
    { source: "/", destination: "/competitions", permanent: true },
  ],
  images: {
    domains: ["img.icons8.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    additionalData: `@use "styles/variables.scss" as *;`,
  },
};

const nextConfig = withBundleAnalyzer(baseConfig);

export default nextConfig;
