-- Sadece contact_submissions tablosuna yeni alanlar + ilgilendiği ülke kısıtı (policy yok)

ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS email TEXT,
  ADD COLUMN IF NOT EXISTS high_school TEXT,
  ADD COLUMN IF NOT EXISTS interested_country TEXT;

ALTER TABLE contact_submissions
  DROP CONSTRAINT IF EXISTS chk_contact_submissions_interested_country;

ALTER TABLE contact_submissions
  ADD CONSTRAINT chk_contact_submissions_interested_country
  CHECK (
    interested_country IS NULL
    OR interested_country IN (
      'Amerika', 'Kanada', 'İngiltere', 'Finlandiya',
      'Almanya', 'İtalya', 'İsviçre', 'Belçika'
    )
  );

-- KVKK onayı (form gönderimi için işaretlenmeli)
ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS kvkk_accepted BOOLEAN DEFAULT false;
