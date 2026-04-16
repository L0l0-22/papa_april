import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import "../globals.css";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import localFont from 'next/font/local'; // For custom fonts

// Import custom fonts
const PapaSansHeavy = localFont({
  src: '../../../public/fonts/PapaSans-Heavy.woff2',
  variable: '--font-PapaSansHeavy',
});

const PapaSansMediumCondensed = localFont({
  src: '../../../public/fonts/PapaSans-MediumCondensed.woff2',
  variable: '--font-PapaSansMediumCondensed',
});

const PapaSansRegular = localFont({
  src: '../../../public/fonts/PapaSans-Regular.woff2',
  variable: '--font-PapaSansRegular',
});

const Pappy = localFont({
  src: '../../../public/fonts/Pappy.otf',
  variable: '--font-Pappy',
});

const Sans = localFont({
  src: '../../../public/fonts/Sans.ttf',
  variable: '--font-Sans',
});

const SpotItalic = localFont({
  src: '../../../public/fonts/Spot-Italic.ttf',
  variable: '--font-SpotItalic',
});

// Metadata for the page
export const metadata = {
  title: "Papa John's",
  description: "Papa John's - Beyond The Buns. Order premium pizzas online with delivery or pickup in Egypt.",
  keywords: [
    "pizza",
    "restaurant",
    "pizza delivery",
    "papa john's",
    "papa john's egypt",
    "pizza egypt",
    "food delivery"
  ],
  authors: [{ name: "Papa John's" }],
  creator: "Papa John's",
  
  openGraph: {
    title: "Papa John's",
    description: "Beyond The Buns - Order premium pizzas online.",
    url: "https://stackdbrgr.com",
    siteName: "Papa John's",
    locale: "en_US",
    type: "website",
  },
  
  metadataBase: new URL("https://stackdbrgr.com"),
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Validate the locale
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} className={`${PapaSansHeavy.variable} ${PapaSansMediumCondensed.variable} ${PapaSansRegular.variable} ${Pappy.variable} ${Sans.variable} ${SpotItalic.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages} dir={dir}>
          {/* ✅ Navbar logic lives here */}
          <Navbar/>

          {/* Page content */}
          {children}

          {/* Footer */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}