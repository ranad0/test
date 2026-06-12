import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'self-drive',
    slug: 'self-drive',
    path: '/fleet',
    icon: 'steering',
    title: { ar: 'إيجار فاخر للقيادة الذاتية', en: 'Luxury Self-Drive Rental' },
    shortCopy: { ar: 'اختر سيارة فارهة تقودها بنفسك لرحلة عمل، مناسبة، أو تجربة خاصة.', en: 'Choose a luxury car to drive yourself for business, occasions, or private journeys.' },
    heroTitle: { ar: 'قيادة فاخرة… بتفاصيل واضحة.', en: 'Luxury Self-Drive, Clearly Arranged.' },
    heroBody: { ar: 'اختر من أسطول مختار من السيارات الفارهة للقيادة الذاتية اليومية، الأسبوعية، أو الشهرية حسب التوفر والمتطلبات.', en: 'Choose from a curated luxury fleet for daily, weekly, or monthly self-drive rental by availability and requirements.' },
    promiseTitle: { ar: 'حرية القيادة مع وضوح قبل الحجز.', en: 'Freedom to Drive, Clarity Before Booking.' },
    promiseBody: { ar: 'نعرض لك التفاصيل الأساسية قبل التأكيد: السيارة، الموديل، المتطلبات، التوصيل، وسياسة السعر حسب التاريخ والمدة والموقع.', en: 'We show the essentials before confirmation: vehicle, model year, requirements, delivery, and pricing policy by date, duration, and location.' },
    cta: { ar: 'استعرض الأسطول', en: 'Explore the Fleet' },
    image: '/images/services/self-drive.jpg',
    alt: { ar: 'قيادة ذاتية بسيارة فارهة', en: 'Self-drive luxury car experience' },
    whatsappType: 'general',
    whoFor: [
      { ar: 'العملاء الذين يفضلون القيادة بأنفسهم', en: 'Clients who prefer to drive themselves' },
      { ar: 'الزوار والمقيمون في الرياض', en: 'Visitors and residents in Riyadh' },
      { ar: 'الإيجار اليومي والأسبوعي والشهري', en: 'Daily, weekly, and monthly rental needs' }
    ],
    howItWorks: [
      { ar: 'اختر السيارة المناسبة من الأسطول', en: 'Choose the suitable car from the fleet' },
      { ar: 'أرسل التاريخ والمدة وموقع التسليم', en: 'Share date, duration, and delivery location' },
      { ar: 'استلم التوفر والمتطلبات قبل الحجز', en: 'Receive availability and requirements before booking' }
    ],
    trustBadges: [
      { ar: 'موديلات واضحة', en: 'Clear model years' },
      { ar: 'متطلبات قبل التأكيد', en: 'Requirements before confirmation' },
      { ar: 'توصيل حسب التوفر', en: 'Delivery by availability' }
    ],
    relatedServiceIds: ['chauffeur', 'hotel-delivery', 'monthly-rental']
  },
  {
    id: 'chauffeur',
    slug: 'chauffeur',
    path: '/chauffeur',
    icon: 'chauffeur',
    title: { ar: 'سيارة فارهة مع سائق', en: 'Car with Chauffeur' },
    shortCopy: { ar: 'تنقّل مريح لكبار الضيوف، الأعمال، والمشاوير الخاصة حسب التوفر.', en: 'Comfortable premium mobility for VIP guests, business, and private travel by availability.' },
    heroTitle: { ar: 'سيارة فارهة مع سائق… براحة تليق بوقتك.', en: 'A Luxury Car with Chauffeur, Arranged Around Your Time.' },
    heroBody: { ar: 'لرحلات الأعمال، كبار الضيوف، المناسبات، والتنقّل الخاص، ننسّق سيارة فارهة مع سائق حسب التوفر وطبيعة الرحلة.', en: 'For business trips, VIP guests, events, and private mobility, we coordinate a luxury vehicle with chauffeur based on availability and journey requirements.' },
    promiseTitle: { ar: 'راحة الطريق جزء من الفخامة.', en: 'Comfort Is Part of Luxury.' },
    promiseBody: { ar: 'شاركنا وقت البداية، موقع الانطلاق، الوجهة، وعدد الركاب. ننسّق لك السيارة المناسبة وخيار السائق حسب احتياج الرحلة.', en: 'Share the start time, pickup point, destination, and passenger count. We coordinate the suitable vehicle and chauffeur option based on the journey.' },
    cta: { ar: 'اطلب سيارة مع سائق', en: 'Request Chauffeur' },
    secondaryCta: { ar: 'استعرض السيارات المناسبة', en: 'View Suitable Cars' },
    image: '/images/services/chauffeur.jpg',
    alt: { ar: 'سائق يفتح باب سيارة فارهة', en: 'Chauffeur opening the door of a luxury car' },
    whatsappType: 'chauffeur',
    whoFor: [
      { ar: 'رجال الأعمال والمديرون التنفيذيون', en: 'Business executives' },
      { ar: 'كبار الضيوف والوفود', en: 'VIP guests and delegations' },
      { ar: 'المناسبات والتنقلات الخاصة', en: 'Events and private mobility' }
    ],
    howItWorks: [
      { ar: 'أرسل خط السير وعدد الركاب', en: 'Share itinerary and passenger count' },
      { ar: 'نرشح السيارة المناسبة', en: 'We recommend the suitable vehicle' },
      { ar: 'نؤكد السائق والوقت قبل الحجز', en: 'We confirm chauffeur and timing before booking' }
    ],
    trustBadges: [
      { ar: 'حسب التوفر', en: 'By availability' },
      { ar: 'خط سير واضح', en: 'Clear itinerary' },
      { ar: 'تنسيق مباشر', en: 'Direct coordination' }
    ],
    relatedServiceIds: ['airport-transfer', 'vip-reception', 'corporate-monthly']
  },
  {
    id: 'airport-transfer',
    slug: 'airport-transfer',
    path: '/airport-transfer',
    icon: 'plane',
    title: { ar: 'استقبال المطار', en: 'Airport Transfer' },
    shortCopy: { ar: 'ننسّق وصولك من المطار بسيارة فارهة مع تفاصيل الرحلة والوجهة مسبقًا.', en: 'We coordinate your airport arrival with a luxury vehicle and pre-arranged journey details.' },
    heroTitle: { ar: 'استقبال مطار يليق ببداية الرحلة.', en: 'An Airport Arrival Worth the Journey.' },
    heroBody: { ar: 'أرسل تفاصيل الرحلة، وقت الوصول، عدد الركاب، والوجهة. ننسّق السيارة المناسبة وخيارات السائق أو التوصيل حسب التوفر.', en: 'Send your flight details, arrival time, passenger count, and destination. We coordinate the suitable vehicle and chauffeur or delivery option by availability.' },
    promiseTitle: { ar: 'من المطار إلى وجهتك بهدوء.', en: 'From Airport to Destination, Calmly.' },
    promiseBody: { ar: 'نطلب التفاصيل المهمة مسبقًا حتى يكون الوصول أكثر وضوحًا: الرحلة، الوقت، الحقائب، الوجهة، ونوع السيارة المناسب.', en: 'We collect the important details in advance so the arrival is clearer: flight, timing, luggage, destination, and suitable vehicle type.' },
    cta: { ar: 'احجز استقبال المطار', en: 'Book Airport Arrival' },
    image: '/images/services/airport-arrival.jpg',
    alt: { ar: 'سيارة فارهة عند مدخل المطار مع حقائب', en: 'Luxury car at airport arrival curb with luggage' },
    whatsappType: 'airport',
    whoFor: [
      { ar: 'زوار الرياض والسعودية', en: 'Visitors to Riyadh and Saudi Arabia' },
      { ar: 'رجال الأعمال بعد الرحلات', en: 'Business travelers after flights' },
      { ar: 'استقبال كبار الضيوف', en: 'VIP guest reception' }
    ],
    howItWorks: [
      { ar: 'أرسل رقم الرحلة ووقت الوصول', en: 'Send flight number and arrival time' },
      { ar: 'حدد الوجهة وعدد الركاب والحقائب', en: 'Specify destination, passengers, and luggage' },
      { ar: 'نؤكد السيارة وخيار السائق حسب التوفر', en: 'We confirm vehicle and chauffeur option by availability' }
    ],
    trustBadges: [
      { ar: 'تفاصيل الرحلة مسبقًا', en: 'Flight details in advance' },
      { ar: 'سيارات مناسبة للأمتعة', en: 'Luggage-suited vehicles' },
      { ar: 'توصيل حسب الوجهة', en: 'Delivery by destination' }
    ],
    relatedServiceIds: ['chauffeur', 'hotel-delivery', 'vip-reception']
  },
  {
    id: 'weddings-events',
    slug: 'weddings-events',
    path: '/weddings-events',
    icon: 'ribbon',
    title: { ar: 'سيارات الزفاف والمناسبات', en: 'Wedding & Event Cars' },
    shortCopy: { ar: 'وصول يليق بلحظتك، من الزفاف إلى استقبال كبار الضيوف والتصوير.', en: 'An arrival worthy of your moment, from weddings to VIP guest reception and shoots.' },
    heroTitle: { ar: 'وصول يليق بلحظتك.', en: 'An Arrival Worth Your Moment.' },
    heroBody: { ar: 'للزفاف، المناسبات، استقبال الضيوف، والتصوير، نساعدك في اختيار سيارة فارهة تناسب المشهد والتوقيت.', en: 'For weddings, events, guest reception, and shoots, we help you choose a luxury vehicle that suits the setting and timing.' },
    promiseTitle: { ar: 'تفاصيل المناسبة تبدأ من لحظة الوصول.', en: 'The Occasion Begins with the Arrival.' },
    promiseBody: { ar: 'نرتّب السيارة، وقت الحضور، موقع المناسبة، وخيار السائق أو التجهيز حسب التوفر، مع توصية مبكرة لتواريخ نهاية الأسبوع.', en: 'We coordinate the vehicle, arrival timing, venue location, and chauffeur or preparation option by availability, with early coordination recommended for weekends.' },
    cta: { ar: 'نسّق سيارة المناسبة', en: 'Plan Event Vehicle' },
    image: '/images/services/wedding-event.jpg',
    alt: { ar: 'سيارة فارهة أمام موقع مناسبة ليلية', en: 'Luxury car outside an evening event venue' },
    whatsappType: 'event',
    whoFor: [
      { ar: 'حفلات الزفاف', en: 'Weddings' },
      { ar: 'استقبال الضيوف', en: 'Guest reception' },
      { ar: 'التصوير والمحتوى', en: 'Shoots and content moments' }
    ],
    howItWorks: [
      { ar: 'حدد نوع المناسبة والتاريخ', en: 'Specify occasion type and date' },
      { ar: 'اختر السيارة أو الفئة المناسبة', en: 'Choose the suitable vehicle or class' },
      { ar: 'نؤكد التوقيت، الموقع، والتجهيزات', en: 'We confirm timing, location, and preparation details' }
    ],
    trustBadges: [
      { ar: 'تنسيق توقيت المناسبة', en: 'Event timing coordination' },
      { ar: 'خيارات فارهة', en: 'Luxury options' },
      { ar: 'حجز مبكر مستحسن', en: 'Early booking recommended' }
    ],
    relatedServiceIds: ['vip-reception', 'chauffeur', 'hotel-delivery']
  },
  {
    id: 'corporate-monthly',
    slug: 'corporate-monthly',
    path: '/corporate-monthly',
    icon: 'briefcase',
    title: { ar: 'تنقّل الشركات وكبار التنفيذيين', en: 'Corporate Mobility' },
    shortCopy: { ar: 'حلول راقية للشركات، الاجتماعات، الوفود، وتنقّل المديرين التنفيذيين.', en: 'Refined mobility for companies, meetings, delegations, and executive transport.' },
    heroTitle: { ar: 'تنقّل راقٍ للشركات والعقود الشهرية.', en: 'Refined Mobility for Corporate and Monthly Needs.' },
    heroBody: { ar: 'حلول مرنة للشركات والمديرين التنفيذيين، من سيارة واحدة إلى عدة سيارات، مع خيارات شهرية وتنسيق خاص حسب المتطلبات.', en: 'Flexible solutions for companies and executives, from one car to multiple vehicles, with monthly options and tailored coordination.' },
    promiseTitle: { ar: 'حلول واضحة لاحتياجات أطول.', en: 'Clear Solutions for Longer Needs.' },
    promiseBody: { ar: 'نساعد الشركات والأفراد في تحديد الفئة المناسبة، مدة العقد، عدد السيارات، وخيارات السائق أو الفواتير حسب المتطلبات المتفق عليها.', en: 'We help companies and individuals define the suitable class, contract duration, number of vehicles, and chauffeur or invoice requirements based on agreed needs.' },
    cta: { ar: 'اطلب عرض للشركات', en: 'Request Corporate Quote' },
    image: '/images/services/corporate.jpg',
    alt: { ar: 'سيارة فارهة أمام مبنى أعمال في الرياض', en: 'Luxury car outside a Riyadh business building' },
    whatsappType: 'corporate',
    whoFor: [
      { ar: 'الشركات والجهات', en: 'Companies and organizations' },
      { ar: 'المديرون التنفيذيون', en: 'Executives' },
      { ar: 'العقود الشهرية والاحتياجات الطويلة', en: 'Monthly contracts and long-term needs' }
    ],
    howItWorks: [
      { ar: 'أرسل عدد السيارات والفئة المطلوبة', en: 'Share number of vehicles and required category' },
      { ar: 'حدد مدة العقد وبداية الخدمة', en: 'Define contract duration and service start' },
      { ar: 'نرتّب العرض والمتطلبات حسب الحالة', en: 'We arrange the proposal and requirements case by case' }
    ],
    trustBadges: [
      { ar: 'إيجار شهري', en: 'Monthly rental' },
      { ar: 'تنسيق للشركات', en: 'Corporate coordination' },
      { ar: 'خيارات متعددة', en: 'Multiple options' }
    ],
    relatedServiceIds: ['chauffeur', 'airport-transfer', 'vip-reception']
  },
  {
    id: 'monthly-rental',
    slug: 'monthly-rental',
    path: '/corporate-monthly',
    icon: 'calendar',
    title: { ar: 'إيجار فاخر شهري', en: 'Monthly Luxury Rental' },
    shortCopy: { ar: 'خيارات شهرية مرنة لمن يحتاج سيارة فارهة لفترة أطول وبمتطلبات واضحة.', en: 'Flexible monthly options for clients who need a premium vehicle for longer periods.' },
    heroTitle: { ar: 'إيجار شهري يناسب حضورك اليومي.', en: 'Monthly Rental for Everyday Presence.' },
    heroBody: { ar: 'خيارات شهرية لبعض السيارات حسب التوفر، مع توضيح المتطلبات، المدة، وسياسة التسليم قبل تأكيد الحجز.', en: 'Monthly options for selected vehicles by availability, with requirements, duration, and delivery policy clarified before confirmation.' },
    promiseTitle: { ar: 'راحة أطول بدون تعقيد.', en: 'Longer Comfort Without Complexity.' },
    promiseBody: { ar: 'نحدد السيارة، المدة، الشروط، وخيارات التسليم بما يناسب الاستخدام الشهري للأفراد أو الشركات.', en: 'We define the vehicle, duration, terms, and delivery options to suit monthly use for individuals or companies.' },
    cta: { ar: 'استفسر عن الشهري', en: 'Ask About Monthly' },
    image: '/images/services/monthly-rental.jpg',
    alt: { ar: 'تسليم مفتاح سيارة لإيجار شهري', en: 'Key handover for monthly luxury rental' },
    whatsappType: 'corporate',
    whoFor: [
      { ar: 'الأفراد لفترات طويلة', en: 'Individuals for longer periods' },
      { ar: 'الشركات والمديرون', en: 'Companies and executives' },
      { ar: 'زوار الرياض لفترة ممتدة', en: 'Extended-stay visitors in Riyadh' }
    ],
    howItWorks: [
      { ar: 'اختر الفئة والمدة', en: 'Choose category and duration' },
      { ar: 'أرسل تاريخ البداية والموقع', en: 'Share start date and location' },
      { ar: 'استلم العرض والمتطلبات', en: 'Receive quote and requirements' }
    ],
    trustBadges: [
      { ar: 'مدد مرنة', en: 'Flexible terms' },
      { ar: 'متطلبات واضحة', en: 'Clear requirements' },
      { ar: 'للأفراد والشركات', en: 'For individuals and companies' }
    ],
    relatedServiceIds: ['self-drive', 'corporate-monthly', 'hotel-delivery']
  },
  {
    id: 'hotel-delivery',
    slug: 'hotel-delivery',
    path: '/hotel-delivery',
    icon: 'pin',
    title: { ar: 'توصيل للفنادق والمواقع', en: 'Hotel Delivery' },
    shortCopy: { ar: 'ننسّق تسليم السيارة في الفندق أو الموقع حسب التوفر والوجهة.', en: 'We coordinate vehicle delivery to hotels or selected locations depending on availability.' },
    heroTitle: { ar: 'تسليم السيارة حيث تبدأ رحلتك.', en: 'Vehicle Delivery Where Your Journey Begins.' },
    heroBody: { ar: 'ننسّق تسليم السيارة إلى الفندق أو الموقع حسب التوفر والوجهة، مع توضيح وقت التسليم والرسوم قبل الحجز.', en: 'We coordinate vehicle delivery to hotels or selected locations depending on availability and destination, with timing and fees confirmed before booking.' },
    promiseTitle: { ar: 'الوصول يبدأ من مكانك.', en: 'The Journey Starts Where You Are.' },
    promiseBody: { ar: 'شاركنا اسم الفندق أو الموقع، وقت التسليم، وبيانات المستلم. يتم تأكيد التوفر، الرسوم، وموعد التسليم قبل الحجز.', en: 'Share hotel or location name, delivery time, and recipient details. Availability, fees, and handover timing are confirmed before booking.' },
    cta: { ar: 'اطلب توصيل السيارة', en: 'Request Delivery' },
    image: '/images/services/hotel-delivery.jpg',
    alt: { ar: 'تسليم سيارة فارهة أمام فندق', en: 'Luxury vehicle delivery outside a hotel' },
    whatsappType: 'hotelDelivery',
    whoFor: [
      { ar: 'نزلاء الفنادق', en: 'Hotel guests' },
      { ar: 'زوار الرياض', en: 'Riyadh visitors' },
      { ar: 'العملاء الذين يفضلون التسليم في الموقع', en: 'Clients who prefer location handover' }
    ],
    howItWorks: [
      { ar: 'حدد الفندق أو الموقع', en: 'Define hotel or location' },
      { ar: 'أرسل وقت التسليم والإرجاع', en: 'Share delivery and return timing' },
      { ar: 'نؤكد التوفر والرسوم', en: 'We confirm availability and fees' }
    ],
    trustBadges: [
      { ar: 'حسب الوجهة', en: 'By destination' },
      { ar: 'توقيت واضح', en: 'Clear timing' },
      { ar: 'استلام منظم', en: 'Organized handover' }
    ],
    relatedServiceIds: ['airport-transfer', 'self-drive', 'chauffeur']
  },
  {
    id: 'vip-reception',
    slug: 'vip-reception',
    path: '/vip-reception',
    icon: 'spark',
    title: { ar: 'استقبال كبار الضيوف', en: 'VIP Guest Reception' },
    shortCopy: { ar: 'تنسيق خاص للضيوف والوفود والمناسبات التي تحتاج حضورًا دقيقًا وراقيًا.', en: 'Tailored coordination for guests, delegations, and occasions requiring precise premium arrival.' },
    heroTitle: { ar: 'استقبال كبار الضيوف بتنسيق يليق بالحضور.', en: 'VIP Guest Reception, Arranged with Presence.' },
    heroBody: { ar: 'للضيوف، الوفود، الاجتماعات، والمناسبات الخاصة، ننسّق تجربة وصول راقية حسب عدد الضيوف، الموقع، والتوقيت.', en: 'For guests, delegations, meetings, and private occasions, we coordinate a refined arrival based on guest count, location, and timing.' },
    promiseTitle: { ar: 'الخصوصية، التوقيت، والحضور.', en: 'Privacy, Timing, and Presence.' },
    promiseBody: { ar: 'نبدأ بفهم المناسبة وعدد الضيوف وخط السير، ثم نرشح السيارة أو أكثر ونؤكد تفاصيل التنسيق قبل الحجز.', en: 'We start by understanding the occasion, guest count, and itinerary, then recommend one or more vehicles and confirm coordination details before booking.' },
    cta: { ar: 'اطلب تنسيق VIP', en: 'Request VIP Coordination' },
    image: '/images/services/vip-reception.jpg',
    alt: { ar: 'استقبال VIP بسيارة فارهة', en: 'VIP reception with a luxury vehicle' },
    whatsappType: 'vipReception',
    whoFor: [
      { ar: 'كبار الضيوف', en: 'VIP guests' },
      { ar: 'الوفود والاجتماعات', en: 'Delegations and meetings' },
      { ar: 'الفنادق والفعاليات', en: 'Hotels and events' }
    ],
    howItWorks: [
      { ar: 'حدد نوع الاستقبال وعدد الضيوف', en: 'Define reception type and guest count' },
      { ar: 'شارك الموقع والوجهة', en: 'Share location and destination' },
      { ar: 'ننسّق السيارة والوقت حسب التوفر', en: 'We coordinate vehicle and timing by availability' }
    ],
    trustBadges: [
      { ar: 'تنسيق خاص', en: 'Tailored coordination' },
      { ar: 'مناسب للوفود', en: 'Delegation-ready' },
      { ar: 'خصوصية وهدوء', en: 'Privacy and calm' }
    ],
    relatedServiceIds: ['airport-transfer', 'chauffeur', 'corporate-monthly']
  }
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug || service.path.replace('/', '') === slug);
