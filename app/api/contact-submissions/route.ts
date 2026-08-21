import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });

  const rows = await sql`
    SELECT * FROM contact_submissions ORDER BY created_at DESC
  `;
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    full_name,
    tc_kimlik,
    email,
    phone,
    city,
    high_school,
    high_school_type,
    high_school_grade,
    yks_score,
    foreign_language,
    language_level,
    target_degree,
    target_department,
    preferred_country_city,
    preferred_university,
    target_education_language,
    kvkk_accepted,
  } = body;

  if (!full_name?.trim() || !tc_kimlik?.trim() || !email?.trim() || !phone?.trim() || !city?.trim()) {
    return NextResponse.json(
      { error: "Ad soyad, TC kimlik, e-posta, telefon ve şehir zorunludur." },
      { status: 400 },
    );
  }

  if (!kvkk_accepted) {
    return NextResponse.json(
      { error: "KVKK Aydınlatma Metni'ni kabul etmeniz gerekmektedir." },
      { status: 400 },
    );
  }

  const [row] = await sql`
    INSERT INTO contact_submissions (
      full_name, tc_kimlik, email, phone, city,
      high_school, high_school_type, high_school_grade, yks_score,
      foreign_language, language_level,
      target_degree, target_department, preferred_country_city,
      preferred_university, target_education_language,
      kvkk_accepted
    ) VALUES (
      ${full_name}, ${tc_kimlik}, ${email}, ${phone}, ${city},
      ${high_school ?? null}, ${high_school_type ?? null}, ${high_school_grade ?? null}, ${yks_score ?? null},
      ${foreign_language ?? null}, ${language_level ?? null},
      ${target_degree ?? null}, ${target_department ?? null}, ${preferred_country_city ?? null},
      ${preferred_university ?? null}, ${target_education_language ?? null},
      true
    )
    RETURNING id
  `;

  return NextResponse.json(row, { status: 201 });
}
