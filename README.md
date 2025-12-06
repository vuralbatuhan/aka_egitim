# Aka Eğitim - Yurtdışı Eğitim Platformu

Modern ve kullanıcı dostu yurtdışı eğitim danışmanlık platformu.

## 🚀 Teknolojiler

- **Next.js 15.5.4** - React framework
- **React 19** - UI library
- **HeroUI** - Component library
- **Tailwind CSS 4** - Styling
- **Supabase** - Database & Backend
- **TypeScript** - Type safety

## 📋 Özellikler

- ✅ Tam responsive tasarım
- ✅ SEO optimized
- ✅ Form yönetimi ve istatistikler
- ✅ Admin panel
- ✅ Multi-country support
- ✅ Blog sistemi
- ✅ WhatsApp entegrasyonu

## 🛠️ Kurulum

```bash
# Dependencies yükle
npm install

# Development server başlat
npm run dev

# Production build
npm run build

# Production server başlat
npm start
```

## 🔐 Çevre Değişkenleri

Projeyi çalıştırmak için aşağıdaki çevre değişkenlerini ayarlayın:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_url
```

## 🗄️ Veritabanı

Supabase veritabanı kurulumu için `contact_submissions_setup.sql` dosyasını SQL Editor'de çalıştırın.

## 📦 Deployment

### Natro

1. Repository'yi clone edin
2. `npm run build` komutunu çalıştırın
3. `.next` klasörünü FTP ile yükleyin

### Cloudflare Pages

1. GitHub repository'yi bağlayın
2. Build komut: `npm run build`
3. Output directory: `.next`
4. Environment variables ekleyin

## 📝 Lisans

MIT
