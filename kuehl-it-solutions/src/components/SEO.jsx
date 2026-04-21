import { useEffect } from 'react';

const SITE_NAME = 'K\u00fchl IT Solutions';
const DEFAULT_IMAGE = 'https://kuehlitsolutions.com/logo.png';

function setMeta(selector, attribute, value) {
    if (!value) return;

    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement('meta');
        const match = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (match) {
            element.setAttribute(match[1], match[2]);
        }
        document.head.appendChild(element);
    }

    element.setAttribute(attribute, value);
}

function setLink(rel, href) {
    if (!href) return;

    let element = document.head.querySelector(`link[rel="${rel}"]`);
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }

    element.setAttribute('href', href);
}

export default function SEO({ title, description, url, image = DEFAULT_IMAGE, jsonLd }) {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : '';

    useEffect(() => {
        document.documentElement.lang = 'de';
        document.title = fullTitle;

        setMeta('meta[name="description"]', 'content', description);
        setMeta('meta[name="robots"]', 'content', 'index, follow');
        setMeta('meta[property="og:type"]', 'content', 'website');
        setMeta('meta[property="og:locale"]', 'content', 'de_DE');
        setMeta('meta[property="og:site_name"]', 'content', SITE_NAME);
        setMeta('meta[property="og:title"]', 'content', fullTitle);
        setMeta('meta[property="og:description"]', 'content', description);
        setMeta('meta[property="og:url"]', 'content', url);
        setMeta('meta[property="og:image"]', 'content', image);
        setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'content', fullTitle);
        setMeta('meta[name="twitter:description"]', 'content', description);
        setMeta('meta[name="twitter:image"]', 'content', image);
        setLink('canonical', url);

        const scriptId = 'structured-data';
        let script = document.getElementById(scriptId);
        if (jsonLdText) {
            if (!script) {
                script = document.createElement('script');
                script.id = scriptId;
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.textContent = jsonLdText;
        } else if (script) {
            script.remove();
        }
    }, [description, fullTitle, image, jsonLdText, url]);

    return null;
}
