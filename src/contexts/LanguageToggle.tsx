import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="text-center sm:text-left space-x-2 text-xs pl-5 pt-4 sm:pt-6">
      <span
        onClick={handleLanguageChange}
        className={`cursor-pointer text-general-subtext ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
      >
        English
      </span>
      <span
        className={`cursor-pointer text-general-subtext ${language === 'fr' ? 'opacity-100' : 'opacity-50'}`}
        onClick={handleLanguageChange}
      >
        Français
      </span>
    </div>
  );
};

export default LanguageToggle;