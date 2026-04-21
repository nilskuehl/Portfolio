import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
        '@type': 'Person',
        name: 'Nils K\u00fchl',
        jobTitle: 'Software Architect',
        image: 'https://kuehlitsolutions.com/me.jpeg',
        worksFor: {
            '@type': 'Organization',
            name: 'K\u00fchl IT Solutions',
            url: 'https://kuehlitsolutions.com/',
        },
        knowsAbout: [
            'Software Architektur',
            'Cloud Solutions',
            'Performance Optimierung',
            'Medizinische Systembiologie',
        ],
        sameAs: [
            'https://github.com/nilskuehl',
            'https://www.linkedin.com/in/nilskuehl/',
        ],
    },
};

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/nilskuehl',
        icon: <FaGithub className="h-5 w-5" aria-hidden="true" />,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/nilskuehl/',
        icon: <FaLinkedin className="h-5 w-5" aria-hidden="true" />,
    },
];

export default function AboutPage() {
    return (
        <div className="relative z-10 pt-24">
            <SEO
                title={'\u00dcber Nils K\u00fchl | K\u00fchl IT Solutions'}
                description={'Nils K\u00fchl verbindet Forschung, Automotive Engineering und Software-Architektur f\u00fcr pr\u00e4zise, skalierbare und wartbare IT-L\u00f6sungen.'}
                url="https://kuehlitsolutions.com/about"
                image="https://kuehlitsolutions.com/me.jpeg"
                jsonLd={aboutJsonLd}
            />
            <main className="relative pt-32">
                <section id="about-page" className="relative min-h-screen py-20 md:py-32 px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            {/* Headline with Profile Image - Image aligned right with text block */}
                            <div className="flex flex-row items-start justify-between max-w-2xl">
                                <div>
                                    <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight leading-tight">
                                        Über mich
                                    </h1>
                                    <div className="h-1 w-20 bg-black"></div>
                                </div>

                                {/* Profile Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="ml-4 md:ml-8"
                                >
                                    <img
                                        src="/me.jpeg"
                                        alt="Nils Kühl"
                                        className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg border-2 border-black/20 shadow-lg"
                                    />
                                    <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
                                        {socialLinks.map(({ label, href, icon }) => (
                                            <a
                                                key={href}
                                                href={href}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`${label} Profil von Nils K\u00fchl \u00f6ffnen`}
                                                className="flex items-center justify-center gap-2 border border-black/20 bg-white/40 backdrop-blur-sm px-3 py-2 text-sm font-semibold text-black hover:bg-white/70 hover:border-black/40 transition-all"
                                            >
                                                {icon}
                                                <span>{label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Text Block */}
                            <div className="space-y-8 text-gray-800 p-8 md:p-12 border border-black/20 bg-white/40 backdrop-blur-sm max-w-2xl">
                                <p className="text-lg md:text-xl leading-relaxed">
                                    Vom Bachelor in Stuttgart über den Master in Ulm bis hin zu Stationen bei Mercedes und in der Medizinischen Systembiologie, mein Weg ist geprägt von der Suche nach technischer Exzellenz.
                                </p>
                                <p className="text-lg md:text-xl leading-relaxed">
                                    Ich verbinde die Präzision der Forschung mit der Skalierbarkeit der Automobilindustrie, um IT-Lösungen zu entwickeln,
                                    die durch Architektur, Performance und Wartbarkeit überzeugen.
                                </p>
                                <p className="text-lg md:text-xl leading-relaxed">
                                    Mein Fokus liegt auf nachhaltigem Code, der komplexe geschäftliche Anforderungen in elegante, zukunftssichere Software übersetzt. So liefere ich nicht nur funktionierende Systeme, sondern Lösungen, die technologisch und wirtschaftlich Bestand haben.
                                </p>

                            </div>
                        </motion.div>

                        {/* Stats Section */}
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
