import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

// program_images tablosunda ON DELETE CASCADE tanımlı, görselleri ayrıca
// silmeye gerek yok.
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const { id } = await params;
  await sql`DELETE FROM programs WHERE id = ${id}`;
  return NextResponse.json({ success: true });
}
