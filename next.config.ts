import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "192.168.1.158",
    "192.168.1.158:3000",
  ],
  async redirects() {
    return [
      {
        source: "/apple-touch-icon.png",
        destination: "/apple-icon.png",
        permanent: false,
      },
      {
        source: "/apple-touch-icon-precomposed.png",
        destination: "/apple-icon.png",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
