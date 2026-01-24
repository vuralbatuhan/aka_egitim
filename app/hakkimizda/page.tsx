import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutAKA from "@/components/AboutAKA";
import MissionStatement from "@/components/MissionStatement";
import WhyAKA from "@/components/WhyAKA";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hakkimizda() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <AnimatedSection direction="fade" delay={0.1}>
        <PageHeader 
          title="Hakkımızda" 
          breadcrumbs={["Anasayfa", "Hakkımızda"]}
          description="AKA olarak, eğitim alanında uzman kadromuzla öğrencilerimize ve öğretmenlerimize yurt içi ve yurt dışında kaliteli eğitim hizmetleri sunuyoruz. Misyonumuz, eğitim yolculuğunuzda güvenilir bir rehber olmak ve hedeflerinize ulaşmanızda size destek olmaktır."
        />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <AboutAKA />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <MissionStatement />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}>
        <WhyAKA />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.5}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
