import { Link } from 'react-router-dom';
import { footerNavigation } from '../../data/navigation';
import { site } from '../../data/site';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Icon } from '../common/Icon';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-champagne/20 bg-obsidian px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.4fr_.9fr]">
        <div className="space-y-5">
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-champagne/35 bg-charcoal text-champagne">
              <Icon name="spark" className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-arabic text-2xl font-semibold text-ivory">{site.brand.ar}</span>
              <span className="font-latin text-xs uppercase tracking-[0.28em] text-champagne/80">{site.brand.en}</span>
            </span>
          </Link>
          <p className="max-w-sm text-lg leading-8 text-silver">{site.tagline.ar}</p>
          <p dir="ltr" className="max-w-sm font-latin text-sm leading-7 text-silver/70">{site.tagline.en}</p>
          <WhatsAppButton trackingEvent="whatsapp_click_header">تواصل عبر واتساب</WhatsAppButton>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 font-arabic text-lg font-semibold text-ivory">خدماتنا</h2>
            <div className="grid gap-2">
              {footerNavigation.slice(0, 7).map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-silver transition hover:text-champagne">
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 font-arabic text-lg font-semibold text-ivory">روابط مهمة</h2>
            <div className="grid gap-2">
              {footerNavigation.slice(7).map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-silver transition hover:text-champagne">
                  {t(item.label)}
                </Link>
              ))}
              <Link to="/contact" className="text-sm text-silver transition hover:text-champagne">تواصل معنا</Link>
            </div>
          </div>
        </div>

        <div className="space-y-5 rounded-[1.5rem] border border-champagne/15 bg-charcoal/60 p-5">
          <div>
            <p className="text-sm text-champagne">WhatsApp</p>
            <a href={`https://wa.me/${site.whatsappNumber}`} className="mt-1 block text-lg text-ivory" target="_blank" rel="noreferrer">{site.phone}</a>
          </div>
          <div>
            <p className="text-sm text-champagne">Phone</p>
            <a href={`tel:${site.phoneHref}`} className="mt-1 block text-lg text-ivory">{site.phone}</a>
          </div>
          <div>
            <p className="text-sm text-champagne">Location</p>
            <p className="mt-1 leading-7 text-silver">{site.location.ar}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-silver">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-champagne">Instagram</a>
            <a href={site.social.tiktok} target="_blank" rel="noreferrer" className="hover:text-champagne">TikTok</a>
            <a href={site.social.snapchat} target="_blank" rel="noreferrer" className="hover:text-champagne">Snapchat</a>
            <a href={site.social.x} target="_blank" rel="noreferrer" className="hover:text-champagne">X</a>
            <a href={site.social.maps} target="_blank" rel="noreferrer" className="hover:text-champagne">Google Maps</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-champagne/10 pt-6 text-xs text-silver/60 md:flex-row md:items-center md:justify-between">
        <p>© {year} {site.brand.full}. All rights reserved.</p>
        <p>Placeholder content should be replaced with verified client data before launch.</p>
      </div>
    </footer>
  );
}
