import { Link } from 'react-router-dom';
import type { FleetCar } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { assetPath } from '../../utils/assetPath';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Icon } from '../common/Icon';

export function FleetCard({ car, compact = false }: { car: FleetCar; compact?: boolean }) {
  const { t, secondary, isArabic } = useLanguage();
  const carUrl = `${window.location.origin}${window.location.pathname}#/fleet/${car.slug}`;

  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-champagne/15 bg-charcoal/70 shadow-gold transition duration-300 hover:-translate-y-1 hover:border-champagne/45">
      <Link to={`/fleet/${car.slug}`} className="block overflow-hidden">
        <img src={assetPath(car.image)} alt={t(car.alt)} loading="lazy" className={`w-full object-cover opacity-88 transition duration-700 group-hover:scale-105 ${compact ? 'aspect-[4/3]' : 'aspect-[16/10]'}`} />
      </Link>
      <div className="p-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-champagne/25 px-3 py-1 text-xs text-champagne">{t({ ar: car.categoryAr, en: car.category })}</span>
          <span className="rounded-full bg-obsidian/60 px-3 py-1 text-xs text-silver">{car.year}</span>
        </div>
        <h3 className="font-arabic text-2xl font-semibold text-ivory">{t({ ar: car.nameAr, en: car.name })}</h3>
        <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-1 font-latin text-xs uppercase tracking-[0.18em] text-champagne/70">{secondary({ ar: car.nameAr, en: car.name })}</p>
        <p className="mt-4 min-h-16 leading-8 text-silver">{t(car.shortCopy)}</p>
        <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-silver/80">
          <span className="rounded-xl bg-obsidian/55 px-3 py-2">{car.seats} ركاب / seats</span>
          <span className="rounded-xl bg-obsidian/55 px-3 py-2">{isArabic ? car.luggageAr : car.luggage} أمتعة</span>
          <span className="rounded-xl bg-obsidian/55 px-3 py-2">{car.chauffeurAvailable ? 'مع سائق حسب التوفر' : 'قيادة ذاتية'}</span>
          <span className="rounded-xl bg-obsidian/55 px-3 py-2">{car.deliveryAvailable ? 'توصيل حسب التوفر' : 'استلام من الموقع'}</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {car.bestFor.map((tag) => (
            <span key={tag.ar} className="rounded-full border border-champagne/10 px-3 py-1 text-xs text-silver/75">{t(tag)}</span>
          ))}
        </div>
        <p className="mt-5 text-xs text-silver/65">السعر حسب التاريخ والمدة والموقع. / Price confirmed by date, duration, and location.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <WhatsAppButton
            typeName="car"
            params={{ carName: car.nameAr, modelYear: car.year, pageUrl: carUrl }}
            trackingEvent={compact ? 'whatsapp_click_fleet_card' : 'whatsapp_click_fleet_card'}
            className="px-4"
          >
            اطلب التوفر
          </WhatsAppButton>
          <Link to={`/fleet/${car.slug}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-champagne/35 px-4 py-3 text-sm font-semibold text-ivory transition hover:bg-champagne/10">
            عرض التفاصيل <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
