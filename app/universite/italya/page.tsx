import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityHeroItaly from "@/components/UniversityHeroItaly";
import WhyItalyUniversities from "@/components/WhyItalyUniversities";
import UniversityItalyApplication from "@/components/UniversityItalyApplication";
import UniversityItalyFAQ from "@/components/UniversityItalyFAQ";
import AnimatedSection from "@/components/AnimatedSection";

export default function UniversiteItalya() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <UniversityHeroItaly />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyItalyUniversities />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <UniversityItalyApplication />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <UniversityItalyFAQ />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
