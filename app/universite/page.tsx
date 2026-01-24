import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityHero from "@/components/UniversityHero";
import UniversityDestinations from "@/components/UniversityDestinations";
import ApplicationSupport from "@/components/ApplicationSupport";
import AnimatedSection from "@/components/AnimatedSection";

export default function Universite() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <UniversityHero />
      <AnimatedSection direction="up" delay={0.1}>
        <UniversityDestinations />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <ApplicationSupport />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
