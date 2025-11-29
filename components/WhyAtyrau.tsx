
import React from 'react';

const WhyAtyrau: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-indigo-900/20">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-indigo-500/30 shadow-2xl relative overflow-hidden animate-fade-in-up">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

           <div className="relative z-10">
               <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 text-center md:text-left">
                   Почему <span className="text-indigo-400">Атырау</span> — идеальный город для старта во фрилансе?
               </h2>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                   <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors">
                       <div className="text-3xl mb-3">💰</div>
                       <h3 className="text-white font-bold mb-2">Высокий спрос оффлайн</h3>
                       <p className="text-gray-400 text-sm">Высокие зарплаты в нефтянке создают спрос на услуги. Люди готовы платить за сайты и таргет.</p>
                   </div>
                   <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors">
                       <div className="text-3xl mb-3">📉</div>
                       <h3 className="text-white font-bold mb-2">Низкая конкуренция</h3>
                       <p className="text-gray-400 text-sm">В Атырау мало качественных IT-специалистов. Стать №1 в своей нише здесь проще, чем в Алматы.</p>
                   </div>
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors">
                       <div className="text-3xl mb-3">🏢</div>
                       <h3 className="text-white font-bold mb-2">Малый бизнес растет</h3>
                       <p className="text-gray-400 text-sm">Кафе, салонам и доставкам нужны сайты и боты прямо сейчас. Это ваши первые клиенты.</p>
                   </div>
                   <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors">
                       <div className="text-3xl mb-3">🌍</div>
                       <h3 className="text-white font-bold mb-2">Работа на весь мир</h3>
                       <p className="text-gray-400 text-sm">Живя в Атырау, вы можете получать зарплату из Астаны, США или Европы в долларах.</p>
                   </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAtyrau;
