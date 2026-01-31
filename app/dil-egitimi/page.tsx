import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import DilEgitimiProgramTypes from "@/components/DilEgitimiProgramTypes";
import DilEgitimiWhatToConsider from "@/components/DilEgitimiWhatToConsider";
import DilEgitimiCountryCards from "@/components/DilEgitimiCountryCards";

const heroDescription =
  "Ortaöğretim öğrencilerimiz için akran öğrenmesi ve özgüven gelişimini merkeze alan, öğretmen gözetiminde kısa süreli dil okulu programları düzenliyoruz. Öğrencinin kendi okuluyla ortaklaşa planlanan bu süreçte, eğitimler gidilen ülkenin uzmanlarınca verilirken, koordinasyon ve üniversite gezileri AKA tarafından yönetilerek takip edilir. Program sonunda okula, veliye ve öğrenciye detaylı bir \"Gelişim Raporu\" sunulur.";

export default function DilEgitimiPage() {
  return (
    <main className="min-h-screen flex flex-col gap-0" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <AnimatedSection direction="fade" delay={0.1}>
        <PageHeader
          title="Dil Okulu Destinasyonlarımız"
          breadcrumbs={["Anasayfa", "Dil Okulları"]}
          description={heroDescription}
        />
      </AnimatedSection>

      <section className="container mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 md:py-14" style={{ maxWidth: "1200px" }}>
        <AnimatedSection direction="up" delay={0.2}>
          <DilEgitimiCountryCards />
        </AnimatedSection>
      </section>

      <AnimatedSection direction="up" delay={0.25}>
        <DilEgitimiProgramTypes />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.3}>
        <DilEgitimiWhatToConsider />
      </AnimatedSection>

      <Footer />
    </main>
  );
}
