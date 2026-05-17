import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityHeroFinland from "@/components/UniversityHeroFinland";
import WhyFinlandUniversities from "@/components/WhyFinlandUniversities";
import UniversityFinlandApplication from "@/components/UniversityFinlandApplication";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Finlandiya Üniversiteleri",
  description:
    "AKADER ile Finlandiya'da üniversite eğitimi. Finlandiya üniversiteleri, başvuru koşulları ve vize süreci. Öğretmen danışmanlığı ile Finlandiya üniversite başvurusu.",
  path: "/universite/finlandiya",
});

export default function UniversiteFinlandiya() {
  return (
    <main
      className="min-h-screen flex flex-col gap-8 md:gap-16"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <UniversityHeroFinland />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyFinlandUniversities />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <UniversityFinlandApplication />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
