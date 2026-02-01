import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TeacherMobilityContent from "@/components/TeacherMobilityContent";
import TeacherMobilityDestinations from "@/components/TeacherMobilityDestinations";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import AnimatedSection from "@/components/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Öğretmen Hareketliliği",
  description:
    'AKA; "Öğretmen kendi hizmetiçi eğitiminin sorumluluğunu üstlenen kişidir" sözünün gereğince öğretmenlerimiz için Belçika ve Finlandiya\'da sertifikalı öğretmen eğitim programları düzenler. Mesleki gelişim ve pedagojik derinleşme.',
  path: "/ogretmen-hareketliligi",
});

export default function OgretmenHareketliligi() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <AnimatedSection direction="fade" delay={0.1}>
        <PageHeader 
          title="Öğretmen Hareketliliği" 
          breadcrumbs={["Anasayfa", "Öğretmen Hareketliliği"]}
          description={'AKA; "Öğretmen kendi hizmetiçi eğitiminin sorumluluğunu üstlenen kişidir" sözünün gereğince öğretmenlerimiz için Belçika ve Finlandiya\'da sertifikalı öğretmen eğitim programları düzenler. AKA\'da öğretmen hareketliliği doğrudan mesleki gelişim ve pedagojik derinleşme süreci olarak ele alınır. Her ülke bir ansiklopedi sloganıyla, AKA güvencesiyle, öğretmen dokunuşuyla dünya keşfine davetlisiniz.'}
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
