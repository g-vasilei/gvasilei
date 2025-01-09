'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'motion/react'
import { experience } from '../data/data'
import { renderToString } from 'react-dom/server'
import { CopyBlock, dracula } from 'react-code-blocks'

function Item({ work, progress, isActive }) {
  console.log(isActive)
  return (
    <motion.li
      className="relative flex items-center gap-4 ml-5 lg:ml-0 origin-top"
      animate={{ height: 'min-content' }}
      exit={{ height: 'min-content' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }} // Smooth animation
      layout
    >
      {/* Vertical Progress Line */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isActive ? 1 : 0, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={`${
            isActive ? 'opacity-100' : 'opacity-0'
          } overflow-hidden w-1 absolute top-0 bottom-0 -left-5 rounded-lg origin-top`}
        >
          <motion.div className="w-1 h-full bg-orange rounded-lg"></motion.div>
          <motion.div
            className="w-1 h-full absolute left-0 z-10 bg-yellow rounded-lg"
            style={{
              transform: `translateY(${(1 - progress) * -100}%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div
        className="flex flex-col items-start gap-3 origin-top-left relative origin-top"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <motion.div
          style={{ overflow: 'hidden', display: 'flex' }}
          className="outline-none flex-col justify-start flex-shrink-0 transform-none will-change-transform"
        >
          {/* Animate fontSize for h3 only */}
          <motion.h3
            animate={{ fontSize: isActive ? '2rem' : '1.5rem' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="font-bold text-white font-gabarito"
          >
            {work.title}
          </motion.h3>
        </motion.div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, position: 'absolute', top: '12px' }}
            animate={{
              opacity: isActive ? 1 : 0,
              x: 0,
              position: isActive ? 'relative' : 'absolute',
              top: '0',
            }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`${
              isActive ? 'relative opacity-100' : 'absolute top-3 opacity-0'
            } top-full flex flex-col items-start gap-3 origin-top-left`}
          >
            <div className="text-md font-semibold text-gray-200">
              {work.subTitle}
            </div>
            <div className="text-sm font-semibold text-gray-400">
              Since: {work.date}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
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
          <AnimatePresence>
            <motion.ul className="w-full max-w-screen-2xl flex flex-col gap-3">
              {experience.map((work, index) => (
                <Item
                  key={work.id}
                  work={work}
                  progress={progressValues[index]?.progress || 0}
                  isActive={index === activeIndex} // Highlight active item
                />
              ))}
            </motion.ul>
          </AnimatePresence>
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
