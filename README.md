# AkaEğitim - Modern Eğitim Platformu

Next.js 16, React 19, TypeScript ve Tailwind CSS 4.x ile geliştirilmiş modern bir eğitim platformu web sitesi.

## Teknolojiler

- **Framework & Runtime**
  - Next.js 16.0.10
  - React 19.2.1
  - React DOM 19.2.1
  - TypeScript 5.x

- **Styling**
  - Tailwind CSS 4.x
  - PostCSS (@tailwindcss/postcss)

- **Animasyonlar**
  - Framer Motion 12.23.26

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
akaegitim/
├── app/
│   ├── globals.css          # Global CSS ve Tailwind import
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Ana sayfa
├── components/
│   ├── Header.tsx           # Header/Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Özellikler section
│   ├── About.tsx            # Hakkımızda section
│   ├── Services.tsx         # Hizmetler section
│   ├── Testimonials.tsx     # Referanslar section
│   ├── CTA.tsx              # Call to Action section
│   └── Footer.tsx           # Footer component
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## Özellikler

- ✅ Modern ve responsive tasarım
- ✅ Framer Motion ile animasyonlar
- ✅ Section bazlı component yapısı
- ✅ TypeScript desteği
- ✅ Tailwind CSS 4.x ile styling
- ✅ Mobile-first yaklaşım

## Geliştirme

Projeyi geliştirmek için:

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run start    # Production sunucusu
npm run lint     # Linting
```
# aka
