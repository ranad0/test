import { Link } from 'react-router-dom';
import { fleet } from '../../data/fleet';
import { SectionHeading } from '../common/SectionHeading';
import { FleetCard } from '../fleet/FleetCard';

export function FeaturedFleet() {
  const featured = fleet.filter((car) => car.featured).slice(0, 4);
  return (
    <section className="section-padding bg-graphite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title={{ ar: 'أسطول يليق بلحظتك.', en: 'A Fleet for the Moment.' }}
            body={{ ar: 'من سيارات SUV الفارهة إلى السيدان التنفيذية وخيارات المناسبات، اختر السيارة التي تناسب حضورك ثم تواصل معنا لتأكيد التوفر والتفاصيل.', en: 'From luxury SUVs to executive sedans and event-ready vehicles, choose the car that matches your presence, then contact us to confirm availability and details.' }}
          />
          <Link to="/fleet" className="inline-flex min-h-11 items-center justify-center rounded-full border border-champagne/45 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-champagne hover:bg-champagne/10">
            استعرض الأسطول / Explore Fleet
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((car) => (
            <FleetCard key={car.id} car={car} compact />
          ))}
        </div>
        <p className="mt-6 text-sm text-silver/70">السعر حسب التاريخ والمدة والموقع. / Price confirmed by date, duration, and location.</p>
      </div>
    </section>
  );
}
