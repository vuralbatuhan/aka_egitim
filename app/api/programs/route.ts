import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

// Yönetim panelinde programlar sadece görsel galerisi konteyneri olarak
// kullanılıyor (title vb. alanlar public tarafta gösterilmiyor), bu yüzden
// bu endpoint sadece admin panelinden çağrılır.
export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const rows = await sql`
    SELECT * FROM programs ORDER BY order_index ASC
  `;
  return NextResponse.json(rows);
}

export async function POST() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const [row] = await sql`
    INSERT INTO programs (title, order_index, is_active)
    VALUES ('Program', 0, true)
    RETURNING id
  `;

  return NextResponse.json(row, { status: 201 });
}
