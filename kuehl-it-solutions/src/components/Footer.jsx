import React from 'react';

export default function Footer() {
    return (
        <footer id="impressum" className="relative z-10 bg-[#d8d2c4] text-gray-700 py-12 border-t border-black/20 text-sm w-screen left-0 right-0">
            <div className="w-full px-8 flex flex-col md:flex-row justify-between gap-4">
                <div>
                    <h4 className="text-black uppercase tracking-widest mb-2">Kühl IT Solutions</h4>
                    <p>Musterstraße 1<br />12345 Musterstadt</p>
                </div>
                <div className="flex flex-col md:text-right gap-2">
                    <a href="#" className="hover:text-black transition">Datenschutzerklärung</a>
                    <a href="#" className="hover:text-black transition">Impressum</a>
                    <p>© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}