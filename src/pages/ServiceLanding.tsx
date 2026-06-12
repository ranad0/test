import { Link, useParams } from 'react-router-dom';
import { services, getServiceBySlug } from '../data/services';
import { fleet } from '../data/fleet';
import { faqs } from '../data/faqs';
import { seo } from '../data/seo';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { assetPath } from '../utils/assetPath';
import { breadcrumbSchema, serviceSchema } from '../utils/schema';
import { SectionHeading } from '../components/common/SectionHeading';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Icon } from '../components/common/Icon';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { FleetCard } from '../components/fleet/FleetCard';

const seoKeyMap: Record<string, keyof typeof seo> = {
  chauffeur: 'chauffeur',
  'airport-transfer': 'airport',
  'weddings-events': 'events',
  'corporate-monthly': 'corporate',
  'hotel-delivery': 'hotel',
  'vip-reception': 'vip',
  'self-drive': 'fleet'
};

export function ServiceLanding({ serviceId }: { serviceId?: string }) {
  const params = useParams();
  const service = services.find((item) => item.id === serviceId) || getServiceBySlug(params.slug || '');
  const { t, secondary, isArabic } = useLanguage();

  if (!service) {
    return (
      <main className="pt-28">
        <section className="section-padding bg-obsidian text-center">
          <h1 className="font-arabic text-4xl font-semibold text-ivory">الخدمة غير موجودة</h1>
          <Link to="/" className="mt-8 inline-flex rounded-full bg-champagne px-6 py-3 font-semibold text-obsidian">العودة للرئيسية</Link>
        </section>
      </main>
    );
  }

  usePageMeta(seo[seoKeyMap[service.id] || 'home'], [serviceSchema(service), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: service.title.en, path: service.path }])]);

  const suitableFleet = fleet.filter((car) => {
    if (service.id === 'airport-transfer') return car.serviceTypes.includes('Airport');
    if (service.id === 'chauffeur') return car.chauffeurAvailable;
    if (service.id === 'weddings-events') return car.occasions.includes('Wedding') || car.serviceTypes.includes('Event');
    if (service.id === 'corporate-monthly' || service.id === 'monthly-rental') return car.serviceTypes.includes('Monthly');
    if (service.id === 'hotel-delivery') return car.deliveryAvailable;
    if (service.id === 'vip-reception') return car.occasions.includes('VIP');
    return true;
  }).slice(0, 3);

  const related = service.relatedServiceIds.map((id) => services.find((item) => item.id === id)).filter(Boolean) as typeof services;

  const tracking =
    service.whatsappType === 'airport' ? 'whatsapp_click_airport' :
    service.whatsappType === 'chauffeur' ? 'whatsapp_click_chauffeur' :
    service.whatsappType === 'event' ? 'whatsapp_click_event' :
    service.whatsappType === 'corporate' ? 'whatsapp_click_corporate' :
    service.whatsappType === 'hotelDelivery' ? 'whatsapp_click_hotel_delivery' :
    service.whatsappType === 'vipReception' ? 'whatsapp_click_vip' : 'whatsapp_click_hero';

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden bg-obsidian px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <img src={assetPath(service.image)} alt={t(service.alt)} className="absolute inset-0 h-full w-full object-cover opacity-42" />
        <div className="absolute inset-0 bg-gradient-to-l from-obsidian via-obsidian/80 to-obsidian/48" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-champagne/30 bg-charcoal/70 text-champagne shadow-gold backdrop-blur">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <h1 className="font-arabic text-4xl font-semibold leading-tight text-ivory md:text-6xl">{t(service.heroTitle)}</h1>
            <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-3 font-display text-3xl font-semibold text-champagne/90 md:text-5xl">{secondary(service.heroTitle)}</p>
            <p className="mt-7 text-xl leading-9 text-silver">{t(service.heroBody)}</p>
            <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-3 font-latin text-base leading-8 text-silver/70">{secondary(service.heroBody)}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton typeName={service.whatsappType} trackingEvent={tracking}>{t(service.cta)}</WhatsAppButton>
              <Link to="/fleet" className="inline-flex min-h-11 items-center justify-center rounded-full border border-champagne/40 px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-champagne/10">
                استعرض الأسطول / Explore Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <SectionHeading title={service.promiseTitle} body={service.promiseBody} />
          <div className="grid gap-4 sm:grid-cols-3">
            {service.trustBadges.map((badge) => (
              <div key={badge.ar} className="rounded-[1.3rem] border border-champagne/15 bg-charcoal/70 p-5 shadow-gold">
                <Icon name="shield" className="mb-4 h-6 w-6 text-champagne" />
                <p className="font-arabic text-lg font-semibold text-ivory">{t(badge)}</p>
                <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-2 font-latin text-xs uppercase tracking-[0.16em] text-silver/70">{secondary(badge)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-obsidian">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[1.7rem] border border-champagne/15 bg-charcoal/70 p-7 shadow-gold">
            <h2 className="font-arabic text-3xl font-semibold text-ivory">لمن هذه الخدمة؟</h2>
            <div className="mt-6 grid gap-3">
              {service.whoFor.map((item) => <div key={item.ar} className="rounded-2xl bg-obsidian/60 p-4 leading-7 text-silver">{t(item)}</div>)}
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-champagne/15 bg-charcoal/70 p-7 shadow-gold">
            <h2 className="font-arabic text-3xl font-semibold text-ivory">كيف تعمل الخدمة؟</h2>
            <div className="mt-6 grid gap-4">
              {service.howItWorks.map((item, index) => (
                <div key={item.ar} className="flex gap-4 rounded-2xl bg-obsidian/60 p-4">
                  <span className="font-display text-2xl text-champagne">0{index + 1}</span>
                  <span className="leading-7 text-silver">{t(item)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-graphite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={{ ar: 'سيارات مناسبة لهذه الخدمة.', en: 'Suitable Vehicles for This Service.' }} body={{ ar: 'هذه أمثلة من الأسطول يمكن تنسيقها حسب التوفر، التاريخ، والموقع.', en: 'These are sample fleet options that can be coordinated depending on availability, date, and location.' }} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {suitableFleet.map((car) => <FleetCard key={car.id} car={car} compact />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-obsidian">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <SectionHeading title={{ ar: 'أسئلة مرتبطة بالخدمة.', en: 'Service Questions.' }} body={{ ar: 'نوضح المتطلبات والتفاصيل قبل تأكيد أي حجز حتى تبقى التجربة هادئة وواضحة.', en: 'We clarify requirements and details before confirming any booking so the experience stays calm and clear.' }} />
          <FAQAccordion items={faqs.slice(0, 6)} />
        </div>
      </section>

      <section className="section-padding bg-graphite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={{ ar: 'خدمات ذات صلة.', en: 'Related Services.' }} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.id} to={item.path} className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold transition hover:-translate-y-1 hover:border-champagne/45">
                <Icon name={item.icon} className="h-7 w-7 text-champagne" />
                <h3 className="mt-5 font-arabic text-2xl font-semibold text-ivory">{t(item.title)}</h3>
                <p className="mt-3 leading-8 text-silver">{t(item.shortCopy)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
