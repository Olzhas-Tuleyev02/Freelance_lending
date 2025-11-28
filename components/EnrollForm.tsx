
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
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Старт группы уже скоро</h2>
          <p className="mt-4 text-lg text-gray-400 mb-8">Оставьте заявку, чтобы зафиксировать цену и получить бонусный урок по нейросетям.</p>
        </div>

        <div className="max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {status === 'submitted' ? (
            <div className="bg-gray-800 text-center p-8 rounded-xl border border-green-500 shadow-2xl">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-green-400">Заявка принята!</h3>
                <p className="text-gray-300 mt-2">Менеджер свяжется с вами в течение 15 минут.</p>
            </div>
          ) : (
          <>
             <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-6 flex items-center justify-center text-red-200 text-sm font-semibold animate-pulse">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                ⚠️ Осталось всего 4 места на этот поток
            </div>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-2xl shadow-indigo-500/10 space-y-6 border border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Имя</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Ваше имя" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Телефон (обязательно)</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="name@example.com" />
              </div>
              
              <button type="submit" disabled={status === 'submitting'} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:bg-indigo-400 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg flex items-center justify-center">
                  {status === 'submitting' ? (
                      'Отправка...'
                  ) : (
                      <>
                        Забронировать место
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </>
                  )}
              </button>
              
              <div className="text-center mt-4">
                  <p className="text-xs text-gray-500 flex items-center justify-center">
                      <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      Ваши данные под защитой. 100% гарантия возврата.
                  </p>
              </div>
            </form>
          </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnrollForm;
