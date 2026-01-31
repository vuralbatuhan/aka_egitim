import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityHeroFinland from "@/components/UniversityHeroFinland";
import WhyFinlandUniversities from "@/components/WhyFinlandUniversities";
import UniversityFinlandApplication from "@/components/UniversityFinlandApplication";
import UniversityFinlandFAQ from "@/components/UniversityFinlandFAQ";
import AnimatedSection from "@/components/AnimatedSection";

export default function UniversiteFinlandiya() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <UniversityHeroFinland />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyFinlandUniversities />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <UniversityFinlandApplication />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <UniversityFinlandFAQ />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
