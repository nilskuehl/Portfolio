import React from 'react';

export default function Footer() {
    return (
        <footer id="impressum" className="relative z-10 bg-black text-gray-600 py-12 px-6 border-t border-white/10 text-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <h4 className="text-white uppercase tracking-widest mb-2">Kühl IT Solutions</h4>
                    <p>Musterstraße 1<br />12345 Musterstadt</p>
                </div>
                <div className="flex flex-col md:text-right gap-2">
                    <a href="#" className="hover:text-white transition">Datenschutzerklärung</a>
                    <a href="#" className="hover:text-white transition">Impressum</a>
                    <p>© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}