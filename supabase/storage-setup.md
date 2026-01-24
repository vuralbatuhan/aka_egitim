# Supabase Storage Kurulumu

## 1. Storage Bucket Oluşturma

1. Supabase Dashboard'a gidin
2. **Storage** sekmesine tıklayın
3. **New bucket** butonuna tıklayın
4. Bucket ayarları:
   - **Name**: `images`
   - **Public bucket**: ✅ İşaretleyin (görsellerin herkese açık olması için)
   - **File size limit**: 5 MB (veya istediğiniz limit)
   - **Allowed MIME types**: `image/*` (sadece görseller)

## 2. Storage Policy Ayarları

Bucket oluşturduktan sonra, SQL Editor'de şu policy'leri çalıştırın:

```sql
-- Herkes görselleri okuyabilir (public bucket için)
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

-- Authenticated kullanıcılar görsel yükleyebilir
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- Authenticated kullanıcılar kendi yükledikleri görselleri silebilir
CREATE POLICY "Authenticated users can delete own images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);
```

## 3. Test

Admin panelinden bir görsel yüklemeyi deneyin. Görsel başarıyla yüklenmeli ve görüntülenmelidir.
