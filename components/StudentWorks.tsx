
import React from 'react';

const projects = [
  {
    title: 'Лендинг для Кофейни',
    student: 'Алишер, 19 лет',
    time: '3 дня работы',
    earnings: '45,000 ₸',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Figma', 'Tilda', 'AI Copywriting']
  },
  {
    title: 'Telegram-бот Доставки',
    student: 'Мадина, 24 года',
    time: '5 дней работы',
    earnings: '80,000 ₸',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Telegram API', 'ChatGPT']
  },
  {
    title: 'Магазин Одежды',
    student: 'Ерлан, 29 лет',
    time: '1 неделя работы',
    earnings: '150,000 ₸',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Wordpress', 'WooCommerce', 'SEO']
  }
];

const StudentWorks: React.FC = () => {
  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="works" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Работы Студентов</h2>
          <p className="mt-4 text-lg text-gray-400">Это не просто "домашки". Это проекты, за которые платят реальные деньги.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-3 left-4 z-20">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">Заработок: {project.earnings}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">Автор: {project.student}</p>
                
                <div className="flex items-center text-sm text-gray-300 mb-4 bg-gray-900/50 p-3 rounded-lg">
                    <svg className="w-4 h-4 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Срок: {project.time}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded border border-gray-600">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-400 mb-6">Хотите создавать такие же проекты?</p>
            <button onClick={() => scrollTo('#enroll')} className="bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Хочу такое же портфолио
            </button>
        </div>
      </div>
    </section>
  );
};

export default StudentWorks;
