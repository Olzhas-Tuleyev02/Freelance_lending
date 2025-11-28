
import React from 'react';

const ProgramStep: React.FC<{ module: string; title: string; content: string; result: string; delay: number }> = ({ module, title, content, result, delay }) => {
    return (
        <div className="relative pl-8 animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
            <div className="absolute left-0 top-1 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900 z-10"></div>
            <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-gray-800 -ml-[1px]"></div>
            
            <p className="text-indigo-400 font-bold tracking-wider mb-1 uppercase text-xs">{module}</p>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">{content}</p>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 inline-block">
                <span className="text-green-400 font-bold text-sm block mb-0.5">🏆 Результат модуля:</span>
                <span className="text-gray-200 text-sm">{result}</span>
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
                    <p className="mt-4 text-lg text-gray-400">Четкий путь от новичка до первых денег.</p>
                     <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto mb-12">
                    <div className="space-y-12">
                        <ProgramStep
                            module="МОДУЛЬ 1: ФУНДАМЕНТ (НЕДЕЛЯ 1)"
                            title="Основы Веб-Дизайна и Верстки"
                            content="Погружение в профессию. Изучаем Figma: слои, компоненты, сетки. Основы HTML5 и CSS3. Как работает интернет и сайты. Психология цвета и шрифтов."
                            result="Ваш первый дизайн-макет лендинга + сверстанный первый экран сайта."
                            delay={0.1}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 2: РАЗРАБОТКА (НЕДЕЛЯ 2)"
                            title="Создание Сайтов и Чат-ботов"
                            content="Адаптивная верстка (мобильная версия). Анимации на CSS. Создание Telegram и Discord ботов на Python (с помощью AI). Работа с конструкторами (Tilda/Taplink)."
                            result="2 полностью готовых сайта в портфолио + работающий Telegram-бот."
                            delay={0.2}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 3: E-COMMERCE (НЕДЕЛЯ 3)"
                            title="Интернет-магазины и No-Code"
                            content="Разработка интернет-магазина: каталог, корзина, карточки товаров. Подключение платежных систем. Основы CMS (Wordpress). Создание мобильных приложений без кода."
                            result="Полноценный интернет-магазин, готовый к продажам."
                            delay={0.3}
                        />
                         <ProgramStep
                            module="МОДУЛЬ 4: ДЕНЬГИ (НЕДЕЛЯ 4)"
                            title="Поиск Клиентов и Продажи"
                            content="Регистрация на биржах (Upwork, Kwork). Упаковка профиля и портфолио. Скрипты общения с заказчиками. Как использовать AI для написания откликов. Юридические аспекты."
                            result="Оформленные профили на биржах, отправлено 10+ откликов, первые переговоры/заказ."
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
