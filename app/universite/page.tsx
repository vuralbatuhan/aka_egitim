import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityHero from "@/components/UniversityHero";
import UniversityDestinations from "@/components/UniversityDestinations";
import ApplicationSupport from "@/components/ApplicationSupport";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Üniversite - Yurtdışı Eğitim Destinasyonları",
  description:
    "AKA Eğitim ile yurtdışı üniversite danışmanlığı. Finlandiya, İngiltere ve İtalya üniversiteleri, başvuru süreci ve vize desteği. Öğretmen güvenirliği ile yurtdışı üniversite fırsatları.",
  path: "/universite",
});

export default function Universite() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <UniversityHero />
      <AnimatedSection direction="up" delay={0.1}>
        <UniversityDestinations />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <ApplicationSupport />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
