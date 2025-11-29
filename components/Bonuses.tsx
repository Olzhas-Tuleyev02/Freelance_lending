
import React from 'react';

const Bonuses: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border-y border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 animate-fade-in-up">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block animate-pulse">Ограниченное предложение</span>
            <h2 className="text-3xl font-extrabold text-white">🎁 Бонусы при записи в этом месяце</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-colors"></div>
                <div className="text-3xl mb-4">📂</div>
                <h3 className="text-white font-bold mb-2">Бонус №1</h3>
                <p className="text-gray-300 text-sm">10 готовых Premium-шаблонов сайтов на Tilda (стоимостью 50 000 ₸).</p>
            </div>

             <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-full -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-colors"></div>
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-white font-bold mb-2">Бонус №2</h3>
                <p className="text-gray-300 text-sm">AI-агенты и промпты, которые будут писать код и тексты за вас.</p>
            </div>

             <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors"></div>
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-white font-bold mb-2">Бонус №3</h3>
                <p className="text-gray-300 text-sm">5 скриптов переписок с клиентами, которые закрывают 8 из 10 сделок.</p>
            </div>

             <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -mr-10 -mt-10 group-hover:bg-yellow-500/20 transition-colors"></div>
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-white font-bold mb-2">Бонус №4</h3>
                <p className="text-gray-300 text-sm">Чек-лист "Как получить первый заказ за 3 дня".</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
