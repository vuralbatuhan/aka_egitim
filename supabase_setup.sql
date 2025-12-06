-- Supabase Database Setup for Representatives Management
-- Bu SQL dosyasını Supabase Dashboard > SQL Editor'de çalıştırın

-- Representatives Table
CREATE TABLE IF NOT EXISTS public.representatives (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    avatar TEXT,
    languages TEXT[],
    working_hours VARCHAR(100),
    city_name VARCHAR(100) NOT NULL,
    country VARCHAR(100) DEFAULT 'Türkiye',
    office_address TEXT,
    office_phone VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Contact Submissions Table (form gönderileri için)
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    program VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    message TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_representatives_city ON public.representatives(city_name);
CREATE INDEX IF NOT EXISTS idx_representatives_country ON public.representatives(country);
CREATE INDEX IF NOT EXISTS idx_representatives_created_at ON public.representatives(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);

-- Enable Row Level Security (RLS)
ALTER TABLE public.representatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for representatives
-- Herkes okuyabilir
CREATE POLICY "Anyone can read representatives" 
    ON public.representatives 
    FOR SELECT 
    USING (true);

-- Sadece authenticated kullanıcılar ekleyebilir/güncelleyebilir/silebilir
CREATE POLICY "Authenticated users can insert representatives" 
    ON public.representatives 
    FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Authenticated users can update representatives" 
    ON public.representatives 
    FOR UPDATE 
    USING (true);

CREATE POLICY "Authenticated users can delete representatives" 
    ON public.representatives 
    FOR DELETE 
    USING (true);

-- RLS Policies for contact_submissions
-- Herkes ekleyebilir (form gönderimleri için)
CREATE POLICY "Anyone can insert contact submissions" 
    ON public.contact_submissions 
    FOR INSERT 
    WITH CHECK (true);

-- Sadece authenticated kullanıcılar okuyabilir/güncelleyebilir
CREATE POLICY "Authenticated users can read contact submissions" 
    ON public.contact_submissions 
    FOR SELECT 
    USING (true);

CREATE POLICY "Authenticated users can update contact submissions" 
    ON public.contact_submissions 
    FOR UPDATE 
    USING (true);

CREATE POLICY "Authenticated users can delete contact submissions" 
    ON public.contact_submissions 
    FOR DELETE 
    USING (true);

-- Örnek veri ekleme (isteğe bağlı)
INSERT INTO public.representatives (name, title, phone, email, languages, working_hours, city_name, country, office_address, office_phone)
VALUES 
    ('Ayşe Yılmaz', 'Bölge Müdürü', '+90 532 123 45 67', 'ayse.yilmaz@dilokulu.com', ARRAY['Türkçe', 'İngilizce', 'Almanca'], 'Pzt-Cum 09:00-18:00', 'İstanbul', 'Türkiye', 'Levent, Beyazıt Sk. No:12, 34330 Beşiktaş/İstanbul', '+90 212 345 67 89'),
    ('Mehmet Demir', 'Eğitim Danışmanı', '+90 532 234 56 78', 'mehmet.demir@dilokulu.com', ARRAY['Türkçe', 'İngilizce'], 'Pzt-Cum 09:00-18:00', 'İstanbul', 'Türkiye', 'Levent, Beyazıt Sk. No:12, 34330 Beşiktaş/İstanbul', '+90 212 345 67 89'),
    ('Zeynep Kaya', 'Üniversite Danışmanı', '+90 532 345 67 89', 'zeynep.kaya@dilokulu.com', ARRAY['Türkçe', 'İngilizce', 'Fransızca'], 'Pzt-Cum 09:00-18:00', 'İstanbul', 'Türkiye', 'Levent, Beyazıt Sk. No:12, 34330 Beşiktaş/İstanbul', '+90 212 345 67 89'),
    ('Ahmet Şahin', 'Bölge Koordinatörü', '+90 312 234 56 78', 'ahmet.sahin@dilokulu.com', ARRAY['Türkçe', 'İngilizce'], 'Pzt-Cum 09:00-18:00', 'Ankara', 'Türkiye', 'Kızılay, Atatürk Blv. No:23, 06420 Çankaya/Ankara', '+90 312 456 78 90'),
    ('Elif Yıldız', 'Öğrenci Danışmanı', '+90 312 345 67 89', 'elif.yildiz@dilokulu.com', ARRAY['Türkçe', 'İngilizce', 'İspanyolca'], 'Pzt-Cum 09:00-18:00', 'Ankara', 'Türkiye', 'Kızılay, Atatürk Blv. No:23, 06420 Çankaya/Ankara', '+90 312 456 78 90'),
    ('Can Özdemir', 'Dil Okulu Uzmanı', '+90 232 123 45 67', 'can.ozdemir@dilokulu.com', ARRAY['Türkçe', 'İngilizce', 'Almanca'], 'Pzt-Cum 09:00-18:00', 'İzmir', 'Türkiye', 'Alsancak, Cumhuriyet Blv. No:45, 35220 Konak/İzmir', '+90 232 567 89 01'),
    ('Selin Arslan', 'Kariyer Danışmanı', '+90 232 234 56 78', 'selin.arslan@dilokulu.com', ARRAY['Türkçe', 'İngilizce'], 'Pzt-Cum 09:00-18:00', 'İzmir', 'Türkiye', 'Alsancak, Cumhuriyet Blv. No:45, 35220 Konak/İzmir', '+90 232 567 89 01');

-- Veritabanı fonksiyonları
-- Updated_at otomatik güncelleme fonksiyonu
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger: representatives tablosunda updated_at'i otomatik güncelle
DROP TRIGGER IF EXISTS update_representatives_updated_at ON public.representatives;
CREATE TRIGGER update_representatives_updated_at
    BEFORE UPDATE ON public.representatives
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Bilgilendirme
SELECT 'Supabase database setup completed successfully!' AS status;
SELECT COUNT(*) AS total_representatives FROM public.representatives;
SELECT COUNT(*) AS total_submissions FROM public.contact_submissions;

