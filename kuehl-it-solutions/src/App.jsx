import React from 'react';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      {/* Navigation fixiert oben */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 text-white mix-blend-difference">
        <span className="font-bold text-xl tracking-tighter">KÜHL IT</span>
        <div className="space-x-8 text-sm uppercase tracking-widest hidden md:block">
          <a href="#referenzen" className="hover:opacity-50 transition">Work</a>
          <a href="#kontakt" className="hover:opacity-50 transition">Kontakt</a>
        </div>
      </nav>

      {/* Der 3D Hintergrund (liegt auf z-index 0) */}
      <Background3D />

      {/* Der Inhalt (liegt auf z-index 10+) */}
      <main className="relative">
        <Hero />
        <References />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}