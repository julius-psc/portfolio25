import React, {useContext} from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

import copyIcon from '../assets/icons/copy-icon.svg';
import successIcon from '../assets/icons/success-icon.svg';
import resume25 from '../assets/25.pdf';

import arrowIcon from '../assets/icons/social-icons/arrow-icon.svg';
import gitIcon from '../assets/icons/social-icons/github-icon.svg';
import igIcon from '../assets/icons/social-icons/instagram-icon.svg';
import linkIcon from '../assets/icons/social-icons/linkedin-icon.svg';

const Navbar: React.FC = () => {
  const {language} = useContext(LanguageContext);
  const [isCopied, setIsCopied] = React.useState(false);

  const copyEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText('peschardjulius03@gmail.com')
      .then(() => {
        setIsCopied(true);
        console.log('Email copied to clipboard!');

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const copiedSuccess = language === 'en' ? 'Copied!' : 'Copié!';

  return (
    <nav className="pl-6 pr-6 pt-14 sm:pl-6 sm:pr-6 sm:pt-2 lg:pl-20 lg:pr-20 lg:pt-10 sm:flex justify-between text-navbar-navtext font-light">

      {/* Left side of the navbar */}
      <div className="flex items-center space-x-0 sm:space-x-1">
        <button
          className="hover:opacity-40 hidden sm:block transition-opacity duration-200"
          onClick={copyEmail}
          aria-label={isCopied ? 'Email copied' : 'Copy email to clipboard'}
        >
          {isCopied ? (
            <img src={successIcon} alt="Success icon" className="w-3 h-4 text-col" />
          ) : (
            <img src={copyIcon} alt="Copy email to clipboard icon" className="w-4 sm:w-3 sm:h-4 mr-3 sm:mr-0 text-col" />
          )}
        </button>
        <p className="text-sm sm:text-base">
        {isCopied ? ` ${copiedSuccess}` : 'peschardjulius03@gmail.com'}
        </p>
        <a
          className="hover:opacity-40 transition-opacity duration-200"
          href={resume25}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={arrowIcon} alt="Arrow that sends to resume icon" className="w-3 sm:w-2 sm:h-4 ml-2 sm:ml-0 " />
        </a>
      </div>
      {/* Middle of the navbar */}
      <div>
        <p className="text-base">
          {new Intl.DateTimeFormat(navigator.language)
            .resolvedOptions()
            .timeZone.split('/')[1]}
          ,{' '}
          {new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
        </p>
        <p className="opacity-40 text-xs sm:text-center sm:text-base">v2025.0</p>
      </div>
      {/* Right side of the navbar */}
      <div className="flex items-center space-x-1 pt-1 sm:pt-0 sm:space-x-2">
        <a
          className="hover:opacity-40 transition-opacity duration-200"
          href="https://www.linkedin.com/in/julius-peschard-007822309/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkIcon} alt="LinkedIn icon" className="w-5 h-5 sm:w-4 sm:h-4" />
        </a>
        <a
          className="hover:opacity-40 transition-opacity duration-200"
          href="https://github.com/julius-psc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitIcon} alt="GitHub icon" className="w-5 h-5 sm:w-4 sm:h-4" />
        </a>
        <a
          className="hover:opacity-40 transition-opacity duration-200"
          href="https://www.instagram.com/julius.psc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={igIcon} alt="Instagram icon" className="w-5 h-5 sm:w-4 sm:h-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
