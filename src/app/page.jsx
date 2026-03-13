import Image from 'next/image'
import Hero from './components/hero/Hero'
import Experience from './components/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto m p-5 xl:p-1 xl:py-6">
      <Hero />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  )
}
