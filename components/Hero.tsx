
import React from 'react';

const Hero: React.FC = () => {
    const scrollTo = (selector: string) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/50 opacity-80"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center bg-gray-800/80 rounded-full px-4 py-1.5 mb-8 border border-gray-700 shadow-lg">
             <span className="text-yellow-400 mr-2">★★★★★</span>
             <span className="text-sm text-gray-300 font-semibold">4.9/5 Средняя оценка выпускников</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Стань <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Востребованным Фрилансером</span> за 30 Дней
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Освойте создание сайтов, ботов и даже собственных нейросетей. <span className="text-white font-bold">Мы доведем вас до первого заказа</span>, или вернем полную стоимость обучения.
          </p>
          <button onClick={() => scrollTo('#enroll')} className="bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-indigo-700 shadow-lg animate-pulse-glow">
            Хочу на курс и первый заказ
          </button>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
            <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 11.955 11.955 0 018.618 3.04 12.02 12.02 0 00-3-9.932z"></path></svg>
                <span>Гарантия возврата средств</span>
            </div>
            <div className="flex items-center">
                 <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 <span>Старт потока через 3 дня</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
