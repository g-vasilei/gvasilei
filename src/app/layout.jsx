import { Geist, Geist_Mono } from 'next/font/google'
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

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Nabla&display=swap"
          rel="stylesheet"
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
