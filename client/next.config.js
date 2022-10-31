/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "ru"]
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
