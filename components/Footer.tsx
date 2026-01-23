'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const footerLinks = {
    kurumsal: [
      { name: 'Hakkımızda', href: '#about' },
      { name: 'Biz Kimiz', href: '#' },
      { name: 'Niçin Kurduk', href: '#' },
      { name: 'Ne Yapmak İstiyoruz', href: '#' },
    ],
    universite: [
      { name: 'İngiltere Dil Eğitimi', href: '#' },
      { name: "Finlandiya'da Üniversite", href: '#' },
      { name: "İngiltere'de Üniversite", href: '#' },
      { name: 'Almanya Üniversiteleri', href: '#' },
    ],
    dilOkullari: [
      { name: 'İngiltere Dil Eğitimi', href: '#' },
      { name: 'Finlandiya Dil Eğitimi', href: '#' },
    ],
  }

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(to bottom, #1A1A1A, #0A0A0A)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="mb-4">
                <Image
                  src="/images/beyaz logo.png"
                  alt="AKA EĞİTİM Logo"
                  width={250}
                  height={80}
                  className="h-auto object-contain"
                />
              </div>
              
              {/* Slogan */}
              <p className="text-sm text-white mb-4">Azim Kararlılık Ayrıcalık</p>
              
              {/* Description */}
              <p className="text-sm text-white mb-6 leading-relaxed">
                Aka Eğitim yurtdışı eğitim danışmanlığında uzman ekibimizle dil okulu, üniversite ve yüksek lisans programları için hayallerinizdeki eğitimi planlıyoruz.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#EB702B] hover:shadow-lg group"
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
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#EB702B] hover:shadow-lg group"
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
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#EB702B] hover:shadow-lg group"
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
            </motion.div>
          </div>

          {/* Kurumsal Section */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white font-bold mb-4"
              style={{ color: '#FF6B35' }}
            >
              Kurumsal
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-sm hover:opacity-80 transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Üniversite Section */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white font-bold mb-4"
              style={{ color: '#FF6B35' }}
            >
              Üniversite
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.universite.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-sm hover:opacity-80 transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dil Okulları Section */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white font-bold mb-4"
              style={{ color: '#FF6B35' }}
            >
              Dil Okulları
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.dilOkullari.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-sm hover:opacity-80 transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
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
          className="mt-8 pt-8 text-center border-t"
          style={{ borderColor: '#2A2A2A' }}
        >
          <p className="text-white text-sm">
            ©2026 Ayhan Korkmaz Eğitim ve Danışmanlık. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
