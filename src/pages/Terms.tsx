import { seo } from '../data/seo';
import { requirementsPreview } from '../data/site';
import { faqs } from '../data/faqs';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { breadcrumbSchema, faqSchema } from '../utils/schema';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

const terms = [
  {
    title: { ar: 'الهوية والرخصة', en: 'ID & License' },
    body: { ar: 'تختلف المستندات المطلوبة حسب العميل ونوع الخدمة. يتم تأكيد الهوية أو الإقامة أو الجواز ورخصة القيادة قبل الحجز.', en: 'Required documents vary by client and service type. ID, Iqama or passport, and driving license are confirmed before booking.' }
  },
  {
    title: { ar: 'الضمان والدفع', en: 'Deposit & Payment' },
    body: { ar: 'قد يتطلب الحجز دفعة تأكيد أو ضمان حسب السيارة والمدة. يتم توضيح التفاصيل قبل تأكيد الحجز.', en: 'A confirmation payment or guarantee may be required depending on vehicle and duration. Details are clarified before confirmation.' }
  },
  {
    title: { ar: 'التأمين والتحمل', en: 'Insurance & Deductible' },
    body: { ar: 'يتم شرح التأمين، التحمل، والاستثناءات حسب شروط العقد ونوع السيارة قبل توقيع أو تأكيد الحجز.', en: 'Insurance, deductible, and exclusions are explained according to contract terms and vehicle type before signing or confirmation.' }
  },
  {
    title: { ar: 'المسافة والوقود', en: 'Mileage & Fuel' },
    body: { ar: 'يتم توضيح سياسة المسافة، الوقود، والرسوم الإضافية إن وجدت قبل التسليم.', en: 'Mileage, fuel policy, and any additional fees are clarified before handover.' }
  },
  {
    title: { ar: 'التسليم والإرجاع', en: 'Delivery & Return' },
    body: { ar: 'التسليم للفنادق، المواقع، أو المطارات حسب التوفر والوجهة. يتم تأكيد الوقت والرسوم قبل الحجز.', en: 'Delivery to hotels, locations, or airports depends on availability and destination. Timing and fees are confirmed before booking.' }
  },
  {
    title: { ar: 'السائق وخدمة VIP', en: 'Chauffeur & VIP Service' },
    body: { ar: 'خدمة السائق واستقبال كبار الضيوف حسب التوفر وطبيعة الرحلة. يتم تأكيد التفاصيل قبل الحجز.', en: 'Chauffeur and VIP reception services depend on availability and journey requirements. Details are confirmed before booking.' }
  }
];

export function Terms() {
  usePageMeta(seo.terms, [faqSchema(faqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms-requirements' }])]);
  const { t, secondary, isArabic } = useLanguage();
  return (
    <main className="pt-24">
      <section className="section-padding bg-obsidian bg-section-glow">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading centered title={{ ar: 'شروط واضحة قبل الحجز.', en: 'Clear Requirements Before Booking.' }} body={{ ar: 'هذه الصفحة تحتوي على متطلبات عامة قابلة للتعديل. يجب استبدالها بالشروط الرسمية النهائية من العميل قبل الإطلاق.', en: 'This page contains editable general requirements. Replace them with the client’s final official terms before launch.' }} />
          <div className="mt-8"><WhatsAppButton trackingEvent="whatsapp_click_hero">تأكد من متطلبات الحجز</WhatsAppButton></div>
        </div>
      </section>
      <section className="section-padding bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {terms.map((item) => (
            <article key={item.title.ar} className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold">
              <h2 className="font-arabic text-2xl font-semibold text-ivory">{t(item.title)}</h2>
              <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-1 font-latin text-xs uppercase tracking-[0.16em] text-champagne/75">{secondary(item.title)}</p>
              <p className="mt-5 leading-8 text-silver">{t(item.body)}</p>
              <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-3 font-latin text-sm leading-7 text-silver/70">{secondary(item.body)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-padding bg-obsidian">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <SectionHeading title={{ ar: 'ملخص المتطلبات.', en: 'Requirements Summary.' }} body={{ ar: 'يتم تأكيد المتطلبات النهائية في واتساب قبل الحجز حسب السيارة والخدمة.', en: 'Final requirements are confirmed on WhatsApp before booking based on vehicle and service.' }} />
            <div className="mt-8 grid gap-3">
              {requirementsPreview.map((item) => <div key={item.ar} className="rounded-2xl border border-champagne/12 bg-charcoal/60 p-4 text-silver">{t(item)}</div>)}
            </div>
          </div>
          <FAQAccordion items={faqs.filter((faq) => ['requirements', 'insurance', 'confirm-booking', 'delivery', 'pricing'].includes(faq.id))} />
        </div>
      </section>
    </main>
  );
}
