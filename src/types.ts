export type Language = 'ar' | 'en';

export type Bilingual = {
  ar: string;
  en: string;
};

export type WhatsAppMessageType =
  | 'general'
  | 'car'
  | 'airport'
  | 'chauffeur'
  | 'event'
  | 'corporate'
  | 'hotelDelivery'
  | 'vipReception';

export type NavItem = {
  label: Bilingual;
  path: string;
  highlight?: boolean;
};

export type FleetCar = {
  id: string;
  slug: string;
  brand: string;
  brandAr: string;
  name: string;
  nameAr: string;
  year: number;
  category: string;
  categoryAr: string;
  type: string;
  heroLine: Bilingual;
  shortCopy: Bilingual;
  longCopy: Bilingual;
  image: string;
  gallery: string[];
  alt: Bilingual;
  seats: number;
  luggage: string;
  luggageAr: string;
  serviceTypes: string[];
  serviceTypesAr: string[];
  durations: string[];
  durationsAr: string[];
  occasions: string[];
  occasionsAr: string[];
  bestFor: Bilingual[];
  tags: string[];
  deliveryAvailable: boolean;
  chauffeurAvailable: boolean;
  featured: boolean;
};

export type Service = {
  id: string;
  slug: string;
  path: string;
  icon: string;
  title: Bilingual;
  shortCopy: Bilingual;
  heroTitle: Bilingual;
  heroBody: Bilingual;
  promiseTitle: Bilingual;
  promiseBody: Bilingual;
  cta: Bilingual;
  secondaryCta?: Bilingual;
  image: string;
  alt: Bilingual;
  whatsappType: WhatsAppMessageType;
  whoFor: Bilingual[];
  howItWorks: Bilingual[];
  trustBadges: Bilingual[];
  relatedServiceIds: string[];
};

export type FAQ = {
  id: string;
  category: string;
  question: Bilingual;
  answer: Bilingual;
};

export type SEOEntry = {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  ogTitle?: string;
  ogDescription?: string;
};
