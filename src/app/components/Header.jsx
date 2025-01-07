import React from "react";

export const Header = () => {
  return (
    <header className="w-full">
      <nav className="mx-auto px-4 py-5 flex items-center justify-between w-full max-w-[100rem]">
        <h1 className="font-bold text-white text-5xl">GV</h1>
        <ul className="text-white inline-flex gap-6">
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
