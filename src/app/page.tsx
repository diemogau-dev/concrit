import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Credentials from "@/components/sections/Credentials";
import Ventajas from "@/components/sections/Ventajas";
import Lineas from "@/components/sections/Lineas";
import Sistema from "@/components/sections/Sistema";
import CtaFinal from "@/components/sections/CtaFinal";
import Ubicacion from "@/components/sections/Ubicacion";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { faqs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="bg-bone [overflow-x:clip]">
        <Hero />
        <Credentials />
        <Ventajas />
        <Lineas />
        <Sistema />
        <CtaFinal />
        <Ubicacion />
        <FaqSection />
      </main>
      <Footer />
      <JsonLd data={faqPageSchema(faqs)} />
    </>
  );
}
