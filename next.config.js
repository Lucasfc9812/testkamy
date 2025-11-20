/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    proxyPrefetch: true, // substitui middlewarePrefetch
    // Se quiser usar proxy real, configure aqui (opcional)
    // proxy: { '/api': { target: 'https://outro-site.com', changeOrigin: true } },
  },
};

module.exports = nextConfig;
