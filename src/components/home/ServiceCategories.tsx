import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import { assetPath } from '../../utils/assetPath';
import { SectionHeading } from '../common/SectionHeading';
import { Icon } from '../common/Icon';

export function ServiceCategories() {
  const { t, secondary, isArabic } = useLanguage();
  return (
    <section className="section-padding bg-obsidian">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          title={{ ar: 'خدمات مصممة لكل حضور.', en: 'Services Designed for Every Arrival.' }}
          body={{ ar: 'سواء كنت تقود بنفسك، تستقبل ضيفًا من المطار، تحضر مناسبة، أو تحتاج تنقّلًا شهريًا لشركتك — نرتّب الخدمة بما يناسب وقتك ومكانك.', en: 'Whether you’re driving yourself, receiving a guest from the airport, attending an event, or arranging monthly mobility for your company — we coordinate the service around your time and place.' }}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service.id} to={service.path} className="group relative min-h-[22rem] overflow-hidden rounded-[1.7rem] border border-champagne/15 bg-charcoal shadow-gold">
              <img src={assetPath(service.image)} alt={t(service.alt)} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-58 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-5">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-full border border-champagne/30 bg-obsidian/70 text-champagne backdrop-blur">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-arabic text-xl font-semibold text-ivory">{t(service.title)}</h3>
                <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-1 font-latin text-xs uppercase tracking-[0.16em] text-champagne/80">{secondary(service.title)}</p>
                <p className="mt-4 leading-7 text-silver">{t(service.shortCopy)}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-champagne">
                  {t(service.cta)} <Icon name="arrow" className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
