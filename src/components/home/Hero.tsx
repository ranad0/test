import { Link } from 'react-router-dom';
import { trustBadges } from '../../data/site';
import { useLanguage } from '../../context/LanguageContext';
import { assetPath } from '../../utils/assetPath';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Icon } from '../common/Icon';

export function Hero() {
  const { isArabic } = useLanguage();
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-obsidian px-4 pb-14 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <img
          src={assetPath('/images/hero-luxury-arrival.jpg')}
          alt="Luxury vehicle arrival placeholder for Driving Tone"
          className="h-full w-full object-cover opacity-64"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/64 to-obsidian" />
        <div className={`absolute inset-0 ${isArabic ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-obsidian via-obsidian/58 to-transparent`} />
        <div className="absolute inset-0 bg-gold-radial" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div className="animate-reveal">
          <p className="mb-5 inline-flex rounded-full border border-champagne/25 bg-charcoal/55 px-4 py-2 font-latin text-xs uppercase tracking-[0.28em] text-champagne/90 backdrop-blur-md">
            نغمة الوصول / The Tone of Arrival
          </p>
          <h1 className="max-w-4xl font-arabic text-5xl font-semibold leading-[1.2] text-ivory sm:text-6xl lg:text-7xl">
            لكل حضور نغمة. نرتّبها لك.
          </h1>
          <p dir="ltr" className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-champagne/95 md:text-5xl">
            Every Arrival Has a Tone. We Arrange Yours.
          </p>
          <div className="mt-8 max-w-3xl space-y-4">
            <p className="text-lg leading-9 text-silver md:text-xl">
              سيارات فارهة مختارة بعناية للإيجار الذاتي، مع سائق، استقبال المطار، المناسبات، والشركات — بتنسيق مباشر عبر واتساب في الرياض والسعودية.
            </p>
            <p dir="ltr" className="font-latin text-base leading-8 text-silver/75 md:text-lg">
              Curated luxury cars for self-drive rental, chauffeur service, airport arrivals, events, and corporate mobility — coordinated directly through WhatsApp in Riyadh and Saudi Arabia.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton trackingEvent="whatsapp_click_hero" className="sm:min-w-52">احجز عبر واتساب / Book on WhatsApp</WhatsAppButton>
            <Link to="/fleet" className="inline-flex min-h-11 items-center justify-center rounded-full border border-champagne/45 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-champagne hover:bg-champagne/10">
              استعرض الأسطول / Explore the Fleet
            </Link>
          </div>
        </div>

        <div className="hidden animate-floatSlow rounded-[2rem] border border-champagne/20 bg-charcoal/48 p-5 shadow-luxury backdrop-blur-lg lg:block">
          <p className="font-arabic text-2xl font-semibold text-ivory">كيف ترغب أن تصل؟</p>
          <p dir="ltr" className="mt-1 font-latin text-sm uppercase tracking-[0.22em] text-champagne/80">How would you like to arrive?</p>
          <div className="mt-5 grid gap-3">
            {['قيادة ذاتية', 'سيارة مع سائق', 'استقبال المطار', 'زفاف ومناسبات'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-champagne/10 bg-obsidian/50 px-4 py-3 text-silver">
                <span>{item}</span>
                <Icon name="arrow" className="h-4 w-4 text-champagne" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.ar} className="rounded-2xl border border-champagne/15 bg-charcoal/50 p-4 backdrop-blur-md">
                <p className="font-arabic text-sm font-semibold text-ivory">{badge.ar}</p>
                <p dir="ltr" className="mt-1 font-latin text-xs uppercase tracking-[0.16em] text-silver/70">{badge.en}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
