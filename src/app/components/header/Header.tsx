import React from 'react'
import { navigationLinks } from '../../data/data'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export const Header = () => {
  return (
    <header className="w-full">
      <nav className="mx-auto p-5 flex items-center justify-between w-full max-w-screen-2xl 2xl:p-0 2xl:py-5">
        <h1 className="font-bold text-5xl font-nabla">GV</h1>
        <ul className="hidden sm:flex items-center text-white gap-6">
          {navigationLinks.map((link) => (
            <li key={link.id} className="text-xl">
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <MobileMenu />
      </nav>
    </header>
  )
}
