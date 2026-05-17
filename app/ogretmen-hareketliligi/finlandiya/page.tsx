import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeacherEducationHeroFinland from "@/components/TeacherEducationHeroFinland";
import WhyFinland from "@/components/WhyFinland";
import LanguageFAQFinland from "@/components/LanguageFAQFinland";
import LanguageSchoolCTAFinland from "@/components/LanguageSchoolCTAFinland";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Öğretmen Hareketliliği - Finlandiya",
  description:
    "AKADER ile Finlandiya'da sertifikalı öğretmen eğitimi programları. Öğretmen hareketliliği, mesleki gelişim ve pedagojik eğitim fırsatları. Finlandiya öğretmen eğitimi.",
  path: "/ogretmen-hareketliligi/finlandiya",
});

export default function OgretmenHareketliligiFinlandiya() {
  return (
    <main
      className="min-h-screen flex flex-col gap-8 md:gap-16"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <TeacherEducationHeroFinland />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyFinland />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <LanguageFAQFinland />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <LanguageSchoolCTAFinland />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
