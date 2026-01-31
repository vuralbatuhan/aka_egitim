'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Sayfa değiştiğinde (herhangi bir link/buton tıklanınca) yeni sayfanın en üstünden açılmasını sağlar.
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
