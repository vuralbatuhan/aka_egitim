import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import NicinKurdukHero from "@/components/NicinKurdukHero";
import KurulusAmacimiz from "@/components/KurulusAmacimiz";
import SistemimizinTemeli from "@/components/SistemimizinTemeli";
import Cozumumuz from "@/components/Cozumumuz";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Niçin Kurulduk",
  description:
    "AKADER neden kuruldu? Öğretmenlerin kurduğu bu eğitim oluşumunun misyonu, kuruluş amacı ve öğrencilerin yurtdışı hedeflerini öğretmen güvenirliği ile gerçekleştirme vizyonu.",
  path: "/nicin-kurduk",
});

export default function NicinKurdukPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <NicinKurdukHero />
      <AnimatedSection direction="up" delay={0.1}>
        <KurulusAmacimiz />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <SistemimizinTemeli />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <Cozumumuz />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
