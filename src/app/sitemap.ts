import type { MetadataRoute } from 'next'

const BASE_URL = 'https://akaegitim.com.tr'

const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: '/', priority: 1.0 },
  { path: '/dil-okullari', priority: 0.9 },
  { path: '/universite', priority: 0.9 },
  { path: '/yuksek-lisans', priority: 0.9 },
  { path: '/work-and-study', priority: 0.9 },
  { path: '/yurtdisinda-lise', priority: 0.85 },
  { path: '/hakkimizda', priority: 0.8 },
  { path: '/biz-kimiz', priority: 0.75 },
  { path: '/nicin-kurduk', priority: 0.75 },
  { path: '/ne-yapmak-istiyoruz', priority: 0.75 },
  { path: '/iletisim', priority: 0.8 },
  { path: '/blog', priority: 0.8 },
]

const blogRoutes = [
  '/blog/almanya-ucretsiz-universite',
  '/blog/dil-okulu-secimi',
  '/blog/ingiltere-universite-rehberi',
]

const countryRoutes = [
  '/ulkeler/italya',
  '/ulkeler/belcika',
  '/ulkeler/almanya',
  '/ulkeler/kazakistan',
  '/ulkeler/hollanda',
  '/ulkeler/ingiltere',
  '/ulkeler/finlandiya',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route.path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: route.priority,
    })),
    ...blogRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...countryRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ]
}

