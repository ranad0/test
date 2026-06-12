import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { openWhatsApp } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/tracking';
import { Icon } from '../common/Icon';

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 bottom-0 z-50 border-t border-champagne/15 bg-obsidian/92 px-3 py-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2 pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          onClick={() => openWhatsApp('general', undefined, 'whatsapp_click_hero')}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-champagne px-3 text-sm font-semibold text-obsidian"
        >
          <Icon name="whatsapp" className="h-4 w-4 text-whatsapp" /> واتساب
        </button>
        <Link to="/fleet" className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-champagne/25 px-3 text-sm font-semibold text-ivory">
          <Icon name="car" className="h-4 w-4" /> الأسطول
        </Link>
        <a
          href={`tel:${site.phoneHref}`}
          onClick={() => trackEvent('call_click_mobile')}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-champagne/25 px-3 text-sm font-semibold text-ivory"
        >
          <Icon name="phone" className="h-4 w-4" /> اتصال
        </a>
      </div>
    </div>
  );
}
