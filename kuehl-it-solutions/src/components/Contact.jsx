import React from 'react';

export default function Contact() {
    return (
        <section id="kontakt" className="relative py-32 px-6 z-10 text-black">
            <div className="max-w-4xl mx-auto border-t border-black/20 pt-20">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl font-bold mb-6 text-black">Projekt starten.</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Sie suchen präzise IT-Architektur und kompromisslose Code-Qualität?
                            Lassen Sie uns über Ihre Vision sprechen.
                        </p>

                        <div className="mt-12 space-y-4">
                            <p className="text-sm text-gray-600 uppercase tracking-widest">Email</p>
                            <a href="mailto:contact@kuehl-it.de" className="text-xl text-black hover:text-gray-600 transition">contact@kuehl-it.de</a>
                        </div>
                    </div>

                    <form className="space-y-8">
                        <div className="group">
                            <input type="text" placeholder="Name / Unternehmen" className="w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-black transition-colors text-xl text-black placeholder:text-gray-500" />
                        </div>
                        <div className="group">
                            <input type="email" placeholder="E-Mail Adresse" className="w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-black transition-colors text-xl text-black placeholder:text-gray-500" />
                        </div>
                        <div className="group">
                            <textarea rows="4" placeholder="Projekt Details" className="w-full bg-transparent border-b border-gray-400 py-4 focus:outline-none focus:border-black transition-colors text-xl resize-none text-black placeholder:text-gray-500"></textarea>
                        </div>
                        <button className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors w-full md:w-auto">
                            Senden
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}