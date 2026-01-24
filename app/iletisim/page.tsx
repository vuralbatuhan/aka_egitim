"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Iletisim() {
  useEffect(() => {
    // Hash ile geldiğinde forma scroll et
    const scrollToForm = () => {
      if (window.location.hash === "#contact-form") {
        setTimeout(() => {
          const element = document.getElementById("contact-form");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    };

    // İlk yüklemede kontrol et
    scrollToForm();

    // Hash değişikliklerini dinle
    window.addEventListener("hashchange", scrollToForm);

    return () => {
      window.removeEventListener("hashchange", scrollToForm);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <ContactHero />
      <AnimatedSection direction="up" delay={0.1}>
        <ContactInfo />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <OverseasEducationForm />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
