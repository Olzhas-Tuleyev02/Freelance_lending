
import React from 'react';

const Hero: React.FC = () => {
    const scrollTo = (selector: string) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-28 pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/50 opacity-80"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          
          {/* Scarcity Trigger */}
          <div className="inline-block mb-6 bg-red-500/10 border border-red-500/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
             <div className="flex items-center gap-2">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                 </span>
                 <span className="text-red-300 text-sm font-bold tracking-wide uppercase">80% мест на поток уже занято</span>
             </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Заработайте первые <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">50 000 – 150 000 ₸</span> <br className="hidden md:block"/>
            уже в процессе обучения
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-indigo-200 font-medium text-sm md:text-base">
              <span className="bg-indigo-900/50 px-3 py-1 rounded-lg border border-indigo-500/30">⚡ Результат за 30 дней</span>
              <span className="bg-indigo-900/50 px-3 py-1 rounded-lg border border-indigo-500/30">🕒 2 часа в день</span>
              <span className="bg-indigo-900/50 px-3 py-1 rounded-lg border border-indigo-500/30">🤝 Помощь с первым клиентом</span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
             Освойте веб-разработку, дизайн и AI-инструменты. Создайте портфолио из 5 проектов и получите гарантированный первый заказ.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button onClick={() => scrollTo('#enroll')} className="w-full sm:w-auto bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-900">
                Записаться на курс
              </button>
              <button onClick={() => scrollTo('#enroll')} className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2">
                 <span>Рассрочка 25 000 ₸/мес</span>
              </button>
          </div>

          <div className="border-t border-gray-800 pt-8 max-w-4xl mx-auto">
             <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-bold">Hard Skills (Инструменты):</p>
             <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700"><div className="w-4 h-4 bg-[#F24E1E] rounded-full"></div><span className="font-bold text-gray-300 text-sm">Figma</span></div>
                 <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700"><div className="w-4 h-4 bg-[#000000] border border-gray-500 rounded-full"></div><span className="font-bold text-gray-300 text-sm">Tilda</span></div>
                 <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700"><div className="w-4 h-4 bg-[#61DAFB] rounded-full"></div><span className="font-bold text-gray-300 text-sm">React</span></div>
                 <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700"><div className="w-4 h-4 bg-[#74AA9C] rounded-full"></div><span className="font-bold text-gray-300 text-sm">OpenAI</span></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
