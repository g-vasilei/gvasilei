'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll } from 'motion/react'
import { experience } from '../data/data'

function Item({ work, translateY, animate }) {
  console.log(translateY) // Check the calculated translateY value

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
            transform: animate
              ? `translateY(${translateY})` // Use the calculated translateY
              : 'translateY(-100%)', // If not animated, stay at -100%
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
  const firstSpacerRef = useRef(null)
  const [animate, setAnimate] = useState(false)
  const [activeDescription, setActiveDescription] = useState(
    experience[0].description
  )
  const [translateYs, setTranslateYs] = useState({}) // Track translateY for each item

  // console.log(translateYs)

  const { scrollYProgress: spacerScrollYProgress } = useScroll({
    target: firstSpacerRef,
    offset: ['start start', 'end start'], // Trigger when the spacer's top reaches the viewport's top
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10)
            const elementTop = entry.target.getBoundingClientRect().top // Get the top position of the element
            const elementHeight = entry.target.getBoundingClientRect().height // Get the height of the element

            const progress = Math.min(
              1,
              Math.max(0, elementTop / elementHeight)
            )

            // Reverse the percentage and map it to translateY from -100% to 0%
            const translateValue = `${(1 - progress) * -100}%` // Inverted to ensure it goes from -100% to 0%

            setTranslateYs((prev) => ({
              ...prev,
              [index]: translateValue, // Store translateY for each item
            }))

            // Trigger animation when the item is visible
            if (!animate) {
              setAnimate(true)
            }
          } else {
            // Reset the translateY and animation when the item is not in view
            setTranslateYs((prev) => ({
              ...prev,
              [parseInt(entry.target.dataset.index, 10)]: '-100%',
            }))
            if (animate) {
              setAnimate(false)
            }
          }
        })
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the spacer is visible
      }
    )

    const spacers = document.querySelectorAll('[data-spacer]')
    spacers.forEach((spacer) => observer.observe(spacer))

    return () => {
      spacers.forEach((spacer) => observer.unobserve(spacer))
    }
  }, [animate, spacerScrollYProgress])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10)
            setActiveDescription(experience[index].description)
          }
        })
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the spacer is visible
      }
    )

    const spacers = document.querySelectorAll('[data-spacer]')
    spacers.forEach((spacer) => observer.observe(spacer))

    return () => {
      spacers.forEach((spacer) => observer.unobserve(spacer))
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-start w-full relative"
      style={{ height: `${100 * (experience.length + 1)}vh` }}
    >
      {/* Sticky container */}
      <div className="h-[100vh] flex flex-col items-center justify-around sticky top-0 w-full">
        <div className="flex items-center justify-center w-full gap-6">
          <ul className="w-full max-w-4xl flex flex-col gap-3">
            {experience.map((work, index) => (
              <Item
                key={work.id}
                work={work}
                translateY={translateYs[index] || '-100%'} // Apply the translateY specific to each item
                animate={animate}
              />
            ))}
          </ul>

          {/* Display active description */}
          <div className="text-center mt-4">
            <p className="text-lg text-white">{activeDescription}</p>
          </div>
        </div>
      </div>

      {/* Divs to Track */}
      <div className="absolute top-0 w-full">
        {experience.map((work, index) => (
          <div
            ref={index === 0 ? firstSpacerRef : null} // Reference the first spacer
            className="flex-none h-screen overflow-hidden relative w-full"
            key={work.id}
            data-spacer
            data-index={index}
          ></div>
        ))}
        {/* Extra spacer for smooth scrolling */}
        <div className="flex-none h-screen overflow-hidden relative w-full"></div>
      </div>
    </section>
  )
}

export default Experience
