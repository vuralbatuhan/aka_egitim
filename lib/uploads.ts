import { mkdir, writeFile } from "fs/promises";
import path from "path";

const UPLOAD_ROOT =
  process.env.UPLOAD_DIR ||
  path.join(/* turbopackIgnore: true */ process.cwd(), "uploads");

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB — eski Supabase bucket limitiyle aynı

const ALLOWED_MIME_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

export async function saveUploadedFile(
  bucket: string,
  file: File,
): Promise<string> {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Dosya boyutu 5MB'ı aşamaz.");
  }

  const ext = ALLOWED_MIME_TYPES[file.type];
  if (!ext) {
    throw new Error("Desteklenmeyen dosya türü. Sadece görsel yükleyebilirsiniz.");
  }

  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const dir = path.join(UPLOAD_ROOT, bucket);
  await mkdir(dir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), buffer);

  return `/uploads/${bucket}/${filename}`;
}
