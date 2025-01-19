import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'fr' : 'en'); 
  };

  return (
    <div className="space-x-2 text-xs pl-5 pt-6">
      <a 
        href="#" 
        onClick={handleLanguageChange} 
        className={`cursor-pointer text-general-subtext ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
      >
        English
      </a>
      <a 
        href="#" 
        onClick={handleLanguageChange} 
        className={`cursor-pointer text-general-subtext ${language === 'fr' ? 'opacity-100' : 'opacity-50'}`}
      >
        Français
      </a>
    </div>
  );
};

export default LanguageToggle;