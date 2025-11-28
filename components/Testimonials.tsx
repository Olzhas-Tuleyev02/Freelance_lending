
import React from 'react';

const testimonials = [
  {
    name: 'Алина С.',
    result: 'Заработала 150,000 ₸ за первый месяц',
    quote: 'Я пришла с нуля, не знала даже, что такое Figma. Через 3 недели уже взяла первый заказ на дизайн лендинга. Курс окупился еще до окончания!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Тимур К.',
    result: 'Вышел на Upwork и получил $300',
    quote: 'Боялся, что без английского не смогу работать на зарубеж. На курсе показали, как использовать переводчики и AI для общения. Первый заказ — и сразу в долларах.',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Елена В.',
    result: 'Сделала сайт для бизнеса мужа',
    quote: 'Нужен был сайт для кафе. Решила научиться сама. В итоге сделала крутой сайт, настроила рекламу, и теперь беру заказы у знакомых предпринимателей.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Истории Успеха Наших Студентов</h2>
          <p className="mt-4 text-lg text-gray-400">Реальные результаты тех, кто уже прошел этот путь.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <img className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-500" src={t.image} alt={t.name} />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-indigo-400 text-sm font-semibold">{t.result}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;