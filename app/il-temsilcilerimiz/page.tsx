import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import IlTemsilcileriClient from "./IlTemsilcileriClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "İl Temsilcilerimiz | AKADER",
  description: "AKADER il temsilcilerini illere göre keşfedin.",
};

export type Uye = {
  ad: string;
  soyad: string;
  gorev_unvan: string | null;
  alan_brans: string | null;
  gorev_il: string;
  email: string;
  foto_url: string | null;
};

async function fetchUyeler(): Promise<{ data: Uye[]; dbError: string | null }> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("uyelik_basvurulari")
    .select("ad, soyad, gorev_unvan, alan_brans, gorev_il, email, foto_url")
    .order("gorev_il", { ascending: true })
    .order("ad", { ascending: true });

  if (error) return { data: [], dbError: error.message };
  return { data: (data as Uye[]) ?? [], dbError: null };
}

export default async function IlTemsilcileriPage() {
  const { data: uyeler, dbError } = await fetchUyeler();

  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <PageHeader
        title="İl Temsilcilerimiz"
        breadcrumbs={["Anasayfa", "Derneğimiz", "İl Temsilcilerimiz"]}
        description="AKADER üyelerimizi görev yaptıkları illere göre aşağıda bulabilirsiniz."
      />
      {dbError ? (
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="bg-red-50 border border-red-200 rounded-xl px-6 py-5 max-w-lg text-center">
            <p className="text-sm font-semibold text-red-700 mb-1">Veriler yüklenemedi</p>
            <p className="text-xs text-red-500 font-mono">{dbError}</p>
          </div>
        </div>
      ) : (
        <IlTemsilcileriClient uyeler={uyeler} />
      )}
      <Footer />
    </main>
  );
}
