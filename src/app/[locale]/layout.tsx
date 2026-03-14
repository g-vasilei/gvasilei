import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import '../globals.css'
import { Header } from '../components/header/Header'
import { Footer } from '../components/Footer'
import { getDictionary, locales, type Locale } from '../../i18n/getDictionary'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    metadataBase: new URL('https://gvasilei.gr'),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      'Full stack developer',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'MongoDB',
      'Express',
      'WordPress',
      'WooCommerce',
      'Web developer',
      'Thessaloniki',
      'Greece',
      'Freelance',
    ],
    authors: [{ name: 'Georgios Vasileiou', url: 'https://gvasilei.gr' }],
    alternates: {
      canonical: `https://gvasilei.gr/${locale}`,
      languages: {
        en: 'https://gvasilei.gr/en',
        el: 'https://gvasilei.gr/el',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: 'website',
      url: `https://gvasilei.gr/${locale}`,
      siteName: 'Georgios Vasileiou',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Nabla&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Georgios Vasileiou',
              url: 'https://gvasilei.gr',
              jobTitle: 'Full Stack Developer',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Thessaloniki',
                addressCountry: 'GR',
              },
              description:
                'Full stack developer based in Thessaloniki, Greece, specialising in React, Next.js, Node.js and modern web technologies.',
              knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express'],
              sameAs: ['https://github.com/g-vasilei'],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-gabarito bg-body overflow-x-hidden`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange focus:text-black focus:rounded-md focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header navLinks={dict.nav} locale={locale} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
