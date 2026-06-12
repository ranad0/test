import { Link } from 'react-router-dom';
import type { Service } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { assetPath } from '../../utils/assetPath';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Icon } from '../common/Icon';

export function SplitFeature({ service, reverse = false }: { service: Service; reverse?: boolean }) {
  const { t, secondary, isArabic } = useLanguage();
  return (
    <section className="section-padding bg-graphite">
      <div className={`mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-charcoal shadow-luxury">
          <img src={assetPath(service.image)} alt={t(service.alt)} loading="lazy" className="aspect-[4/3] w-full object-cover opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
          <div className="absolute bottom-5 right-5 rounded-full border border-champagne/25 bg-obsidian/75 px-4 py-2 text-sm text-champagne backdrop-blur-md">
            {t(service.title)}
          </div>
        </div>
        <div>
          <p className="mb-4 font-latin text-xs uppercase tracking-[0.36em] text-champagne/80">{service.id.replaceAll('-', ' ')}</p>
          <h2 className="font-arabic text-3xl font-semibold leading-tight text-ivory md:text-5xl">{t(service.heroTitle)}</h2>
          <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-3 font-latin text-base uppercase tracking-[0.2em] text-champagne/75">{secondary(service.heroTitle)}</p>
          <p className="mt-6 text-lg leading-9 text-silver">{t(service.heroBody)}</p>
          <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-3 font-latin text-base leading-8 text-silver/72">{secondary(service.heroBody)}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton typeName={service.whatsappType} trackingEvent={service.whatsappType === 'airport' ? 'whatsapp_click_airport' : service.whatsappType === 'chauffeur' ? 'whatsapp_click_chauffeur' : service.whatsappType === 'event' ? 'whatsapp_click_event' : service.whatsappType === 'corporate' ? 'whatsapp_click_corporate' : service.whatsappType === 'hotelDelivery' ? 'whatsapp_click_hotel_delivery' : 'whatsapp_click_vip'}>
              {t(service.cta)}
            </WhatsAppButton>
            <Link to={service.path} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-champagne/40 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-champagne hover:bg-champagne/10">
              عرض التفاصيل <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
