
import React, { useState } from 'react';

const EnrollForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Готовы начать свой путь?</h2>
          <p className="mt-4 text-lg text-gray-400 mb-8">Оставьте заявку, и мы свяжемся с вами для консультации.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
            {/* Price Info Column */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full flex flex-col justify-between animate-fade-in-up">
                <div>
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-lg mb-2">Полная стоимость курса:</p>
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                            <span className="text-2xl text-gray-500 line-through decoration-red-500 decoration-2">500 000 ₸</span>
                            <span className="text-4xl md:text-5xl font-extrabold text-white">300 000 ₸</span>
                        </div>
                        
                        {/* Installment Highlight */}
                        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-lg p-5 mb-8 relative overflow-hidden group cursor-pointer hover:border-indigo-400 transition-colors">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-bl">0%</div>
                            <p className="text-indigo-300 font-bold mb-1 text-sm uppercase tracking-wider">Рассрочка без переплат (0-0-12)</p>
                            <p className="text-white text-2xl font-bold flex items-baseline">
                                25 000 ₸ <span className="text-sm text-gray-400 font-normal ml-2">/ в месяц</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-2">Оформляется за 2 минуты через банк. Первый платеж только через месяц.</p>
                        </div>
                        
                        <h4 className="text-white font-bold mb-4">Ваш пакет включает:</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-300">
                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span><strong>30 дней интенсивной практики</strong> с личным ментором</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span><strong>5 готовых проектов</strong> в портфолио (магазин, боты, лендинги)</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span><strong>Доступ к базе заказов</strong> и помощь с первым клиентом</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span><strong>Юридическая гарантия:</strong> нет результата — возврат денег</span>
                            </li>
                        </ul>
                    </div>
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
                    <p className="text-gray-300 mt-2 text-lg">Менеджер напишет вам в WhatsApp в течение 15 минут.</p>
                </div>
            ) : (
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl shadow-indigo-500/10 space-y-6 border border-gray-700 relative overflow-hidden h-full flex flex-col justify-center">
                
                <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Ваше Имя</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-lg" placeholder="Как к вам обращаться?" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-lg" placeholder="example@mail.com" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Номер телефона</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-lg" placeholder="+7 (777) 000-00-00" />
                </div>
                
                <button type="submit" disabled={status === 'submitting'} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:bg-indigo-400 disabled:cursor-not-allowed transform hover:scale-[1.02] shadow-xl flex items-center justify-center text-lg">
                    {status === 'submitting' ? (
                        'Обработка...'
                    ) : (
                        'Записаться на курс'
                    )}
                </button>
                <p className="text-center text-gray-500 text-xs">Нажимая кнопку, вы соглашаетесь с условиями оферты</p>
                </form>

                <div className="pt-4 border-t border-gray-700 mt-auto">
                    <p className="text-gray-400 text-sm text-center mb-3">Безопасная оплата:</p>
                    <div className="flex justify-center space-x-4 items-center opacity-80">
                        <span className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-gray-300">Kaspi QR</span>
                        <span className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-gray-300">Visa</span>
                        <span className="bg-white/10 px-2 py-1 rounded text-xs font-bold text-gray-300">Mastercard</span>
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
