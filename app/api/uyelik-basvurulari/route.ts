import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

// Admin paneli — Temsilciler sekmesi: tam alanlarla tüm kayıtlar.
export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const rows = await sql`
    SELECT * FROM uyelik_basvurulari ORDER BY created_at DESC
  `;
  return NextResponse.json(rows);
}

// Public — üyelik formu (UyelikFormu.tsx) ve admin panelinden manuel ekleme
// (TemsilcilerTab.tsx) aynı uç noktayı kullanır.
export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    ad,
    soyad,
    email,
    tc_kimlik,
    telefon,
    dogum_tarihi,
    adres,
    gorev_unvan,
    kan_grubu,
    egitim_durumu,
    alan_brans,
    ikamet_il,
    gorev_il,
    kayit_sartlari,
    foto_url,
  } = body;

  if (!ad?.trim() || !soyad?.trim() || !email?.trim() || !gorev_il?.trim()) {
    return NextResponse.json(
      { error: "Ad, soyad, e-posta ve görev ili zorunludur." },
      { status: 400 },
    );
  }

  const [row] = await sql`
    INSERT INTO uyelik_basvurulari (
      ad, soyad, email, tc_kimlik, telefon, dogum_tarihi, adres,
      gorev_unvan, kan_grubu, egitim_durumu, alan_brans,
      ikamet_il, gorev_il, kayit_sartlari, foto_url
    ) VALUES (
      ${ad}, ${soyad}, ${email}, ${tc_kimlik ?? null}, ${telefon ?? null}, ${dogum_tarihi || null}, ${adres ?? null},
      ${gorev_unvan ?? null}, ${kan_grubu ?? null}, ${egitim_durumu ?? null}, ${alan_brans ?? null},
      ${ikamet_il ?? null}, ${gorev_il}, ${kayit_sartlari ?? false}, ${foto_url ?? null}
    )
    RETURNING *
  `;

  return NextResponse.json(row, { status: 201 });
}
