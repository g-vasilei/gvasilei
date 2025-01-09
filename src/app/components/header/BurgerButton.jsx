'use client'

import { motion } from 'motion/react'
import React from 'react'

const BurgerButton = ({ openMenu, setOpenMenu }) => {
  const path1Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 8.5L24 8.5' },
  }

  const path2Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    closed: { d: 'M0 15.5L24 15.5' },
  }

  return (
    <div
      onClick={() => setOpenMenu(!openMenu)}
      className="relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-white stroke-2 z-50"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path
          initial={path1Variants.closed}
          animate={openMenu ? path1Variants.open : path1Variants.closed}
          transition={{ duration: 0.25 }}
        />
        <motion.path
          initial={path2Variants.closed}
          animate={openMenu ? path2Variants.open : path2Variants.closed}
          transition={{ duration: 0.25 }}
        />
      </svg>
    </div>
  )
}

export default BurgerButton
