'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { experience } from '../data/data'

function Item({ work, index, containerRef, itemHeight }) {
  const { scrollYProgress } = useScroll({
    container: containerRef, // Use the container reference
    offset: [
      `${(index * itemHeight) / 100} 0`, // Start when this item's 100vh begins
      `${((index + 1) * itemHeight) / 100} 0`, // End when this item's 100vh ends
    ],
  })

  const topValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])

  return (
    <li className="relative flex items-center gap-4 py-4">
      {/* Vertical Progress Line */}
      <div className="overflow-hidden w-1 h-24 relative">
        {/* Background Line */}
        <div className="w-1 h-24 bg-red-700"></div>
        {/* Animated Progress Line */}
        <motion.div
          className="w-1 h-24 absolute left-0 z-10 bg-slate-500"
          style={{
            top: topValue,
          }}
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-bold text-white">{work.title}</h3>
        <p className="text-sm text-gray-400">{work.subTitle}</p>
      </div>
    </li>
  )
}

const Experience = () => {
  const containerRef = useRef(null)
  const itemHeight = 100 // Each item occupies 100vh

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-start w-full relative"
      style={{ height: `${100 * (experience.length + 1)}vh` }}
    >
      {/* Sticky container */}
      <div className="h-[100vh] flex flex-col items-center justify-around sticky top-0 w-full">
        <ul className="w-full max-w-4xl flex flex-col gap-3">
          {experience.map((work, index) => (
            <Item
              key={work.id}
              work={work}
              index={index}
              containerRef={containerRef}
              itemHeight={100}
            />
          ))}
        </ul>
      </div>
      <div className="flex flex-none flex-col flex-nowrap items-center content-center justify-start gap-0 h-min left-0 right-0 top-0 overflow-hidden p-0 pointer-events-none absolute z-10">
        {experience.map((work, index) => (
          <div
            className="flex-none h-screen overflow-hidden relative w-full"
            key={work.id}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default Experience
