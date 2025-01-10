'use client'

import React, { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react'
import Image from 'next/image'

const ROTATION_RANGE = 32.5
const HALF_ROTATION_RANGE = 32.5 / 2

const Card = ({ title, img, color }) => {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0]

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="relative h-96 w-full rounded-xl bg-card border border-border"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 grid justify-start content-end rounded-xl shadow-lg overflow-hidden p-6 border border-border"
      >
        <Image
          src={img}
          alt={`${title} logo`}
          className="absolute top-0 left-0 right-0 bottom-0 object-cover object-center w-full h-full"
        />
        <p
          style={{
            transform: 'translateZ(50px)',
            color: color,
          }}
          className="text-center text-2xl font-bold opacity-85 z-[1]"
        >
          {title}
        </p>
        {/* <div className="bg-[rgba(56,55,55,0.3)] w-full h-full absolute bottom-0 left-0"></div> */}
      </div>
    </motion.div>
  )
}

export default Card
