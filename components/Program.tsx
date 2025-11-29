
import React from 'react';

const ProgramStep: React.FC<{ module: string; title: string; points: string[]; result: string; delay: number }> = ({ module, title, points, result, delay }) => {
    return (
        <div className="relative pl-8 animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
            <div className="absolute left-0 top-1 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900 z-10"></div>
            <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-gray-800 -ml-[1px]"></div>
            
            <p className="text-indigo-400 font-bold tracking-wider mb-2 uppercase text-xs">{module}</p>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            
            <ul className="space-y-2 mb-4">
                {points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <span className="text-indigo-500 mr-2">•</span>
                        {point}
                    </li>
                ))}
            </ul>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 inline-block">
                <p className="text-green-400 text-sm font-bold">🔥 Результат: {result}</p>
            </div>
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
                    <p className="mt-4 text-lg text-gray-400">4 недели интенсивной практики без воды.</p>
                     <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto mb-12">
                    <div className="space-y-12">
                        <ProgramStep
                            module="МОДУЛЬ 1"
                            title="Дизайн и Верстка"
                            points={[
                                "Первый сайт-лендинг с нуля",
                                "Основы Figma за 3 урока",
                                "Структура продающего сайта"
                            ]}
                            result="1 готовый проект в портфолио"
                            delay={0.1}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 2"
                            title="Разработка и AI"
                            points={[
                                "Адаптивная верстка (мобильная версия)",
                                "Telegram & Discord боты на Python (через AI)",
                                "Создание сайтов на Tilda Zero Block"
                            ]}
                            result="Ещё 2 проекта в портфолио"
                            delay={0.2}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 3"
                            title="E-commerce и Приложения"
                            points={[
                                "Интернет-магазин с корзиной",
                                "Подключение онлайн-оплаты",
                                "Простые мобильные приложения (No-Code)"
                            ]}
                            result="Готовый магазин + 1 приложение"
                            delay={0.3}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 4"
                            title="Фриланс и Деньги"
                            points={[
                                "Регистрация и упаковка Upwork/Kwork",
                                "Скрипты продаж и переписки",
                                "Поиск первого клиента вместе с ментором"
                            ]}
                            result="Первый заказ или деньги назад"
                             delay={0.4}
                        />
                    </div>
                </div>
                
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <button onClick={() => scrollTo('#enroll')} className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-glow">
                        Начать обучение
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Program;
