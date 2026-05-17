import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeacherEducationHeroSwitzerland from "@/components/TeacherEducationHeroSwitzerland";
import WhySwitzerland from "@/components/WhySwitzerland";
import FAQSwitzerland from "@/components/FAQSwitzerland";
import CTASwitzerland from "@/components/CTASwitzerland";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Öğretmen Hareketliliği - İsviçre",
  description:
    "AKADER ile İsviçre'de sertifikalı öğretmen eğitimi programları. Öğretmen hareketliliği, mesleki gelişim ve pedagojik eğitim fırsatları. İsviçre öğretmen eğitimi.",
  path: "/ogretmen-hareketliligi/isvicre",
});

export default function OgretmenHareketliligiIsvicre() {
  return (
    <main
      className="min-h-screen flex flex-col gap-8 md:gap-16"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <TeacherEducationHeroSwitzerland />
      <AnimatedSection direction="up" delay={0.1}>
        <WhySwitzerland />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <FAQSwitzerland />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <CTASwitzerland />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
