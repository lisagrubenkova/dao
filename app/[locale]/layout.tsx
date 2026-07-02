import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { IntroProvider } from '@/context/IntroContext';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const jetBrains = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-jetbrains' });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} className={`${inter.variable} ${jetBrains.variable}`}>
      <body className="font-sans bg-bg text-black antialiased">
        <IntroProvider>
          <NextIntlClientProvider>
            <LanguageSwitcher />
            {children}
          </NextIntlClientProvider>
        </IntroProvider>
      </body>
    </html>
  );
}