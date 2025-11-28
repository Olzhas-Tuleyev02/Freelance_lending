
import React from 'react';

const ProgramStep: React.FC<{ module: string; title: string; description: string; delay: number }> = ({ module, title, description, delay }) => {
    return (
        <div className="relative pl-8 animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
            <div className="absolute left-0 top-1 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900"></div>
            <p className="text-indigo-400 font-bold tracking-wider mb-1 uppercase text-sm">{module}</p>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const Program: React.FC = () => {
    const scrollTo = (selector: string) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="program" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Программа Курса</h2>
                    <p className="mt-4 text-lg text-gray-400">Четкий пошаговый план выхода на доход.</p>
                     <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto mb-12">
                    <div className="relative border-l-2 border-gray-700 space-y-12 pb-2">
                        <ProgramStep
                            module="МОДУЛЬ 1: ФУНДАМЕНТ"
                            title="Основы дизайна и верстки (Неделя 1)"
                            description="Изучаем основы UI/UX и Figma. Создаем дизайн-концепции для первых лендингов. Осваиваем базу HTML/CSS/JavaScript. Результат: Готовый дизайн-макет вашего первого сайта."
                            delay={0.1}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 2: РАЗРАБОТКА"
                            title="Сложные сайты и Боты (Неделя 2)"
                            description="Верстаем сложные сайты с анимациями. Разрабатываем первых Telegram и Discord ботов. Работа с API. Результат: 2 готовых сайта и работающий бот в портфолио."
                            delay={0.2}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 3: E-COMMERCE"
                            title="Магазины и Приложения (Неделя 3)"
                            description="Разрабатываем полноценный интернет-магазин. Начинаем работу над кросс-платформенными мобильными приложениями. Результат: Интернет-магазин с корзиной и оплатой."
                            delay={0.3}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 4: МОНЕТИЗАЦИЯ"
                            title="Фриланс и AI-агентство (Неделя 4)"
                            description="Создаем AI-агентов. Генерируем контент. Учимся искать заказы и продавать свои услуги. Раскрываем секреты Kwork и Upwork. Упаковка портфолио. Результат: Первые деньги от реального клиента."
                             delay={0.4}
                        />
                    </div>
                </div>
                
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <button onClick={() => scrollTo('#enroll')} className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow">
                        Начать обучение и зарабатывать
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Program;
