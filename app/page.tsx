import Hero from '@/components/Hero';
import Services from '@/components/Services';
// 1. Fixed the path to point to the 'demos' subfolder
import Demos from '@/components/demos/Demos'; 
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
// 2. Removed the Footer import

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Demos />
      <Pricing />
      <section id="contact-section">
        <Contact />
      </section>
      {/* Removed the Footer component tag here as well */}
    </main>
  );
}