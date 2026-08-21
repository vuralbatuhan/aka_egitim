import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "admin_token";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

export interface AdminTokenPayload {
  email: string;
  exp: number;
}

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return secret;
}

export function signAdminToken(email: string): string {
  const secret = getSecret();
  const payload = Buffer.from(
    JSON.stringify({
      email,
      exp: Date.now() + SESSION_DURATION_MS,
    } satisfies AdminTokenPayload),
  ).toString("base64url");
  const sig = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifyAdminToken(
  token: string | undefined | null,
): AdminTokenPayload | null {
  if (!token) return null;

  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return null;

  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;

  const expectedSig = createHmac("sha256", secret)
    .update(payload)
    .digest("base64url");

  const sigBuf = Buffer.from(sig);
  const expectedBuf = Buffer.from(expectedSig);
  if (
    sigBuf.length !== expectedBuf.length ||
    !timingSafeEqual(sigBuf, expectedBuf)
  ) {
    return null;
  }

  try {
    const data = JSON.parse(
      Buffer.from(payload, "base64url").toString(),
    ) as AdminTokenPayload;
    if (Date.now() > data.exp) return null;
    return data;
  } catch {
    return null;
  }
}

/** Route Handler / Server Component içinde admin cookie'sini doğrular. */
export async function requireAdmin(): Promise<AdminTokenPayload | null> {
  const store = await cookies();
  return verifyAdminToken(store.get(ADMIN_COOKIE_NAME)?.value);
}
