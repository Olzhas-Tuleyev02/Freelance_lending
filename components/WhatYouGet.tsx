
import React from 'react';

// FIX: Replaced JSX.Element with React.ReactNode to resolve the namespace error.
const PortfolioItem: React.FC<{ icon: React.ReactNode; title: string; description: string; highlight?: boolean }> = ({ icon, title, description, highlight }) => (
    <div className={`bg-gray-800/50 p-6 rounded-xl shadow-lg border transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col ${highlight ? 'border-indigo-500/60 bg-indigo-900/10' : 'border-gray-700/50 hover:shadow-indigo-500/30'}`}>
        <div className={`mb-4 ${highlight ? 'text-indigo-300' : 'text-indigo-400'}`}>{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
    </div>
);

const WhatYouGet: React.FC = () => {
    const portfolioItems = [
        { title: '3 Сайта-лендинга', description: 'Современные, адаптивные и продающие лендинги для портфолио.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
        { title: 'Интернет-магазин', description: 'Полнофункциональный e-commerce проект с каталогом и оплатой.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
        { title: 'Telegram & Discord Боты', description: 'Автоматизация бизнес-задач. Высокий спрос на фрилансе.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg> },
        
        // Career Assets - New Items
        { highlight: true, title: 'Упаковка Профиля', description: 'Готовые описания и оформление для Upwork, Kwork и LinkedIn.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { highlight: true, title: 'Скрипты Продаж', description: 'Шаблоны ответов клиентам, которые закрывают сделки на $300+.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg> },
        { highlight: true, title: 'Юридический Пакет', description: 'Шаблоны договоров и актов, чтобы вас не "кинули" на деньги.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
        
        { title: 'AI-агенты для работы', description: 'Настройка нейросетей, которые будут писать код и тексты за вас.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
        { title: 'Навыки Pro-дизайнера', description: 'Создание стильных и удобных интерфейсов (UI/UX).', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round"strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
        { title: 'AI-Музыка и Видео', description: 'Генерация медиа-контента для ваших проектов.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> },
    ];

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Что конкретно вы унесете с собой?</h2>
                    <p className="mt-4 text-lg text-gray-400">Пакет "Все включено": Портфолио + Инструменты для заработка.</p>
                     <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <PortfolioItem {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
