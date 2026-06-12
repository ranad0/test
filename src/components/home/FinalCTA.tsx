import { assetPath } from '../../utils/assetPath';
import { WhatsAppButton } from '../common/WhatsAppButton';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-obsidian px-4 py-24 sm:px-6 lg:px-8">
      <img src={assetPath('/images/final-cta-detail.jpg')} alt="Luxury car detail close up placeholder" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-42" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/82 to-obsidian/56" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-latin text-xs uppercase tracking-[0.38em] text-champagne/80">The Tone of Your Next Journey</p>
        <h2 className="mt-4 font-arabic text-4xl font-semibold leading-tight text-ivory md:text-6xl">اختر نغمة رحلتك القادمة.</h2>
        <p dir="ltr" className="mt-3 font-display text-3xl font-semibold text-champagne/90 md:text-5xl">Choose the Tone of Your Next Journey.</p>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-silver">أخبرنا بالسيارة أو الخدمة، التاريخ، الموقع، وطبيعة المناسبة. فريق نغمة القيادة ينسّق لك التجربة المناسبة.</p>
        <p dir="ltr" className="mx-auto mt-3 max-w-2xl font-latin text-base leading-8 text-silver/70">Tell us the vehicle or service, date, location, and occasion. The Driving Tone team will coordinate the right experience for you.</p>
        <div className="mt-9">
          <WhatsAppButton trackingEvent="whatsapp_click_hero">تواصل عبر واتساب / WhatsApp Us</WhatsAppButton>
        </div>
        <p className="mt-5 text-sm text-silver/65">تنسيق مباشر، شروط واضحة، وتجربة مصممة للحضور الذي تريده.</p>
      </div>
    </section>
  );
}
