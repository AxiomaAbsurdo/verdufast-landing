import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
// import HowItWorks from './components/HowItWorks'; // DISABLED
// import Products from './components/Products'; // DISABLED
import Testimonials from './components/Testimonials';
// import Pricing from './components/Pricing'; // DISABLED
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      {/* <HowItWorks /> DISABLED - Contains "¿Cómo funciona?" and "¿Listo para probar?" sections */}
      {/* <Products /> DISABLED - Contains "Productos Frescos" section */}
      <Testimonials />
      {/* <Pricing /> DISABLED - Contains "Precios Transparentes", "Calculá tu Costo de Envío", and "¿Listo para hacer tu primer pedido?" sections */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;