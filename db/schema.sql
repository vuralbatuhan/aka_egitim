-- AKADER - Anadolu web sitesi veritabanı şeması (self-hosted PostgreSQL 13+)
-- Supabase'den taşınmıştır. Tek seferlik kurulum için tasarlanmıştır:
--   psql "$DATABASE_URL" -f db/schema.sql
--
-- gen_random_uuid() PostgreSQL 13'ten beri çekirdekte yerleşik olduğu için
-- pgcrypto uzantısına (superuser gerektirir) ihtiyaç yok. Uygulama
-- kullanıcısının (aka_app) sahip olduğu bir veritabanında çalıştırın.

-- =============================================================================
-- ADMINS — admin paneli girişi (eski Supabase Auth + verify_admin RPC yerine)
-- =============================================================================
CREATE TABLE IF NOT EXISTS admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW())
);

-- İlk admin kullanıcısını oluşturmak için: npm run create-admin

-- =============================================================================
-- INSTAGRAM POSTS — ana sayfada gösterilen Instagram gönderileri
-- =============================================================================
CREATE TABLE IF NOT EXISTS instagram_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  link TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_instagram_posts_order ON instagram_posts(order_index, is_active);

-- =============================================================================
-- CONTACT SUBMISSIONS — öğrenci kayıt / üniversite başvuru formu
-- =============================================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  tc_kimlik CHAR(11) NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  high_school TEXT,
  high_school_type TEXT,
  high_school_grade TEXT,
  yks_score TEXT,
  foreign_language TEXT,
  language_level TEXT,
  target_degree TEXT,
  target_department TEXT,
  preferred_country_city TEXT,
  preferred_university TEXT,
  target_education_language TEXT,
  kvkk_accepted BOOLEAN DEFAULT false,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_read ON contact_submissions(is_read);

-- =============================================================================
-- PROGRAMS / PROGRAM_IMAGES — "Programlar" sayfasındaki görsel galerisi
-- =============================================================================
CREATE TABLE IF NOT EXISTS programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  school_name TEXT,
  duration_text TEXT,
  dates_text TEXT,
  highlights JSONB DEFAULT '[]'::jsonb,
  included_items JSONB DEFAULT '[]'::jsonb,
  extra_advantages JSONB DEFAULT '[]'::jsonb,
  contact_name TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_programs_order ON programs(order_index, is_active);

CREATE TABLE IF NOT EXISTS program_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id UUID NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_program_images_program ON program_images(program_id, order_index);

-- =============================================================================
-- UYELIK_BASVURULARI — üyelik formu + il temsilcileri dizini (aynı tablo)
-- =============================================================================
CREATE TABLE IF NOT EXISTS uyelik_basvurulari (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ad TEXT NOT NULL,
  soyad TEXT NOT NULL,
  email TEXT NOT NULL,
  tc_kimlik CHAR(11),
  telefon TEXT,
  dogum_tarihi DATE,
  adres TEXT,
  gorev_unvan TEXT,
  kan_grubu TEXT,
  egitim_durumu TEXT,
  alan_brans TEXT,
  ikamet_il TEXT,
  gorev_il TEXT NOT NULL,
  kayit_sartlari BOOLEAN DEFAULT false,
  foto_url TEXT,
  created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_uyelik_gorev_il ON uyelik_basvurulari(gorev_il);
CREATE INDEX IF NOT EXISTS idx_uyelik_created ON uyelik_basvurulari(created_at DESC);
