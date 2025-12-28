import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.akaegitim.com.tr'

  // Statik sayfalar
  const staticPages = [
    '',
    '/dil-okullari',
    '/universite',
    '/yuksek-lisans',
    '/ogretmen-hareketliligi',
    '/work-and-study',
    '/yurtdisinda-lise',
    '/hakkimizda',
    '/iletisim',
    '/blog',
  ]

  // Ülke sayfaları
  const countries = [
    'italya',
    'almanya',
    'ingiltere',
    'finlandiya',
    'isvicre',
    'fransa',
    'belcika',
    'hollanda',
    'kazakistan',
    'malta',
    'isvec',
    'ispanya',
  ]

  // Blog sayfaları
  const blogPosts = [
    'almanya-ucretsiz-universite',
    'dil-okulu-secimi',
    'ingiltere-universite-rehberi',
  ]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const countryRoutes = countries.map((country) => ({
    url: `${baseUrl}/ulkeler/${country}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...countryRoutes, ...blogRoutes]
}
