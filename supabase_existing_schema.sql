-- Mevcut Supabase Şemanıza Göre Güncelleme ve RLS Politikaları
-- Bu SQL dosyasını Supabase Dashboard > SQL Editor'de çalıştırın

-- RLS'i aktifleştir
ALTER TABLE public.city_representatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.representatives ENABLE ROW LEVEL SECURITY;

-- RLS Policies for city_representatives
-- Herkes okuyabilir
DROP POLICY IF EXISTS "Anyone can read cities" ON public.city_representatives;
CREATE POLICY "Anyone can read cities" 
    ON public.city_representatives 
    FOR SELECT 
    USING (true);

-- Herkes ekleyebilir/güncelleyebilir/silebilir (authenticated kullanıcılar için kısıtlama ekleyebilirsiniz)
DROP POLICY IF EXISTS "Anyone can insert cities" ON public.city_representatives;
CREATE POLICY "Anyone can insert cities" 
    ON public.city_representatives 
    FOR INSERT 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can update cities" ON public.city_representatives;
CREATE POLICY "Anyone can update cities" 
    ON public.city_representatives 
    FOR UPDATE 
    USING (true);

DROP POLICY IF EXISTS "Anyone can delete cities" ON public.city_representatives;
CREATE POLICY "Anyone can delete cities" 
    ON public.city_representatives 
    FOR DELETE 
    USING (true);

-- RLS Policies for representatives
-- Herkes okuyabilir
DROP POLICY IF EXISTS "Anyone can read representatives" ON public.representatives;
CREATE POLICY "Anyone can read representatives" 
    ON public.representatives 
    FOR SELECT 
    USING (true);

-- Herkes ekleyebilir/güncelleyebilir/silebilir
DROP POLICY IF EXISTS "Anyone can insert representatives" ON public.representatives;
CREATE POLICY "Anyone can insert representatives" 
    ON public.representatives 
    FOR INSERT 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can update representatives" ON public.representatives;
CREATE POLICY "Anyone can update representatives" 
    ON public.representatives 
    FOR UPDATE 
    USING (true);

DROP POLICY IF EXISTS "Anyone can delete representatives" ON public.representatives;
CREATE POLICY "Anyone can delete representatives" 
    ON public.representatives 
    FOR DELETE 
    USING (true);

-- Trigger fonksiyonu: updated_at otomatik güncelleme
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger: city_representatives tablosunda updated_at'i otomatik güncelle
DROP TRIGGER IF EXISTS update_city_representatives_updated_at ON public.city_representatives;
CREATE TRIGGER update_city_representatives_updated_at
    BEFORE UPDATE ON public.city_representatives
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger: representatives tablosunda updated_at'i otomatik güncelle
DROP TRIGGER IF EXISTS update_representatives_updated_at ON public.representatives;
CREATE TRIGGER update_representatives_updated_at
    BEFORE UPDATE ON public.representatives
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Contact Submissions Table (form gönderimleri için)
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id text NOT NULL PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    city text NOT NULL,
    program text NOT NULL,
    country text NOT NULL,
    message text,
    status text DEFAULT 'new',
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT contact_submissions_status_check CHECK (status IN ('new', 'contacted', 'completed'))
);

-- RLS'i aktifleştir
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions
-- Herkes form gönderebilir
DROP POLICY IF EXISTS "Anyone can insert submissions" ON public.contact_submissions;
CREATE POLICY "Anyone can insert submissions" 
    ON public.contact_submissions 
    FOR INSERT 
    WITH CHECK (true);

-- Herkes okuyabilir (admin için)
DROP POLICY IF EXISTS "Anyone can read submissions" ON public.contact_submissions;
CREATE POLICY "Anyone can read submissions" 
    ON public.contact_submissions 
    FOR SELECT 
    USING (true);

-- Herkes güncelleyebilir (admin için durum değişikliği)
DROP POLICY IF EXISTS "Anyone can update submissions" ON public.contact_submissions;
CREATE POLICY "Anyone can update submissions" 
    ON public.contact_submissions 
    FOR UPDATE 
    USING (true);

