import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { HeroUIProvider } from '@heroui/react'
import '../styles/globals.css'
import ClientProvider from './client-provider'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

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
  metadataBase: new URL('https://www.akaegitim.com.tr'),
  title: {
    default: 'Aka Eğitim - Yurtdışı Eğitim Danışmanlığı | Dil Okulu, Üniversite, Yüksek Lisans',
    template: '%s | Aka Eğitim',
  },
  applicationName: 'Aka Eğitim',
  description:
    'Aka Eğitim ile yurtdışı dil okulu, üniversite, yüksek lisans, work and study programlarına başvurun. İngiltere, Almanya, İtalya, Finlandiya ve 50+ ülkede eğitim fırsatları. Ücretsiz danışmanlık için hemen başvurun!',
  keywords: [
    'aka eğitim',
    'aka egitim',
    'akaegitim',
    'akaeğitim',
    'aka eigitim',
    'aka e gitim',
    'aka education',
    'aka eğitim danışmanlık',
    'aka egitim danışmanlık',
    'aka eğitim istanbul',
    'aka egitim istanbul',
    'yurtdışı eğitim',
    'yurt dışı eğitim',
    'yurtdışı eğitim danışmanlığı',
    'yurt dışı eğitim danışmanlığı',
    'yurtdışı eğitim ajansı',
    'yurt dışı eğitim ajansı',
    'eğitim danışmanlığı',
    'egitim danışmanlığı',
    'dil okulu',
    'yurtdışı dil okulu',
    'yurt dışı dil okulu',
    'dil kursu',
    'ingilizce dil okulu',
    'almanca dil okulu',
    'ingiltere dil okulu',
    'finlandiya dil okulu',
    'almanya dil okulu',
    'malta dil okulu',
    'italya dil okulu',
    'yurtdışında üniversite',
    'yurt dışında üniversite',
    'yurtdışı üniversite',
    'yurt dışı üniversite',
    'yurtdışı üniversite okumak',
    'ingiltere üniversite',
    'almanya üniversite',
    'italya üniversite',
    'finlandiya üniversite',
    'yurtdışı yüksek lisans',
    'yurt dışı yüksek lisans',
    'yurt dışı master',
    'yurtdışı master',
    'work and study',
    'work and travel',
    'öğretmen hareketliliği',
    'ogretmen hareketliligi',
    'erasmus',
    'erasmus programı',
    'education abroad',
    'study abroad',
    'language school',
    'study in uk',
    'study in germany',
  ],
  authors: [{ name: 'Aka Eğitim', url: 'https://www.akaegitim.com.tr' }],
  creator: 'Aka Eğitim',
  publisher: 'Aka Eğitim',
  category: 'education',
  classification: 'Education',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.akaegitim.com.tr/',
    siteName: 'Aka Eğitim - Yurtdışı Eğitim Danışmanlığı',
    title: 'Aka Eğitim - Yurtdışı Eğitim Danışmanlığı | Dil Okulu & Üniversite',
    description:
      'Yurtdışı dil okulu, üniversite, yüksek lisans ve work and study programları için profesyonel danışmanlık. 50+ ülkede eğitim fırsatları. Ücretsiz danışmanlık!',
    images: [
      {
        url: 'https://www.akaegitim.com.tr/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aka Eğitim - Yurtdışı Eğitim Danışmanlığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aka Eğitim - Yurtdışı Eğitim Danışmanlığı',
    description:
      'Yurtdışı dil okulu, üniversite ve yüksek lisans programları için profesyonel danışmanlık. 50+ ülkede eğitim fırsatları.',
    images: ['https://www.akaegitim.com.tr/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-buraya-gelecek',
  },
  alternates: {
    canonical: 'https://www.akaegitim.com.tr',
  },
  icons: {
    icon: [
      { url: '/logo.jpg', type: 'image/jpeg' },
      // { url: '/favicon.ico' },
      // { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      // { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/logo.jpg',
    shortcut: '/logo.jpg',
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
      <head>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />

        <link rel="icon" type="image/jpeg" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="shortcut icon" href="/logo.jpg" />

        <meta name="google-site-verification" content="google-site-verification-code-buraya-gelecek" />
        <meta name="author" content="Aka Eğitim" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />

        <link rel="canonical" href="https://www.akaegitim.com.tr" />

        <meta httpEquiv="content-language" content="tr" />

        {/* Eski favicon'lar - yorum satırında
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        */}
      </head>
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
              alternateName: ['Aka Egitim', 'AkaEgitim', 'Aka Eğitim Danışmanlık', 'Aka Education'],
              url: 'https://www.akaegitim.com.tr',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.akaegitim.com.tr/logo.jpg',
                width: 1200,
                height: 630,
              },
              image: 'https://www.akaegitim.com.tr/logo.jpg',
              description:
                'Aka Eğitim, yurtdışı dil okulu, üniversite, yüksek lisans, work and study ve lise programları için profesyonel eğitim danışmanlığı hizmeti sunar. İngiltere, Almanya, İtalya, Malta ve 50+ ülkede eğitim fırsatları.',
              slogan: 'Yurtdışı Eğitimde Güvenilir Çözüm Ortağınız',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'TR',
                addressLocality: 'İstanbul',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Turkey',
              },
              audience: {
                '@type': 'Audience',
                audienceType: 'Öğrenciler, Mezunlar, Profesyoneller',
              },
              serviceType: [
                'Yurtdışı Dil Okulu Danışmanlığı',
                'Yurtdışı Üniversite Başvuru Danışmanlığı',
                'Yurtdışı Yüksek Lisans Danışmanlığı',
                'Work and Study Programları',
                'Yurtdışında Lise Eğitimi',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Yurtdışı Eğitim Programları',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Dil Okulu Danışmanlığı',
                      description: 'İngiltere, Almanya, Malta, İtalya ve diğer ülkelerde dil okulu programları',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Üniversite Danışmanlığı',
                      description: 'Yurtdışı üniversitelere başvuru ve kabul süreci danışmanlığı',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Yüksek Lisans Danışmanlığı',
                      description: 'Master ve MBA programları için profesyonel danışmanlık',
                    },
                  },
                ],
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  url: 'https://www.akaegitim.com.tr/iletisim',
                  availableLanguage: ['Turkish', 'English'],
                  areaServed: 'TR',
                },
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer support',
                  url: 'https://www.akaegitim.com.tr/iletisim',
                  availableLanguage: ['Turkish', 'English'],
                },
              ],
              sameAs: [
                'https://www.akaegitim.com.tr',
              ],
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.akaegitim.com.tr/ulkeler/{country}',
                },
                'query-input': 'required name=country',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Aka Eğitim',
              alternateName: ['Aka Egitim', 'AkaEgitim', 'Aka E Gitim', 'Aka Eigitim'],
              url: 'https://www.akaegitim.com.tr',
              description: 'Yurtdışı eğitim danışmanlığı - Dil okulu, üniversite, yüksek lisans programları',
              inLanguage: 'tr',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.akaegitim.com.tr/?s={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}

