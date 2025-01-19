import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="text-general-paragraphtext p-4 font-thin text-center">
      <p>
        made by <span className='font-semibold'>julius peschard</span> in {currentYear} 🇫🇷

      </p>
    </footer>
  );
};

export default Footer;