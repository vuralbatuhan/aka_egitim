import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { HeroUIProvider } from '@heroui/react'
import '../styles/globals.css'
import ClientProvider from './client-provider'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://akaegitim.com.tr'),
  title: {
    default: 'Aka Eğitim | Yurtdışı Eğitim ve Dil Kursları',
    template: '%s | Aka Eğitim',
  },
  applicationName: 'Aka Eğitim',
  description:
    'Aka Eğitim; yurtdışında dil okulu, üniversite, yüksek lisans, work and study ve lise programları için uçtan uca danışmanlık sunan uzman bir eğitim ajansıdır.',
  keywords: [
    'yurtdışı eğitim danışmanlığı',
    'dil okulu',
    'yurtdışında üniversite',
    'yurtdışı yüksek lisans',
    'work and study',
    'uluslararası öğrenciler',
    'aka eğitim',
  ],
  authors: [{ name: 'Aka Eğitim' }],
  category: 'education',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://akaegitim.com.tr/',
    siteName: 'Aka Eğitim',
    title: 'Aka Eğitim | Yurtdışı Eğitim Danışmanlığı',
    description:
      'Yurtdışında dil, üniversite, yüksek lisans ve work and study programları için profesyonel danışmanlık hizmeti alın.',
    images: [
      {
        url: 'https://akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim yurtdışı eğitim danışmanlığı logosu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aka Eğitim | Yurtdışı Eğitim Danışmanlığı',
    description:
      'Yurtdışı dil okulu, üniversite ve yüksek lisans başvurularında profesyonel danışmanlık sunan Aka Eğitim ile tanışın.',
    images: ['https://akaegitim.com.tr/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/logo.jpg', type: 'image/jpeg' }],
    apple: '/logo.jpg',
  },
  other: {
    'format-detection': 'telephone=no, address=no, email=no',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${poppins.variable}`} data-scroll-behavior="smooth">
      <body 
        style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
        suppressHydrationWarning
      >
        <HeroUIProvider disableAnimation>
          <ClientProvider>{children}</ClientProvider>
        </HeroUIProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Aka Eğitim',
              url: 'https://akaegitim.com.tr',
              logo: 'https://akaegitim.com.tr/logo.jpg',
              description:
                'Aka Eğitim, yurtdışında dil eğitimi, üniversite, yüksek lisans, work and study ve lise programları için danışmanlık hizmeti sunar.',
              sameAs: ['https://akaegitim.com.tr'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://akaegitim.com.tr/iletisim',
                availableLanguage: ['Turkish', 'English'],
              },
            }),
          }}
        />
      </body>
    </html>
  )
}

