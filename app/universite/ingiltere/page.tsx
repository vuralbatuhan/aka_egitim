import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityHeroEngland from "@/components/UniversityHeroEngland";
import WhyEnglandUniversities from "@/components/WhyEnglandUniversities";
import UniversityEnglandApplication from "@/components/UniversityEnglandApplication";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "İngiltere Üniversiteleri",
  description:
    "AKADER ile İngiltere'de üniversite eğitimi. İngiltere üniversiteleri, başvuru süreci ve İngiltere öğrenci vizesi. Öğretmen danışmanlığı ile İngiltere üniversite başvurusu.",
  path: "/universite/ingiltere",
});

export default function UniversiteIngiltere() {
  return (
    <main
      className="min-h-screen flex flex-col gap-8 md:gap-16"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <UniversityHeroEngland />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyEnglandUniversities />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <UniversityEnglandApplication />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
