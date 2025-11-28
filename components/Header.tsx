import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'О курсе' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#program', label: 'Программа' },
    { href: '#team', label: 'Команда' },
  ];

  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex flex-col">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }} className="text-2xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Freelance
          </a>
          <p className="text-xs text-indigo-300 hidden sm:block">Научим за месяц брать заказы и выйти на заработок</p>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="text-gray-300 hover:text-white transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <button onClick={() => scrollTo('#enroll')} className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
          Записаться
        </button>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </div>
      </div>
    </header>
  );
};

export default Header;