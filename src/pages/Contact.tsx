import { Link } from 'react-router-dom';
import { seo } from '../data/seo';
import { site } from '../data/site';
import { services } from '../data/services';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { organizationSchema, breadcrumbSchema } from '../utils/schema';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { SectionHeading } from '../components/common/SectionHeading';
import { Icon } from '../components/common/Icon';
import { trackEvent } from '../utils/tracking';

export function Contact() {
  usePageMeta(seo.contact, [organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]);
  const { t } = useLanguage();
  return (
    <main className="pt-24">
      <section className="section-padding bg-obsidian bg-section-glow">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading centered title={{ ar: 'أخبرنا كيف ترغب أن تصل.', en: 'Tell Us How You Would Like to Arrive.' }} body={{ ar: 'اختر الخدمة المناسبة أو تواصل مباشرة عبر واتساب. كل طلب يتم تنسيقه حسب التاريخ، الموقع، والتوفر.', en: 'Choose the suitable service or contact us directly on WhatsApp. Every request is coordinated by date, location, and availability.' }} />
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton trackingEvent="whatsapp_click_hero">تواصل عبر واتساب</WhatsAppButton>
            <a href={`tel:${site.phoneHref}`} onClick={() => trackEvent('call_click_mobile')} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-champagne/40 px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-champagne/10">
              <Icon name="phone" className="h-4 w-4" /> اتصال مباشر
            </a>
          </div>
        </div>
      </section>
      <section className="section-padding bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {services.filter((service) => service.id !== 'monthly-rental').map((service) => (
            <Link key={service.id} to={service.path} className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold transition hover:-translate-y-1 hover:border-champagne/45">
              <Icon name={service.icon} className="h-7 w-7 text-champagne" />
              <h2 className="mt-5 font-arabic text-xl font-semibold text-ivory">{t(service.title)}</h2>
              <p className="mt-3 leading-7 text-silver">{t(service.shortCopy)}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-padding bg-obsidian">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold">
            <p className="text-sm text-champagne">WhatsApp</p>
            <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noreferrer" className="mt-2 block text-2xl text-ivory">{site.phone}</a>
          </div>
          <div className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold">
            <p className="text-sm text-champagne">Location</p>
            <p className="mt-2 leading-8 text-silver">{site.location.ar}</p>
          </div>
          <div className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold">
            <p className="text-sm text-champagne">Google Maps</p>
            <a href={site.social.maps} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-ivory underline decoration-champagne/60 underline-offset-8">فتح الموقع بعد اعتماد الرابط</a>
          </div>
        </div>
      </section>
    </main>
  );
}
