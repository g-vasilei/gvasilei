import Image from 'next/image'
import Hero from './components/Hero'
import Experience from './components/Experience'

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto m p-5 xl:p-1">
      <Hero />
      <Experience />
    </main>
  )
}
