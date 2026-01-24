-- Sadece yeni eklenen DELETE policy'si
-- Bu dosyayı Supabase SQL Editor'de çalıştırın

-- Policy: Only authenticated users can delete contact submissions
CREATE POLICY "Authenticated users can delete contact submissions"
  ON contact_submissions
  FOR DELETE
  USING (auth.role() = 'authenticated');
