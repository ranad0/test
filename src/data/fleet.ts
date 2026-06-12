import type { FleetCar } from '../types';

export const fleet: FleetCar[] = [
  {
    id: 'rr-cullinan-2026',
    slug: 'rolls-royce-cullinan-2026',
    brand: 'Rolls-Royce',
    brandAr: 'رولز رويس',
    name: 'Rolls-Royce Cullinan',
    nameAr: 'رولز رويس كولينان',
    year: 2026,
    category: 'Ultra-Luxury SUV',
    categoryAr: 'SUV فارهة جدًا',
    type: 'ultra-luxury',
    heroLine: { ar: 'حضور يليق بكبار الضيوف والمناسبات الخاصة.', en: 'Presence suited to VIP guests and private occasions.' },
    shortCopy: { ar: 'SUV فارهة جدًا لكبار الضيوف والمناسبات الخاصة.', en: 'An ultra-luxury SUV for VIP guests and private occasions.' },
    longCopy: {
      ar: 'سيارة فارهة جدًا تجمع بين الحضور الهادئ، المقصورة الراقية، وتجربة وصول مصممة للمناسبات وكبار الضيوف. يتم تأكيد التوفر والمتطلبات قبل الحجز.',
      en: 'An ultra-luxury SUV combining quiet presence, a refined cabin, and an arrival experience designed for occasions and VIP guests. Availability and requirements are confirmed before booking.'
    },
    image: '/images/fleet/rolls-royce-cullinan.jpg',
    gallery: [
      '/images/fleet/rolls-royce-cullinan.jpg',
      '/images/fleet/rolls-royce-cullinan-interior.jpg',
      '/images/fleet/rolls-royce-cullinan-detail.jpg'
    ],
    alt: { ar: 'رولز رويس كولينان في وصول فاخر ليلي', en: 'Rolls-Royce Cullinan in a luxury night arrival scene' },
    seats: 5,
    luggage: 'Large',
    luggageAr: 'كبيرة',
    serviceTypes: ['Self-drive', 'Chauffeur', 'Airport', 'Event', 'Monthly'],
    serviceTypesAr: ['قيادة ذاتية', 'مع سائق', 'مطار', 'مناسبة', 'شهري'],
    durations: ['Daily', 'Weekly', 'Monthly'],
    durationsAr: ['يومي', 'أسبوعي', 'شهري'],
    occasions: ['VIP', 'Wedding', 'Business', 'Airport', 'Content shoot'],
    occasionsAr: ['VIP', 'زفاف', 'أعمال', 'مطار', 'تصوير'],
    bestFor: [
      { ar: 'كبار الضيوف', en: 'VIP Guests' },
      { ar: 'الزفاف', en: 'Weddings' },
      { ar: 'استقبال المطار', en: 'Airport Arrival' }
    ],
    tags: ['VIP', 'Wedding', 'Ultra-luxury'],
    deliveryAvailable: true,
    chauffeurAvailable: true,
    featured: true
  },
  {
    id: 'range-rover-autobiography-2025',
    slug: 'range-rover-autobiography-2025',
    brand: 'Range Rover',
    brandAr: 'رنج روفر',
    name: 'Range Rover Autobiography',
    nameAr: 'رنج روفر أوتوبيوغرافي',
    year: 2025,
    category: 'Luxury SUV',
    categoryAr: 'SUV فارهة',
    type: 'suv',
    heroLine: { ar: 'حضور هادئ وفخامة SUV للأعمال والمطار.', en: 'Quiet SUV luxury for business and airport arrivals.' },
    shortCopy: { ar: 'حضور هادئ، مقصورة واسعة، وخيار مثالي للأعمال والمطار.', en: 'Quiet presence, spacious cabin, and ideal for business and airport arrivals.' },
    longCopy: {
      ar: 'سيارة SUV فارهة تجمع بين الراحة، المساحة، والحضور الهادئ. مناسبة لرحلات الأعمال، استقبال المطار، كبار الضيوف، الاستخدام العائلي، والإيجار الشهري حسب التوفر.',
      en: 'A luxury SUV combining comfort, space, and understated presence. Suitable for business travel, airport arrivals, VIP guests, family use, and monthly rental by availability.'
    },
    image: '/images/fleet/range-rover-autobiography.jpg',
    gallery: [
      '/images/fleet/range-rover-autobiography.jpg',
      '/images/fleet/range-rover-autobiography-interior.jpg',
      '/images/fleet/range-rover-autobiography-detail.jpg'
    ],
    alt: { ar: 'رنج روفر أوتوبيوغرافي في مشهد تسليم فاخر', en: 'Range Rover Autobiography in a refined delivery scene' },
    seats: 5,
    luggage: 'Large',
    luggageAr: 'كبيرة',
    serviceTypes: ['Self-drive', 'Chauffeur', 'Airport', 'Monthly'],
    serviceTypesAr: ['قيادة ذاتية', 'مع سائق', 'مطار', 'شهري'],
    durations: ['Daily', 'Weekly', 'Monthly'],
    durationsAr: ['يومي', 'أسبوعي', 'شهري'],
    occasions: ['Business', 'Airport', 'VIP', 'Family'],
    occasionsAr: ['أعمال', 'مطار', 'VIP', 'عائلة'],
    bestFor: [
      { ar: 'الأعمال', en: 'Business' },
      { ar: 'استقبال المطار', en: 'Airport Arrival' },
      { ar: 'العائلة', en: 'Family' }
    ],
    tags: ['Business', 'Airport', 'Family'],
    deliveryAvailable: true,
    chauffeurAvailable: true,
    featured: true
  },
  {
    id: 'mercedes-s-class-2025',
    slug: 'mercedes-benz-s-class-2025',
    brand: 'Mercedes-Benz',
    brandAr: 'مرسيدس بنز',
    name: 'Mercedes-Benz S-Class',
    nameAr: 'مرسيدس بنز S-Class',
    year: 2025,
    category: 'Executive Sedan',
    categoryAr: 'سيدان تنفيذية',
    type: 'sedan',
    heroLine: { ar: 'سيدان تنفيذية لحضور الأعمال والاستقبال الراقي.', en: 'An executive sedan for business presence and refined reception.' },
    shortCopy: { ar: 'سيدان تنفيذية لرحلات الأعمال والاستقبال الراقي.', en: 'An executive sedan for business trips and refined guest reception.' },
    longCopy: {
      ar: 'مرسيدس S-Class خيار راقٍ للتنقّل التنفيذي، استقبال كبار الضيوف، والرحلات التي تحتاج راحة وهدوءًا وأناقة في التفاصيل.',
      en: 'The Mercedes-Benz S-Class is a refined choice for executive mobility, VIP guest reception, and journeys that need comfort, calm, and detail.'
    },
    image: '/images/fleet/mercedes-s-class.jpg',
    gallery: [
      '/images/fleet/mercedes-s-class.jpg',
      '/images/fleet/mercedes-s-class-interior.jpg',
      '/images/fleet/mercedes-s-class-detail.jpg'
    ],
    alt: { ar: 'مرسيدس S-Class سيدان تنفيذية بتجهيز فاخر', en: 'Mercedes-Benz S-Class executive sedan with luxury presentation' },
    seats: 4,
    luggage: 'Medium',
    luggageAr: 'متوسطة',
    serviceTypes: ['Self-drive', 'Chauffeur', 'Airport', 'Monthly'],
    serviceTypesAr: ['قيادة ذاتية', 'مع سائق', 'مطار', 'شهري'],
    durations: ['Daily', 'Weekly', 'Monthly'],
    durationsAr: ['يومي', 'أسبوعي', 'شهري'],
    occasions: ['Business', 'Airport', 'VIP'],
    occasionsAr: ['أعمال', 'مطار', 'VIP'],
    bestFor: [
      { ar: 'المديرين التنفيذيين', en: 'Executives' },
      { ar: 'الاجتماعات', en: 'Meetings' },
      { ar: 'المطار', en: 'Airport' }
    ],
    tags: ['Executive', 'Business', 'Chauffeur'],
    deliveryAvailable: true,
    chauffeurAvailable: true,
    featured: true
  },
  {
    id: 'lexus-lx-600-2026',
    slug: 'lexus-lx-600-2026',
    brand: 'Lexus',
    brandAr: 'لكزس',
    name: 'Lexus LX 600',
    nameAr: 'لكزس LX 600',
    year: 2026,
    category: 'Luxury SUV',
    categoryAr: 'SUV فارهة',
    type: 'suv',
    heroLine: { ar: 'راحة SUV فاخرة للعائلة، الضيوف، والتنقّل اليومي الراقي.', en: 'Luxury SUV comfort for family, guests, and refined daily mobility.' },
    shortCopy: { ar: 'راحة SUV فاخرة للعائلة، الضيوف، والتنقّل اليومي الراقي.', en: 'Luxury SUV comfort for family, guests, and refined daily mobility.' },
    longCopy: {
      ar: 'لكزس LX 600 خيار فاخر وعملي للضيوف، العائلة، الاستقبال، والاستخدام الشهري، مع مقصورة واسعة وحضور متزن.',
      en: 'The Lexus LX 600 is a luxurious yet practical option for guests, family, reception, and monthly use, with a spacious cabin and balanced presence.'
    },
    image: '/images/fleet/lexus-lx600.jpg',
    gallery: [
      '/images/fleet/lexus-lx600.jpg',
      '/images/fleet/lexus-lx600-interior.jpg',
      '/images/fleet/lexus-lx600-detail.jpg'
    ],
    alt: { ar: 'لكزس LX 600 بتصوير فاخر', en: 'Lexus LX 600 in luxury visual presentation' },
    seats: 7,
    luggage: 'Large',
    luggageAr: 'كبيرة',
    serviceTypes: ['Self-drive', 'Airport', 'Event', 'Monthly'],
    serviceTypesAr: ['قيادة ذاتية', 'مطار', 'مناسبة', 'شهري'],
    durations: ['Daily', 'Weekly', 'Monthly'],
    durationsAr: ['يومي', 'أسبوعي', 'شهري'],
    occasions: ['Family', 'Airport', 'Business', 'VIP'],
    occasionsAr: ['عائلة', 'مطار', 'أعمال', 'VIP'],
    bestFor: [
      { ar: 'العائلة', en: 'Family' },
      { ar: 'الإيجار الشهري', en: 'Monthly Rental' },
      { ar: 'الضيوف', en: 'Guests' }
    ],
    tags: ['Family', 'Monthly', 'SUV'],
    deliveryAvailable: true,
    chauffeurAvailable: false,
    featured: true
  },
  {
    id: 'cadillac-escalade-2025',
    slug: 'cadillac-escalade-2025',
    brand: 'Cadillac',
    brandAr: 'كاديلاك',
    name: 'Cadillac Escalade',
    nameAr: 'كاديلاك إسكاليد',
    year: 2025,
    category: 'VIP SUV',
    categoryAr: 'SUV لكبار الضيوف',
    type: 'suv',
    heroLine: { ar: 'مساحة وحضور لاستقبال الضيوف والتنقلات الخاصة.', en: 'Space and presence for guest reception and private mobility.' },
    shortCopy: { ar: 'SUV واسعة لاستقبال الضيوف، الفنادق، والرحلات العائلية الراقية.', en: 'A spacious SUV for guest reception, hotels, and refined family journeys.' },
    longCopy: {
      ar: 'كاديلاك إسكاليد تمنحك حضور SUV كبيرًا ومقصورة مناسبة للضيوف والرحلات العائلية والتنسيق مع الفنادق والفعاليات.',
      en: 'The Cadillac Escalade delivers strong SUV presence and a cabin suited for guests, families, hotels, and event coordination.'
    },
    image: '/images/fleet/cadillac-escalade.jpg',
    gallery: [
      '/images/fleet/cadillac-escalade.jpg',
      '/images/fleet/cadillac-escalade-interior.jpg',
      '/images/fleet/cadillac-escalade-detail.jpg'
    ],
    alt: { ar: 'كاديلاك إسكاليد لاستقبال كبار الضيوف', en: 'Cadillac Escalade for VIP guest reception' },
    seats: 7,
    luggage: 'Large',
    luggageAr: 'كبيرة',
    serviceTypes: ['Chauffeur', 'Airport', 'Event', 'Monthly'],
    serviceTypesAr: ['مع سائق', 'مطار', 'مناسبة', 'شهري'],
    durations: ['Daily', 'Weekly', 'Monthly'],
    durationsAr: ['يومي', 'أسبوعي', 'شهري'],
    occasions: ['VIP', 'Airport', 'Family', 'Wedding'],
    occasionsAr: ['VIP', 'مطار', 'عائلة', 'زفاف'],
    bestFor: [
      { ar: 'استقبال VIP', en: 'VIP Reception' },
      { ar: 'الفنادق', en: 'Hotels' },
      { ar: 'المطار', en: 'Airport' }
    ],
    tags: ['VIP', 'Airport', 'Family'],
    deliveryAvailable: true,
    chauffeurAvailable: true,
    featured: false
  },
  {
    id: 'mercedes-v-class-2025',
    slug: 'mercedes-benz-v-class-2025',
    brand: 'Mercedes-Benz',
    brandAr: 'مرسيدس بنز',
    name: 'Mercedes-Benz V-Class',
    nameAr: 'مرسيدس بنز V-Class',
    year: 2025,
    category: 'VIP Group Mobility',
    categoryAr: 'تنقّل VIP للمجموعات',
    type: 'family',
    heroLine: { ar: 'تنقّل راقٍ للوفود، الفنادق، والمجموعات الخاصة.', en: 'Refined mobility for delegations, hotels, and private groups.' },
    shortCopy: { ar: 'خيار راقٍ للوفود، الفنادق، والمجموعات الخاصة.', en: 'A refined option for delegations, hotels, and private groups.' },
    longCopy: {
      ar: 'مرسيدس V-Class خيار مناسب للمجموعات الصغيرة، الوفود، الفنادق، واستقبال الضيوف عندما تكون الراحة والمساحة جزءًا من التجربة.',
      en: 'The Mercedes-Benz V-Class is suited to small groups, delegations, hotels, and guest reception where space and comfort are part of the experience.'
    },
    image: '/images/fleet/mercedes-v-class.jpg',
    gallery: [
      '/images/fleet/mercedes-v-class.jpg',
      '/images/fleet/mercedes-v-class-interior.jpg',
      '/images/fleet/mercedes-v-class-detail.jpg'
    ],
    alt: { ar: 'مرسيدس V-Class لتنقل الوفود', en: 'Mercedes-Benz V-Class for delegation mobility' },
    seats: 7,
    luggage: 'Large',
    luggageAr: 'كبيرة',
    serviceTypes: ['Chauffeur', 'Airport', 'Event', 'Monthly'],
    serviceTypesAr: ['مع سائق', 'مطار', 'مناسبة', 'شهري'],
    durations: ['Daily', 'Weekly', 'Monthly'],
    durationsAr: ['يومي', 'أسبوعي', 'شهري'],
    occasions: ['Airport', 'Business', 'VIP', 'Family'],
    occasionsAr: ['مطار', 'أعمال', 'VIP', 'عائلة'],
    bestFor: [
      { ar: 'الوفود', en: 'Delegations' },
      { ar: 'الفنادق', en: 'Hotels' },
      { ar: 'المجموعات', en: 'Groups' }
    ],
    tags: ['Delegations', 'Airport', 'Hotel'],
    deliveryAvailable: true,
    chauffeurAvailable: true,
    featured: false
  }
];

export const filterOptions = {
  serviceTypes: ['Self-drive', 'Chauffeur', 'Airport', 'Event', 'Monthly'],
  categories: ['SUV', 'Sedan', 'Ultra-luxury', 'Executive', 'Family'],
  brands: ['Rolls-Royce', 'Range Rover', 'Mercedes-Benz', 'Lexus', 'Cadillac', 'Other'],
  passengers: ['2', '4', '5', '7'],
  luggage: ['Light', 'Medium', 'Large'],
  durations: ['Daily', 'Weekly', 'Monthly'],
  occasions: ['Business', 'Airport', 'Wedding', 'VIP', 'Content shoot', 'Family'],
  modelYears: ['2026', '2025', '2024'],
  delivery: ['Delivery available']
};
