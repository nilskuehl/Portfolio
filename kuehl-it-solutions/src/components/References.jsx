import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { id: '01', title: 'FinTech Core', desc: 'High-Performance Banking Architecture', stack: 'React / Node / AWS' },
    { id: '02', title: 'AutoAI', desc: 'Neural Network Dashboard Integration', stack: 'Python / Three.js' },
    { id: '03', title: 'SecureGrid', desc: 'Cybersecurity Infrastructure Audit', stack: 'Go / Kubernetes' },
    { id: '04', title: 'DataFlow', desc: 'Realtime Analytics Stream', stack: 'Rust / Kafka' },
];

export default function References() {
    return (
        <section id="referenzen" className="relative min-h-screen py-20 md:py-32 px-4 md:px-6 z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-6xl font-bold text-black mb-12 md:mb-20 tracking-tight"
                >
                    Ausgewählte Referenzen
                </motion.h2>

                {/* Grid: 1 Spalte auf Mobile, 2 auf Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border border-black/20 bg-white/60 backdrop-blur-md p-6 md:p-10 hover:bg-white/80 hover:border-black/40 transition-all duration-500 cursor-default rounded-lg md:rounded-none shadow-sm"
                        >
                            <div className="flex justify-between items-start mb-6 md:mb-8">
                                <span className="text-gray-500 font-mono text-sm">/{project.id}</span>
                                <div className="h-[1px] w-8 md:w-12 bg-gray-400 group-hover:w-full group-hover:bg-black transition-all duration-500" />
                            </div>
                            <h3 className="text-xl md:text-3xl font-bold text-black mb-2">{project.title}</h3>
                            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">{project.desc}</p>
                            <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-600 group-hover:text-black transition-colors">
                                {project.stack}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}