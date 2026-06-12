import { useState } from 'react';
import type { FAQ } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openId, setOpenId] = useState(items[0]?.id || '');
  const { t, secondary, isArabic } = useLanguage();

  return (
    <div className="divide-y divide-champagne/15 rounded-[1.5rem] border border-champagne/15 bg-charcoal/60 shadow-gold">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-start text-ivory transition hover:bg-champagne/5 md:px-7"
              onClick={() => setOpenId(isOpen ? '' : item.id)}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
            >
              <span className="font-arabic text-lg font-medium">{t(item.question)}</span>
              <span className="text-2xl text-champagne">{isOpen ? '−' : '+'}</span>
            </button>
            <div id={`${item.id}-panel`} hidden={!isOpen} className="px-5 pb-6 md:px-7">
              <p className="leading-8 text-silver">{t(item.answer)}</p>
              <p dir={isArabic ? 'ltr' : 'rtl'} className="mt-3 font-latin text-sm leading-7 text-silver/70">
                {secondary(item.answer)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
