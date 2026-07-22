import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Credentials from "@/components/sections/Credentials";
import Ventajas from "@/components/sections/Ventajas";
import Lineas from "@/components/sections/Lineas";
import Sistema from "@/components/sections/Sistema";
import Proceso from "@/components/sections/Proceso";
import Ubicacion from "@/components/sections/Ubicacion";
import CtaFinal from "@/components/sections/CtaFinal";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";

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
        <Proceso />
        <Ubicacion />
        <CtaFinal />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
