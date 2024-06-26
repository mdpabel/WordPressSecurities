/** @type {import('next').NextConfig} */

const path = require('path');

const cspHeader = `
    frame-ancestors 'none';
`;

const cacheControl = `
  public, max-age=3600, must-revalidate;
`;

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'Cache-Control',
            value: cacheControl.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: [
      '@clerk/nextjs',
      '@wordpress/base-styles',
      '@wordpress/block-library',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compress: true,
  images: {
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.swell.store',
      },
      {
        protocol: 'https',
        hostname: 'pabel.xyz',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

module.exports = withBundleAnalyzer(nextConfig);
