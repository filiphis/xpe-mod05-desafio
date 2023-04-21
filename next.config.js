/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["api.coingecko.com", "assets.coingecko.com"],
  },
};

module.exports = nextConfig;
