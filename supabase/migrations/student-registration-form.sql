-- Migration: Öğrenci Kayıt Formu - contact_submissions tablo güncellemesi
-- Eski form alanları kaldırılıp yeni kayıt formu alanları eklendi.

-- 1. Yeni sütunları ekle
ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS full_name TEXT,
  ADD COLUMN IF NOT EXISTS tc_kimlik CHAR(11),
  ADD COLUMN IF NOT EXISTS high_school_type TEXT,
  ADD COLUMN IF NOT EXISTS high_school_grade TEXT,
  ADD COLUMN IF NOT EXISTS yks_score TEXT,
  ADD COLUMN IF NOT EXISTS foreign_language TEXT,
  ADD COLUMN IF NOT EXISTS target_degree TEXT,
  ADD COLUMN IF NOT EXISTS target_department TEXT,
  ADD COLUMN IF NOT EXISTS preferred_country_city TEXT,
  ADD COLUMN IF NOT EXISTS preferred_university TEXT,
  ADD COLUMN IF NOT EXISTS target_education_language TEXT;

-- 2. Mevcut first_name + last_name verilerini full_name'e taşı
UPDATE contact_submissions
  SET full_name = TRIM(COALESCE(first_name, '') || ' ' || COALESCE(last_name, ''))
  WHERE full_name IS NULL;

-- NULL veya boş full_name değerlerini güvenli hale getir
UPDATE contact_submissions
  SET full_name = 'Bilinmiyor'
  WHERE full_name IS NULL OR TRIM(full_name) = '';

-- 3. interested_country kısıtlamasını kaldır
ALTER TABLE contact_submissions
  DROP CONSTRAINT IF EXISTS chk_contact_submissions_interested_country;

-- 4. Eski sütunları kaldır
ALTER TABLE contact_submissions
  DROP COLUMN IF EXISTS first_name,
  DROP COLUMN IF EXISTS last_name,
  DROP COLUMN IF EXISTS interested_country,
  DROP COLUMN IF EXISTS program_type,
  DROP COLUMN IF EXISTS program,
  DROP COLUMN IF EXISTS message;

-- 5. full_name NOT NULL yap
ALTER TABLE contact_submissions
  ALTER COLUMN full_name SET NOT NULL;

-- 6. email ve city NOT NULL yap (mevcut NULL değerleri önce düzelt)
UPDATE contact_submissions SET email = '' WHERE email IS NULL;
UPDATE contact_submissions SET city = '' WHERE city IS NULL;
ALTER TABLE contact_submissions
  ALTER COLUMN email SET NOT NULL,
  ALTER COLUMN city SET NOT NULL;
