import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const { id } = await params;
  const { is_read } = await req.json();

  const [row] = await sql`
    UPDATE contact_submissions
    SET is_read = ${is_read ?? true}
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
  await sql`DELETE FROM contact_submissions WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}
