import { assetPath } from '../../utils/assetPath';
import { SectionHeading } from '../common/SectionHeading';
import { WhatsAppButton } from '../common/WhatsAppButton';

export function CoverageSection() {
  return (
    <section className="section-padding bg-obsidian">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <SectionHeading
            title={{ ar: 'في الرياض، مع خيارات توصيل حسب التوفر.', en: 'Based in Riyadh, with Delivery Options by Availability.' }}
            body={{ ar: 'نخدم عملاءنا من الرياض، مع إمكانية تنسيق التوصيل إلى المواقع، الفنادق، المطارات، والمناسبات حسب التوفر والوجهة.', en: 'We serve clients from Riyadh, with delivery coordination to locations, hotels, airports, and events depending on availability and destination.' }}
          />
          <p className="mt-5 text-sm text-silver/70">يتم تأكيد رسوم التوصيل ووقت التسليم قبل الحجز.</p>
          <div className="mt-8">
            <WhatsAppButton trackingEvent="whatsapp_click_hero" variant="secondary">تحقق من التغطية / Check Coverage</WhatsAppButton>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-charcoal shadow-luxury">
          <img src={assetPath('/images/riyadh-coverage.jpg')} alt="Riyadh coverage placeholder map" loading="lazy" className="aspect-[4/3] w-full object-cover opacity-78" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 to-transparent" />
          <div className="absolute bottom-5 right-5 rounded-[1.2rem] border border-champagne/20 bg-obsidian/75 p-4 backdrop-blur">
            <p className="font-arabic text-lg font-semibold text-ivory">الرياض</p>
            <p dir="ltr" className="font-latin text-xs uppercase tracking-[0.2em] text-champagne/80">Riyadh, Saudi Arabia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
