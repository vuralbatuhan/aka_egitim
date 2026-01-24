# Hızlı Storage Kurulumu

## ❌ Hata: "Bucket not found"

Bu hatayı alıyorsanız, Supabase Storage bucket'ı henüz oluşturulmamış demektir.

## ✅ Çözüm (2 Adım)

### Adım 1: Bucket Oluşturma

1. [Supabase Dashboard](https://supabase.com/dashboard) → Projenizi seçin
2. Sol menüden **Storage** sekmesine tıklayın
3. **New bucket** (Yeni bucket) butonuna tıklayın
4. Formu doldurun:
   - **Bucket name**: `images` (tam olarak bu isim)
   - **Public bucket**: ✅ **MUTLAKA İŞARETLEYİN** (önemli!)
   - **File size limit**: 5 MB
   - **Allowed MIME types**: `image/*`
5. **Create bucket** butonuna tıklayın

### Adım 2: Policy'leri Ekleme

1. Supabase Dashboard → **SQL Editor** sekmesine gidin
2. Aşağıdaki SQL kodunu yapıştırın ve **Run** butonuna tıklayın:

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

-- Authenticated kullanıcılar görselleri silebilir
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);
```

## ✅ Test

Bucket oluşturduktan sonra:
1. Admin paneline geri dönün
2. "Yeni Gönderi Ekle" butonuna tıklayın
3. Bir görsel seçin ve yükleyin
4. Artık çalışmalı! 🎉

## ⚠️ Önemli Notlar

- Bucket adı **tam olarak** `images` olmalı (büyük/küçük harf duyarlı)
- **Public bucket** mutlaka işaretlenmeli, yoksa görseller görüntülenmez
- Policy'leri eklemeden görsel yükleyemezsiniz
