import type { Bilingual } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export function BilingualTitle({ copy, as = 'h2', className = '', secondaryClassName = '' }: { copy: Bilingual; as?: 'h1' | 'h2' | 'h3' | 'p'; className?: string; secondaryClassName?: string }) {
  const { t, secondary, isArabic } = useLanguage();
  const Tag = as;
  return (
    <div className="space-y-3">
      <Tag className={className}>{t(copy)}</Tag>
      <p dir={isArabic ? 'ltr' : 'rtl'} className={secondaryClassName || 'font-latin text-sm uppercase tracking-[0.26em] text-champagne/80'}>
        {secondary(copy)}
      </p>
    </div>
  );
}

export function BilingualParagraph({ copy, className = '', secondaryClassName = '' }: { copy: Bilingual; className?: string; secondaryClassName?: string }) {
  const { t, secondary, isArabic } = useLanguage();
  return (
    <div className="space-y-3">
      <p className={className}>{t(copy)}</p>
      <p dir={isArabic ? 'ltr' : 'rtl'} className={secondaryClassName || 'font-latin text-sm leading-7 text-silver/78'}>
        {secondary(copy)}
      </p>
    </div>
  );
}
