import { Link } from 'react-router-dom';
import { faqs } from '../../data/faqs';
import { SectionHeading } from '../common/SectionHeading';
import { FAQAccordion } from '../common/FAQAccordion';

export function FAQPreview() {
  return (
    <section className="section-padding bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:items-start lg:px-8">
        <div>
          <SectionHeading
            title={{ ar: 'أسئلة قبل الحجز.', en: 'Questions Before Booking.' }}
            body={{ ar: 'تعرّف على متطلبات الحجز، خيارات التوصيل، التأمين، الإيجار الشهري، وخدمة السيارة مع سائق قبل التواصل.', en: 'Learn about booking requirements, delivery options, insurance, monthly rental, and chauffeur service before you contact us.' }}
          />
          <Link to="/faq" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-champagne/45 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-champagne hover:bg-champagne/10">
            اقرأ الأسئلة الشائعة / Read FAQ
          </Link>
        </div>
        <FAQAccordion items={faqs.slice(0, 5)} />
      </div>
    </section>
  );
}
