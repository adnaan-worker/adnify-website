import { Navbar, Hero, Features, Stats, Pricing, CTA, Footer, TechStack } from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <TechStack />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
