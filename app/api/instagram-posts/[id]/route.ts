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
  const { image_url, alt_text, link, order_index, is_active } = body;

  if (!image_url) {
    return NextResponse.json({ error: "image_url gerekli." }, { status: 400 });
  }

  const [row] = await sql`
    UPDATE instagram_posts
    SET image_url = ${image_url},
        alt_text = ${alt_text ?? null},
        link = ${link ?? null},
        order_index = ${order_index ?? 0},
        is_active = ${is_active ?? true},
        updated_at = TIMEZONE('utc', NOW())
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
  await sql`DELETE FROM instagram_posts WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}
