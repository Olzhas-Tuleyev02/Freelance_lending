
import React from 'react';

const Hero: React.FC = () => {
    const scrollTo = (selector: string) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-24 pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/50 opacity-80"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center bg-gray-800/90 backdrop-blur rounded-full px-4 py-2 mb-8 border border-gray-700 shadow-xl ring-1 ring-white/10">
             <span className="text-yellow-400 mr-2">★★★★★</span>
             <span className="text-sm text-gray-200 font-semibold tracking-wide">4.9/5 рейтинг учеников</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Стань востребованным <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-pulse-glow bg-[length:200%_auto]">IT-Фрилансером</span><br />
            за 30 дней
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
             Освой дизайн, верстку и нейросети. Создай портфолио и заработай первые деньги <strong className="text-white">с гарантией результата</strong> или мы вернем вам 100% стоимости курса.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button onClick={() => scrollTo('#enroll')} className="w-full sm:w-auto bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-900">
                Хочу на курс и первый заказ
              </button>
              <button onClick={() => scrollTo('#program')} className="w-full sm:w-auto bg-gray-800 text-gray-200 hover:text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 hover:bg-gray-700 border border-gray-700">
                Смотреть программу
              </button>
          </div>

          <div className="border-t border-gray-800 pt-8 max-w-4xl mx-auto">
             <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-bold">Инструменты, которыми вы овладеете</p>
             <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Visual Logos using simple text/icons for robustness */}
                 <div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#F24E1E] rounded-full"></div><span className="font-bold text-gray-300">Figma</span></div>
                 <div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#000000] border border-gray-600 rounded-full"></div><span className="font-bold text-gray-300">Tilda</span></div>
                 <div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#61DAFB] rounded-full"></div><span className="font-bold text-gray-300">React</span></div>
                 <div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#74AA9C] rounded-full"></div><span className="font-bold text-gray-300">OpenAI</span></div>
                 <div className="flex items-center gap-2"><div className="w-6 h-6 bg-[#3776AB] rounded-full"></div><span className="font-bold text-gray-300">Python</span></div>
             </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400 text-sm max-w-3xl mx-auto">
            <div className="flex items-center justify-center bg-gray-800/40 py-2 rounded-lg backdrop-blur-sm">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 11.955 11.955 0 018.618 3.04 12.02 12.02 0 00-3-9.932z"></path></svg>
                <span>Гарантия возврата денег</span>
            </div>
            <div className="flex items-center justify-center bg-gray-800/40 py-2 rounded-lg backdrop-blur-sm">
                 <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 <span>30 дней практики</span>
            </div>
            <div className="flex items-center justify-center bg-gray-800/40 py-2 rounded-lg backdrop-blur-sm">
                 <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                 <span>AI-инструменты включены</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
