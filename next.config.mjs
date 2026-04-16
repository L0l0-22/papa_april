import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // ✅ disable Strict Mode

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
