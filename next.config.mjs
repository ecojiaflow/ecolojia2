/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: true
  }
};

export default nextConfig;