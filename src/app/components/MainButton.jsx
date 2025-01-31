import React from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'motion/react'

const MainButton = ({ text }) => {
  const buttonTopText = {
    initial: { y: 0 },
    hover: { y: '-150%' },
  }

  const buttonBottomText = {
    initial: { y: '150%' },
    hover: { y: 0 },
  }
  return (
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
        {text}
      </motion.span>

      <motion.span
        before="Get in touch"
        className="before:content-['Get_in_touch'] absolute flex justify-center"
        variants={buttonBottomText}
        transition={{ duration: 0.25 }}
      ></motion.span>
    </motion.button>
  )
}

export default MainButton
