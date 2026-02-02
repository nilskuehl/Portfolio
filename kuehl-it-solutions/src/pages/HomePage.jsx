import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import References from '../components/References';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className="relative z-10 pt-24">
            <main className="relative">
                <Hero />
                <About />
                <References />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}