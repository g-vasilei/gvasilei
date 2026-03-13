'use client'

import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full flex items-center justify-center p-5 border-t border-border gap-4">
      <h2 className="font-bold text-xl font-nabla">GV</h2>
      <div className="flex items-center justify-center">&#169; {year}</div>
    </footer>
  )
}
