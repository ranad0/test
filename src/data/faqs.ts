import type { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: 'requirements',
    category: 'general',
    question: { ar: 'ما متطلبات الحجز؟', en: 'What are the booking requirements?' },
    answer: {
      ar: 'تختلف حسب السيارة ونوع الخدمة، ويتم توضيح الهوية، الرخصة، الضمان، والتأمين قبل تأكيد الحجز.',
      en: 'Requirements vary by vehicle and service type. ID, license, deposit or guarantee, and insurance details are clarified before confirmation.'
    }
  },
  {
    id: 'delivery',
    category: 'general',
    question: { ar: 'هل تتوفر خدمة التوصيل؟', en: 'Is delivery available?' },
    answer: {
      ar: 'نعم، يمكن تنسيق التوصيل للفنادق، المواقع، أو المطار حسب التوفر والوجهة. يتم تأكيد الرسوم والوقت قبل الحجز.',
      en: 'Yes, delivery to hotels, selected locations, or airports can be coordinated depending on availability and destination. Fees and timing are confirmed before booking.'
    }
  },
  {
    id: 'chauffeur',
    category: 'services',
    question: { ar: 'هل يمكن طلب سيارة مع سائق؟', en: 'Can I request a chauffeur?' },
    answer: {
      ar: 'نعم، تتوفر خدمة السيارة مع سائق حسب التوفر وطبيعة الرحلة. شاركنا خط السير وعدد الركاب والوقت لتأكيد التفاصيل.',
      en: 'Yes, chauffeur service can be arranged depending on availability and journey requirements. Share itinerary, passenger count, and timing to confirm details.'
    }
  },
  {
    id: 'pricing',
    category: 'pricing',
    question: { ar: 'هل الأسعار ظاهرة في الموقع؟', en: 'Are prices displayed on the site?' },
    answer: {
      ar: 'لا نعرض أسعارًا ثابتة في النسخة الحالية. السعر حسب التاريخ، المدة، السيارة، الموقع، ونوع الخدمة.',
      en: 'Fixed prices are not shown in this version. Pricing depends on date, duration, vehicle, location, and service type.'
    }
  },
  {
    id: 'monthly',
    category: 'monthly',
    question: { ar: 'هل يوجد إيجار شهري؟', en: 'Is monthly rental available?' },
    answer: {
      ar: 'نعم، تتوفر خيارات شهرية لبعض السيارات حسب التوفر والشروط، ويمكن طلب عرض للأفراد أو الشركات.',
      en: 'Yes, monthly options are available for selected vehicles depending on availability and terms. Quotes can be requested for individuals or companies.'
    }
  },
  {
    id: 'airport',
    category: 'airport',
    question: { ar: 'ما المعلومات المطلوبة لاستقبال المطار؟', en: 'What information is needed for airport arrival?' },
    answer: {
      ar: 'نحتاج اسم المطار، رقم الرحلة، تاريخ ووقت الوصول، الوجهة، عدد الركاب، وعدد الحقائب لاختيار السيارة المناسبة.',
      en: 'We need airport name, flight number, arrival date and time, destination, passenger count, and luggage count to recommend the suitable vehicle.'
    }
  },
  {
    id: 'events',
    category: 'events',
    question: { ar: 'هل يمكن استخدام السيارات للمناسبات أو التصوير؟', en: 'Can cars be used for events or shoots?' },
    answer: {
      ar: 'يمكن تنسيق السيارات للمناسبات، الزفاف، استقبال الضيوف، أو التصوير حسب التوفر والسياسة المعتمدة لكل سيارة.',
      en: 'Cars can be coordinated for events, weddings, guest reception, or shoots depending on availability and the approved policy for each vehicle.'
    }
  },
  {
    id: 'insurance',
    category: 'terms',
    question: { ar: 'هل التأمين مشمول؟', en: 'Is insurance included?' },
    answer: {
      ar: 'يتم توضيح التأمين، التحمل، والاستثناءات قبل توقيع العقد أو تأكيد الحجز حسب نوع السيارة والخدمة.',
      en: 'Insurance, deductible, and exclusions are clarified before signing or confirming the booking depending on vehicle and service type.'
    }
  },
  {
    id: 'confirm-booking',
    category: 'terms',
    question: { ar: 'متى يتم تأكيد الحجز؟', en: 'When is the booking confirmed?' },
    answer: {
      ar: 'يتم تأكيد الحجز بعد تأكيد التوفر، استكمال المتطلبات، والدفع أو الضمان حسب شروط السيارة والخدمة.',
      en: 'A booking is confirmed after availability is verified, requirements are completed, and payment or guarantee is arranged according to vehicle and service terms.'
    }
  }
];

export const carFaqs: FAQ[] = [
  {
    id: 'car-available-today',
    category: 'car',
    question: { ar: 'هل السيارة متوفرة اليوم؟', en: 'Is this car available today?' },
    answer: { ar: 'يتم تأكيد توفر السيارة عبر واتساب حسب التاريخ والمدة والموقع.', en: 'Vehicle availability is confirmed through WhatsApp based on date, duration, and location.' }
  },
  {
    id: 'car-with-driver',
    category: 'car',
    question: { ar: 'هل يمكن طلبها مع سائق؟', en: 'Can I request it with a chauffeur?' },
    answer: { ar: 'بعض السيارات يمكن تنسيقها مع سائق حسب التوفر وطبيعة الرحلة.', en: 'Some vehicles can be coordinated with a chauffeur depending on availability and journey requirements.' }
  },
  {
    id: 'car-hotel',
    category: 'car',
    question: { ar: 'هل يمكن توصيلها إلى فندق؟', en: 'Can it be delivered to a hotel?' },
    answer: { ar: 'يمكن تنسيق التوصيل للفنادق والمواقع حسب التوفر والوجهة، مع تأكيد الرسوم قبل الحجز.', en: 'Delivery to hotels and selected locations can be coordinated by availability and destination, with fees confirmed before booking.' }
  },
  {
    id: 'car-monthly',
    category: 'car',
    question: { ar: 'هل يوجد إيجار شهري لهذه السيارة؟', en: 'Is monthly rental available for this car?' },
    answer: { ar: 'الإيجار الشهري متاح لبعض السيارات حسب التوفر والشروط. اطلب عرضًا لتأكيد التفاصيل.', en: 'Monthly rental is available for selected vehicles depending on availability and terms. Request a quote to confirm details.' }
  }
];
