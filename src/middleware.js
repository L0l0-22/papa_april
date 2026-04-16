import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import { hasSeenIp, markIpSeen } from './lib/ipStore';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request) {
  const { nextUrl } = request;

  console.log('🚀 MIDDLEWARE START:', nextUrl.pathname);

  // ⛔️ Skip static assets
  const extension = nextUrl.pathname.split('.').pop();
  if (['js', 'css', 'png', 'jpg', 'jpeg', 'svg', 'ico', 'webmanifest'].includes(extension)) {
    console.log('⛔️ Skipping static asset:', nextUrl.pathname);
    return NextResponse.next();
  }

  // 🔁 Redirect root domain
  if (nextUrl.pathname === '/') {
    console.log('🔁 Redirecting / → /en');
    return Response.redirect(new URL('/en', request.url));
  }

  const response = await intlMiddleware(request);
  console.log('🌐 intlMiddleware passed');

  // 🌍 Detect IP
  const forwarded = request.headers.get('x-forwarded-for') || '';
  let ip = forwarded.split(',')[0].trim().replace('::ffff:', '');

  console.log('📡 Raw forwarded IP:', forwarded);
  console.log('📡 Parsed IP:', ip);

  const localIps = ['127.0.0.1', '::1', 'localhost'];
  if (!ip || localIps.includes(ip)) {
    console.warn('⚠️ Skipping local IP:', ip);
    return response;
  }

  // ⏩ Check duplicate IP
  if (hasSeenIp(ip)) {
    console.log('⏩ IP already tracked:', ip);
    return response;
  }

  // ✅ Mark early
  markIpSeen(ip);
  console.log('✅ IP marked as seen:', ip);

  try {
    console.log('🌍 Calling GeoIP API...');
    const country = await getCountryFromIP(ip);
    console.log('🌍 Country resolved:', country);

    if (
      country &&
      !['null', 'undefined', '', 'unknown'].includes(country.trim().toLowerCase())
    ) {
      console.log(`📡 Calling tracking API for ${country}`);

      const trackingRes = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/track-country`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ country }),
        }
      );

      console.log(
        '📬 Tracking API status:',
        trackingRes.status,
        trackingRes.statusText
      );
    } else {
      console.warn('⚠️ Invalid country, skipping:', country);
    }
  } catch (err) {
    console.error('❌ Middleware tracking error:', err);
  }

  console.log('✅ MIDDLEWARE END\n');
  return response;
}

export const config = {
  matcher: ['/', '/(ar|en|de)/:path*'],
};

// 🌍 GeoIP function
async function getCountryFromIP(ip) {
  try {
    console.log('🌍 Fetching geo data for IP:', ip);

    const res = await fetch(`https://ipapi.co/${ip}/json/`);

    console.log('🌍 Geo API status:', res.status);

    if (!res.ok) return 'UNKNOWN';

    const data = await res.json();
    console.log('🌍 Geo response data:', data);

    return data?.country_name || 'UNKNOWN';
  } catch (e) {
    console.error('🌐 Geo lookup failed:', e);
    return 'UNKNOWN';
  }
}
