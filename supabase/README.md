# Supabase Setup Instructions

## 1. Supabase Projesi Oluşturma

1. [Supabase](https://supabase.com) hesabı oluşturun
2. Yeni bir proje oluşturun
3. Proje ayarlarından URL ve Anon Key'i kopyalayın

## 2. Database Schema Kurulumu

1. Supabase Dashboard'a gidin
2. SQL Editor'ü açın
3. `schema.sql` dosyasındaki SQL kodunu çalıştırın

## 3. Authentication (Auth) Kurulumu

1. Supabase Dashboard → Authentication → Settings
2. "Enable Email Provider" seçeneğini açın
3. İlk admin kullanıcısını oluşturun:
   - Authentication → Users → "Add User" butonuna tıklayın
   - Email ve şifre girin
   - "Auto Confirm User" seçeneğini işaretleyin
   - Kullanıcıyı oluşturun

## 4. Environment Variables

1. `.env.local.example` dosyasını `.env.local` olarak kopyalayın
2. Supabase URL ve Anon Key'i ekleyin:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 5. Row Level Security (RLS) Ayarları

Schema SQL'i çalıştırdıktan sonra:
- Instagram posts: Herkes okuyabilir (is_active=true olanlar), sadece authenticated kullanıcılar yönetebilir
- Contact submissions: Herkes ekleyebilir, sadece authenticated kullanıcılar okuyabilir ve güncelleyebilir

## 6. İlk Admin Kullanıcısı Oluşturma

Supabase Dashboard'dan:
1. Authentication → Users → Add User
2. Email ve şifre girin (bu bilgileri güvenli bir yerde saklayın)
3. "Auto Confirm User" seçeneğini işaretleyin
4. Kullanıcıyı oluşturun

## 7. Storage (Dosya Yükleme) Kurulumu

Görsel yükleme özelliği için:
1. `storage-setup.md` dosyasındaki talimatları takip edin
2. `images` adında bir public bucket oluşturun
3. Storage policy'lerini SQL Editor'de çalıştırın

Artık `/aka-2026-admin/login` sayfasından bu bilgilerle giriş yapabilir ve görselleri yükleyebilirsiniz.
