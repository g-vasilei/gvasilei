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

  const buttonTopText = {
    initial: { y: 0 },
    hover: { y: '-150%' },
  }

  const buttonBottomText = {
    initial: { y: '150%' },
    hover: { y: 0 },
  }

  return (
    <section className="flex items-center justify-center min-h-[30rem] 2xl:p-0 relative">
      <div
        className="hidden sm:grid w-full border border-dashed border-border absolute top-0 left-0 right-0 bottom-0 -z-[2]"
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
        className="w-full absolute bottom-0 h-[20rem] flex flex-col gap-3 items-center justify-center overflow-visible -z-[1]"
      />
      <motion.div className="flex items-center gap-10 md:gap-14 flex-wrap">
        <div className="font-nabla text-[8rem] md:text-[10rem]">GV</div>
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-bold text-yellow">GVASILEI</h2>
          <p className="text-xl">Your full stack developer</p>
          <div className="flex gap-5">
            <motion.button
              className="px-4 py-3 rounded-md border border-border bg-orange text-xl flex flex-col items-center justify-center gap-0 relative overflow-hidden hover:shadow-[-3px_3px_0px_#FFD214] transition-all duration-300"
              whileHover="hover"
              initial="initial"
            >
              <motion.span
                className="flex justify-center"
                variants={buttonTopText}
                transition={{ duration: 0.25 }}
              >
                Get in touch
              </motion.span>

              <motion.span
                before="Get in touch"
                className="before:content-['Get_in_touch'] absolute flex justify-center"
                variants={buttonBottomText}
                transition={{ duration: 0.25 }}
              ></motion.span>
            </motion.button>

            <motion.button
              className="px-3 py-2 text-xl rounded-md"
              whileHover={{
                scale: 1.05,
                backgroundColor: '#14171c',
                transition: { duration: 0.25 },
              }}
            >
              Download CV
            </motion.button>
          </div>
        </div>
      </motion.div>
      <div className="absolute hidden sm:block sm:right-0 -bottom-20 lg:-bottom-36 lg:-right-24">
        <motion.div
          className="w-[105%] top-0 left-0 right-0 bottom-0 absolute backdrop-blur-[4px] bg-[length:3px_3px]"
          style={{
            mask: 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)',
            backgroundSize: '4px 4px',
            backdropFilter: 'blur(3px)',
            backgroundImage:
              'radial-gradient(rgba(0, 0, 0, 0) 1px, rgb(15, 17, 21) 1px)',
          }}
        ></motion.div>
        <div className="font-nabla text-[8rem] xl:text-[10rem] italic">
          gvasilei
        </div>
      </div>
    </section>
  )
}

export default Hero
