/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
