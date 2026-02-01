import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import DilEgitimiWhatToConsider from "@/components/DilEgitimiWhatToConsider";
import DilEgitimiCountryCards from "@/components/DilEgitimiCountryCards";
import { createPageMetadata } from "@/lib/seo";

const heroDescription =
  "AKA Dil Okulu Hareketliliği, yabancı dil üzerinden öğrencilerimizi yaşayarak öğrenme ve kendini keşfetme yolculuğuna çıkarır. Öğrencilerimiz katıldığı program boyunca, öğrendiği yabancı dilin kültürüyle, yaşamın doğallığıyla ve akran etkileşimiyle bütünleşmiş gerçek bir öğrenme sürecine dâhil olur. Bu modelde amaç: öğrencinin dili sınıf ortamının ötesinde, yaşayarak edinmesini sağlamaktır.";

export const metadata: Metadata = createPageMetadata({
  title: "Dil Okulu Destinasyonlarımız",
  description: heroDescription,
  path: "/dil-egitimi",
});

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

      <AnimatedSection direction="up" delay={0.3}>
        <DilEgitimiWhatToConsider />
      </AnimatedSection>

      <Footer />
    </main>
  );
}
