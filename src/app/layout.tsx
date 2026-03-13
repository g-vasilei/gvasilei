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
  title: 'gvasilei',
  description: 'gvasilei | full stack developer',
  keywords: [
    'Full stack',
    'React',
    'NextJS',
    'Scss',
    'SEO',
    'Javascript',
    'Responsive Design',
    'Wordpress',
    'Woocommerce',
    'Eshop',
    'MongoDB',
    'Web developer',
    'Web',
    'Express',
    'Thessaloniki',
  ],
  openGraph: {
    title: 'gvasilei',
    description: 'gvasilei | full stack developer',
    type: 'article',
    url: `https://gvasilei.com/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gvasilei',
    description: 'gvasilei | full stack developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
              url: 'https://gvasilei.com',
              jobTitle: 'Full Stack Developer',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Thessaloniki',
                addressCountry: 'GR',
              },
              sameAs: ['https://github.com/g-vasilei'],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-gabarito bg-body overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
