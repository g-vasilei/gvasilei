'use client'

import React, { useEffect } from 'react'
import HeroBg from '../../../public/hero_dots.svg'
import Image from 'next/image'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'motion/react'

const Hero = () => {
  const rows = 8
  const cols = 12

  const gridItems = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: cols }, (_, colIndex) => {
      const isLastRow = rowIndex === rows - 1
      const isLastCol = colIndex === cols - 1

      return (
        <div
          key={`${rowIndex}-${colIndex}`}
          className="bg-transparent"
          style={{
            gridRowStart: rowIndex + 1,
            gridColumnStart: colIndex + 1,
            borderBottom: isLastRow ? 'none' : '1px dashed #1a1e26',
            borderRight: isLastCol ? 'none' : '1px dashed #1a1e26',
          }}
        >
          {/* Add content here if needed */}
        </div>
      )
    })
  ).flat()

  const colors = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']
  const color = useMotionValue(colors[0])
  const backgroundImage = useMotionTemplate`radial-gradient(ellipse 120% 110% at 50% 120%, #0f1115 25%, transparent 76%)`

  useEffect(() => {
    animate(color, colors, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    })
  }, [])
  return (
    <section className="flex items-center justify-center min-h-[30rem] 2xl:p-0 relative">
      <div
        className="hidden sm:grid w-full border border-dashed border-border absolute top-0 left-0 right-0 bottom-0 -z-[1]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {gridItems}
      </div>
      <motion.div
        style={{
          backgroundImage,
        }}
        className="w-full absolute bottom-0 h-[20rem] flex flex-col gap-3 items-center justify-center overflow-visible"
      />
      <motion.div className="flex items-center gap-10 flex-wrap">
        <div className="font-nabla text-[8rem]">GV</div>
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-bold">GVASILEI</h2>
          <p className="text-base">Your full stack developer</p>
          <div>
            <button>Get in touch</button>
            <button>Download CV</button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
