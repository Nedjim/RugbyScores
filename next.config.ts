import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/competitions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
