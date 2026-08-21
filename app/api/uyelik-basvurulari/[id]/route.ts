import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const {
    ad,
    soyad,
    email,
    telefon,
    gorev_unvan,
    alan_brans,
    ikamet_il,
    gorev_il,
    foto_url,
  } = body;

  if (!ad?.trim() || !soyad?.trim() || !email?.trim() || !gorev_il?.trim()) {
    return NextResponse.json(
      { error: "Ad, soyad, e-posta ve görev ili zorunludur." },
      { status: 400 },
    );
  }

  const [row] = await sql`
    UPDATE uyelik_basvurulari
    SET ad = ${ad},
        soyad = ${soyad},
        email = ${email},
        telefon = ${telefon ?? null},
        gorev_unvan = ${gorev_unvan ?? null},
        alan_brans = ${alan_brans ?? null},
        ikamet_il = ${ikamet_il ?? null},
        gorev_il = ${gorev_il},
        foto_url = ${foto_url ?? null}
    WHERE id = ${id}
    RETURNING *
  `;

  if (!row) return NextResponse.json({ error: "Bulunamadı." }, { status: 404 });
  return NextResponse.json(row);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const { id } = await params;
  await sql`DELETE FROM uyelik_basvurulari WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}
