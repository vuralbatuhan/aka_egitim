import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageSchoolHeroFinland from "@/components/LanguageSchoolHeroFinland";
import WhyFinland from "@/components/WhyFinland";
import ApplicationProcessFinland from "@/components/ApplicationProcessFinland";
import LanguageFAQFinland from "@/components/LanguageFAQFinland";
import LanguageSchoolCTAFinland from "@/components/LanguageSchoolCTAFinland";
import AnimatedSection from "@/components/AnimatedSection";

export default function DilOkullariFinlandiya() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <LanguageSchoolHeroFinland />
      <AnimatedSection direction="up" delay={0.1}>
        <WhyFinland variant="language" />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <ApplicationProcessFinland variant="language" />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <LanguageFAQFinland />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}>
        <LanguageSchoolCTAFinland />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
