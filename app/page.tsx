import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfessionalConsultancy from "@/components/ProfessionalConsultancy";
import WhyAKA from "@/components/WhyAKA";
import InstagramPosts from "@/components/InstagramPosts";
import Values from "@/components/Values";
import OverseasEducationForm from "@/components/OverseasEducationForm";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ContactUs />
      <ProfessionalConsultancy />
      <Values />
      <WhyAKA />
      <InstagramPosts />
      <OverseasEducationForm />
      <Footer />
    </main>
  );
}
