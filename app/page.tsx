import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfessionalConsultancy from "@/components/ProfessionalConsultancy";
import WhyAKA from "@/components/WhyAKA";
import InstagramPosts from "@/components/InstagramPosts";
import Values from "@/components/Values";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Anasayfa",
  description:
    "AKA Eğitim; öğretmenlerin kurduğu, yurtdışı dil eğitimi, üniversite danışmanlığı ve öğretmen hareketliliği programları sunan eğitim oluşumu. Öğretmen güvenirliği ile yurtdışı hedeflerinizi gerçekleştirin.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <Hero />
      <AnimatedSection direction="up" delay={0.1}>
        <ContactUs />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <ProfessionalConsultancy />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <Values />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}>
        <WhyAKA />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <InstagramPosts />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.6}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
