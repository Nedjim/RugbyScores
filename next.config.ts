import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
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
