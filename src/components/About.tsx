import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">От Новичка до Востребованного Специалиста</h2>
            <p className="mt-4 text-lg text-gray-400">Мы даем не просто знания, а практические навыки и готовое портфолио.</p>
            <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=600" alt="Обучение IT и фрилансу" className="rounded-2xl shadow-2xl shadow-indigo-500/20 w-full" />
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold text-white">Почему наш курс — ваш лучший старт?</h3>
                <p className="text-gray-300">
                    Рынок IT меняется каждый день. Мы разработали интенсивную программу, которая фокусируется на самых актуальных технологиях и требованиях рынка. Вы не будете тратить время на устаревшую теорию.
                </p>
                <p className="text-gray-300">
                    С первого дня вы погружаетесь в практику, создавая реальные проекты. Мы интегрировали AI-помощников в процесс обучения, чтобы вы могли выполнять задачи быстрее и эффективнее, концентрируясь на креативе и логике. Наша цель — сделать вас не просто исполнителем, а специалистом, способным решать бизнес-задачи и приносить клиентам ценность.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Акцент на практических навыках и современных AI-инструментах.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Создание собственных AI-агентов и простых нейросетей.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Личное менторство от опытных разработчиков.</span>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Железная гарантия: не получите заказ — вернем 100% оплаты.</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;