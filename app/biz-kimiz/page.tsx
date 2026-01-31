import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import BizKimizHero from "@/components/BizKimizHero";
import BizKimizContent from "@/components/BizKimizContent";
import BizKimizGuarantee from "@/components/BizKimizGuarantee";
import FaaliyetAlanlari from "@/components/FaaliyetAlanlari";
import Basarilarimiz from "@/components/Basarilarimiz";
import OverseasEducationForm from "@/components/OverseasEducationForm";

export default function BizKimizPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <BizKimizHero />
      <AnimatedSection direction="up" delay={0.1}>
        <BizKimizContent />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <BizKimizGuarantee />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <FaaliyetAlanlari />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}>
        <Basarilarimiz />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
