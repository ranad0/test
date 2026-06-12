import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Language, Bilingual } from '../types';
import { trackEvent } from '../utils/tracking';

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (copy: Bilingual) => string;
  secondary: (copy: Bilingual) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'ar';
    return (window.localStorage.getItem('drivingToneLanguage') as Language) || 'ar';
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem('drivingToneLanguage', nextLanguage);
    trackEvent('language_switch', { language: nextLanguage });
  };

  const toggleLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isArabic: language === 'ar',
      setLanguage,
      toggleLanguage,
      t: (copy) => (language === 'ar' ? copy.ar : copy.en),
      secondary: (copy) => (language === 'ar' ? copy.en : copy.ar)
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
}
