-- Yeni eklenen Authentication Policy'leri
-- Bu dosyayı Supabase SQL Editor'de çalıştırın

-- Policy: Only authenticated users can manage instagram posts
CREATE POLICY "Authenticated users can manage instagram posts"
  ON instagram_posts
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can read all contact submissions
CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update contact submissions
CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can delete contact submissions
CREATE POLICY "Authenticated users can delete contact submissions"
  ON contact_submissions
  FOR DELETE
  USING (auth.role() = 'authenticated');
