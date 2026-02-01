'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Ana Sayfa', href: '/', active: pathname === '/' },
    { name: 'Hakkımızda', href: '/hakkimizda', active: pathname === '/hakkimizda' },
    { name: 'Dil Eğitimi', href: '/dil-egitimi', active: pathname === '/dil-egitimi' || pathname.startsWith('/dil-okullari') },
    { name: 'Üniversite', href: '/universite', active: pathname === '/universite' },
    { name: 'Öğretmen Hareketliliği', href: '/ogretmen-hareketliligi', active: pathname === '/ogretmen-hareketliligi' },
    { name: 'İletişim', href: '/iletisim', active: pathname === '/iletisim' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Main Header */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Group 108.png"
                alt="AKA EĞİTİM Logo"
                width={200}
                height={64}
                className="h-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    href={item.href}
                    className={`inline-block text-sm font-bold transition-all duration-300 ease-out relative group hover:translate-x-0.5 ${
                      item.active
                        ? 'text-[#6A0B1C]'
                        : 'text-[#333333] hover:text-[#6A0B1C]'
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      <span
                        className={`absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[2px] bg-[#6A0B1C] transition-all duration-300 ease-out ${
                          item.active ? 'w-[60%]' : 'w-0 group-hover:w-[60%]'
                        }`}
                        aria-hidden
                      />
                    </span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`inline-block text-sm font-bold transition-all duration-300 ease-out relative group hover:translate-x-0.5 ${
                      item.active
                        ? 'text-[#6A0B1C]'
                        : 'text-[#333333] hover:text-[#6A0B1C]'
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      <span
                        className={`absolute bottom-[-8px] left-1/2 -translate-x-1/2 h-[2px] bg-[#6A0B1C] transition-all duration-300 ease-out ${
                          item.active ? 'w-[60%]' : 'w-0 group-hover:w-[60%]'
                        }`}
                        aria-hidden
                      />
                    </span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hidden lg:flex items-center gap-3 shrink-0"
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/aka_egitim"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:!bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
              aria-label="Instagram"
              style={{ backgroundColor: '#EEEEEE' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EEEEEE'}
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </a>
            
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@aka.egitim"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:!bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
              aria-label="TikTok"
              style={{ backgroundColor: '#EEEEEE' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EEEEEE'}
            >
              <Image
                src="/images/tiktok.svg"
                alt="TikTok"
                width={20}
                height={20}
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </a>
            
            {/* X (Twitter) */}
            <a
              href="https://x.com/aka_egitimder"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:!bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
              aria-label="X (Twitter)"
              style={{ backgroundColor: '#EEEEEE' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EEEEEE'}
            >
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width={20}
                height={20}
                className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </a>
          </motion.div>

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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4 max-w-[1200px]">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  {item.href.startsWith('/') ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`inline-block font-bold transition-all duration-300 ease-out hover:translate-x-1 ${
                        item.active ? 'text-[#6A0B1C]' : 'text-[#333333]'
                      } hover:text-[#6A0B1C]`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`inline-block font-bold transition-all duration-300 ease-out hover:translate-x-1 ${
                        item.active ? 'text-[#6A0B1C]' : 'text-[#333333]'
                      } hover:text-[#6A0B1C]`}
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-center gap-3 pt-4"
              >
              <a
                href="https://www.instagram.com/aka_egitim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:!bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
                aria-label="Instagram"
                style={{ backgroundColor: '#EEEEEE' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EEEEEE'}
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
                href="https://www.tiktok.com/@aka.egitim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:!bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
                aria-label="TikTok"
                style={{ backgroundColor: '#EEEEEE' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EEEEEE'}
              >
                <Image
                  src="/images/tiktok.svg"
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </a>
              <a
                href="https://x.com/aka_egitimder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#EEEEEE] flex items-center justify-center hover:!bg-[#60091B] hover:shadow-lg transition-all duration-300 group"
                aria-label="X (Twitter)"
                style={{ backgroundColor: '#EEEEEE' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EEEEEE'}
              >
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
