import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import KurucumuzKimdirContent from "@/components/KurucumuzKimdirContent";
import AnimatedSection from "@/components/AnimatedSection";
import OverseasEducationForm from "@/components/OverseasEducationForm";

export const metadata = {
  title: "Kurucumuz Kimdir | AKA Eğitim",
  description: "Ayhan Korkmaz ve Ayhan Korkmaz Akademi (AKA) kuruluş felsefesi: Azim, Kararlılık, Ayrıcalık.",
};

export default function KurucumuzKimdirPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <AnimatedSection direction="fade" delay={0.1}>
        <PageHeader
          title="Kurucumuz Kimdir"
          breadcrumbs={["Anasayfa", "Kurucumuz Kimdir"]}
        />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <KurucumuzKimdirContent />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
