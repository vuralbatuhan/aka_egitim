-- Contact Submissions Table (form gönderimleri için)
-- Mevcut schema yapınıza uygun versiyon
-- Bu SQL'i Supabase Dashboard > SQL Editor'de çalıştırın

CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id text NOT NULL PRIMARY KEY DEFAULT gen_random_uuid()::text,
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

-- Başarı mesajı
SELECT 'contact_submissions table created successfully!' AS status;

