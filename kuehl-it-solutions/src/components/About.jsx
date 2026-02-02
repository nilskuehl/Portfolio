import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="relative min-h-screen py-20 md:py-32 px-6 md:px-12 z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    {/* Headline */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 tracking-tight leading-tight">
                            Präzision trifft Innovation
                        </h2>
                        <div className="h-1 w-20 bg-black"></div>
                    </div>

                    {/* Text Block - Full Width Below */}
                    <div className="space-y-6 text-gray-800 p-8 md:p-12 border border-black/20 bg-white/40 backdrop-blur-sm max-w-2xl">
                        <p className="text-lg md:text-xl leading-relaxed">
                            Vom Bachelor in <strong>Stuttgart</strong> bis zum Master in <strong>Ulm</strong> habe ich mein Fundament gebaut, um heute Software auf höchstem Niveau zu realisieren. Meine Arbeitsweise wurde durch die strengen Engineering-Standards bei <strong>Mercedes-Benz</strong> und die datengetriebene Präzision in der <strong>Medizinischen Systembiologie</strong> geformt.                        </p>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Diese Mischung aus industrieller Skalierbarkeit und wissenschaftlicher Präzision ist mein Fundament, um für Sie Software zu bauen, die technologisch überzeugt und wirtschaftlich gewinnt.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Ich liefere keinen Standard-Code, sondern zukunftssichere Architektur mit Fokus auf Performance und Wartbarkeit – damit Ihre IT nicht nur heute funktioniert, sondern Ihr Business von morgen trägt.
                        </p>
                    </div>
                </motion.div>

                {/* Stats / Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-20 md:mt-32 border-t border-black/20 pt-16"
                >
                    <div className="text-center md:text-left p-6 border border-black/20 bg-white/40 backdrop-blur-sm">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">7+</h3>
                        <p className="text-xs md:text-sm uppercase tracking-wide text-gray-600">Jahre Erfahrung</p>
                    </div>
                    <div className="text-center md:text-left p-6 border border-black/20 bg-white/40 backdrop-blur-sm">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">10</h3>
                        <p className="text-xs md:text-sm uppercase tracking-wide text-gray-600">Erfolgreiche Projekte</p>
                    </div>
                    <div className="text-center md:text-left p-6 border border-black/20 bg-white/40 backdrop-blur-sm">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">100%</h3>
                        <p className="text-xs md:text-sm uppercase tracking-wide text-gray-600">Kundenzufriedenheit</p>
                    </div>
                    <div className="text-center md:text-left p-6 border border-black/20 bg-white/40 backdrop-blur-sm">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">24/7</h3>
                        <p className="text-xs md:text-sm uppercase tracking-wide text-gray-600">Support</p>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
    );
}