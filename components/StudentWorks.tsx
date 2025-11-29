
import React, { useRef } from 'react';

const projects = [
  {
    title: 'Лендинг для Кофейни',
    student: 'Алишер, 19 лет',
    time: '3 дня',
    earnings: '45,000 ₸',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Figma', 'Tilda', 'AI Copy']
  },
  {
    title: 'Telegram-бот Доставки',
    student: 'Мадина, 24 года',
    time: '5 дней',
    earnings: '80,000 ₸',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Telegram API']
  },
  {
    title: 'Магазин Одежды',
    student: 'Ерлан, 29 лет',
    time: '7 дней',
    earnings: '150,000 ₸',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['WooCommerce', 'SEO']
  },
  {
    title: 'Сайт Салона Красоты',
    student: 'Анель, 22 года',
    time: '4 дня',
    earnings: '60,000 ₸',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Tilda', 'Zero Block']
  },
  {
    title: 'Дизайн Приложения',
    student: 'Данияр, 25 лет',
    time: '6 дней',
    earnings: '$200',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Figma', 'UI/UX']
  },
  {
    title: 'Бот для Автосервиса',
    student: 'Иван, 30 лет',
    time: '4 дня',
    earnings: '70,000 ₸',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'AI']
  },
  {
    title: 'Курс по Йоге (Лендинг)',
    student: 'Мария, 27 лет',
    time: '2 дня',
    earnings: '40,000 ₸',
    image: 'https://images.unsplash.com/photo-1599447421405-0bfb69d13eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Tilda', 'Canva']
  },
  {
    title: 'Логотип для Стартапа',
    student: 'Султан, 21 год',
    time: '1 день',
    earnings: '25,000 ₸',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314347d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Illustrator', 'Midjourney']
  },
  {
    title: 'Сайт Строительной фирмы',
    student: 'Руслан, 32 года',
    time: '10 дней',
    earnings: '200,000 ₸',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['HTML/CSS', 'JS']
  },
  {
    title: 'Оформление Instagram',
    student: 'Жанар, 23 года',
    time: '3 дня',
    earnings: '35,000 ₸',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['SMM', 'Design']
  }
];

const StudentWorks: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Width of card + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
       // Convert vertical scroll to horizontal
       if (e.deltaY !== 0) {
           scrollRef.current.scrollLeft += e.deltaY;
       }
    }
  };

  const scrollToEnroll = () => {
    const element = document.getElementById('enroll');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="works" className="py-20 md:py-32 bg-gray-900 overflow-hidden group">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">10+ Примеров Работ</h2>
          <p className="mt-4 text-lg text-gray-400">Листайте, чтобы увидеть, за что платят студентам ➔</p>
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
          {projects.map((project, index) => (
            <div 
                key={index} 
                className="flex-none w-72 md:w-80 snap-center group relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-3 left-4 z-20">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">+{project.earnings}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1 truncate">{project.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{project.student}</p>
                
                <div className="flex items-center text-xs text-gray-300 mb-3 bg-gray-900/50 p-2 rounded-lg">
                    <svg className="w-3 h-3 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Время: {project.time}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-bold bg-gray-700 text-gray-300 px-2 py-1 rounded border border-gray-600">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={scrollToEnroll} className="bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Хочу такое же портфолио
            </button>
        </div>
      </div>
    </section>
  );
};

export default StudentWorks;
