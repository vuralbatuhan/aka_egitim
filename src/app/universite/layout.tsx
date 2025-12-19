import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Yurtdışı Üniversite Eğitimi ve Başvuru Şartları | Aka Eğitim',
    description: 'İngiltere, Almanya, İtalya, Hollanda ve diğer ülkelerde üniversite eğitimi, kabul şartları, ücretler ve başvuru süreçleri hakkında ücretsiz danışmanlık alın.',
    alternates: {
        canonical: '/universite',
    },
    openGraph: {
        title: 'Yurtdışı Üniversite Danışmanlığı | Aka Eğitim',
        description: 'Yurtdışındaki en iyi üniversitelere başvururken yanınızdayız. Bölüm seçimi, başvuru ve vize süreçlerinde profesyonel destek.',
        url: 'https://www.akaegitim.com.tr/universite',
    },
}

export default function UniversiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
