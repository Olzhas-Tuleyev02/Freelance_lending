
import React from 'react';

const PackageSummary: React.FC = () => {
  const items = [
    "30 дней обучения",
    "5 готовых проектов",
    "Личный ментор",
    "Чат учеников",
    "10+ скриптов продаж",
    "Шаблоны сайтов",
    "Шаблоны переписок",
    "Подготовка профиля",
    "Проверка домашних заданий",
    "Помощь с поиском первого клиента"
  ];

  return (
    <section className="py-12 bg-gray-800 border-y border-gray-700">
      <div className="container mx-auto px-6">
         <div className="bg-gray-900 rounded-2xl p-8 border border-indigo-500/30 shadow-xl max-w-4xl mx-auto">
             <h3 className="text-2xl font-bold text-white text-center mb-8">Что входит в пакет обучения:</h3>
             <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                 {items.map((item, index) => (
                     <div key={index} className="flex items-center text-gray-300">
                         <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                             <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                         </div>
                         <span className="font-medium">{item}</span>
                     </div>
                 ))}
             </div>
         </div>
      </div>
    </section>
  );
};

export default PackageSummary;
