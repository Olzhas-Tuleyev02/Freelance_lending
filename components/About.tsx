
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Почему у вас получится?</h2>
            <p className="mt-4 text-lg text-gray-400">Мы убрали всё лишнее и добавили мощь Искусственного Интеллекта.</p>
            <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* The Old Way */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-red-500/20 relative animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="absolute -top-4 left-8 bg-red-500/90 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide shadow-lg">Старый путь</div>
                <h3 className="text-2xl font-bold text-gray-300 mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    Обычные IT-курсы
                </h3>
                <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start">
                        <span className="mr-2 text-red-500/50">•</span>
                        <span>6-12 месяцев скучной теории без практики.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-red-500/50">•</span>
                        <span>Устаревшие технологии, которые не нужны рынку.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-red-500/50">•</span>
                        <span>"Пишите код вручную" — трата сотен часов.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-red-500/50">•</span>
                        <span>Сертификат в конце, который никому не нужен.</span>
                    </li>
                </ul>
            </div>

            {/* The New Way */}
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-indigo-500 relative shadow-2xl shadow-indigo-500/10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="absolute -top-4 left-8 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide shadow-lg animate-pulse">Наш метод</div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                     <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Freelance Launchpad
                </h3>
                <ul className="space-y-4 text-gray-200">
                     <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <span><strong className="text-white">30 дней интенсива</strong> — только то, за что платят.</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        <span><strong className="text-white">AI-инструменты</strong> (ChatGPT, Midjourney) пишут 80% кода за вас.</span>
                    </li>
                    <li className="flex items-start">
                         <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <span><strong className="text-white">Реальное портфолио</strong> из 5+ проектов к концу месяца.</span>
                    </li>
                     <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span><strong className="text-white">Гарантия заработка</strong> — возврат денег, если нет заказов.</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
