'use client'

import React, { useEffect, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'motion/react'
import { FaArrowDown } from 'react-icons/fa6'

const Hero = () => {
  const [width, setWidth] = useState(0) // Initialize with 0 or a default value.

  useEffect(() => {
    // This runs only in the browser.
    const handleResize = () => setWidth(window.innerWidth)

    // Set the initial width on component mount.
    setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const rows = 4
  const cols = width < 768 ? 3 : 6

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
        ></div>
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
    <section className="flex flex-col gap-16 md:gap-24 items-center justify-center min-h-[30rem] 2xl:p-0 relative max-w-full">
      <div
        className="grid w-full  absolute top-0 left-0 right-0 bottom-0 -z-[2]"
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
      <motion.div className="flex items-center gap-6 md:gap-10 lg:gap-14 flex-wrap">
        <div className="font-nabla text-[6rem] md:text-[8rem] lg:text-[10rem]">
          GV
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-yellow">
            GVASILEI
          </h2>
          <p className="text-md md:text-lg lg:text-xl">
            Your full stack developer
          </p>
          <div className="flex gap-5">
            <motion.button
              className="px-4 py-3 rounded-md border border-border bg-orange text-md md:text-lg lg:text-xl flex flex-col items-center justify-center gap-0 relative overflow-hidden hover:shadow-[-3px_3px_0px_#FFD214] transition-all duration-300"
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
              className="px-3 py-2 text-md md:text-lg lg:text-xl rounded-md"
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
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 2.5,
          stiffness: 1000,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FaArrowDown size={30} />
      </motion.div>
    </section>
  )
}

export default Hero
