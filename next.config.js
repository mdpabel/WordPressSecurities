/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '2mb',
    serverComponentsExternalPackages : ["@prisma/client", "pusher", "pusher-js"]
  },
  images : {
    domains : ['res.cloudinary.com']
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
