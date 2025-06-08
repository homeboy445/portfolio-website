"use client";

import Link from "next/link";
import { useState } from "react";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = "font-semibold text-gray-800 hover:text-white hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-colors duration-300 rounded-full px-4 py-1";
  const mobileLinkStyle = "font-semibold text-gray-800 hover:text-white hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-colors duration-300 rounded-full px-4 py-2 w-full text-center";

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Desktop Menu */}
      <div className="hidden md:flex bg-white/80 backdrop-blur-md shadow-lg rounded-full px-8 py-3 gap-8 items-center border border-gray-200">
        <Link href="/" className={linkStyle}>Home</Link>
        <Link href="/about" className={linkStyle}>About</Link>
        <Link href="/contact" className={linkStyle}>Contact</Link>
        <Link href="/chat" className={linkStyle}>Chat</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-white/80 backdrop-blur-md shadow-lg rounded-full p-3 border border-gray-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-48 py-2 bg-white/95 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 flex flex-col gap-2">
          <Link href="/" className={mobileLinkStyle}>Home</Link>
          <Link href="/about" className={mobileLinkStyle}>About</Link>
          <Link href="/contact" className={mobileLinkStyle}>Contact</Link>
          <Link href="/chat" className={mobileLinkStyle}>Chat</Link>
        </div>
      )}
    </nav>
  );
}
