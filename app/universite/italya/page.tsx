import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityHeroItaly from "@/components/UniversityHeroItaly";
import WhyItalyUniversities from "@/components/WhyItalyUniversities";
import UniversityItalyApplication from "@/components/UniversityItalyApplication";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "İtalya Üniversiteleri",
  description:
    "AKADER ile İtalya'da üniversite eğitimi. İtalya üniversiteleri, başvuru koşulları ve vize süreci. Öğretmen danışmanlığı ile İtalya üniversite başvurusu.",
  path: "/universite/italya",
});

export default function UniversiteItalya() {
  return (
    <main
      className="min-h-screen flex flex-col gap-8 md:gap-16"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <UniversityHeroItaly />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyItalyUniversities />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <UniversityItalyApplication />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
