import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const greetings = [
    "Hello, I am",
    "Bonjour, je suis",
    "Hola, soy",
    "Hallo, ich bin",
    "Ciao, sono",
    "こんにちは、私です",
    "مرحبا، أنا"
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [greetings.length]);

  return (
    <header className=" mt-10 sm:mt-20 px-5 sm:px-20 border-b-general-outline border-b-[0.5px] pb-10 sm:pb-20">
      <div className="relative h-[48px] overflow-hidden">
        <p
          className="text-header-subtext text-3xl font-bold transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${currentGreetingIndex * 48}px)` }}
        >
          {greetings.map((greeting, index) => (
            <span key={index} className="text-md sm:text-2xl block absolute top-0 left-0 w-full" style={{ top: `${index * 48}px` }}>
              {greeting}
            </span>
          ))}
        </p>
      </div>
      <h1 className="text-header-maintext  text-8xl sm:text-12xl font-bold leading-[0.9]">Julius</h1>
      <p className="pt-3 sm:pt-0 text-header-subtext">Highschool student and aspiring AI engineer — based in 🇫🇷</p>
    </header>
  );
};

export default Header;