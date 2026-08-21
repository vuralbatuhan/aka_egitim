import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/adminAuth";

const ADMIN_PREFIX = "/aka-2026-admin";
const ADMIN_LOGIN = "/admin-login";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith(ADMIN_PREFIX)) return NextResponse.next();

  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const payload = verifyAdminToken(token);

  if (!payload) {
    const url = request.nextUrl.clone();
    url.pathname = ADMIN_LOGIN;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/aka-2026-admin/:path*"],
};
