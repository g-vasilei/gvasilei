'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'motion/react'
import { experience } from '../data/data'
import { renderToString } from 'react-dom/server'
import { CopyBlock, dracula } from 'react-code-blocks'

function Item({ work, progress, isActive }) {
  return (
    <motion.li className="relative flex items-center gap-4 py-4" layout>
      {/* Vertical Progress Line */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            className="overflow-hidden w-1 h-[7.625rem] absolute top-4 -left-5 rounded-lg"
          >
            {/* Background Line */}
            <div className="w-1 h-[7.625rem] bg-red-700 rounded-lg"></div>

            {/* Animated Progress Line */}
            <motion.div
              className="w-1 h-[7.625rem] absolute left-0 z-10 bg-slate-500 rounded-lg"
              style={{
                transform: `translateY(${(1 - progress) * -100}%)`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="flex flex-col items-start gap-3">
        <motion.h3
          initial={{ fontSize: '1rem' }}
          animate={{
            fontSize: isActive ? '2.25rem' : '1rem', // Animate between text-lg and text-4xl
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }} // Adjust transition timing
          className="font-bold text-white font-gabarito"
        >
          {work.title}
        </motion.h3>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
              className="text-md font-semibold text-gray-200"
            >
              {work.subTitle}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
              className="text-sm font-semibold text-gray-400"
            >
              Since: {work.date}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  )
}

const Experience = () => {
  const containerRef = useRef(null)
  const [progressValues, setProgressValues] = useState({})
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-start w-full relative"
      style={{ height: `${100 * (experience.length + 1)}vh` }}
    >
      {/* Sticky container */}
      <div className="h-[100vh] flex flex-col items-center justify-around sticky top-0 w-full">
        <div className="flex flex-col items-start justify-center w-full gap-6 lg:grid lg:grid-cols-[400px,1fr] lg:gap-10">
          <ul className="w-full max-w-screen-2xl flex flex-col gap-3">
            {experience.map((work, index) => (
              <Item
                key={work.id}
                work={work}
                progress={progressValues[index]?.progress || 0}
                isActive={index === activeIndex} // Highlight active item
              />
            ))}
          </ul>
          <div className="border border-slate-100 rounded-md w-full max-w-full min-h-[435px]">
            <div className="p-3 flex items-center justify-start gap-2 bg-[#15191E] rounded-md">
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            </div>
            <div className="p-3 bg-[#282a36] rounded-bl-md rounded-br-md flex flex-col whitespace-pre-line overflow-hidden text-wrap">
              <CopyBlock
                text={experience[activeIndex].description}
                language="jsx"
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divs to Track */}
      <div className="absolute top-0 w-full z-[-1]">
        {experience.map((work, index) => (
          <ScrollTracker
            key={work.id}
            index={index}
            onProgress={(idx, progress) => {
              setProgressValues((prev) => ({
                ...prev,
                [idx]: { index: idx, progress },
              }))
              if (progress > 0.01) setActiveIndex(idx) // Set active index if progress is > 50%
            }}
          />
        ))}
        {/* Extra spacer for smooth scrolling */}
        <div className="flex-none h-screen overflow-hidden relative w-full"></div>
      </div>
    </section>
  )
}

function ScrollTracker({ index, onProgress }) {
  const ref = useRef(null)

  // Track scroll progress for this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // Tracks when the div enters and exits the viewport
  })

  // Update the progress and index
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      onProgress(index, progress) // Pass both index and progress
    })
    return () => unsubscribe()
  }, [scrollYProgress, onProgress, index])

  return (
    <div
      ref={ref}
      className="flex-none h-screen overflow-hidden relative w-full"
      data-index={index}
    ></div>
  )
}

export default Experience
