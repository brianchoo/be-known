/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
  },
};

module.exports = nextConfig;
