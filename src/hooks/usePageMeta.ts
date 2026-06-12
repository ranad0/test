import { useEffect } from 'react';
import type { SEOEntry } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../utils/assetPath';

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

export function usePageMeta(entry: SEOEntry, jsonLd?: unknown | unknown[]) {
  const { language } = useLanguage();

  useEffect(() => {
    const title = language === 'ar' ? entry.titleAr : entry.titleEn;
    const description = language === 'ar' ? entry.descriptionAr : entry.descriptionEn;
    const ogTitle = entry.ogTitle || `${entry.titleAr} | ${entry.titleEn}`;
    const ogDescription = entry.ogDescription || `${entry.descriptionAr} ${entry.descriptionEn}`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: ogTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: ogDescription });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: assetPath('/images/hero-luxury-arrival.jpg') });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });

    const existing = document.getElementById('page-json-ld');
    existing?.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-json-ld';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [entry, jsonLd, language]);
}
