
import React from 'react';

const Guarantee: React.FC = () => {
    return (
        <section id="guarantee" className="py-20 md:py-32 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-800 rounded-2xl p-8 md:p-16 text-center shadow-2xl animate-fade-in-up border border-indigo-500/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>
                    
                     <div className="max-w-max mx-auto mb-6 bg-white/20 p-4 rounded-full backdrop-blur-sm">
                         <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 11.955 11.955 0 018.618 3.04 12.02 12.02 0 00-3-9.932z"></path></svg>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Гарантия возврата средств</h2>
                    <p className="text-xl md:text-2xl font-bold text-indigo-100 mb-8">Если курс вам не подойдет — вернем деньги</p>
                    
                    <div className="bg-gray-900/40 rounded-xl p-8 max-w-3xl mx-auto backdrop-blur-md border border-white/10">
                        <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                            Мы уверены в качестве нашей программы. Если вы пройдете все модули, выполните домашние задания и не сможете найти ни одного заказа или посчитаете, что курс не дал обещанных знаний — мы вернем вам полную стоимость обучения. Это зафиксировано в договоре оферты. Вы ничем не рискуете.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
