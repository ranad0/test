import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { site } from '../../data/site';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Icon } from '../common/Icon';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-obsidian/86 shadow-gold backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Driving Tone home">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-champagne/35 bg-charcoal/70 text-champagne shadow-gold transition group-hover:border-champagne">
            <Icon name="spark" className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-arabic text-lg font-semibold text-ivory">{site.brand.ar}</span>
            <span className="font-latin text-[0.68rem] uppercase tracking-[0.28em] text-champagne/80">{site.brand.en}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${isActive ? 'bg-champagne/12 text-champagne' : 'text-silver hover:bg-ivory/5 hover:text-ivory'}`
              }
            >
              {t(item.label)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-full border border-champagne/20 p-1 text-xs font-semibold text-silver">
            <button
              type="button"
              className={`rounded-full px-3 py-2 transition ${language === 'ar' ? 'bg-champagne text-obsidian' : 'hover:text-ivory'}`}
              onClick={() => setLanguage('ar')}
            >
              AR
            </button>
            <button
              type="button"
              className={`rounded-full px-3 py-2 transition ${language === 'en' ? 'bg-champagne text-obsidian' : 'hover:text-ivory'}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <WhatsAppButton trackingEvent="whatsapp_click_header">احجز عبر واتساب</WhatsAppButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-champagne/30 text-ivory lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          <span className="text-2xl leading-none">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>

      <div id="mobile-menu" className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="mx-4 mb-4 rounded-[1.5rem] border border-champagne/15 bg-obsidian/96 p-4 shadow-luxury backdrop-blur-xl">
          <div className="grid gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base transition ${isActive ? 'bg-champagne/12 text-champagne' : 'text-silver hover:bg-ivory/5 hover:text-ivory'}`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="flex rounded-full border border-champagne/20 p-1 text-xs font-semibold text-silver">
              <button type="button" className={`rounded-full px-3 py-2 ${language === 'ar' ? 'bg-champagne text-obsidian' : ''}`} onClick={() => setLanguage('ar')}>AR</button>
              <button type="button" className={`rounded-full px-3 py-2 ${language === 'en' ? 'bg-champagne text-obsidian' : ''}`} onClick={() => setLanguage('en')}>EN</button>
            </div>
            <WhatsAppButton trackingEvent="whatsapp_click_header" className="flex-1">واتساب</WhatsAppButton>
          </div>
        </div>
      </div>
    </header>
  );
}
