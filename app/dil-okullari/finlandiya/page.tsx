import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageSchoolHeroFinland from "@/components/LanguageSchoolHeroFinland";
import WhyFinland from "@/components/WhyFinland";
import ApplicationProcessFinland from "@/components/ApplicationProcessFinland";
import LanguageSchoolCTAFinland from "@/components/LanguageSchoolCTAFinland";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Finlandiya Dil Okulları",
  description:
    "AKADER ile Finlandiya'da dil eğitimi. Finlandiya dil okulu programları, başvuru süreci ve sertifikalı dil eğitimi fırsatları. Öğretmen güvenirliği ile Finlandiya dil okulu.",
  path: "/dil-okullari/finlandiya",
});

export default function DilOkullariFinlandiya() {
  return (
    <main
      className="min-h-screen flex flex-col gap-8 md:gap-16"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <LanguageSchoolHeroFinland />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyFinland variant="language" />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <ApplicationProcessFinland variant="language" />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <LanguageSchoolCTAFinland />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
