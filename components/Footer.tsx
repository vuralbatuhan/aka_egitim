'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    kurumsal: [
      { name: 'Programlar', href: '/programlar' },
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'Kurucumuz Kimdir', href: '/kurucumuz-kimdir' },
      { name: 'Niçin Kurulduk', href: '/nicin-kurduk' },
      { name: 'Ne Yapmak İstiyoruz', href: '/ne-yapmak-istiyoruz' },
    ],
    universite: [
      { name: 'İngiltere Dil Eğitimi', href: '/dil-okullari' },
      { name: "Finlandiya'da Üniversite", href: '/universite/finlandiya' },
      { name: "İngiltere'de Üniversite", href: '/universite/ingiltere' },
      { name: 'Üniversite Programları', href: '/universite' },
    ],
    dilOkullari: [
      { name: 'Dil Eğitimi', href: '/dil-egitimi' },
      { name: 'İngiltere Dil Okulları', href: '/dil-okullari' },
      { name: 'Finlandiya Dil Eğitimi', href: '/dil-okullari/finlandiya' },
    ],
  }

  const linkClass =
    'inline-block text-white text-xs md:text-sm transition-all duration-300 ease-out ' +
    'hover:text-[#85142C] hover:translate-x-1 relative group'

  function FooterNavLink({ link }: { link: { name: string; href: string } }) {
    const isInternal = link.href.startsWith('/')
    const content = (
      <>
        <span className="relative">
          {link.name}
          <span
            className="absolute left-0 bottom-0 h-px w-0 bg-[#85142C] transition-all duration-300 ease-out group-hover:w-full"
            aria-hidden
          />
        </span>
      </>
    )
    if (isInternal) {
      return (
        <Link href={link.href} className={linkClass}>
          {content}
        </Link>
      )
    }
    return (
      <a href={link.href} className={linkClass}>
        {content}
      </a>
    )
  }

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(to bottom, #1A1A1A, #0A0A0A)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="mb-3 md:mb-4">
                <Image
                  src="/images/beyaz-logo.png"
                  alt="AKA EĞİTİM Logo"
                  width={250}
                  height={80}
                  className="h-auto object-contain w-[180px] md:w-[250px]"
                />
              </div>
              
              {/* Slogan */}
              <p className="text-xs md:text-sm text-white mb-3 md:mb-4">Azim Kararlılık Ayrıcalık</p>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-white mb-4 md:mb-6 leading-relaxed">
                Aka Eğitim yurtdışı eğitim danışmanlığında uzman ekibimizle dil okulu, üniversite ve yüksek lisans programları için hayallerinizdeki eğitimi planlıyoruz.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-2 md:space-x-3">
                {/* Instagram */}
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:!bg-[#60091B] hover:shadow-lg group"
                  aria-label="Instagram"
                  style={{ backgroundColor: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300 w-4 h-4 md:w-5 md:h-5"
                  />
                </a>
                
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@aka.egitim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:!bg-[#60091B] hover:shadow-lg group"
                  aria-label="TikTok"
                  style={{ backgroundColor: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <Image
                    src="/images/tiktok.svg"
                    alt="TikTok"
                    width={20}
                    height={20}
                    className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300 w-4 h-4 md:w-5 md:h-5"
                  />
                </a>
                
                {/* X (Twitter) */}
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:!bg-[#60091B] hover:shadow-lg group"
                  aria-label="X (Twitter)"
                  style={{ backgroundColor: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60091B'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <Image
                    src="/images/twitter.png"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300 w-4 h-4 md:w-5 md:h-5"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Kurumsal Section */}
          <div className="col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white font-bold mb-2 md:mb-4 text-sm md:text-base"
              style={{ color: '#85142C' }}
            >
              Kurumsal
            </motion.h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.kurumsal.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                  <FooterNavLink link={link} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Üniversite Section */}
          <div className="col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white font-bold mb-2 md:mb-4 text-sm md:text-base"
              style={{ color: '#85142C' }}
            >
              Üniversite
            </motion.h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.universite.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                >
                  <FooterNavLink link={link} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Dil Okulları Section */}
          <div className="col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white font-bold mb-2 md:mb-4 text-sm md:text-base"
              style={{ color: '#85142C' }}
            >
              Dil Okulları
            </motion.h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.dilOkullari.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                >
                  <FooterNavLink link={link} />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 md:mt-8 pt-6 md:pt-8 text-center border-t"
          style={{ borderColor: '#2A2A2A' }}
        >
          <p className="text-white text-xs md:text-sm">
            ©2026 Aka Eğitim ve Danışmanlık. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
