import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sql } from "@/lib/db";
import { ADMIN_COOKIE_NAME, signAdminToken } from "@/lib/adminAuth";

// Admin bulunamasa bile sabit maliyetli bir karşılaştırma yapılır ki
// yanıt süresinden e-posta adresinin var olup olmadığı çıkarılamasın.
const DUMMY_HASH =
  "$2b$10$CwTycUXWue0Thq9StjUM0uJ8bIVCPUJKUQnUJ8bIVCPUJKUQnUJ8b";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email ve şifre gerekli." },
        { status: 400 },
      );
    }

    const rows = await sql<{ password_hash: string }[]>`
      SELECT password_hash FROM admins WHERE email = ${email} LIMIT 1
    `;

    const hash = rows[0]?.password_hash ?? DUMMY_HASH;
    const valid = await bcrypt.compare(password, hash);

    if (!rows[0] || !valid) {
      return NextResponse.json(
        { error: "E-posta veya şifre hatalı." },
        { status: 401 },
      );
    }

    const token = signAdminToken(email);
    const res = NextResponse.json({ success: true });
    res.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
