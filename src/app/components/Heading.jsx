'use client'

import { motion } from 'motion/react'

const Heading = ({ children }) => {
  const DURATION = 0.4
  const STAGGER = 0.025

  return (
    <motion.h2
      initial="initial"
      whileHover="hovered"
      whileInView="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-center text-3xl lg:text-5xl font-black uppercase sm:text-7xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.h2>
  )
}

export default Heading
