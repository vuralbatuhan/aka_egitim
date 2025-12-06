import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export interface MobileMenuItem {
  name: string
  href: string
  description?: string
  badge?: string
}

export interface MobileMenuSection {
  title: string
  items: MobileMenuItem[]
}

interface MobileGridMenuProps {
  isOpen: boolean
  onClose: () => void
  sections: MobileMenuSection[]
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 30 } },
  exit: { opacity: 0, y: 32, transition: { duration: 0.15 } },
}

export default function MobileGridMenu({ isOpen, onClose, sections }: MobileGridMenuProps) {
  const router = useRouter()
  const pathname = usePathname()
  const previousPath = useRef(pathname)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isNavigating) {
      previousPath.current = pathname
      return
    }

    if (previousPath.current !== pathname) {
      previousPath.current = pathname
      setIsNavigating(false)
      onClose()
    }
  }, [pathname, isNavigating, onClose])

  const handleNavigation = (href: string) => {
    if (isNavigating) return
    if (pathname === href) {
      onClose()
      return
    }
    setIsNavigating(true)
    router.push(href)
  }

  return (
    <AnimatePresence>
      {(isOpen || isNavigating) && (
        <motion.div
          className="lg:hidden fixed inset-0 z-[999] bg-black/60 backdrop-blur-md"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-modal="true"
          role="dialog"
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-x-4 bottom-6 top-20 rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-200"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
          >
            {isNavigating && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                <p className="mt-4 text-sm font-semibold text-primary">Sayfa yükleniyor...</p>
              </div>
            )}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Menü</p>
                <h3 className="text-lg font-bold text-gray-900">Navigasyon</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Menüyü kapat"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="h-full overflow-y-auto px-6 py-6 pb-24 space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">{section.title}</h4>
                    <span className="h-px flex-1 ml-3 bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {section.items.map((item) => (
                      <motion.div
                        key={item.href}
                        whileTap={{ scale: 0.98 }}
                        className="group"
                      >
                        <button
                          type="button"
                          onClick={() => handleNavigation(item.href)}
                          className="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60"
                          disabled={isNavigating}
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                            {item.badge && (
                              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs leading-relaxed text-gray-500">
                              {item.description}
                            </p>
                          )}
                          <span className="mt-auto flex items-center text-xs font-semibold text-primary transition-colors group-hover:text-primary-600">
                            İncele
                            <ArrowRightIcon className="ml-1 h-3.5 w-3.5" />
                          </span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

