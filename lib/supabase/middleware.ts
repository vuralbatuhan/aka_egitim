import { NextResponse, type NextRequest } from "next/server";

const ADMIN_PREFIX = "/aka-2026-admin";
const ADMIN_LOGIN = "/admin-login";

async function verifyAdminToken(token: string, secret: string): Promise<boolean> {
  try {
    const [payload, sig] = token.split(".");
    if (!payload || !sig) return false;

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const expectedSigBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
    const expectedSig = btoa(String.fromCharCode(...new Uint8Array(expectedSigBuffer)))
      .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

    if (sig !== expectedSig) return false;

    const decoded = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
    return Date.now() < decoded.exp;
  } catch {
    return false;
  }
}

export async function updateSession(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAdminRoute = pathname.startsWith(ADMIN_PREFIX);
  const isLoginPage = pathname === ADMIN_LOGIN;

  if (!isAdminRoute) return NextResponse.next({ request });

  const token = request.cookies.get("admin_token")?.value;
  const secret = process.env.ADMIN_SESSION_SECRET ?? "";
  const isValid = token ? await verifyAdminToken(token, secret) : false;

  if (!isValid) {
    const url = request.nextUrl.clone();
    url.pathname = ADMIN_LOGIN;
    return NextResponse.redirect(url);
  }

  return NextResponse.next({ request });
}
