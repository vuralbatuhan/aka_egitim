import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

// Public: "Programlar" sayfasındaki galeri — aktif programlara ait tüm
// görseller, sıra numarasına göre. (Eski frontend iki adımda yapıyordu:
// önce aktif program id'lerini çekip sonra görselleri filtreliyordu —
// burada tek sorguda join ile aynı sonuç elde ediliyor.)
//
// ?program_id= verilirse admin panelinin düzenleme modalı için o programa
// ait görseller (aktif/pasif fark etmeksizin) döner — admin gerektirir.
export async function GET(req: NextRequest) {
  const programId = req.nextUrl.searchParams.get("program_id");

  if (programId) {
    const admin = await requireAdmin();
    if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

    const rows = await sql`
      SELECT * FROM program_images
      WHERE program_id = ${programId}
      ORDER BY order_index ASC
    `;
    return NextResponse.json(rows);
  }

  const rows = await sql`
    SELECT pi.*
    FROM program_images pi
    JOIN programs p ON p.id = pi.program_id
    WHERE p.is_active = true
    ORDER BY pi.order_index ASC
  `;
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const body = await req.json();
  const { program_id, image_url, caption, order_index } = body;

  if (!program_id || !image_url) {
    return NextResponse.json(
      { error: "program_id ve image_url gerekli." },
      { status: 400 },
    );
  }

  const [row] = await sql`
    INSERT INTO program_images (program_id, image_url, caption, order_index)
    VALUES (${program_id}, ${image_url}, ${caption ?? null}, ${order_index ?? 0})
    RETURNING *
  `;

  return NextResponse.json(row, { status: 201 });
}
