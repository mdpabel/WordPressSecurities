/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '2mb',
    serverComponentsExternalPackages : ["@prisma/client", "pusher", "pusher-js"]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode : false,
};

module.exports = nextConfig;
