import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Background3D from './components/Background3D';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-[#e8e2d4] min-h-screen selection:bg-black selection:text-white">
        {/* Navigation - nur Burger Menu und Logo links */}
        <nav className="absolute top-0 left-0 w-full p-8 flex items-center gap-1 z-50">
          {/* Burger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black hover:text-gray-600 transition z-50"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Logo */}
          <Link to="/">
            <img src="./src/assets/logo.png" alt="Kühl IT Solutions Logo" className="h-16 w-auto" />
          </Link>
        </nav>

        {/* Burger Menu Overlay - links oben, kleiner */}
        {menuOpen && (
          <div className="fixed top-32 left-8 z-40 p-6 bg-white/40 backdrop-blur-sm border border-black/20 rounded-lg">
            <div className="flex flex-col items-start">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                style={{ color: '#C9A961', textDecoration: 'none' }}
                className="block text-xl md:text-2xl font-bold hover:opacity-80 transition py-1"
              >
                Home
              </Link>
              <div className="w-full h-px bg-black/10 my-1"></div>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                style={{ color: '#C9A961', textDecoration: 'none' }}
                className="block text-xl md:text-2xl font-bold hover:opacity-80 transition py-1"
              >
                Über mich
              </Link>
              <div className="w-full h-px bg-black/10 my-1"></div>
              <a
                href="#referenzen"
                onClick={() => setMenuOpen(false)}
                style={{ color: '#C9A961', textDecoration: 'none' }}
                className="block text-xl md:text-2xl font-bold hover:opacity-80 transition py-1"
              >
                Work
              </a>
              <div className="w-full h-px bg-black/10 my-1"></div>
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                style={{ color: '#C9A961', textDecoration: 'none' }}
                className="block text-xl md:text-2xl font-bold hover:opacity-80 transition py-1"
              >
                Kontakt
              </a>
            </div>
          </div>
        )}

        {/* Der 3D Hintergrund (bleibt immer gleich) */}
        <Background3D />

        {/* Routes - Content wechselt, Background bleibt */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}