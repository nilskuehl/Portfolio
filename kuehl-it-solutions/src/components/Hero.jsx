import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center z-10 text-black px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center w-full max-w-4xl"
            >
                {/* Responsive Headlines: Kleiner auf Mobile, Riesig auf Desktop */}
                <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-black">
                    KÜHL IT
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-gray-700">
                    Solutions
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2 text-gray-600"
            >
                <span className="text-[10px] md:text-xs uppercase tracking-widest">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
                </motion.div>
            </motion.div>
        </section>
    );
}