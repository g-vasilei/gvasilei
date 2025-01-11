'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionTemplate, useAnimate } from 'motion/react'
import { FaArrowDown } from 'react-icons/fa6'
import GridItems from './GridItems'
import useWindowWidth from '@/app/hooks/useWindowWidth'
import MainButton from '../MainButton'

const Hero = () => {
  const width = useWindowWidth()
  const [scope, animate] = useAnimate()

  const rows = 4
  const cols = width < 768 ? 3 : 6

  const backgroundImage = useMotionTemplate`radial-gradient(ellipse 120% 110% at 50% 120%, #0f1115 25%, transparent 76%)`

  // Initial animation
  useEffect(() => {
    const entryAnimation = async () => {
      // Animate `.grid-items` opacity from 0 to 1
      await animate(
        '.grid-items',
        {
          opacity: [0, 1],
        },
        {
          ease: 'easeIn',
          duration: 0.2,
        }
      )

      // Animate `.fade-in` opacity and y-axis from initial values to target values
      animate(
        '.fade-in',
        {
          opacity: [0, 1],
          y: [40, 0],
        },
        {
          ease: 'easeIn',
          duration: 0.325,
        }
      )
    }

    entryAnimation() // Trigger the animation
  }, [])

  return (
    <section
      ref={scope}
      className="flex flex-col gap-16 md:gap-24 items-center justify-center min-h-[30rem] 2xl:p-0 relative max-w-full"
    >
      <GridItems rows={rows} cols={cols} className="grid-items" />
      <motion.div
        style={{
          backgroundImage,
        }}
        className="w-full absolute bottom-0 h-[20rem] flex flex-col gap-3 items-center justify-center overflow-visible -z-[1]"
      />
      <motion.div className="flex items-center gap-6 md:gap-10 lg:gap-14 flex-wrap">
        <div className="font-nabla text-[6rem] md:text-[8rem] lg:text-[10rem] fade-in">
          GV
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-yellow fade-in">
            GVASILEI
          </h2>
          <p className="text-md md:text-lg lg:text-xl fade-in">
            Your full stack developer
          </p>
          <div className="flex gap-5 fade-in">
            <MainButton text={'Get in touch'} />
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
