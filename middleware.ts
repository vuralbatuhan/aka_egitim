import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match only admin routes so we don't run Supabase auth on every request.
     */
    "/aka-2026-admin/:path*",
  ],
};
