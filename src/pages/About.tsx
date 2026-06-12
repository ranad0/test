import { seo } from '../data/seo';
import { site } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';
import { organizationSchema, breadcrumbSchema } from '../utils/schema';
import { SectionHeading } from '../components/common/SectionHeading';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { assetPath } from '../utils/assetPath';

export function About() {
  usePageMeta(seo.about, [organizationSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]);
  return (
    <main className="pt-24">
      <section className="section-padding bg-obsidian bg-section-glow">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-5 font-latin text-xs uppercase tracking-[0.36em] text-champagne/80">{site.concept.en}</p>
            <h1 className="font-arabic text-4xl font-semibold leading-tight text-ivory md:text-6xl">نغمة القيادة — فخامة الوصول، بتنسيق يليق بك.</h1>
            <p dir="ltr" className="mt-3 font-display text-3xl font-semibold text-champagne/90 md:text-5xl">Driving Tone — Luxury arrival, arranged with precision.</p>
            <p className="mt-7 text-lg leading-9 text-silver">نغمة القيادة علامة سعودية متخصصة في تأجير السيارات الفارهة وتجارب التنقّل الخاص. نؤمن أن الفخامة ليست في السيارة وحدها، بل في وضوح الحجز، دقة المواعيد، عناية التسليم، وطريقة الوصول.</p>
            <p dir="ltr" className="mt-3 font-latin text-base leading-8 text-silver/70">Driving Tone is a Saudi luxury mobility brand specializing in premium car rental and private transport experiences. We believe luxury is not only the vehicle — it is the clarity of booking, precision of timing, care of handover, and the way you arrive.</p>
            <div className="mt-8">
              <WhatsAppButton trackingEvent="whatsapp_click_hero">تواصل معنا</WhatsAppButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-champagne/15 bg-charcoal shadow-luxury">
            <img src={assetPath('/images/showroom-placeholder.jpg')} alt="Driving Tone showroom placeholder" loading="lazy" className="aspect-[4/3] w-full object-cover opacity-88" />
          </div>
        </div>
      </section>
      <section className="section-padding bg-graphite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading centered title={{ ar: 'ما الذي نرتّبه؟', en: 'What We Arrange.' }} body={{ ar: 'من الرياض، نقدم خيارات تناسب الأفراد، كبار الضيوف، المناسبات، والشركات — بتواصل مباشر وتجربة مصممة لتمنحك الثقة قبل الرحلة وأثناءها.', en: 'From Riyadh, we serve individuals, VIP guests, events, and corporate clients with direct coordination and a refined experience designed to give confidence before and during the journey.' }} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ['السيارة', 'أسطول مختار بعناية مع تفاصيل واضحة.'],
              ['التوقيت', 'تنسيق التاريخ، الموعد، وموقع الاستلام.'],
              ['الوصول', 'تجربة وصول تليق بالمناسبة والضيف.']
            ].map(([title, body]) => (
              <div key={title} className="rounded-[1.5rem] border border-champagne/15 bg-charcoal/70 p-6 shadow-gold">
                <h2 className="font-arabic text-2xl font-semibold text-ivory">{title}</h2>
                <p className="mt-4 leading-8 text-silver">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
