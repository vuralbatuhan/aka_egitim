import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityHeroCiftDiploma from "@/components/UniversityHeroCiftDiploma";
import DoubleDiplomaIntro from "@/components/DoubleDiplomaIntro";
import DoubleDiplomaAdvantages from "@/components/DoubleDiplomaAdvantages";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Çift Diploma Programı - Amerikan Lise Diploması ve AP Dersleri",
  description:
    "Mevcut lise eğitiminize devam ederken Amerikan Lise Diploması ve AP dersleri ile çift diploma imkânı. AKA Eğitim ile üniversiteye bir adım önde başlayın.",
  path: "/universite/cift-diploma",
});

export default function UniversiteCiftDiploma() {
  return (
    <main
      className="min-h-screen flex flex-col gap-0 md:gap-6"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <UniversityHeroCiftDiploma />
      <DoubleDiplomaIntro />
      <DoubleDiplomaAdvantages />
      <OverseasEducationForm />
      <Footer />
    </main>
  );
}

