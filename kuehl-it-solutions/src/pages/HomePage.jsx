import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import References from '../components/References';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'K\u00fchl IT Solutions',
    url: 'https://kuehlitsolutions.com/',
    logo: 'https://kuehlitsolutions.com/logo.png',
    image: 'https://kuehlitsolutions.com/logo.png',
    email: 'nils.kuehl@kuehlitsolutions.com',
    telephone: '+49 152 3113320',
    areaServed: ['Deutschland', 'DACH'],
    description: 'Software-Architektur, Cloud Solutions und Performance Optimierung f\u00fcr skalierbare, wartbare IT-Systeme.',
    founder: {
        '@type': 'Person',
        name: 'Nils K\u00fchl',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Software Architektur',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Cloud Solutions',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Performance Optimierung',
                },
            },
        ],
    },
};

export default function HomePage() {
    return (
        <div className="relative z-10 pt-24">
            <SEO
                title={'K\u00fchl IT Solutions | Software Architektur & Cloud Solutions'}
                description={'K\u00fchl IT Solutions entwickelt pr\u00e4zise Software-Architektur, Cloud-L\u00f6sungen und Performance-Optimierung f\u00fcr skalierbare, wartbare Systeme.'}
                url="https://kuehlitsolutions.com/"
                jsonLd={homeJsonLd}
            />
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
