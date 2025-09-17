import { NextIntlClientProvider } from 'next-intl';
import ru from '../../messages/ru.json';
import en from '../../messages/en.json';

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'ru' }];

export default function LocaleLayout({ children, params: { locale } }) {
  const messages = locale === 'ru' ? ru : en;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
