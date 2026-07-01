import { About } from '@/components/sections/About';
import { Algorithm } from '@/components/sections/Algorithm';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Principles } from '@/components/sections/Principles';
import { Projects } from '@/components/sections/Projects';
import { Team } from '@/components/sections/Team';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('hero');
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
      <Team />
      <Principles />
      <Algorithm />
      <Contact />
      <Footer />
    </main>
  );
}