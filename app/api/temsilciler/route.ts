import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

// Public — İl Temsilcilerimiz sayfası. Sadece güvenli alanlar döner;
// tc_kimlik, adres, telefon gibi hassas alanlar asla buradan çıkmaz.
export async function GET() {
  const rows = await sql`
    SELECT ad, soyad, gorev_unvan, alan_brans, gorev_il, email, foto_url
    FROM uyelik_basvurulari
    ORDER BY gorev_il ASC, ad ASC
  `;
  return NextResponse.json(rows);
}
