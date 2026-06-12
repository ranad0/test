import { faqs } from '../data/faqs';
import { seo } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';
import { breadcrumbSchema, faqSchema } from '../utils/schema';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export function FAQ() {
  usePageMeta(seo.faq, [faqSchema(faqs), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }])]);
  return (
    <main className="pt-24">
      <section className="section-padding bg-obsidian bg-section-glow">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <SectionHeading title={{ ar: 'أسئلة قبل الحجز.', en: 'Questions Before Booking.' }} body={{ ar: 'إجابات واضحة حول المتطلبات، التوصيل، السائق، المطار، الأسعار، والإيجار الشهري.', en: 'Clear answers about requirements, delivery, chauffeur, airport, pricing, and monthly rental.' }} />
            <div className="mt-8"><WhatsAppButton trackingEvent="whatsapp_click_hero">اسألنا عبر واتساب</WhatsAppButton></div>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </main>
  );
}
