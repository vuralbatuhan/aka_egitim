import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeacherEducationHeroBelgium from "@/components/TeacherEducationHeroBelgium";
import WhyBelgium from "@/components/WhyBelgium";
import TeacherMobilityCTABelgium from "@/components/TeacherMobilityCTABelgium";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Öğretmen Hareketliliği - Belçika",
  description:
    "AKADER ile Belçika'da sertifikalı öğretmen eğitimi programları. Öğretmen hareketliliği, mesleki gelişim ve pedagojik eğitim fırsatları. Belçika öğretmen eğitimi.",
  path: "/ogretmen-hareketliligi/belcika",
});

export default function OgretmenHareketliligiBelcika() {
  return (
    <main
      className="min-h-screen flex flex-col gap-8 md:gap-16"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <TeacherEducationHeroBelgium />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyBelgium />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <TeacherMobilityCTABelgium />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
