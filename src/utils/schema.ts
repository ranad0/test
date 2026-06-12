import { site } from '../data/site';
import type { FAQ, FleetCar, Service } from '../types';

const baseUrl = 'https://drivingtone.sa';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'AutoRental'],
    name: site.brand.full,
    alternateName: [site.brand.ar, site.brand.en, site.brand.domain],
    url: baseUrl,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressCountry: 'SA'
    },
    sameAs: Object.values(site.social).filter(Boolean)
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title.ar} / ${service.title.en}`,
    provider: {
      '@type': 'Organization',
      name: site.brand.full
    },
    areaServed: 'Riyadh, Saudi Arabia',
    serviceType: service.title.en,
    description: `${service.heroBody.ar} ${service.heroBody.en}`
  };
}

export function vehicleSchema(car: FleetCar) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: `${car.nameAr} / ${car.name}`,
    brand: car.brand,
    modelDate: String(car.year),
    vehicleSeatingCapacity: car.seats,
    bodyType: car.category,
    description: `${car.longCopy.ar} ${car.longCopy.en}`
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.ar,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.ar
      }
    }))
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`
    }))
  };
}
