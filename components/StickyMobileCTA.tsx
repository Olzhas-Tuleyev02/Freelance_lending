
import React, { useState, useEffect } from 'react';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit (e.g., past the hero section)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnroll = () => {
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 z-50 md:hidden animate-fade-in-up">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
           <span className="text-gray-400 text-xs line-through">500 000 ₸</span>
           <span className="text-white font-bold text-lg leading-tight">300 000 ₸</span>
        </div>
        <button 
          onClick={scrollToEnroll}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center"
        >
          Занять место
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
