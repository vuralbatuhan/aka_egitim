import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageSchoolHero from "@/components/LanguageSchoolHero";
import WhyEngland from "@/components/WhyEngland";
import ApplicationProcess from "@/components/ApplicationProcess";
import LanguageFAQ from "@/components/LanguageFAQ";
import LanguageSchoolCTA from "@/components/LanguageSchoolCTA";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dil Okulları - İngiltere",
  description:
    "AKA Eğitim ile İngiltere'de dil eğitimi. Yurtdışı dil okulu programları, başvuru süreci ve vize danışmanlığı. Öğretmen güvenirliği ile İngiltere dil okulu fırsatları.",
  path: "/dil-okullari",
});

export default function DilOkullari() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <LanguageSchoolHero />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyEngland />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <ApplicationProcess />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}>
        <LanguageFAQ />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <LanguageSchoolCTA />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
