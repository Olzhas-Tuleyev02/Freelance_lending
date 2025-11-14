
import React from 'react';

const Guarantee: React.FC = () => {
    return (
        <section id="guarantee" className="py-20 md:py-32 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-16 text-center shadow-2xl animate-fade-in-up">
                     <div className="max-w-max mx-auto mb-6">
                         <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 11.955 11.955 0 018.618 3.04 12.02 12.02 0 00-3-9.932z"></path></svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ваш Результат — Наша Ответственность</h2>
                    <p className="text-2xl font-bold text-white mb-6">100% ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ</p>
                    <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto">
                        Мы настолько уверены в нашей программе, что готовы взять все риски на себя. Если вы пройдете курс, выполните все домашние задания, но не сможете получить свой первый коммерческий заказ в течение 30 дней после выпуска — мы вернем вам полную стоимость обучения. Без скрытых условий и мелкого шрифта. Это закреплено в договоре.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;