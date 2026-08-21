# Sunucu Kurulumu — Self-hosted PostgreSQL Migrasyonu

Bu doküman, siteyi Supabase'den kendi sunucundaki PostgreSQL'e taşıdıktan sonra
sunucuda yapman gereken adımları anlatır. Kod tarafı (API route'ları, DB
bağlantısı, dosya yükleme) tamamlandı ve test edildi — kalan iş sunucu tarafı.

**Tespit edilen ortam** (`pm2 describe akaegitim` çıktısına göre):

| | |
|---|---|
| İşletim sistemi | Ubuntu 22.04.5 LTS |
| Proje dizini (exec cwd) | `/home/aka` |
| pm2 process adı | `akaegitim` (script: `npm start`, zaten çalışıyor, restart: 0, uptime 16 gün) |
| Node.js | 20.20.2 |
| PostgreSQL | **kurulu değil** (`psql` bulunamadı) |

Aşağıdaki tüm komutlar bu bilgilere göre yazıldı — kopyala/yapıştır
çalışacak şekilde.

---

## Faz 0 — PostgreSQL Kurulumu

```bash
sudo apt update
sudo apt install -y postgresql postgresql-contrib
sudo systemctl enable --now postgresql
```

### Uygulama rolü + veritabanı

```bash
sudo -u postgres psql <<'EOF'
CREATE ROLE aka_app LOGIN PASSWORD 'GUCLU_BIR_SIFRE_BURAYA';
CREATE DATABASE aka_egitim OWNER aka_app;
EOF
```

> `GUCLU_BIR_SIFRE_BURAYA` yerine gerçek, rastgele bir şifre koy
> (`openssl rand -base64 24` ile üretebilirsin) — bu şifreyi aşağıda
> `DATABASE_URL` içinde tekrar kullanacaksın.

**Önemli:** Şemayı `postgres` (superuser) ile değil, **`aka_app` ile**
uygula — tablolar `aka_app`'e ait olsun ki uygulama INSERT/UPDATE/DELETE
yapabilsin. `db/schema.sql` içinde superuser gerektiren hiçbir şey yok
(`gen_random_uuid()` PostgreSQL 13+'ta çekirdekte yerleşik) — bu, ayrı bir
uygulama rolüyle test edilerek doğrulandı.

```bash
cd /home/aka
PGPASSWORD='GUCLU_BIR_SIFRE_BURAYA' psql -h localhost -U aka_app -d aka_egitim -f db/schema.sql
```

### Yükleme klasörü

pm2 process root olarak çalışıyor, bu yüzden ek `chown` gerekmiyor:

```bash
mkdir -p /home/aka/uploads
```

---

## Faz 6 — `.env` Kurulumu

```bash
cd /home/aka
cp .env.example .env.local
nano .env.local   # veya tercih ettiğin editör
```

Doldurulacak değerler:

```
DATABASE_URL=postgresql://aka_app:GUCLU_BIR_SIFRE_BURAYA@localhost:5432/aka_egitim
ADMIN_SESSION_SECRET=<openssl rand -hex 32 çıktısı>
NEXT_PUBLIC_SITE_URL=https://siteninadresi.com
UPLOAD_DIR=/home/aka/uploads
```

İlk admin kullanıcısını oluştur:

```bash
cd /home/aka
DATABASE_URL="postgresql://aka_app:GUCLU_BIR_SIFRE_BURAYA@localhost:5432/aka_egitim" \
  npm run create-admin -- senin@email.com "GucluSifre123"
```

---

## Deploy — Kod Güncelleme + pm2 Restart

pm2 process zaten var (`akaegitim`), yeniden **oluşturmana** gerek yok —
kodu çektikten/güncelledikten sonra sadece build al ve restart et:

```bash
cd /home/aka
git pull   # veya kodu nasıl güncelliyorsan
npm install
npm run build
pm2 restart akaegitim --update-env
pm2 save
```

`--update-env` bayrağı, `.env.local`'daki yeni değişkenlerin (DATABASE_URL
vb.) sürece yansımasını garantiler. Next.js `.env.local`'ı zaten otomatik
okur, ekstra bir pm2 ayarına gerek yok.

Nginx (ya da başka bir reverse proxy) HTTPS için önden bir yerlerde
olmalı — `/uploads/*` yolu da dahil tüm istekler aynı Next.js sürecinden
(`localhost:3000` varsayılan) geçtiği için proxy tarafında ek bir ayar
gerekmiyor.

---

## Faz 7 — Test Listesi

Deploy sonrası sırayla kontrol et:

- [ ] Ana sayfa, `/uye-ol`, `/il-temsilcilerimiz`, `/programlar` açılıyor
- [ ] Üyelik formu gönderimi çalışıyor, fotoğraf yükleniyor
- [ ] Öğrenci başvuru formu (`/universite/basvuru-formu`) gönderimi çalışıyor
- [ ] `/admin-login` ile giriş yapılabiliyor (yeni oluşturduğun admin ile)
- [ ] Admin panelinde Instagram gönderisi ekleme/düzenleme/silme + görsel yükleme
- [ ] Admin panelinde program görseli ekleme/silme
- [ ] Admin panelinde temsilci ekleme/düzenleme/silme
- [ ] Başvuru formlarını admin panelinde görüntüleme, "okundu" işaretleme, silme
- [ ] Çıkış yaptıktan sonra `/aka-2026-admin`'e tekrar erişim login'e yönlendiriyor

## Faz 8 — Yedekleme

Supabase artık otomatik yedek almıyor. Günlük `pg_dump` cron'u:

```bash
mkdir -p /var/backups/aka_egitim
crontab -e
```

Eklenecek satırlar (her gece 03:00 yedek al, 30 günden eskisini sil):

```
0 3 * * * PGPASSWORD='GUCLU_BIR_SIFRE_BURAYA' pg_dump -h localhost -U aka_app aka_egitim | gzip > /var/backups/aka_egitim/$(date +\%Y-\%m-\%d).sql.gz
15 3 * * * find /var/backups/aka_egitim -name '*.sql.gz' -mtime +30 -delete
```

---

## Vercel'i Kapatma

Site su an Vercel'de de yayında (`aka-omervordexs-projects.vercel.app`).
Diskte dosya saklama Vercel'in geçici (ephemeral) dosya sisteminde
**çalışmaz** — orada bırakırsan yükleme istekleri 500 hatası verir. Kendi
sunucunda yayın stabil çalıştığını doğruladıktan sonra:

1. DNS kaydını kendi sunucuna yönlendir.
2. Vercel projesini `vercel.com` dashboard'undan sil ya da devre dışı bırak.

---

## Notlar

- `uye-fotograflari` bucket'ına (üyelik formu fotoğrafı) **giriş yapmadan**
  herkes dosya yükleyebiliyor — bu, eski Supabase public bucket davranışıyla
  aynı (parity). Tek fark artık kotalı bir yönetilen servis değil, doğrudan
  sunucunun diski. 5MB/istek sınırı ve sadece görsel MIME tipleri kod
  tarafında zaten uygulanıyor; ileride kötüye kullanım görürsen IP bazlı
  rate limit eklenebilir (şimdilik kapsam dışı bırakıldı).
- pm2 process root kullanıcısıyla çalışıyor. Bu mevcut kurulumun bir parçası,
  migrasyonla ilgisi yok — değiştirmek istersen ayrı bir konu olarak
  konuşabiliriz.
