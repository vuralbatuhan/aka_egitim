'use client'

import { useEffect, useMemo, useState } from 'react'
import { 
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button, 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem, 
  Link
} from "@heroui/react"
import NextLink from 'next/link'
import Image from 'next/image'
import { ArrowSmallDownIcon, ArrowSmallUpIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import MobileGridMenu, { MobileMenuSection } from './MobileGridMenu'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isGridMenuOpen, setIsGridMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Scroll detection
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsScrolled(true)
      } else {
        // Scrolling up
        setIsScrolled(false)
      }
      
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = useMemo(
    () => [
      { name: "Ana Sayfa", href: "/" },
      { name: "Dil Okulları", href: "/dil-okullari", hasDropdown: true },
      { name: "Üniversite", href: "/universite", hasDropdown: true },
      { name: "Work and Study", href: "/work-and-study" },
      { name: "Yurtdışında Lise", href: "/yurtdisinda-lise" },
      { name: "Yüksek Lisans", href: "/yuksek-lisans" },
      { name: "Hakkımızda", href: "/hakkimizda", hasDropdown: true },
      { name: "Blog", href: "/blog" },
    ],
    []
  )

  const dilOkullariItems = useMemo(
    () => [
      { name: "İtalya", href: "/ulkeler/italya", description: "Sanat, kültür ve kaliteli eğitim" },
      // { name: "Kazakistan", href: "/ulkeler/kazakistan", description: "Uygun maliyetli eğitim" },
      { name: "Almanya", href: "/ulkeler/almanya", description: "Uygun maliyetli eğitim" },
      { name: "Finlandiya", href: "/ulkeler/finlandiya", description: "Uygun maliyetli eğitim" },
      { name: "İngiltere", href: "/ulkeler/ingiltere", description: "Uygun maliyetli eğitim" },
    ],
    []
  )

  const universiteItems = useMemo(
    () => [
      { name: "İtalya", href: "/ulkeler/italya", description: "Sanat, kültür ve kaliteli eğitim" },
      { name: "Belçika", href: "/ulkeler/belcika", description: "Çok kültürlü eğitim fırsatları" },
      { name: "Almanya", href: "/ulkeler/almanya", description: "Ücretsiz eğitim fırsatları" },
      { name: "Kazakistan", href: "/ulkeler/kazakistan", description: "Uygun maliyetli eğitim" },
      { name: "Hollanda", href: "/ulkeler/hollanda", description: "İngilizce programlar" },
    ],
    []
  )

  const hakkimizdaItems = useMemo(
    () => [
      { name: "Biz Kimiz", href: "/biz-kimiz", description: "Misyonumuz ve değerlerimiz" },
      { name: "Niçin Kurduk", href: "/nicin-kurduk", description: "Kuruluş hikayemiz" },
      { name: "Ne Yapmak İstiyoruz", href: "/ne-yapmak-istiyoruz", description: "Hedeflerimiz ve vizyonumuz" },
    ],
    []
  )

  const mobileSections: MobileMenuSection[] = useMemo(() => {
    const quickLinkDescriptions: Record<string, string> = {
      "Ana Sayfa": "Aka Eğitim genel bakış ve güncel duyurular",
      "Work and Study": "Çalışarak dil öğrenebileceğiniz programlar",
      "Yurtdışında Lise": "Uluslararası lise ve diploma çözümleri",
      "Yüksek Lisans": "Master ve MBA başvuru rehberleri",
      "Blog": "Uzman rehberler ve eğitim haberleri",
    }

    const generalLinks = menuItems
      .filter((item) => !item.hasDropdown)
      .map((item) => ({
        name: item.name,
        href: item.href,
        description: quickLinkDescriptions[item.name] ?? "İlgili sayfaya hızlı erişim sağlayın",
      }))

    return [
      {
        title: 'Genel',
        items: generalLinks,
      },
      {
        title: 'Dil Okulları',
        items: dilOkullariItems.map((item) => ({
          name: item.name,
          href: item.href,
          description: item.description,
        })),
      },
      {
        title: 'Üniversite',
        items: universiteItems.map((item) => ({
          name: item.name,
          href: item.href,
          description: item.description,
        })),
      },
      {
        title: 'Kurumsal',
        items: hakkimizdaItems.map((item) => ({
          name: item.name,
          href: item.href,
          description: item.description,
        })),
      },
    ]
  }, [menuItems, dilOkullariItems, universiteItems, hakkimizdaItems])

  useEffect(() => {
    if (!isGridMenuOpen) return
    const onHashChange = () => setIsGridMenuOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [isGridMenuOpen])

  // Close mobile menu when screen size becomes large (lg breakpoint)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && isGridMenuOpen) {
        setIsGridMenuOpen(false)
      }
    }

    // Check initial size
    handleResize(mediaQuery)

    // Listen for changes
    mediaQuery.addEventListener('change', handleResize)
    
    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [isGridMenuOpen])

  return (
    <>
      <HeroNavbar 
        maxWidth="xl"
        position="sticky"
        height="80px"
        className={`transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
        classNames={{
          wrapper: "px-6 sm:px-8 lg:px-12 xl:px-16 h-20 bg-white",
          base: "bg-white shadow-lg border-b border-gray-200",
        }}
      >
        {/* Logo */}
        <NavbarBrand>
          <NextLink href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.jpg"
              alt="Aka Eğitim Logo"
              width={48}
              height={48}
              className="rounded-lg shadow-md sm:w-14 sm:h-14"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-gray-900 text-xl sm:text-2xl">Aka Eğitim</span>
              <p className="text-sm text-gray-700 -mt-1">Yurtdışı Eğitim</p>
            </div>
          </NextLink>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          <NavbarItem>
            <Link as={NextLink} href="/" className="text-gray-900 font-medium">
              Ana Sayfa
            </Link>
          </NavbarItem>

          {/* Dil Okulları Dropdown */}
          <Dropdown onOpenChange={(open) => setActiveDropdown(open ? 'dil-okullari' : null)}>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="flex items-center gap-1 p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-900 font-medium focus:outline-none focus:ring-0"
                  radius="sm"
                  variant="light"
                >
                  Dil Okulları
                  <AnimatePresence initial={false}>
                    <motion.span
                      key={activeDropdown === 'dil-okullari' ? 'up' : 'down'}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex"
                    >
                      {activeDropdown === 'dil-okullari' ? (
                        <ArrowSmallUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowSmallDownIcon className="h-4 w-4" />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Dil Okulları"
              itemClasses={{
                base: "group flex items-center justify-between w-full gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6] data-[hover=true]:bg-[rgba(47,212,198,0.1)] data-[hover=true]:text-[#2FD4C6] border-b border-gray-200 last:border-b-0 focus:outline-none focus:ring-0",
              }}
              classNames={{
                base: "w-[360px] bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl p-3 space-y-2 focus:outline-none focus:ring-0",
              }}
            >
              {dilOkullariItems.map((item) => (
                <DropdownItem
                  key={item.href}
                  as={NextLink}
                  href={item.href}
                  className="focus:outline-none focus:ring-0 hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6]"
                >
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          {/* Üniversite Dropdown */}
          <Dropdown onOpenChange={(open) => setActiveDropdown(open ? 'universite' : null)}>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="flex items-center gap-1 p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-900 font-medium focus:outline-none focus:ring-0"
                  radius="sm"
                  variant="light"
                >
                  Üniversite
                  <AnimatePresence initial={false}>
                    <motion.span
                      key={activeDropdown === 'universite' ? 'up' : 'down'}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex"
                    >
                      {activeDropdown === 'universite' ? (
                        <ArrowSmallUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowSmallDownIcon className="h-4 w-4" />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Üniversite"
              itemClasses={{
                base: "group flex items-center justify-between w-full gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6] data-[hover=true]:bg-[rgba(47,212,198,0.1)] data-[hover=true]:text-[#2FD4C6] border-b border-gray-200 last:border-b-0 focus:outline-none focus:ring-0",
              }}
              classNames={{
                base: "w-[360px] bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl p-3 space-y-2 focus:outline-none focus:ring-0",
              }}
            >
              {universiteItems.map((item) => (
                <DropdownItem
                  key={item.href}
                  as={NextLink}
                  href={item.href}
                  className="focus:outline-none focus:ring-0 hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6]"
                >
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link as={NextLink} href="/work-and-study" className="text-gray-900 font-medium">
              Öğretmen harketliği
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link as={NextLink} href="/yurtdisinda-lise" className="text-gray-900 font-medium">
              Yurtdışında Lise
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link as={NextLink} href="/yuksek-lisans" className="text-gray-900 font-medium">
              Yüksek Lisans
            </Link>
          </NavbarItem>

          {/* Hakkımızda Dropdown */}
          <Dropdown onOpenChange={(open) => setActiveDropdown(open ? 'hakkimizda' : null)}>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="flex items-center gap-1 p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-900 font-medium focus:outline-none focus:ring-0"
                  radius="sm"
                  variant="light"
                >
                  Hakkımızda
                  <AnimatePresence initial={false}>
                    <motion.span
                      key={activeDropdown === 'hakkimizda' ? 'up' : 'down'}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex"
                    >
                      {activeDropdown === 'hakkimizda' ? (
                        <ArrowSmallUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowSmallDownIcon className="h-4 w-4" />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Hakkımızda"
              itemClasses={{
                base: "group flex items-center justify-between w-full gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6] data-[hover=true]:bg-[rgba(47,212,198,0.1)] data-[hover=true]:text-[#2FD4C6] border-b border-gray-200 last:border-b-0 focus:outline-none focus:ring-0",
              }}
              classNames={{
                base: "w-[360px] bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl p-3 space-y-2 focus:outline-none focus:ring-0",
              }}
            >
              {hakkimizdaItems.map((item) => (
                <DropdownItem
                  key={item.href}
                  as={NextLink}
                  href={item.href}
                  className="focus:outline-none focus:ring-0 hover:bg-[rgba(47,212,198,0.1)] hover:text-[#2FD4C6]"
                >
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link as={NextLink} href="/blog" className="text-gray-900 font-medium">
              Blog
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* CTA Button */}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={NextLink}
              href="/iletisim"
              className="bg-primary text-gray-900 font-bold hover:bg-primary-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-0"
              size="sm"
              radius="lg"
            >
              <span className="hidden sm:inline">Ücretsiz Bilgi Al</span>
              <span className="sm:hidden">Bilgi Al</span>
            </Button>
          </NavbarItem>
          <NavbarItem className="lg:hidden">
            <Button
              isIconOnly
              variant="light"
              aria-label="Navigasyon menüsünü aç"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full shadow-sm focus:outline-none focus:ring-0"
              onPress={() => setIsGridMenuOpen(true)}
            >
              <Squares2X2Icon className="w-6 h-6" />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </HeroNavbar>
      <MobileGridMenu
        isOpen={isGridMenuOpen}
        onClose={() => setIsGridMenuOpen(false)}
        sections={mobileSections}
      />
    </>
  )
}
