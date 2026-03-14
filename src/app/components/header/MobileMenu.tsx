'use client'

import React, { useState } from 'react'
import BurgerButton from './BurgerButton'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { VscGithubInverted } from 'react-icons/vsc'
import LanguageSwitcher from '../LanguageSwitcher'

interface NavLink {
  id: number
  name: string
  link: string
}

interface MobileMenuProps {
  navLinks: NavLink[]
}

const MobileMenu = ({ navLinks }: MobileMenuProps) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="relative block sm:hidden">
      <BurgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <AnimatePresence>
        {openMenu && (
          <motion.div
            id="mobile-menu"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="absolute -top-3 -right-3 w-64 min-h-56 rounded-md bg-card border border-border py-8 px-6 z-10 origin-top-right"
          >
            <ul className="flex flex-col gap-2 flex-1">
              {navLinks.map((link) => (
                <li key={link.id} className="text-2xl font-semibold">
                  <Link href={link.link} onClick={() => setOpenMenu(false)}>{link.name}</Link>
                </li>
              ))}
              <li className="text-2xl font-semibold mt-4">
                <Link
                  href="https://github.com/g-vasilei"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  <VscGithubInverted aria-hidden="true" />
                </Link>
              </li>
              <li className="mt-2">
                <LanguageSwitcher />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
