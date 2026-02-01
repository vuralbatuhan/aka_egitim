import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import KurucumuzKimdirContent from "@/components/KurucumuzKimdirContent";
import AnimatedSection from "@/components/AnimatedSection";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kurucumuz Kimdir",
  description:
    "Ayhan Korkmaz ve Ayhan Korkmaz Akademi (AKA) kuruluş felsefesi: Azim, Kararlılık, Ayrıcalık.",
  path: "/kurucumuz-kimdir",
});

export default function KurucumuzKimdirPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <AnimatedSection direction="fade" delay={0.1}>
        <PageHeader
          title="Kurucumuz Kimdir"
          breadcrumbs={["Anasayfa", "Kurucumuz Kimdir"]}
        />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <KurucumuzKimdirContent />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
