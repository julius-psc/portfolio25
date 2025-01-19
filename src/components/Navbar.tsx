import React from 'react';

import copyIcon from '../assets/icons/copy-icon.svg';
import successIcon from '../assets/icons/success-icon.svg';
import resume25 from '../assets/25.pdf';

import arrowIcon from '../assets/icons/social-icons/cv-link-icon.svg';
import gitIcon from '../assets/icons/social-icons/github-icon.svg';
import igIcon from '../assets/icons/social-icons/instagram-icon.svg';
import linkIcon from '../assets/icons/social-icons/linkedin-icon.svg';

const Navbar: React.FC = () => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyEmail = () => {
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

  return (
    <nav className="pl-6 pr-6 pt-8 tablet:pl-6 tablet:pr-6 tablet:pt-6 desktop:pl-20 desktop:pr-20 desktop:pt-10 flex justify-between text-navbar-navtext font-light">

      {/* Left side of the navbar */}
      <div className="flex items-center space-x-1">
        <button
          className="hover:opacity-40 transition-opacity duration-200"
          onClick={copyEmail}
          aria-label={isCopied ? 'Email copied' : 'Copy email to clipboard'}
        >
          {isCopied ? (
            <img src={successIcon} alt="Success icon" className="w-3 h-4 text-col" />
          ) : (
            <img src={copyIcon} alt="Copy email to clipboard icon" className="w-3 h-4 text-col" />
          )}
        </button>
        <p className="desktop:text-base">
          {isCopied ? 'Copied' : 'peschardjulius03@gmail.com'}
        </p>
        <a
          className="hover:opacity-40 transition-opacity duration-200"
          href={resume25}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={arrowIcon} alt="Arrow that sends to resume icon" className="w-2" />
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
        <p className="text-center text-sm md:text-base">v2025.0</p>
      </div>
      {/* Right side of the navbar */}
      <div className="flex items-center space-x-2">
        <a
          className="hover:opacity-40 transition-opacity duration-200"
          href="https://www.linkedin.com/in/julius-peschard-007822309/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkIcon} alt="LinkedIn icon" className="w-4 h-4" />
        </a>
        <a
          className="hover:opacity-40 transition-opacity duration-200"
          href="https://github.com/julius-psc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitIcon} alt="GitHub icon" className="w-4 h-4" />
        </a>
        <a
          className="hover:opacity-40 transition-opacity duration-200"
          href="https://www.instagram.com/julius.psc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={igIcon} alt="Instagram icon" className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
