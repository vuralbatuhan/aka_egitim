import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const { id } = await params;
  await sql`DELETE FROM program_images WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}
