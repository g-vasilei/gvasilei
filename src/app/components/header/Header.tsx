import React from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import LanguageSwitcher from '../LanguageSwitcher'
import type { Locale } from '../../../i18n/getDictionary'

interface NavLink {
  id: number
  name: string
  link: string
}

interface HeaderProps {
  navLinks: NavLink[]
  locale: Locale
}

export const Header = ({ navLinks, locale }: HeaderProps) => {
  return (
    <header className="w-full">
      <nav
        aria-label="Main navigation"
        className="mx-auto p-5 flex items-center justify-between w-full max-w-screen-2xl 2xl:p-0 2xl:py-5"
      >
        <h1 className="font-bold text-5xl font-nabla">GV</h1>
        <ul className="hidden sm:flex items-center text-white gap-6">
          {navLinks.map((link) => (
            <li key={link.id} className="text-xl">
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden sm:flex items-center gap-4">
          <LanguageSwitcher />
        </div>
        <MobileMenu navLinks={navLinks} />
      </nav>
    </header>
  )
}
