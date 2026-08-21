import { NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
import path from "path";

const UPLOAD_ROOT =
  process.env.UPLOAD_DIR ||
  path.join(/* turbopackIgnore: true */ process.cwd(), "uploads");

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path: segments } = await params;

  // Path traversal koruması: her segment düz bir dosya/klasör adı olmalı.
  if (segments.some((s) => !s || s.includes("..") || s.includes("/") || s.includes("\\"))) {
    return NextResponse.json({ error: "Geçersiz yol." }, { status: 400 });
  }

  const filePath = path.join(UPLOAD_ROOT, ...segments);

  try {
    const stats = await stat(filePath);
    if (!stats.isFile()) throw new Error("not a file");

    const buffer = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Dosya bulunamadı." }, { status: 404 });
  }
}
