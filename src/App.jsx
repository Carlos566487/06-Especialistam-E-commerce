import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Health from './components/sections/Health';
import Specs from './components/sections/Specs';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Health />
        <Specs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
