import type { Bilingual } from '../types';

export const site = {
  brand: {
    ar: 'نغمة القيادة',
    en: 'Driving Tone',
    full: 'Driving Tone / نغمة القيادة',
    domain: 'drivingtone.sa'
  },
  concept: {
    ar: 'نغمة الوصول',
    en: 'The Tone of Arrival'
  },
  tagline: {
    ar: 'نغمة القيادة — فخامة الوصول، بتنسيق يليق بك.',
    en: 'Driving Tone — Luxury arrival, arranged with precision.'
  },
  phone: '+966 54 333 3036',
  phoneHref: '+966543333036',
  whatsappNumber: '966543333036',
  location: {
    ar: 'الرياض، المملكة العربية السعودية — أضف العنوان الرسمي بعد اعتماده',
    en: 'Riyadh, Saudi Arabia — official address to be added after approval'
  },
  social: {
    instagram: 'https://www.instagram.com/drivingtone.sa',
    tiktok: 'https://www.tiktok.com/@drivingtone.sa',
    snapchat: 'https://www.snapchat.com/@drivingtone.sa',
    x: 'https://x.com/drivingtone1',
    maps: 'https://www.google.com/maps/place/نغمة+القيادة+لتأجير+السيارات+الفارهة'
  }
};

export const trustBadges: Bilingual[] = [
  { ar: 'أسطول فاخر مختار', en: 'Curated Luxury Fleet' },
  { ar: 'تنسيق مباشر عبر واتساب', en: 'Direct WhatsApp Concierge' },
  { ar: 'خيارات توصيل حسب التوفر', en: 'Delivery by Availability' },
  { ar: 'شروط واضحة قبل الحجز', en: 'Clear Requirements Before Booking' }
];

export const bookingSteps = [
  {
    number: '01',
    title: { ar: 'اختر السيارة أو الخدمة', en: 'Choose the vehicle or service' },
    body: { ar: 'ابدأ من الأسطول أو نوع الوصول الذي يناسب احتياجك.', en: 'Start with the fleet or the arrival type that suits your need.' }
  },
  {
    number: '02',
    title: { ar: 'أرسل التاريخ والموقع', en: 'Share date and location' },
    body: { ar: 'نموذج واتساب جاهز يجمع التفاصيل المهمة بدون تعقيد.', en: 'A structured WhatsApp message captures the important details.' }
  },
  {
    number: '03',
    title: { ar: 'استلم التأكيد والمتطلبات', en: 'Receive confirmation and requirements' },
    body: { ar: 'نؤكد التوفر، الشروط، وخيارات التسليم قبل الحجز.', en: 'We confirm availability, requirements, and delivery options before booking.' }
  }
];

export const reviewPlaceholders = [
  {
    source: { ar: 'تقييمات Google', en: 'Google Reviews' },
    quote: {
      ar: 'سيتم عرض تقييمات Google الرسمية بعد اعتمادها من العميل.',
      en: 'Verified Google reviews will appear here after client approval.'
    }
  },
  {
    source: { ar: 'صور التسليم', en: 'Delivery Moments' },
    quote: {
      ar: 'صور التسليم الحقيقية ستُضاف بعد جلسة التصوير الرسمية.',
      en: 'Real delivery moments will be added after the official photo shoot.'
    }
  },
  {
    source: { ar: 'تجارب العملاء', en: 'Client Experiences' },
    quote: {
      ar: 'تجارب العملاء الحقيقية ستظهر بعد جمع الموافقات.',
      en: 'Real client experiences will appear after approvals are collected.'
    }
  }
];

export const requirementsPreview = [
  { ar: 'هوية أو إقامة / جواز سفر حسب الحالة', en: 'ID, Iqama, or passport depending on client type' },
  { ar: 'رخصة قيادة سارية للقيادة الذاتية', en: 'Valid driving license for self-drive rental' },
  { ar: 'ضمان أو دفعة تأكيد حسب السيارة', en: 'Deposit or guarantee depending on vehicle' },
  { ar: 'التأمين والمسافة والوقود حسب شروط العقد', en: 'Insurance, mileage, and fuel policy by contract terms' }
];
