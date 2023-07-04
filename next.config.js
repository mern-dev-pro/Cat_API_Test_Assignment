/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn2.thecatapi.com'],
    deviceSizes: [480, 768, 1025, 1260, 1440],
    imageSizes: [480, 768, 1025, 1260, 1440],
    // loader: 'custom',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
