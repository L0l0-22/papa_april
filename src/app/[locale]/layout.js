import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import "../globals.css";
import localFont from 'next/font/local'; // For custom fonts
import LayoutClientWrapper from '../LayoutClientWrapper';
import ReduxProvider from '@/redux/ReduxProvider';

// Import custom fonts
const PapaSans = localFont({
  src: [
    {
      path: '../../../public/fonts/PapaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PapaSans-MediumCondensed.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PapaSans-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PapaSans-Heavy.woff2',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-PapaSans',
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
    <html lang={locale} dir={dir} className={`${PapaSans.variable} ${Pappy.variable} ${Sans.variable} ${SpotItalic.variable}`}>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={messages} dir={dir}>
            <LayoutClientWrapper>
              {children}
            </LayoutClientWrapper>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}