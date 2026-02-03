import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Background3D from './components/Background3D';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="bg-[#e8e2d4] min-h-screen selection:bg-black selection:text-white">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full p-8 flex items-center gap-1 z-50">
          {/* Burger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black hover:text-gray-600 transition-all duration-300 z-50"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            aria-label="Menu"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Menu
                size={32}
                className={`absolute transition-all duration-300 ${menuOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
                  }`}
              />
              <X
                size={32}
                className={`absolute transition-all duration-300 ${menuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'
                  }`}
              />
            </div>
          </button>

          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="Kühl IT Solutions Logo" className="h-16 w-auto" />
          </Link>
        </nav>

        {/* Burger Menu Overlay - links oben, kleiner */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Invisible overlay to catch outside clicks */}
              <div
                className="fixed inset-0 z-30"
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-24 left-8 z-40 px-4 py-3 bg-white/40 backdrop-blur-sm border border-black/20 rounded-lg"
              >
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
                  <Link
                    to="/#referenzen"
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById('referenzen');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    style={{ color: '#C9A961', textDecoration: 'none' }}
                    className="block text-xl md:text-2xl font-bold hover:opacity-80 transition py-1"
                  >
                    Work
                  </Link>
                  <div className="w-full h-px bg-black/10 my-1"></div>
                  <Link
                    to="/#kontakt"
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById('kontakt');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    style={{ color: '#C9A961', textDecoration: 'none' }}
                    className="block text-xl md:text-2xl font-bold hover:opacity-80 transition py-1"
                  >
                    Kontakt
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Der 3D Hintergrund (bleibt immer gleich) */}
        <Background3D />

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="fixed top-8 left-8 z-50 p-3 bg-white/40 backdrop-blur-sm border border-black/20 rounded-full hover:bg-white/60 transition-all"
              style={{ background: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(0, 0, 0, 0.2)' }}
              aria-label="Back to top"
            >
              <ArrowUp size={24} className="text-black" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Routes - Content wechselt, Background bleibt */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}