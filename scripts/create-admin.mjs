// Kullanım:
//   DATABASE_URL=postgresql://... node scripts/create-admin.mjs admin@example.com "GucluBirSifre123"
//
// Aynı e-posta zaten varsa şifresini günceller (upsert).

import postgres from "postgres";
import bcrypt from "bcryptjs";

const [, , email, password] = process.argv;

if (!email || !password) {
  console.error('Kullanım: node scripts/create-admin.mjs <email> <şifre>');
  process.exit(1);
}

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL ortam değişkeni tanımlı değil.");
  process.exit(1);
}

if (password.length < 8) {
  console.error("Şifre en az 8 karakter olmalı.");
  process.exit(1);
}

const sql = postgres(process.env.DATABASE_URL);

try {
  const passwordHash = await bcrypt.hash(password, 12);

  const [row] = await sql`
    INSERT INTO admins (email, password_hash)
    VALUES (${email}, ${passwordHash})
    ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash
    RETURNING id, email
  `;

  console.log(`Admin hazır: ${row.email} (id: ${row.id})`);
} catch (err) {
  console.error("Hata:", err.message);
  process.exitCode = 1;
} finally {
  await sql.end();
}
