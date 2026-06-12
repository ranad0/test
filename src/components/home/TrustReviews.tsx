import { reviewPlaceholders } from '../../data/site';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Icon } from '../common/Icon';

export function TrustReviews() {
  const { t, secondary } = useLanguage();
  return (
    <section className="section-padding bg-graphite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={{ ar: 'ثقة تُبنى بالتجربة.', en: 'Trust Built Through Experience.' }}
          body={{ ar: 'صور حقيقية، تفاصيل واضحة، تواصل مباشر، وتجارب عملاء تساعدك على الحجز بثقة.', en: 'Real visuals, clear details, direct communication, and client experiences that help you book with confidence.' }}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviewPlaceholders.map((review) => (
            <article key={review.source.ar} className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold">
              <div className="mb-5 flex items-center justify-between">
                <Icon name="shield" className="h-6 w-6 text-champagne" />
                <span className="rounded-full border border-champagne/15 px-3 py-1 text-xs text-silver/70">Placeholder</span>
              </div>
              <p className="font-arabic text-xl font-semibold text-ivory">{t(review.source)}</p>
              <p className="mt-4 leading-8 text-silver">{t(review.quote)}</p>
              <p dir="ltr" className="mt-3 font-latin text-sm leading-7 text-silver/70">{secondary(review.quote)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
