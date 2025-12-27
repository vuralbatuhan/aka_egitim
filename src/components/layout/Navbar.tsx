"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@heroui/react";
import NextLink from "next/link";
import Image from "next/image";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import MobileGridMenu, { MobileMenuSection } from "./MobileGridMenu";

export default function Navbar() {
  const [isGridMenuOpen, setIsGridMenuOpen] = useState(false);

  const menuItems = useMemo(
    () => [
      { name: "Ana Sayfa", href: "/" },
      // { name: "Ülkeler", href: "/#ulkeler" },
      { name: "Dil Okulları", href: "/dil-okullari" },
      { name: "Üniversite", href: "/universite" },
      // { name: "Yüksek Lisans", href: "/yuksek-lisans" },
      // { name: "Doktora", href: "/doktora" },
      { name: "Öğretmen Hareketliliği", href: "/ogretmen-hareketliligi" },
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "İletişim", href: "/iletisim" },
    ],
    []
  );

  const dilOkullariItems = useMemo(
    () => [
      {
        name: "İtalya",
        href: "/ulkeler/italya",
        description: "Sanat, kültür ve kaliteli eğitim",
      },
      // { name: "Kazakistan", href: "/ulkeler/kazakistan", description: "Uygun maliyetli eğitim" },
      {
        name: "Almanya",
        href: "/ulkeler/almanya",
        description: "Uygun maliyetli eğitim",
      },
      {
        name: "Finlandiya",
        href: "/ulkeler/finlandiya",
        description: "Uygun maliyetli eğitim",
      },
      {
        name: "İngiltere",
        href: "/ulkeler/ingiltere",
        description: "Uygun maliyetli eğitim",
      },
    ],
    []
  );

  const universiteItems = useMemo(
    () => [
      {
        name: "İtalya",
        href: "/ulkeler/italya",
        description: "Sanat, kültür ve kaliteli eğitim",
      },
      {
        name: "Belçika",
        href: "/ulkeler/belcika",
        description: "Çok kültürlü eğitim fırsatları",
      },
      {
        name: "Almanya",
        href: "/ulkeler/almanya",
        description: "Ücretsiz eğitim fırsatları",
      },
      {
        name: "Kazakistan",
        href: "/ulkeler/kazakistan",
        description: "Uygun maliyetli eğitim",
      },
      {
        name: "Hollanda",
        href: "/ulkeler/hollanda",
        description: "İngilizce programlar",
      },
    ],
    []
  );

  const mobileSections: MobileMenuSection[] = useMemo(() => {
    const quickLinkDescriptions: Record<string, string> = {
      "Ana Sayfa": "Aka Eğitim genel bakış ve güncel duyurular",
      Ülkeler: "Eğitim destinasyonlarımızı keşfedin",
      "Dil Okulları": "Yurtdışında dil eğitimi programları",
      Üniversite: "Yurtdışında üniversite eğitimi",
      // "Yüksek Lisans": "Master ve MBA başvuru rehberleri",
      // Doktora: "PhD ve doktora programları",
      "Öğretmen Hareketliliği": "Öğretmenler için mesleki gelişim programları",
      Hakkımızda: "Misyonumuz ve değerlerimiz",
      İletişim: "Bizimle iletişime geçin",
    };

    return [
      {
        title: "Genel",
        items: menuItems.map((item) => ({
          name: item.name,
          href: item.href,
          description:
            quickLinkDescriptions[item.name] ??
            "İlgili sayfaya hızlı erişim sağlayın",
        })),
      },
      {
        title: "Dil Okulları Ülkeleri",
        items: dilOkullariItems.map((item) => ({
          name: item.name,
          href: item.href,
          description: item.description,
        })),
      },
      {
        title: "Üniversite Ülkeleri",
        items: universiteItems.map((item) => ({
          name: item.name,
          href: item.href,
          description: item.description,
        })),
      },
    ];
  }, [menuItems, dilOkullariItems, universiteItems]);

  useEffect(() => {
    if (!isGridMenuOpen) return;
    const onHashChange = () => setIsGridMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [isGridMenuOpen]);

  // Close mobile menu when screen size becomes large (lg breakpoint)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && isGridMenuOpen) {
        setIsGridMenuOpen(false);
      }
    };

    // Check initial size
    handleResize(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [isGridMenuOpen]);

  return (
    <>
      <HeroNavbar
        maxWidth="xl"
        position="sticky"
        height="80px"
        classNames={{
          wrapper: "px-6 sm:px-8 lg:px-12 xl:px-16 h-20",
          base: "shadow-lg",
        }}
        // style={{ background: 'linear-gradient(135deg, #a2c2bf 0%, #abbebbff 40%, #a2c2bf 100%)' }}
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
              <span className="font-bold text-black text-xl sm:text-2xl">
                Aka Eğitim
              </span>
              <p className="text-sm text-black/90 -mt-1">
                <span className="font-bold text-lg">A</span>zim{" "}
                <span className="font-bold text-lg">K</span>ararlılık{" "}
                <span className="font-bold text-lg">A</span>yrıcalık
              </p>
            </div>
          </NextLink>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                as={NextLink}
                href={item.href}
                className="text-black font-medium hover:text-[var(--color-primary)]/80 transition-colors"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* CTA Button */}
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden md:flex">
            <Link
              href="tel:+902123456789"
              className="text-black font-medium flex items-center gap-2 hover:text-[var(--color-primary)]/80 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+90 212 345 67 89</span>
            </Link>
          </NavbarItem> */}
          <NavbarItem>
            <Button
              as={NextLink}
              href="/iletisim"
              className="bg-white text-primary font-bold hover:bg-white/90 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-0"
              size="sm"
              radius="lg"
            >
              <span className="hidden sm:inline">Ücretsiz Danışmanlık</span>
              <span className="sm:hidden">Danışmanlık</span>
            </Button>
          </NavbarItem>
          <NavbarItem className="lg:hidden">
            <Button
              isIconOnly
              variant="light"
              aria-label="Navigasyon menüsünü aç"
              className="bg-white/20 hover:bg-white/30 text-white rounded-full shadow-sm focus:outline-none focus:ring-0"
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
  );
}
