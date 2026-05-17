import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) return NextResponse.json({ valid: false }, { status: 401 });

  try {
    const secret = process.env.ADMIN_SESSION_SECRET!;
    const [payload, sig] = token.split(".");
    if (!payload || !sig) return NextResponse.json({ valid: false }, { status: 401 });

    const expectedSig = createHmac("sha256", secret).update(payload).digest("base64url");
    if (sig !== expectedSig) return NextResponse.json({ valid: false }, { status: 401 });

    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (Date.now() > data.exp) return NextResponse.json({ valid: false }, { status: 401 });

    return NextResponse.json({ valid: true, email: data.email });
  } catch {
    return NextResponse.json({ valid: false }, { status: 401 });
  }
}
