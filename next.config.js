/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    middlewarePrefetch: 'flexible'
  }
};

module.exports = nextConfig;
