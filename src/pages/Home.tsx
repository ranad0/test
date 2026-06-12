import { Hero } from '../components/home/Hero';
import { IntentSelector } from '../components/home/IntentSelector';
import { FeaturedFleet } from '../components/home/FeaturedFleet';
import { ServiceCategories } from '../components/home/ServiceCategories';
import { SplitFeature } from '../components/home/SplitFeature';
import { BookingSteps } from '../components/home/BookingSteps';
import { TrustReviews } from '../components/home/TrustReviews';
import { CoverageSection } from '../components/home/CoverageSection';
import { FAQPreview } from '../components/home/FAQPreview';
import { FinalCTA } from '../components/home/FinalCTA';
import { services } from '../data/services';
import { seo } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';
import { organizationSchema } from '../utils/schema';
import { SectionHeading } from '../components/common/SectionHeading';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { assetPath } from '../utils/assetPath';

export function Home() {
  usePageMeta(seo.home, organizationSchema());
  const airport = services.find((service) => service.id === 'airport-transfer')!;
  const chauffeur = services.find((service) => service.id === 'chauffeur')!;
  const events = services.find((service) => service.id === 'weddings-events')!;
  const corporate = services.find((service) => service.id === 'corporate-monthly')!;

  return (
    <main>
      <Hero />
      <IntentSelector />
      <section className="section-padding bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <SectionHeading
              title={{ ar: 'فخامة لا تقف عند السيارة.', en: 'Luxury Beyond the Vehicle.' }}
              body={{ ar: 'في نغمة القيادة، تبدأ التجربة من وضوح الاختيار وتنتهي بوصول يليق بك. نرتّب السيارة، الموعد، الموقع، وخيارات السائق أو التوصيل بعناية — لتبقى الرحلة هادئة من أول تواصل.', en: 'At Driving Tone, the experience begins with clarity and ends with an arrival that feels composed. We arrange the vehicle, timing, location, chauffeur, and delivery options with care — so the journey feels effortless from the first message.' }}
            />
            <p className="mt-5 text-sm text-silver/70">وضوح قبل الحجز. عناية عند التسليم. تنسيق مباشر في كل خطوة.</p>
            <div className="mt-8">
              <WhatsAppButton trackingEvent="whatsapp_click_hero" variant="secondary">تحدث مع المنسق / Speak to Concierge</WhatsAppButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['/images/luxury-promise-detail.jpg', '/images/showroom-placeholder.jpg', '/images/final-cta-detail.jpg', '/images/services/hotel-delivery.jpg'].map((image, index) => (
              <div key={image} className={`overflow-hidden rounded-[1.5rem] border border-champagne/15 bg-charcoal shadow-gold ${index === 1 ? 'sm:mt-10' : ''}`}>
                <img src={assetPath(image)} alt="Luxury detail placeholder" loading="lazy" className="aspect-[4/3] w-full object-cover opacity-85" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeaturedFleet />
      <ServiceCategories />
      <SplitFeature service={airport} />
      <SplitFeature service={chauffeur} reverse />
      <SplitFeature service={events} />
      <SplitFeature service={corporate} reverse />
      <BookingSteps />
      <TrustReviews />
      <CoverageSection />
      <FAQPreview />
      <FinalCTA />
    </main>
  );
}
