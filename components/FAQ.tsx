
import React, { useState } from 'react';

const faqs = [
  {
    question: 'Нужен ли опыт в программировании или дизайне?',
    answer: 'Нет, курс рассчитан на новичков. Мы начинаем с самых азов и пошагово доводим до профессионального уровня. Все сложные моменты объясняем простым языком.'
  },
  {
    question: 'Реально ли заработать в первый месяц?',
    answer: 'Да, программа построена так, что на 3-4 неделе мы начинаем искать заказы. Наши студенты часто окупают курс еще до его завершения. Мы даем готовые скрипты продаж и базы клиентов.'
  },
  {
    question: 'Сколько времени нужно уделять учебе?',
    answer: 'Мы рекомендуем выделять 2-3 часа в день. Уроки в записи, можно смотреть в удобное время, но домашние задания нужно сдавать вовремя для проверки ментором.'
  },
  {
    question: 'Что если я не найду заказ?',
    answer: 'У нас действует 100% гарантия возврата средств. Если вы выполните все задания, будете следовать инструкциям ментора, но не получите ни одного заказа за 30 дней после выпуска — мы вернем деньги по договору.'
  },
  {
    question: 'Нужен ли мощный компьютер?',
    answer: 'Для веб-разработки и дизайна достаточно среднего ноутбука. Главное — стабильный интернет. Все инструменты, которые мы используем, хорошо оптимизированы.'
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors pr-8">{question}</span>
        <span className={`text-indigo-500 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 leading-relaxed text-base md:text-lg">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Частые Вопросы</h2>
          <p className="mt-4 text-lg text-gray-400">Все, что вы хотели узнать перед стартом.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;