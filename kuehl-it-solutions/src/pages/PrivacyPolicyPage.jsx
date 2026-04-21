import React from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const sections = [
    {
        title: '1. Verantwortlicher',
        blocks: [
            { type: 'paragraph', text: 'Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:' },
            { type: 'paragraph', text: 'Nils Kühl, KÜHL IT Solutions' },
            { type: 'paragraph', text: 'E-Mail: kuehl.nils@t-online.de' },
            { type: 'paragraph', text: 'Telefon: +49 152 3113320' },
        ],
    },
    {
        title: '2. Allgemeine Hinweise zur Datenverarbeitung',
        blocks: [
            { type: 'paragraph', text: 'Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von Anfragen oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.' },
            { type: 'paragraph', text: 'Die maßgeblichen Rechtsgrundlagen ergeben sich insbesondere aus Art. 6 Abs. 1 DSGVO. Soweit eine Verarbeitung zur Beantwortung einer Anfrage oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Soweit die Verarbeitung zur sicheren und stabilen Bereitstellung der Website erforderlich ist, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.' },
            { type: 'paragraph', text: 'Die personenbezogenen Daten werden grundsätzlich direkt bei der betroffenen Person erhoben. Eine Verarbeitung von Daten aus anderen Quellen findet nicht statt.' },
            { type: 'paragraph', text: 'Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Sie ist jedoch erforderlich, um Anfragen zu bearbeiten. Ohne diese Daten kann eine Bearbeitung der Anfrage nicht erfolgen.' },
        ],
    },
    {
        title: '3. Bereitstellung der Website und Server-Logfiles',
        blocks: [
            { type: 'paragraph', text: 'Beim Aufruf dieser Website werden durch den Webserver technisch notwendige Daten verarbeitet. Dazu gehören insbesondere:' },
            {
                type: 'list',
                items: [
                    'IP-Adresse',
                    'Datum und Uhrzeit des Abrufs',
                    'aufgerufene URL',
                    'Referrer-URL',
                    'Browsertyp und Version',
                    'Betriebssystem',
                    'übertragene Datenmenge',
                    'HTTP-Statuscode',
                ],
            },
            { type: 'paragraph', text: 'Die Verarbeitung erfolgt, um die Website auszuliefern, die Systemsicherheit zu gewährleisten, Missbrauch zu erkennen und die technische Stabilität zu verbessern.' },
            { type: 'paragraph', text: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und funktionsfähigen Betrieb der Website.' },
            { type: 'paragraph', text: 'Die Server-Logfiles werden in der Regel für maximal 7 Tage gespeichert und anschließend gelöscht, sofern keine längere Speicherung zur Aufklärung von Sicherheitsvorfällen erforderlich ist.' },
        ],
    },
    {
        title: '4. Hosting',
        blocks: [
            { type: 'paragraph', text: 'Diese Website wird bei folgendem Anbieter gehostet:' },
            { type: 'paragraph', text: 'Hetzner' },
            { type: 'paragraph', text: 'Der Anbieter verarbeitet personenbezogene Daten (z. B. IP-Adressen) im Rahmen der Bereitstellung der Infrastruktur. Mit dem Anbieter besteht - soweit erforderlich - ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.' },
            { type: 'paragraph', text: 'Die Verarbeitung erfolgt ausschließlich in Rechenzentren innerhalb der Europäischen Union.' },
        ],
    },
    {
        title: '5. Kontaktaufnahme per E-Mail oder Kontaktformular',
        blocks: [
            { type: 'paragraph', text: 'Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben. Dazu können insbesondere Name, Unternehmen, E-Mail-Adresse, Telefonnummer sowie der Inhalt Ihrer Nachricht gehören.' },
            { type: 'paragraph', text: 'Die Daten werden verwendet, um Ihre Anfrage zu bearbeiten, Rückfragen zu stellen und eine mögliche Zusammenarbeit vorzubereiten oder durchzuführen.' },
            { type: 'paragraph', text: 'Erfolgt die Kontaktaufnahme über ein Formular, werden die Daten verschlüsselt (HTTPS) übertragen.' },
            { type: 'paragraph', text: 'Rechtsgrundlage ist je nach Inhalt der Anfrage Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.' },
            { type: 'paragraph', text: 'Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten oder berechtigten Interessen an einer weiteren Speicherung bestehen.' },
        ],
    },
    {
        title: '6. Cookies, Tracking und Analyse',
        blocks: [
            { type: 'paragraph', text: 'Diese Website verwendet keine technisch nicht notwendigen Cookies, keine Analyse-Tools und keine Marketing-Pixel.' },
            { type: 'paragraph', text: 'Es findet keine profilbildende Auswertung des Nutzungsverhaltens statt.' },
            { type: 'paragraph', text: 'Sollten zukünftig Analyse- oder Marketing-Dienste eingesetzt werden, wird diese Datenschutzerklärung entsprechend angepasst und - soweit erforderlich - vorab eine Einwilligung eingeholt.' },
        ],
    },
    {
        title: '7. Externe Inhalte und Drittanbieter',
        blocks: [
            { type: 'paragraph', text: 'Die Inhalte dieser Website werden vollständig lokal bereitgestellt. Es werden keine externen Schriftarten, Karten, Videos oder Social-Media-Plugins geladen.' },
            { type: 'paragraph', text: 'Soweit Dienstleister für Wartung oder technische Unterstützung eingesetzt werden, erfolgt dies auf Grundlage geeigneter datenschutzrechtlicher Vereinbarungen.' },
        ],
    },
    {
        title: '8. Empfänger und Übermittlung in Drittländer',
        blocks: [
            { type: 'paragraph', text: 'Personenbezogene Daten werden nur weitergegeben, wenn dies für den Betrieb der Website, die Bearbeitung von Anfragen, die Erfüllung eines Vertrags oder gesetzlicher Pflichten erforderlich ist.' },
            { type: 'paragraph', text: 'Eine Übermittlung in Staaten außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums findet derzeit nicht statt.' },
            { type: 'paragraph', text: 'Sollte eine solche Übermittlung zukünftig erforderlich werden, erfolgt sie ausschließlich unter Beachtung der gesetzlichen Voraussetzungen gemäß Art. 44 ff. DSGVO.' },
        ],
    },
    {
        title: '9. Speicherdauer',
        blocks: [
            { type: 'paragraph', text: 'Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist.' },
            { type: 'paragraph', text: 'Nach Wegfall des Zwecks werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.' },
            { type: 'paragraph', text: 'Geschäftliche Kommunikation kann aufgrund handels- oder steuerrechtlicher Vorgaben länger gespeichert werden.' },
        ],
    },
    {
        title: '10. Ihre Rechte',
        blocks: [
            { type: 'paragraph', text: 'Sie haben nach Maßgabe der DSGVO folgende Rechte:' },
            {
                type: 'list',
                items: [
                    'Auskunft gemäß Art. 15 DSGVO',
                    'Berichtigung gemäß Art. 16 DSGVO',
                    'Löschung gemäß Art. 17 DSGVO',
                    'Einschränkung der Verarbeitung gemäß Art. 18 DSGVO',
                    'Datenübertragbarkeit gemäß Art. 20 DSGVO',
                    'Widerspruch gemäß Art. 21 DSGVO',
                ],
            },
            { type: 'paragraph', text: 'Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.' },
            { type: 'paragraph', text: 'Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren:' },
            { type: 'paragraph', text: 'Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg' },
        ],
    },
    {
        title: '11. Datensicherheit',
        blocks: [
            { type: 'paragraph', text: 'Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine Verschlüsselung mittels HTTPS.' },
            { type: 'paragraph', text: 'Darüber hinaus treffen wir technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust, Missbrauch, unbefugtem Zugriff und Veränderung zu schützen. Diese Maßnahmen werden entsprechend der technischen Entwicklung angepasst.' },
        ],
    },
    {
        title: '12. Keine automatisierte Entscheidungsfindung',
        blocks: [
            { type: 'paragraph', text: 'Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt.' },
        ],
    },
    {
        title: '13. Aktualität dieser Datenschutzerklärung',
        blocks: [
            { type: 'paragraph', text: 'Diese Datenschutzerklärung gilt ab dem 21. April 2026.' },
            { type: 'paragraph', text: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich rechtliche Anforderungen oder technische Änderungen ergeben.' },
        ],
    },
];

function renderBlock(block) {
    if (block.type === 'list') {
        return (
            <ul key={block.items.join('|')} className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed">
                {block.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }

    return (
        <p key={block.text} className="text-base md:text-lg leading-relaxed">
            {block.text}
        </p>
    );
}

export default function PrivacyPolicyPage() {
    return (
        <div className="relative z-10 pt-24">
            <SEO
                title="Datenschutzerklärung | KÜHL IT Solutions"
                description="Datenschutzerklärung von KÜHL IT Solutions mit Informationen zur Verarbeitung personenbezogener Daten, Hosting, Server-Logfiles, Kontaktaufnahme und Betroffenenrechten."
                url="https://kuehlitsolutions.com/datenschutz"
            />
            <main className="relative pt-32">
                <section className="relative min-h-screen py-20 md:py-32 px-6 md:px-12 text-black">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16">
                            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tight leading-tight">
                                Datenschutzerklärung
                            </h1>
                            <div className="h-1 w-20 bg-black"></div>
                        </div>

                        <div className="space-y-8 text-gray-800 p-8 md:p-12 border border-black/20 bg-white/40 backdrop-blur-sm">
                            {sections.map((section) => (
                                <section key={section.title} className="space-y-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                                        {section.title}
                                    </h2>
                                    {section.blocks.map(renderBlock)}
                                </section>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
