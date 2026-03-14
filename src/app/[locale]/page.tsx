import Hero from '../components/hero/Hero'
import Experience from '../components/Experience'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/Contact'
import { getDictionary, type Locale } from '../../i18n/getDictionary'

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <main id="main-content" className="max-w-screen-xl mx-auto p-5 xl:p-1 xl:py-6">
      <Hero dict={dict.hero} />
      <Experience items={dict.experience.items} />
      <Portfolio heading={dict.portfolio.heading} />
      <Contact dict={dict.contact} />
    </main>
  )
}
