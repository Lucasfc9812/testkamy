// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    proxyPrefetch: true, // substitui middlewarePrefetch
  },
};

module.exports = nextConfig;
