import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TuzugumuzContent from "./TuzugumuzContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tüzüğümüz",
  description:
    "Ayhan Korkmaz Akademi Derneği (AKADER) resmi tüzüğü. Derneğin kuruluş amacı, üyelik koşulları, yönetim yapısı ve çalışma esaslarını düzenleyen hukuki belge.",
  path: "/tuzugumuz",
});

export default function TuzugumuzPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <PageHeader
        title="Tüzüğümüz"
        breadcrumbs={["Anasayfa", "Derneğimiz", "Tüzüğümüz"]}
        description="Ayhan Korkmaz Akademi Derneği'nin kuruluş amaçları, üyelik koşulları ve yönetim esaslarını düzenleyen resmi tüzük belgesi."
      />
      <AnimatedSection direction="up" delay={0.1}>
        <TuzugumuzContent />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
