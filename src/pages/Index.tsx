
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientPortal from "@/components/ClientPortal";
import Careers from "@/components/Careers";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ClientPortal />
        <Careers />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
