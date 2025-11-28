
import React, { useState } from 'react';

const EnrollForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('submitted');
      console.log({ name, email, phone });
    }, 1500);
  };

  return (
    <section id="enroll" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Забронируйте Место Сейчас</h2>
          <p className="mt-4 text-lg text-gray-400 mb-8">Оставьте заявку, и наш менеджер свяжется с вами, чтобы обсудить детали и помочь с первым шагом к заработку.</p>
        </div>

        <div className="max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {status === 'submitted' ? (
            <div className="bg-gray-800 text-center p-8 rounded-xl border border-green-500">
                <h3 className="text-2xl font-bold text-green-400">Спасибо за вашу заявку!</h3>
                <p className="text-gray-300 mt-2">Мы скоро с вами свяжемся.</p>
            </div>
          ) : (
          <>
            <p className="text-center text-gray-400 mb-6 text-sm">
                Ваше обучение полностью безрисковое благодаря нашей 100% гарантии возврата денег.
            </p>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-2xl shadow-indigo-500/10 space-y-6 border border-gray-700">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Имя</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Ваше имя" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Телефон</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email (необязательно)</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="your@email.com" />
              </div>
              <button type="submit" disabled={status === 'submitting'} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:bg-indigo-400 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg animate-pulse-glow">
                  {status === 'submitting' ? 'Отправка...' : 'Забронировать место'}
              </button>
            </form>
          </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnrollForm;