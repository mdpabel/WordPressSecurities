/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '2mb',
    serverComponentsExternalPackages : ["@prisma/client", "pusher", "pusher-js"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images : {
    domains : ['res.cloudinary.com', "images.ctfassets.net", "pabel.xyz", "secure.gravatar.com"]
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

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer(nextConfig);
