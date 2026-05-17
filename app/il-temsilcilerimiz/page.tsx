import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import IlTemsilcileriClient from "./IlTemsilcileriClient";

export const metadata: Metadata = {
  title: "İl Temsilcilerimiz | AKADER",
  description: "AKADER il temsilcilerini illere göre keşfedin.",
};

export default function IlTemsilcileriPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <PageHeader
        title="İl Temsilcilerimiz"
        breadcrumbs={["Anasayfa", "Derneğimiz", "İl Temsilcilerimiz"]}
        description="AKADER üyelerimizi görev yaptıkları illere göre aşağıda bulabilirsiniz."
      />
      <IlTemsilcileriClient />
      <Footer />
    </main>
  );
}
