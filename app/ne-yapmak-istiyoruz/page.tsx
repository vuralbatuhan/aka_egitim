import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import NeYapmakIstiyoruzHero from "@/components/NeYapmakIstiyoruzHero";
import Hedeflerimiz from "@/components/Hedeflerimiz";
import Felsefemiz from "@/components/Felsefemiz";
import NasilBasaracagiz from "@/components/NasilBasaracagiz";
import NeYapmakIstiyoruzCTA from "@/components/NeYapmakIstiyoruzCTA";
import OverseasEducationForm from "@/components/OverseasEducationForm";

export default function NeYapmakIstiyoruzPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <NeYapmakIstiyoruzHero />
      <AnimatedSection direction="up" delay={0.1}>
        <Felsefemiz />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <Hedeflerimiz />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <NasilBasaracagiz />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}>
        <NeYapmakIstiyoruzCTA />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
