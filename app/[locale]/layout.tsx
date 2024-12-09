import '../globals.css'
import localFont from "next/font/local"
import { Cormorant_Garamond } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata = {
  title: 'Malé Vinice | Családi Szőlőskert',
  description: 'Négy generáció óta készülnek boraink a királyhelmeci borvidéken',
}

export default async function LocaleLayout({
    children,
    params: { locale }
  }: {
    children: React.ReactNode;
    params: { locale: string };
  }) {
    const messages = (await import(`../../locale/${locale}.json`)).default;
  
    return (
      <html lang={locale}>
        <head>
        <script src="http://localhost:8097"></script>
        </head>
        <body className={`${geistSans.variable} ${cormorant.variable} min-h-screen flex flex-col bg-[#fffdf0]`}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    )
  }