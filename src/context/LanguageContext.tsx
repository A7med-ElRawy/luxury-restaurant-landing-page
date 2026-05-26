import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationData } from '../locales/translations';

type LanguageType = 'en' | 'ar';

interface LanguageContextType {
  language: LanguageType;
  t: TranslationData;
  setLanguage: (lang: LanguageType) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Try to read from localStorage first, default to English
  const [language, setLanguageState] = useState<LanguageType>(() => {
    const saved = localStorage.getItem('letoile_lang');
    if (saved === 'ar' || saved === 'en') {
      return saved;
    }
    return 'en';
  });

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem('letoile_lang', lang);
  };

  useEffect(() => {
    // Sync html dir and lang attributes automatically
    const isAr = language === 'ar';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    t: translations[language],
    setLanguage,
    isRtl: language === 'ar',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
