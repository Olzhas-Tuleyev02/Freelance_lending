import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="flex-shrink-0">
            <h3 className="text-xl font-bold text-white">Freelance</h3>
            <p className="text-gray-500 mt-1">Атырау, Казахстан</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-2">
             <a href="tel:+77071231474" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +7 707 123 14 74
             </a>
             <a href="https://www.instagram.com/level_it_school/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300 gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-2.013 6.066a3.934 3.934 0 100 7.868 3.934 3.934 0 000-7.868zm-1.802 3.934a1.802 1.802 0 113.604 0 1.802 1.802 0 01-3.604 0zm8.814-4.855a.95.95 0 100 1.9.95.95 0 000-1.9z" clipRule="evenodd" />
                </svg>
                Instagram
             </a>
          </div>

          <div className="text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Freelance. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;