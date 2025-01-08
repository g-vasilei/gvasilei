'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll } from 'motion/react'
import { experience } from '../data/data'
import { renderToString } from 'react-dom/server'

function Item({ work, progress, isActive }) {
  return (
    <li className="relative flex items-center gap-4 py-4">
      {/* Vertical Progress Line */}
      {isActive && (
        <div className="overflow-hidden w-1 h-24 relative">
          {/* Background Line */}
          <div className="w-1 h-24 bg-red-700"></div>
          {/* Animated Progress Line */}
          <motion.div
            className="w-1 h-24 absolute left-0 z-10 bg-slate-500"
            style={{
              transform: `translateY(${(1 - progress) * -100}%)`,
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">
        <h3 className="text-lg font-bold text-white">{work.title}</h3>
        <p className="text-sm text-gray-400">{work.subTitle}</p>
      </div>
    </li>
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
        <div className="flex items-center justify-center w-full gap-6">
          <ul className="w-full max-w-4xl flex flex-col gap-3">
            {experience.map((work, index) => (
              <Item
                key={work.id}
                work={work}
                progress={progressValues[index]?.progress || 0}
                isActive={index === activeIndex} // Highlight active item
              />
            ))}
            <div>
              <div className="border border-slate-100 rounded-md">
                <div className="p-3 flex items-center justify-start gap-2 bg-[#15191E] rounded-md">
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                </div>
                <div className="p-3 bg-[#191E24] rounded-md flex flex-col whitespace-pre-line">
                  {renderToString(Card(experience[activeIndex]))}
                </div>
              </div>
            </div>
          </ul>
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

function Card(work) {
  const description = work?.description.map((item, index) => {
    return (
      <>
        &nbsp;&nbsp;<li key={index}>{item}</li>
      </>
    )
  })

  return (
    <section className="flex flex-col">
      <h1>{work?.title}</h1>
      <ul>{description}</ul>
    </section>
  )
}

export default Experience
