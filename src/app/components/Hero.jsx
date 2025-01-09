import React from 'react'
import HeroBg from '../../../public/hero_dots.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[35rem] p-5 2xl:p-0">
      <div>
        <h2>gvasilei</h2>
        <p>your full stack developer</p>
        <button>contact now</button>
      </div>
    </section>
  )
}

export default Hero