-- Herkes silebilir (admin için)
DROP POLICY IF EXISTS "Anyone can delete submissions" ON public.contact_submissions;
CREATE POLICY "Anyone can delete submissions" 
    ON public.contact_submissions 
    FOR DELETE 
    USING (true);

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);

-- Örnek veri ekleme (eğer veri yoksa)
-- Önce şehir ekleyelim
INSERT INTO public.city_representatives (id, city_name, office_address, office_phone, created_at, updated_at)
VALUES 
    ('city_istanbul', 'İstanbul', 'Levent, Beyazıt Sk. No:12, 34330 Beşiktaş/İstanbul', '+90 212 345 67 89', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('city_ankara', 'Ankara', 'Kızılay, Atatürk Blv. No:23, 06420 Çankaya/Ankara', '+90 312 456 78 90', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('city_izmir', 'İzmir', 'Alsancak, Cumhuriyet Blv. No:45, 35220 Konak/İzmir', '+90 232 567 89 01', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

-- Temsilcileri ekleyelim
INSERT INTO public.representatives (id, name, title, phone, email, languages, working_hours, city_id, created_at, updated_at)
VALUES 
    ('rep_1', 'Ayşe Yılmaz', 'Bölge Müdürü', '+90 532 123 45 67', 'ayse.yilmaz@dilokulu.com', ARRAY['Türkçe', 'İngilizce', 'Almanca'], 'Pzt-Cum 09:00-18:00', 'city_istanbul', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('rep_2', 'Mehmet Demir', 'Eğitim Danışmanı', '+90 532 234 56 78', 'mehmet.demir@dilokulu.com', ARRAY['Türkçe', 'İngilizce'], 'Pzt-Cum 09:00-18:00', 'city_istanbul', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('rep_3', 'Zeynep Kaya', 'Üniversite Danışmanı', '+90 532 345 67 89', 'zeynep.kaya@dilokulu.com', ARRAY['Türkçe', 'İngilizce', 'Fransızca'], 'Pzt-Cum 09:00-18:00', 'city_istanbul', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('rep_4', 'Ahmet Şahin', 'Bölge Koordinatörü', '+90 312 234 56 78', 'ahmet.sahin@dilokulu.com', ARRAY['Türkçe', 'İngilizce'], 'Pzt-Cum 09:00-18:00', 'city_ankara', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('rep_5', 'Elif Yıldız', 'Öğrenci Danışmanı', '+90 312 345 67 89', 'elif.yildiz@dilokulu.com', ARRAY['Türkçe', 'İngilizce', 'İspanyolca'], 'Pzt-Cum 09:00-18:00', 'city_ankara', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('rep_6', 'Can Özdemir', 'Dil Okulu Uzmanı', '+90 232 123 45 67', 'can.ozdemir@dilokulu.com', ARRAY['Türkçe', 'İngilizce', 'Almanca'], 'Pzt-Cum 09:00-18:00', 'city_izmir', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('rep_7', 'Selin Arslan', 'Kariyer Danışmanı', '+90 232 234 56 78', 'selin.arslan@dilokulu.com', ARRAY['Türkçe', 'İngilizce'], 'Pzt-Cum 09:00-18:00', 'city_izmir', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (id) DO NOTHING;

-- Indexler (performans için)
CREATE INDEX IF NOT EXISTS idx_representatives_city_id ON public.representatives(city_id);
CREATE INDEX IF NOT EXISTS idx_city_representatives_name ON public.city_representatives(city_name);

-- Bilgilendirme
SELECT 'Setup completed successfully!' AS status;
SELECT COUNT(*) AS total_cities FROM public.city_representatives;
SELECT COUNT(*) AS total_representatives FROM public.representatives;
SELECT COUNT(*) AS total_contact_submissions FROM public.contact_submissions;

-- Tablo listesi
SELECT 
    'All tables created!' AS message,
    'city_representatives' AS table_1,
    'representatives' AS table_2,
    'contact_submissions' AS table_3;

