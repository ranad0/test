import { useMemo, useState } from 'react';
import { fleet } from '../data/fleet';
import { seo } from '../data/seo';
import { faqs } from '../data/faqs';
import { usePageMeta } from '../hooks/usePageMeta';
import { breadcrumbSchema, organizationSchema } from '../utils/schema';
import { SectionHeading } from '../components/common/SectionHeading';
import { FleetCard } from '../components/fleet/FleetCard';
import { FleetFilters } from '../components/fleet/FleetFilters';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

type Filters = Record<string, string>;

function matchesFilter(carValue: string | string[] | number | boolean, selected: string) {
  if (!selected) return true;
  if (typeof carValue === 'boolean') return selected === 'Delivery available' ? carValue : true;
  if (Array.isArray(carValue)) return carValue.some((value) => value.toLowerCase() === selected.toLowerCase());
  return String(carValue).toLowerCase().includes(selected.toLowerCase());
}

export function Fleet() {
  usePageMeta(seo.fleet, [organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Fleet', path: '/fleet' }])]);
  const [filters, setFilters] = useState<Filters>({});

  const filtered = useMemo(() => {
    return fleet.filter((car) => {
      const map = {
        service: car.serviceTypes,
        category: [car.category, car.type],
        brand: car.brand,
        passengers: car.seats,
        luggage: car.luggage,
        duration: car.durations,
        occasion: car.occasions,
        year: car.year,
        delivery: car.deliveryAvailable
      };
      return Object.entries(filters).every(([key, selected]) => matchesFilter(map[key as keyof typeof map], selected));
    });
  }, [filters]);

  return (
    <main className="pt-24">
      <section className="section-padding bg-obsidian bg-section-glow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            title={{ ar: 'اختر السيارة التي تعكس حضورك.', en: 'Choose the Car That Matches Your Presence.' }}
            body={{ ar: 'في نغمة القيادة، نعرض لك أسطولًا مختارًا من السيارات الفارهة المناسبة للقيادة الذاتية، استقبال كبار الضيوف، رحلات الأعمال، المناسبات، والإيجار الشهري. تصفّح الفئات، اختر السيارة المناسبة، وتواصل معنا لتأكيد التوفر والتفاصيل.', en: 'Driving Tone offers a curated luxury fleet for self-drive rental, VIP guest reception, business travel, private events, and monthly use. Browse the categories, select the vehicle that suits your moment, and contact us to confirm availability and details.' }}
          />
          <div className="mt-10">
            <FleetFilters filters={filters} onChange={setFilters} />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((car) => (
              <FleetCard key={car.id} car={car} />
            ))}
          </div>
          {filtered.length === 0 ? (
            <div className="mt-10 rounded-[1.7rem] border border-champagne/15 bg-charcoal/70 p-8 text-center shadow-gold">
              <h2 className="font-arabic text-2xl font-semibold text-ivory">لا توجد سيارة مطابقة لهذا الاختيار حاليًا.</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-8 text-silver">يمكنك تعديل الفلاتر أو التواصل معنا عبر واتساب لنرشح لك خيارًا مناسبًا حسب التاريخ والموقع.</p>
              <p dir="ltr" className="mx-auto mt-2 max-w-2xl font-latin text-sm leading-7 text-silver/70">No matching vehicle is currently shown for this selection. Contact us so we can recommend a suitable option based on your date and location.</p>
              <div className="mt-6">
                <WhatsAppButton trackingEvent="whatsapp_click_fleet_card">اطلب ترشيح سيارة / Request Recommendation</WhatsAppButton>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <section className="section-padding bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <SectionHeading
            title={{ ar: 'وضوح قبل اختيار السيارة.', en: 'Clarity Before You Choose.' }}
            body={{ ar: 'الأسعار والتوفر يتم تأكيدها حسب التاريخ، المدة، الموقع، ونوع الخدمة. لا نعرض أسعارًا ثابتة حتى لا تُبنى توقعات غير دقيقة.', en: 'Pricing and availability are confirmed by date, duration, location, and service type. We avoid fixed pricing to prevent inaccurate expectations.' }}
          />
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>
    </main>
  );
}
