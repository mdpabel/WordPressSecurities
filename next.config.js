/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '2mb',
    serverComponentsExternalPackages : ["@prisma/client", "pusher", "pusher-js"]
  },
  images : {
    domains : ['res.cloudinary.com', "images.ctfassets.net", "pabel.xyz"]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs : [""]
  },
  reactStrictMode : false,
};

module.exports = nextConfig;
