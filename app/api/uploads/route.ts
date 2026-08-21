import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import { saveUploadedFile } from "@/lib/uploads";

// instagram-posts / programs: sadece admin panelinden yüklenir.
// uye-fotograflari: üyelik formu üzerinden ziyaretçiler de fotoğraf ekleyebilir
// (eski Supabase public bucket davranışıyla aynı).
const ADMIN_ONLY_BUCKETS = new Set(["instagram-posts", "programs"]);
const PUBLIC_BUCKETS = new Set(["uye-fotograflari"]);
const ALL_BUCKETS = new Set([...ADMIN_ONLY_BUCKETS, ...PUBLIC_BUCKETS]);

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");
  const bucket = formData.get("bucket");

  if (
    !(file instanceof File) ||
    typeof bucket !== "string" ||
    !ALL_BUCKETS.has(bucket)
  ) {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  if (ADMIN_ONLY_BUCKETS.has(bucket)) {
    const admin = await requireAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
    }
  }

  try {
    const url = await saveUploadedFile(bucket, file);
    return NextResponse.json({ url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Yükleme hatası.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
