import { Link, useParams } from 'react-router-dom';
import { fleet } from '../data/fleet';
import { carFaqs } from '../data/faqs';
import { requirementsPreview } from '../data/site';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { assetPath } from '../utils/assetPath';
import { breadcrumbSchema, vehicleSchema } from '../utils/schema';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { FleetCard } from '../components/fleet/FleetCard';
import { Icon } from '../components/common/Icon';
import { seo } from '../data/seo';

export function CarDetail() {
  const { slug } = useParams();
  const car = fleet.find((item) => item.slug === slug);
  const { t, secondary, isArabic } = useLanguage();

  if (!car) {
    return (
      <main className="pt-28">
        <section className="section-padding bg-obsidian text-center">
          <h1 className="font-arabic text-4xl font-semibold text-ivory">السيارة غير موجودة</h1>
          <p className="mt-4 text-silver">يمكنك العودة إلى الأسطول واختيار سيارة أخرى.</p>
          <Link to="/fleet" className="mt-8 inline-flex rounded-full bg-champagne px-6 py-3 font-semibold text-obsidian">العودة إلى الأسطول</Link>
        </section>
      </main>
    );
  }

  const pageEntry = {
    titleAr: `${car.nameAr} للإيجار في الرياض | نغمة القيادة`,
    titleEn: `${car.name} Rental in Riyadh | Driving Tone`,
    descriptionAr: `${car.shortCopy.ar} السعر حسب التاريخ والمدة والموقع.`,
    descriptionEn: `${car.shortCopy.en} Price confirmed by date, duration, and location.`
  };
  usePageMeta(pageEntry, [vehicleSchema(car), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Fleet', path: '/fleet' }, { name: car.name, path: `/fleet/${car.slug}` }])]);

  const carUrl = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#/fleet/${car.slug}` : '';
  const related = fleet.filter((item) => item.id !== car.id).slice(0, 3);

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden bg-obsidian px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-section-glow" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-champagne/25 px-4 py-2 text-xs uppercase tracking-[0.24em] text-champagne">{car.year} · {car.category}</p>
            <h1 className="font-arabic text-4xl font-semibold leading-tight text-ivory md:text-6xl">{t({ ar: car.nameAr, en: car.name })}</h1>
            <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-3 font-display text-3xl font-semibold text-champagne/90">{secondary({ ar: car.nameAr, en: car.name })}</p>
            <p className="mt-6 text-xl leading-9 text-silver">{t(car.heroLine)}</p>
            <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-3 font-latin text-base leading-8 text-silver/70">{secondary(car.heroLine)}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {car.bestFor.map((tag) => <span key={tag.ar} className="rounded-full border border-champagne/15 px-4 py-2 text-sm text-silver">{t(tag)}</span>)}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton typeName="car" params={{ carName: car.nameAr, modelYear: car.year, pageUrl: carUrl }} trackingEvent="whatsapp_click_car_detail">اطلب توفر هذه السيارة</WhatsAppButton>
              <WhatsAppButton variant="secondary" trackingEvent="whatsapp_click_car_detail">تحدث مع المنسق</WhatsAppButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-champagne/15 bg-charcoal shadow-luxury">
            <img src={assetPath(car.image)} alt={t(car.alt)} className="aspect-[4/3] w-full object-cover opacity-90" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-graphite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={{ ar: 'معرض السيارة.', en: 'Vehicle Gallery.' }} body={{ ar: 'استبدل هذه الصور بصور حقيقية للسيارة: خارجية، داخلية، تفاصيل، ومشهد وصول.', en: 'Replace these placeholders with real exterior, interior, detail, and arrival images.' }} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {car.gallery.map((image) => (
              <div key={image} className="overflow-hidden rounded-[1.5rem] border border-champagne/15 bg-charcoal shadow-gold">
                <img src={assetPath(image)} alt={t(car.alt)} loading="lazy" className="aspect-[4/3] w-full object-cover opacity-88" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-obsidian">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeading title={{ ar: 'تفاصيل السيارة.', en: 'Vehicle Details.' }} body={car.longCopy} />
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-silver md:grid-cols-3">
              {[
                ['الموديل', car.year],
                ['الفئة', t({ ar: car.categoryAr, en: car.category })],
                ['المقاعد', car.seats],
                ['الأمتعة', isArabic ? car.luggageAr : car.luggage],
                ['الخدمة', car.chauffeurAvailable ? 'قيادة / سائق' : 'قيادة ذاتية'],
                ['التوصيل', car.deliveryAvailable ? 'حسب التوفر' : 'حسب الموقع']
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-champagne/12 bg-charcoal/65 p-4">
                  <span className="block text-xs text-champagne/80">{label}</span>
                  <span className="mt-1 block font-semibold text-ivory">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold">
              <h2 className="font-arabic text-2xl font-semibold text-ivory">خيارات الإيجار</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {['إيجار يومي', 'إيجار أسبوعي', 'إيجار شهري', 'مع سائق حسب التوفر'].map((option) => <span key={option} className="rounded-2xl bg-obsidian/60 p-4 text-silver">{option}</span>)}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold">
              <h2 className="font-arabic text-2xl font-semibold text-ivory">السائق والتوصيل</h2>
              <p className="mt-4 leading-8 text-silver">يمكن تنسيق السيارة مع سائق حسب التوفر وطبيعة الرحلة. تتوفر خيارات التوصيل إلى الفنادق، المواقع، والمطارات حسب التوفر والوجهة.</p>
              <p dir="ltr" className="mt-3 font-latin text-sm leading-7 text-silver/70">Chauffeur and delivery options depend on availability, journey requirements, and destination.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <SectionHeading title={{ ar: 'المتطلبات والأسئلة.', en: 'Requirements & Questions.' }} body={{ ar: 'يتم توضيح الشروط النهائية قبل تأكيد الحجز حسب نوع السيارة والخدمة.', en: 'Final terms are clarified before booking confirmation depending on vehicle and service type.' }} />
            <div className="mt-8 grid gap-3">
              {requirementsPreview.map((item) => <div key={item.ar} className="rounded-2xl border border-champagne/12 bg-charcoal/60 p-4 text-silver">{t(item)}</div>)}
            </div>
          </div>
          <FAQAccordion items={carFaqs} />
        </div>
      </section>

      <section className="section-padding bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={{ ar: 'سيارات ذات صلة.', en: 'Related Vehicles.' }} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => <FleetCard key={item.id} car={item} compact />)}
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-champagne/15 bg-obsidian/92 p-3 backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <WhatsAppButton typeName="car" params={{ carName: car.nameAr, modelYear: car.year, pageUrl: carUrl }} trackingEvent="whatsapp_click_car_detail" className="px-3">اطلب التوفر</WhatsAppButton>
          <Link to="/fleet" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-champagne/30 px-3 text-sm font-semibold text-ivory">
            <Icon name="car" className="h-4 w-4" /> الأسطول
          </Link>
        </div>
      </div>
    </main>
  );
}
