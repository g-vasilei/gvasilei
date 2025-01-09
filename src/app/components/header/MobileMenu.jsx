'use client'

import React, { useState } from 'react'
import BurgerButton from './BurgerButton'
import Link from 'next/link'
import { navigationLinks } from '../../data/data'
import { AnimatePresence, motion } from 'motion/react'
import { VscGithubInverted } from 'react-icons/vsc'

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="relative block sm:hidden">
      <BurgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="absolute -top-3 -right-3 w-64 min-h-56 rounded-md bg-card  border border-border py-8 px-6 z-10 origin-top-right"
          >
            <ul className="flex flex-col gap-2 flex-1">
              {navigationLinks.map((link) => (
                <li key={link.id} className="text-2xl font-semibold">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
              <li className="text-2xl font-semibold mt-4">
                <Link href="https://github.com/g-vasilei" target="__blank">
                  <VscGithubInverted />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
