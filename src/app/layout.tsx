import { Geist, Geist_Mono } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import { Header } from './components/header/Header'
import { Footer } from './components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gvasilei.gr'),
  title: 'Georgios Vasileiou | Full Stack Developer',
  description:
    'Full stack developer based in Thessaloniki, Greece. Specialising in React, Next.js, Node.js and modern web technologies. Available for freelance projects.',
  keywords: [
    'Full stack developer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'MongoDB',
    'Express',
    'Responsive Design',
    'WordPress',
    'WooCommerce',
    'Web developer',
    'Thessaloniki',
    'Greece',
    'Freelance',
  ],
  authors: [{ name: 'Georgios Vasileiou', url: 'https://gvasilei.gr' }],
  alternates: {
    canonical: 'https://gvasilei.gr',
  },
  openGraph: {
    title: 'Georgios Vasileiou | Full Stack Developer',
    description:
      'Full stack developer based in Thessaloniki, Greece. Specialising in React, Next.js, Node.js and modern web technologies.',
    type: 'website',
    url: 'https://gvasilei.gr/',
    siteName: 'Georgios Vasileiou',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgios Vasileiou | Full Stack Developer',
    description:
      'Full stack developer based in Thessaloniki, Greece. Specialising in React, Next.js, Node.js and modern web technologies.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
