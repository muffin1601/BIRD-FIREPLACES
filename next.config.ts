import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bird-fireplaces.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bird-fireplaces.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
