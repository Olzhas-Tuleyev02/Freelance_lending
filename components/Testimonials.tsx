
import React, { useRef } from 'react';

const testimonials = [
  {
    name: 'Айжан С.',
    role: 'Студентка, 20 лет',
    before: 'Жила на стипендию, просила деньги у родителей на кафе.',
    after: 'Заработала 180,000 ₸ за первый месяц на дизайне презентаций.',
    result: '180,000 ₸',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Дмитрий К.',
    role: 'Бывший таксист, 29 лет',
    before: 'Работал по 12 часов за рулем, спина болела, денег не хватало.',
    after: 'Создает чат-ботов для доставок. Работает из дома 4 часа в день.',
    result: '350,000 ₸',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Сауле М.',
    role: 'Мама в декрете, 26 лет',
    before: 'День сурка, хотела развития и своих денег, чтобы не зависеть от мужа.',
    after: 'Делает сайты на Tilda пока ребенок спит. Своя студия.',
    result: '220,000 ₸',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Арман Т.',
    role: 'Официант, 22 года',
    before: 'Уставал на ногах, низкая зарплата, нет перспектив.',
    after: 'Вышел на Upwork, первый заказ из США на $200 за логотип.',
    result: '$450 USD',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Елена В.',
    role: 'Администратор, 30 лет',
    before: 'Скучная работа в офисе, отчеты, график с 9 до 18.',
    after: 'Уволилась через 2 месяца. Ведет 3 магазина на Kaspi как менеджер.',
    result: '400,000 ₸',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Кайрат Ж.',
    role: 'Безработный, 24 года',
    before: 'Долго искал работу по специальности юриста, везде требовали опыт.',
    after: 'Научился верстать сайты. Сейчас Junior Frontend в студии.',
    result: 'ЗП 250к+',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Алина Р.',
    role: 'Студентка, 19 лет',
    before: 'Боялась, что IT это сложно и только для математиков.',
    after: 'Использует AI (ChatGPT) для написания кода. Делает простые игры.',
    result: '120,000 ₸',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Тимур Б.',
    role: 'Продавец-консультант',
    before: 'Работа на ногах, штрафы, нервные клиенты.',
    after: 'Настраивает таргетированную рекламу и делает креативы.',
    result: '300,000 ₸',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Гульназ О.',
    role: 'Учитель английского',
    before: 'Много бумажной работы, маленькая зарплата в школе.',
    after: 'Переводит сайты и делает контент для зарубежных блогов.',
    result: 'Доп. $400',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Олег П.',
    role: 'Охранник, 35 лет',
    before: 'Ночные смены, скука, хотел поменять жизнь.',
    after: 'Освоил Figma. Рисует баннеры для Youtube каналов.',
    result: '150,000 ₸',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Width of card + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
       // Если прокрутка вертикальная (обычное колесо мыши), преобразуем в горизонтальную для этого блока
       if (e.deltaY !== 0) {
           scrollRef.current.scrollLeft += e.deltaY;
           // Опционально: e.preventDefault() нельзя вызвать в React SyntheticEvent напрямую для пассивных событий,
           // но это позволяет скроллить контент колесиком.
       }
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-900 overflow-hidden group">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Было / Стало</h2>
          <p className="mt-4 text-lg text-gray-400">Реальные истории наших студентов. Листайте вправо ➔</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Navigation Buttons */}
        <button 
            onClick={() => scroll('left')}
            className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg backdrop-blur-sm border border-gray-600 transition-all hidden md:block"
            aria-label="Scroll left"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button 
            onClick={() => scroll('right')}
            className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg backdrop-blur-sm border border-gray-600 transition-all hidden md:block"
            aria-label="Scroll right"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        {/* Horizontal Scroll Container */}
        <div 
            ref={scrollRef}
            onWheel={handleWheel}
            className="flex overflow-x-auto gap-6 pb-8 px-4 md:px-0 scrollbar-hide snap-x snap-mandatory -mx-6 md:mx-0"
            style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((t, i) => (
            <div 
                key={i} 
                className="flex-none w-80 md:w-96 snap-center bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 flex flex-col h-auto"
            >
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <img className="w-12 h-12 rounded-full mr-3 border-2 border-indigo-500 object-cover" src={t.image} alt={t.name} />
                        <div>
                            <h4 className="text-white font-bold text-sm">{t.name}</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-wide truncate max-w-[120px]">{t.role}</p>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          ))}
                      </div>
                  </div>
                  
                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="relative pl-4 border-l-2 border-red-500/50">
                        <p className="text-xs text-red-400 font-bold uppercase mb-1">До:</p>
                        <p className="text-gray-400 text-sm leading-relaxed italic">"{t.before}"</p>
                    </div>
                    <div className="relative pl-4 border-l-2 border-green-500">
                        <p className="text-xs text-green-400 font-bold uppercase mb-1">После:</p>
                        <p className="text-white text-sm leading-relaxed">"{t.after}"</p>
                    </div>
                  </div>

                  <div className="mt-auto bg-gray-900/50 rounded-lg p-4 border border-gray-700 relative overflow-hidden group-hover:border-indigo-500/50 transition-colors">
                      <p className="text-xs text-gray-400 uppercase text-center mb-1">Результат</p>
                      <p className="text-indigo-400 font-bold text-2xl text-center">{t.result}</p>
                  </div>
              </div>
            </div>
          ))}
           {/* CTA Card at the end of scroll */}
           <div className="flex-none w-80 md:w-96 snap-center bg-indigo-900/20 rounded-2xl border-2 border-dashed border-indigo-500/50 flex flex-col items-center justify-center p-8 text-center hover:bg-indigo-900/40 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ваша история здесь</h3>
              <p className="text-gray-400 mb-6">Пройдите курс и станьте следующим кейсом успеха.</p>
              <a href="#enroll" className="text-indigo-400 font-bold hover:text-white transition-colors">Записаться →</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
