import React, { createContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en', // Default language
  setLanguage: () => {},
});

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };