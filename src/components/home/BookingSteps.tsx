import { bookingSteps } from '../../data/site';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { WhatsAppButton } from '../common/WhatsAppButton';

export function BookingSteps() {
  const { t, secondary } = useLanguage();
  return (
    <section className="section-padding bg-obsidian bg-gold-radial">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          title={{ ar: 'الحجز بثلاث خطوات واضحة.', en: 'Booking in Three Clear Steps.' }}
          body={{ ar: 'اختر السيارة أو الخدمة، أرسل تفاصيل التاريخ والموقع، ثم استلم تأكيد التوفر والمتطلبات من فريق نغمة القيادة.', en: 'Choose your vehicle or service, share your date and location, then receive availability confirmation and requirements from the Driving Tone team.' }}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {bookingSteps.map((step) => (
            <div key={step.number} className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/60 p-6 shadow-gold">
              <span className="font-display text-5xl text-champagne/70">{step.number}</span>
              <h3 className="mt-6 font-arabic text-2xl font-semibold text-ivory">{t(step.title)}</h3>
              <p className="mt-3 leading-8 text-silver">{t(step.body)}</p>
              <p dir="ltr" className="mt-3 font-latin text-sm leading-7 text-silver/70">{secondary(step.body)}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="mb-5 text-sm text-silver/75">يتم تأكيد الحجز بعد استكمال المتطلبات والدفع أو الضمان.</p>
          <WhatsAppButton trackingEvent="whatsapp_click_hero">ابدأ الحجز / Start Booking</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
