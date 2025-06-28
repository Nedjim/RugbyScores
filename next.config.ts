import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/matches-day",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
