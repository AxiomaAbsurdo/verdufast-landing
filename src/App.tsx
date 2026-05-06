import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProfitabilitySection from './components/ProfitabilitySection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="contenido-principal">
        <Hero />
        <Features />
        <ProfitabilitySection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
