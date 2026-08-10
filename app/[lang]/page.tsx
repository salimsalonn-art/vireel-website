import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Demos from '@/components/demos/Demos'; 
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import { getDictionary } from '../../getDictionary';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      {/* THE FIX: We are now passing the dict and lang props into every component! */}
      <Hero dict={dict.hero} lang={lang} />
      
      <Services dict={dict.services} lang={lang} />
      
      <Demos dict={dict.demos} lang={lang} />
      
      <Pricing dict={dict.pricing} lang={lang} />
      
      <section id="contact-section">
        {/* Note: If you haven't updated your Contact.tsx file yet, leave this as <Contact /> for now! */}
        <Contact dict={dict.contact} lang={lang} />
      </section>
    </main>
  );
}