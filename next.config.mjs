import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // ✅ disable Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '204.168.249.55',
        port: '8069',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false
      }
    ];
  }
};


// Point to the correct path: src/i18n/request.js
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

export default withNextIntl(nextConfig);
