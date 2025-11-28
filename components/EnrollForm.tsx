
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
          <p className="mt-4 text-lg text-gray-400 mb-8">Забронируйте место сейчас, чтобы зафиксировать лучшую цену.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Price Info Column */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full flex flex-col justify-center animate-fade-in-up">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-lg mb-2">Стоимость обучения:</p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                        <span className="text-2xl text-gray-500 line-through decoration-red-500 decoration-2">500 000 ₸</span>
                        <span className="text-4xl md:text-5xl font-extrabold text-white">300 000 ₸</span>
                    </div>
                    <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-4 mb-6">
                        <p className="text-indigo-300 font-bold mb-1">Доступна рассрочка 0-0-12</p>
                        <p className="text-white text-xl">от 25 000 ₸ <span className="text-sm text-gray-400 font-normal">/ в месяц</span></p>
                    </div>
                    
                    <h4 className="text-white font-bold mb-4">Что входит в стоимость:</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Все 4 модуля программы (30 дней)
                        </li>
                        <li className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Личный ментор и проверка ДЗ
                        </li>
                        <li className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Доступ к базе заказов
                        </li>
                        <li className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Гарантия возврата средств
                        </li>
                    </ul>
                </div>
            </div>

            {/* Form Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {status === 'submitted' ? (
                <div className="bg-gray-800 text-center p-8 rounded-xl border border-green-500 shadow-2xl h-full flex flex-col justify-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-green-400">Заявка принята!</h3>
                    <p className="text-gray-300 mt-2">Менеджер свяжется с вами в течение 15 минут для уточнения деталей.</p>
                </div>
            ) : (
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl shadow-indigo-500/10 space-y-6 border border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 mb-2 flex items-center justify-center text-red-200 text-sm font-semibold animate-pulse">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    ⚠️ Осталось всего 4 места
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Имя</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Ваше имя" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Телефон</label>
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
                            Оставить заявку
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </>
                    )}
                </button>
                </form>

                <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm text-center mb-3">Принимаем к оплате:</p>
                    <div className="flex justify-center space-x-4 items-center opacity-80">
                         {/* Simple text badges for payment methods to avoid image loading issues */}
                        <span className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-gray-300">Kaspi QR</span>
                        <span className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-gray-300">Visa/MC</span>
                        <span className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-gray-300">Apple Pay</span>
                    </div>
                </div>
            </div>
            )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollForm;
