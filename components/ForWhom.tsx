
import React from 'react';

const ForWhom: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Кому идеально подойдет этот курс?</h2>
             <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Suitable For */}
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-green-500/30 animate-fade-in-up">
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Вам подходит, если вы:</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="text-green-500 mr-3 font-bold">✓</span>
                        <span className="text-gray-300">Студент и хотите стабильный доход 100–300 тыс. уже через месяц</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-3 font-bold">✓</span>
                        <span className="text-gray-300">Работник в найме и хотите уйти в удаленку и свободный график</span>
                    </li>
                     <li className="flex items-start">
                        <span className="text-green-500 mr-3 font-bold">✓</span>
                        <span className="text-gray-300">Мама в декрете и хотите зарабатывать из дома, пока ребенок спит</span>
                    </li>
                     <li className="flex items-start">
                        <span className="text-green-500 mr-3 font-bold">✓</span>
                        <span className="text-gray-300">Хотите IT-профессию без сложной математики и программирования</span>
                    </li>
                     <li className="flex items-start">
                        <span className="text-green-500 mr-3 font-bold">✓</span>
                        <span className="text-gray-300">Пробовали учиться сами, но так и не вышли на первый заработок</span>
                    </li>
                </ul>
            </div>

            {/* Not Suitable For */}
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-red-500/30 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Вам НЕ подходит, если:</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">✕</span>
                        <span className="text-gray-400">Вы не готовы уделять обучению хотя бы 2 часа в день</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">✕</span>
                        <span className="text-gray-400">Вы не хотите выполнять домашние задания и практиковаться</span>
                    </li>
                     <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">✕</span>
                        <span className="text-gray-400">Вы ищете "волшебную кнопку" и заработок без усилий</span>
                    </li>
                     <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">✕</span>
                        <span className="text-gray-400">Вы ищете оправдания, а не возможности</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
