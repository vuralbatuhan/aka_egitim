'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Ana Sayfa', href: '#home', active: true },
    { name: 'Hakkımızda', href: '#about', active: false },
    { name: 'Dil Okulları', href: '#dil-okullari', active: false },
    { name: 'Üniversite', href: '#universite', active: false },
    { name: 'Öğretmen Hareketliliği', href: '#ogretmen-hareketliligi', active: false },
    { name: 'İletişim', href: '#contact', active: false },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Main Header */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Image
              src="/images/Group 108.png"
              alt="AKA EĞİTİM Logo"
              width={200}
              height={64}
              className="h-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-normal transition-colors relative ${
                  item.active
                    ? 'text-[#6A0B1C]'
                    : 'text-[#333333] hover:text-[#6A0B1C]'
                }`}
              >
                {item.name}
                {item.active && (
                  <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[60%] h-[2px] bg-[#6A0B1C]"></span>
                )}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </a>
            
            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Image
                src="/images/facebook-app-symbol.png"
                alt="Facebook"
                width={20}
                height={20}
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </a>
            
            {/* X (Twitter) */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
              aria-label="X (Twitter)"
            >
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width={20}
                height={20}
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#333333]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-normal transition-colors ${
                  item.active ? 'text-[#6A0B1C]' : 'text-[#333333]'
                } hover:text-[#6A0B1C]`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Image
                  src="/images/facebook-app-symbol.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
                aria-label="X (Twitter)"
              >
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
