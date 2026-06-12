import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Icon } from '../common/Icon';
import { WhatsAppButton } from '../common/WhatsAppButton';

const intents = [
  { icon: 'steering', title: { ar: 'قيادة ذاتية', en: 'Self-Drive' }, body: { ar: 'اختر سيارة فارهة تقودها بنفسك.', en: 'Choose a luxury car to drive yourself.' }, path: '/fleet', cta: { ar: 'استعرض السيارات', en: 'View Cars' } },
  { icon: 'chauffeur', title: { ar: 'سيارة مع سائق', en: 'Chauffeur' }, body: { ar: 'تنقّل مريح لكبار الضيوف والأعمال.', en: 'Refined mobility for VIP guests and business.' }, path: '/chauffeur', cta: { ar: 'اطلب سائق', en: 'Request Chauffeur' } },
  { icon: 'plane', title: { ar: 'استقبال المطار', en: 'Airport Arrival' }, body: { ar: 'وصول هادئ من المطار إلى وجهتك.', en: 'A calm arrival from airport to destination.' }, path: '/airport-transfer', cta: { ar: 'احجز الاستقبال', en: 'Book Arrival' } },
  { icon: 'ribbon', title: { ar: 'زفاف ومناسبات', en: 'Weddings & Events' }, body: { ar: 'سيارة تليق بلحظتك.', en: 'A vehicle worthy of your moment.' }, path: '/weddings-events', cta: { ar: 'نسّق المناسبة', en: 'Plan Event' } },
  { icon: 'briefcase', title: { ar: 'شركات وإيجار شهري', en: 'Corporate & Monthly' }, body: { ar: 'حلول راقية للأعمال والعقود الطويلة.', en: 'Premium solutions for business and long-term needs.' }, path: '/corporate-monthly', cta: { ar: 'اطلب عرض', en: 'Request Quote' } }
];

export function IntentSelector() {
  const { t, secondary, isArabic } = useLanguage();
  return (
    <section className="section-padding bg-obsidian bg-section-glow" id="intent-selector">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          title={{ ar: 'كيف ترغب أن تصل؟', en: 'How Would You Like to Arrive?' }}
          body={{ ar: 'اختر نوع التجربة، وسنقودك إلى الخدمة المناسبة: سيارة فارهة تقودها بنفسك، سيارة مع سائق، استقبال من المطار، مناسبة خاصة، أو تنقّل للشركات.', en: 'Choose the experience you need, and we’ll guide you to the right service: self-drive luxury rental, chauffeur service, airport arrival, private event, or corporate mobility.' }}
        />
        <div className="no-scrollbar mt-12 grid auto-cols-[82%] grid-flow-col gap-4 overflow-x-auto pb-3 sm:auto-cols-[45%] lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible">
          {intents.map((intent) => (
            <Link key={intent.path} to={intent.path} className="group rounded-[1.5rem] border border-champagne/15 bg-charcoal/60 p-5 shadow-gold transition duration-300 hover:-translate-y-1 hover:border-champagne/45">
              <div className="mb-7 grid h-12 w-12 place-items-center rounded-full border border-champagne/25 text-champagne transition group-hover:bg-champagne group-hover:text-obsidian">
                <Icon name={intent.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-arabic text-xl font-semibold text-ivory">{t(intent.title)}</h3>
              <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-1 font-latin text-xs uppercase tracking-[0.18em] text-champagne/70">{secondary(intent.title)}</p>
              <p className="mt-4 min-h-14 leading-7 text-silver">{t(intent.body)}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-champagne">
                {t(intent.cta)} <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-silver/70">كل طلب يتم تنسيقه حسب التاريخ، الموقع، والتوفر.</p>
          <div className="mt-5">
            <WhatsAppButton trackingEvent="whatsapp_click_hero" variant="secondary">تحدث مع المنسق</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
