import React from 'react';

const ProgramStep: React.FC<{ week: string; title: string; description: string; delay: number }> = ({ week, title, description, delay }) => {
    return (
        <div className="relative pl-8 animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
            <div className="absolute left-0 top-1 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900"></div>
            <p className="text-indigo-400 font-semibold mb-1">{week}</p>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const Program: React.FC = () => {
    return (
        <section id="program" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Программа Обучения</h2>
                    <p className="mt-4 text-lg text-gray-400">Четыре недели интенсивной работы, которые изменят вашу карьеру.</p>
                     <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-gray-700 space-y-12">
                        <ProgramStep
                            week="Неделя 1: Основы и Дизайн"
                            title="От идеи до макета"
                            description="Изучаем UI/UX, Figma. Создаем дизайн-концепции для первых лендингов. Осваиваем HTML/CSS/JavaScript и React."
                            delay={0.1}
                        />
                         <ProgramStep
                            week="Неделя 2: Продвинутая Разработка"
                            title="Лендинги и Боты"
                            description="Верстаем сложные сайты с анимациями. Разрабатываем первых Telegram и Discord ботов. Работа с API."
                            delay={0.2}
                        />
                         <ProgramStep
                            week="Неделя 3: E-commerce и Мобильные приложения"
                            title="Создание сложных продуктов"
                            description="Разрабатываем полноценный интернет-магазин. Начинаем работу над кросс-платформенными мобильными приложениями."
                            delay={0.3}
                        />
                         <ProgramStep
                            week="Неделя 4: AI и Фриланс"
                            title="Выход на рынок"
                            description="Создаем и обучаем свои нейросети и AI-агентов. Генерируем контент (видео, музыка). Учимся искать заказы и продавать свои услуги. Раскрываем секреты Kwork и Upwork. Упаковка портфолио."
                             delay={0.4}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program;