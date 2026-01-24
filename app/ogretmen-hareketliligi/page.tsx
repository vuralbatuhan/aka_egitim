import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TeacherMobilityContent from "@/components/TeacherMobilityContent";
import TeacherMobilityDestinations from "@/components/TeacherMobilityDestinations";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import AnimatedSection from "@/components/AnimatedSection";

export default function OgretmenHareketliligi() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <AnimatedSection direction="fade" delay={0.1}>
        <PageHeader 
          title="Öğretmen Hareketliliği" 
          breadcrumbs={["Anasayfa", "Öğretmen Hareketliliği"]}
          description="Yurtdışında öğretmen eğitimi ve mesleki gelişim fırsatları. CELTA, DELTA, TESOL sertifikaları ve Erasmus+ programları ile kariyerinizi uluslararası platformda geliştirin."
        />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <TeacherMobilityDestinations />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <TeacherMobilityContent />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
