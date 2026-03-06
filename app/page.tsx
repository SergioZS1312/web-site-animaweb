import {
  ContactForm,
  Footer,
  Header,
  Hero,
  MethodSection,
  PortfolioGrid,
  ServicesSection,
  TestimonialsSection,
  WhatsAppButton,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <div id="servicios">
        <ServicesSection />
      </div>

      <div id="portafolio">
        <PortfolioGrid />
      </div>

      <div id="metodo">
        <MethodSection />
      </div>

      <div id="testimonios">
        <TestimonialsSection />
      </div>

      <div id="contacto">
        <ContactForm />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
