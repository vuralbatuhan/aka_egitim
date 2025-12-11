import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Yurtdışı Dil Okulları ve Fiyatları | Aka Eğitim',
    description: 'İngiltere, Amerika, Kanada, Malta ve İrlanda başta olmak üzere dünyanın en iyi dil okulları, fiyatları ve konaklama seçenekleri hakkında ücretsiz danışmanlık alın.',
    alternates: {
        canonical: '/dil-okullari',
    },
    openGraph: {
        title: 'Yurtdışı Dil Okulları | Aka Eğitim',
        description: 'Yurtdışında dil eğitimi alarak kariyerinize değer katın. Size özel okul ve program seçeneklerini inceleyin.',
        url: 'https://akaegitim.com.tr/dil-okullari',
    },
}

export default function DilOkullariLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
