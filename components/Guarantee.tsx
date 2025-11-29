
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
                    
                    <div className="bg-gray-900/40 rounded-xl p-8 max-w-3xl mx-auto backdrop-blur-md border border-white/10">
                        <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-medium mb-4">
                            100% возврат денег, если вы прошли весь курс, выполнили задания и <span className="text-green-400 font-bold">не нашли ни одного заказа</span> в течение 30 дней после выпуска.
                        </p>
                         <p className="text-sm text-gray-400 uppercase tracking-widest font-bold border-t border-gray-600 pt-4">
                            ⚖️ Это условие официально зафиксировано в договоре оферты.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
