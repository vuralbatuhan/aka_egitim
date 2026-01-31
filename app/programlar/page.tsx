import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ProgramlarList from "@/components/ProgramlarList";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProgramlarPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <AnimatedSection direction="fade" delay={0.1}>
        <PageHeader
          title="Programlar"
          breadcrumbs={["Anasayfa", "Programları İncele"]}
        />
      </AnimatedSection>
      <section className="container mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12" style={{ maxWidth: "1200px" }}>
        <AnimatedSection direction="up" delay={0.2}>
          <ProgramlarList />
        </AnimatedSection>
      </section>
      <Footer />
    </main>
  );
}
