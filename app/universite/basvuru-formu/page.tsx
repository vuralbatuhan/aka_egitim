import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniversityAbroadHero from "@/components/UniversityAbroadHero";
import UniversityProgramsAccordion from "@/components/UniversityProgramsAccordion";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Yurt Dışı Üniversite Programları",
  description:
    "AKADER ile Amerika, Kanada, İngiltere ve birçok ülkede üniversite ve yabancı dil programlarını tek sayfada inceleyin. Kabul şartları, maliyetler ve başvuru adımlarına göz atın.",
  path: "/universite/basvuru-formu",
});

export default function UniversiteBasvuruFormu() {
  return (
    <main
      className="min-h-screen flex flex-col gap-0 md:gap-4"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Header />
      <UniversityAbroadHero />
      <UniversityProgramsAccordion />
      <Footer />
    </main>
  );
}
