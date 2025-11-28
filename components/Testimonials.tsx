
import React from 'react';

const testimonials = [
  {
    name: 'Алина С.',
    role: 'Студентка, 21 год',
    before: 'Стипендия 35к, полная зависимость от родителей. Страх, что после универа не найдет работу.',
    after: 'Заработала 150,000 ₸ за первый месяц фриланса. Купила новый ноутбук и оплачивает квартиру сама.',
    result: '150,000 ₸',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Тимур К.',
    role: 'Офисный сотрудник, 28 лет',
    before: 'Работа в банке 5/2, зарплата упиралась в потолок. Кредиты, отсутствие свободного времени.',
    after: 'Первый заказ на Upwork ($300). Уволился через 2 месяца после курса. Теперь работает удаленно с Бали.',
    result: '$300 (Первый заказ)',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Елена В.',
    role: 'Мама в декрете',
    before: 'Нехватка денег, депрессия от "дня сурка". Хотела помочь мужу, но не знала как.',
    after: 'Запустила студию дизайна сайтов. Работает 3-4 часа в день, пока ребенок спит. Доход превысил зарплату мужа.',
    result: 'Свой бизнес',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Было / Стало</h2>
          <p className="mt-4 text-lg text-gray-400">Реальные истории трансформации наших студентов.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="p-8 pb-0 flex-grow">
                  <div className="flex items-center mb-6">
                    <img className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-500 object-cover" src={t.image} alt={t.name} />
                    <div>
                      <h4 className="text-white font-bold">{t.name}</h4>
                      <p className="text-gray-500 text-xs uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="relative pl-4 border-l-2 border-red-500/50">
                        <p className="text-xs text-red-400 font-bold uppercase mb-1">До курса:</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{t.before}</p>
                    </div>
                    <div className="relative pl-4 border-l-2 border-green-500">
                        <p className="text-xs text-green-400 font-bold uppercase mb-1">После курса:</p>
                        <p className="text-white text-sm leading-relaxed">{t.after}</p>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 mb-8 border border-gray-700">
                      <p className="text-xs text-gray-400 uppercase text-center mb-1">Главный результат</p>
                      <p className="text-indigo-400 font-bold text-2xl text-center">{t.result}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
