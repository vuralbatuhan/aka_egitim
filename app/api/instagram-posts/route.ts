import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  // Admin paneli listesi (aktif/pasif hepsi) sadece açıkça istenirse ve admin
  // doğrulanırsa döner — aksi halde bir admin oturumu açıkken gezilen public
  // ana sayfa da yanlışlıkla pasif gönderileri sızdırmasın.
  if (req.nextUrl.searchParams.get("all") === "1") {
    const admin = await requireAdmin();
    if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

    const rows = await sql`
      SELECT * FROM instagram_posts ORDER BY order_index ASC
    `;
    return NextResponse.json(rows);
  }

  // Public: sadece aktif gönderiler, opsiyonel limit (ana sayfa teaser'ı).
  const limitParam = req.nextUrl.searchParams.get("limit");
  const limit = limitParam ? Math.min(parseInt(limitParam, 10) || 0, 50) : null;

  const rows = limit
    ? await sql`
        SELECT id, image_url, alt_text, link, order_index, is_active, created_at
        FROM instagram_posts
        WHERE is_active = true
        ORDER BY order_index ASC
        LIMIT ${limit}
      `
    : await sql`
        SELECT id, image_url, alt_text, link, order_index, is_active, created_at
        FROM instagram_posts
        WHERE is_active = true
        ORDER BY order_index ASC
      `;

  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const body = await req.json();
  const { image_url, alt_text, link, order_index, is_active } = body;

  if (!image_url) {
    return NextResponse.json({ error: "image_url gerekli." }, { status: 400 });
  }

  const [row] = await sql`
    INSERT INTO instagram_posts (image_url, alt_text, link, order_index, is_active)
    VALUES (
      ${image_url},
      ${alt_text ?? null},
      ${link ?? null},
      ${order_index ?? 0},
      ${is_active ?? true}
    )
    RETURNING *
  `;

  return NextResponse.json(row, { status: 201 });
}
