import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="relative z-10">
            <main className="relative pt-32">
                <section id="about-page" className="relative min-h-screen py-20 md:py-32 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            {/* Headline */}
                            <div>
                                <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight leading-tight">
                                    Über uns
                                </h1>
                                <div className="h-1 w-20 bg-black"></div>
                            </div>

                            {/* Text Block */}
                            <div className="space-y-8 text-gray-800 p-8 md:p-12 border border-black/20 bg-white/40 backdrop-blur-sm max-w-2xl">
                                <p className="text-lg md:text-xl leading-relaxed">
                                    Wir entwickeln IT-Lösungen, die nicht nur funktionieren, sondern überzeugen.
                                    Mit einem klaren Fokus auf Architektur, Performance und Wartbarkeit.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                    Unser Team verbindet jahrelange Expertise in modernen Technologien mit einem
                                    tiefen Verständnis für geschäftliche Anforderungen. Von der ersten Konzeption
                                    bis zur finalen Implementierung – wir liefern Code, der Bestand hat.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                    Unsere Philosophie basiert auf drei Säulen: Technische Exzellenz, klare Kommunikation
                                    und nachhaltige Lösungen. Wir glauben daran, dass großartige Software nicht nur
                                    funktionieren muss, sondern auch elegant, wartbar und zukunftssicher sein sollte.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 md:mt-32 border-t border-black/20 pt-16"
                        >
                            <div className="text-center md:text-left p-6 border border-black/20 bg-white/40 backdrop-blur-sm">
                                <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">10+</h3>
                                <p className="text-sm md:text-base uppercase tracking-widest text-gray-600">Jahre Erfahrung</p>
                            </div>
                            <div className="text-center md:text-left p-6 border border-black/20 bg-white/40 backdrop-blur-sm">
                                <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">50+</h3>
                                <p className="text-sm md:text-base uppercase tracking-widest text-gray-600">Projekte</p>
                            </div>
                            <div className="text-center md:text-left p-6 border border-black/20 bg-white/40 backdrop-blur-sm">
                                <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">100%</h3>
                                <p className="text-sm md:text-base uppercase tracking-widest text-gray-600">Kundenzufriedenheit</p>
                            </div>
                            <div className="text-center md:text-left p-6 border border-black/20 bg-white/40 backdrop-blur-sm">
                                <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">24/7</h3>
                                <p className="text-sm md:text-base uppercase tracking-widest text-gray-600">Support</p>
                            </div>
                        </motion.div>

                        {/* Services Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-20 md:mt-32"
                        >
                            <h3 className="text-2xl md:text-4xl font-bold text-black mb-12 tracking-tight">
                                Unsere Expertise
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-8 border border-black/20 bg-white/40 backdrop-blur-sm transition-all duration-300">
                                    <h4 className="text-xl font-bold text-black mb-4">Software Architektur</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Skalierbare und wartbare Systemdesigns für langfristigen Erfolg.
                                    </p>
                                </div>
                                <div className="p-8 border border-black/20 bg-white/40 backdrop-blur-sm transition-all duration-300">
                                    <h4 className="text-xl font-bold text-black mb-4">Cloud Solutions</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Moderne Cloud-Infrastrukturen mit AWS, Azure und Google Cloud.
                                    </p>
                                </div>
                                <div className="p-8 border border-black/20 bg-white/40 backdrop-blur-sm transition-all duration-300">
                                    <h4 className="text-xl font-bold text-black mb-4">Performance Optimierung</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Geschwindigkeitsoptimierung für maximale Effizienz und Nutzererlebnis.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}