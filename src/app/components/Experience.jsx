'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'motion/react'
import { experience } from '../data/data'
import { renderToString } from 'react-dom/server'
import { CopyBlock, dracula } from 'react-code-blocks'

function Item({ work, progress, isActive }) {
  return (
    <motion.li
      className={`${
        isActive ? 'ml-5 xl:ml-1 flex' : 'opacity-0 lg:opacity-100'
      } absolute  left-5 lg:relative flex items-center gap-4 ml-5 lg:ml-0 origin-top`}
      animate={{
        height: 'min-content',
        margin: isActive ? '16px 0' : '0',
      }}
      exit={{ height: 'min-content', opacity: 0 }}
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
        className="flex flex-col items-start gap-3 relative origin-top"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <motion.div
          style={{ overflow: 'hidden', display: 'flex' }}
          className="outline-none flex-col justify-start flex-shrink-0 transform-none will-change-transform origin-top"
        >
          {/* Animate fontSize for h3 only */}
          <motion.h3
            animate={{
              fontSize: isActive ? '2rem' : '1.5rem',
              lineHeight: isActive ? '2rem' : '1.5rem',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`${
              isActive ? 'opacity-100' : 'opacity-40'
            } font-bold text-white font-gabarito origin-top`}
          >
            {work.title}
          </motion.h3>
        </motion.div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, position: 'absolute', y: '12px' }}
            animate={{
              opacity: isActive ? 1 : 0,
              x: 0,
              position: isActive ? 'relative' : 'absolute',
              y: '0',
            }}
            exit={{ opacity: 0, x: -10, y: '60px' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="top-full flex flex-col items-start gap-3 origin-top-left"
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
      id="experience"
    >
      {/* Sticky container */}
      <div className="h-[100vh] flex flex-col items-center justify-around sticky top-0 w-full">
        <div className="flex flex-col items-start justify-center w-full gap-6 lg:grid lg:grid-cols-[300px,1fr] lg:items-center lg:gap-10 h-full lg:max-h-min">
          <AnimatePresence>
            <motion.ul className="w-full max-w-screen-2xl flex flex-col gap-3 h-32 lg:justify-start lg:self-start">
              {experience.map((work, index) => (
                <Item
                  key={work.id}
                  work={work}
                  progress={progressValues[index]?.progress || 0}
                  isActive={index === activeIndex} // Highlight active item
                />
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border border-border bg-card rounded-md w-full max-w-full md:min-h-[435px] relative overflow-hidden h-3/5 md:h-3/4 lg:h-[28rem] lg:flex lg:items-center"
            >
              <motion.div
                key={activeIndex} // Ensure the description re-renders when activeIndex changes
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-base leading-7 lg:text-lg lg:leading-8 p-5 lg:max-w-[85%] lg:mx-auto"
              >
                {experience[activeIndex].description}
              </motion.div>

              <motion.div
                className="absolute block sm:right-0 -bottom-4 -right-1 lg:-bottom-20 lg:-right-24 z-[10]"
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-[105%] top-0 left-0 right-0 bottom-0 absolute backdrop-blur-[4px] bg-[length:3px_3px]"
                  style={{
                    mask: 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)',
                    backgroundSize: '4px 4px',
                    backdropFilter: 'blur(3px)',
                    backgroundImage:
                      'radial-gradient(rgba(0, 0, 0, 0) 1px, rgb(20, 23, 28) 1px)',
                  }}
                ></div>
                <div className="font-nabla text-[4rem] lg:text-[8rem] xl:text-[10rem] italic -z-10">
                  {experience[activeIndex].title}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
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
