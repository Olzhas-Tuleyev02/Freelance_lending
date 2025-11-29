
import React from 'react';

const reviews = [
    {
        name: "Амир",
        initial: "A",
        color: "bg-indigo-500",
        messages: [
            { text: "Олжас, спасибо за урок! Вчера сделал первый лендинг по твоему шаблону, клиент уже оплатил 30к предоплаты! 🔥", time: "14:32", isUser: false },
            { text: "Красавчик! 🔥 Теперь масштабируй, бери следующий!", time: "14:35", isUser: true }
        ]
    },
    {
        name: "Динара",
        initial: "D",
        color: "bg-purple-500",
        messages: [
            { text: "Я в шоке... Сделала бота для доставки суши, как на курсе показывали. Заказчик в восторге, предложил вести их инсту еще за доплату 😱", time: "09:15", isUser: false }
        ]
    },
    {
        name: "Руслан",
        initial: "R",
        color: "bg-green-600",
        messages: [
            { text: "Ребята, у меня первый заказ на Upwork! $50 за логотип. Использовал скрипт из бонусов, клиент сразу согласился. Спасибо за обучение!", time: "18:40", isUser: false },
            { text: "Поздравляю! 🚀 Дальше - больше!", time: "18:45", isUser: true }
        ]
    },
    {
        name: "Сауле",
        initial: "S",
        color: "bg-pink-500",
        messages: [
            { text: "Сдала интернет-магазин сегодня. Клиент даже не стал правки вносить, все по ТЗ. Получила остаток 70к на карту. Это мои первые деньги в интернете 😭", time: "11:20", isUser: false },
             { text: "Супер! 👏 Самое сложное позади, теперь только опыт нарабатывать.", time: "11:25", isUser: true }
        ]
    },
    {
        name: "Кайрат",
        initial: "K",
        color: "bg-blue-500",
        messages: [
            { text: "Брат, тот скрипт на Питоне реально работает. Автоматизировал рассылку клиенту, он мне сверху 10к накинул за скорость.", time: "16:05", isUser: false }
        ]
    },
     {
        name: "Елена",
        initial: "E",
        color: "bg-yellow-500",
        messages: [
            { text: "Написала заявление на увольнение! Со следующего месяца только фриланс. За эту неделю заработала больше, чем в офисе за месяц.", time: "10:00", isUser: false },
             { text: "Вот это решение! Горжусь! 💪", time: "10:12", isUser: true }
        ]
    },
    {
        name: "Тимур",
        initial: "T",
        color: "bg-red-500",
        messages: [
            { text: "Подключил оплату на сайте, как ты учил. Все работает четко. Клиент доволен, обещал друзей привести.", time: "19:30", isUser: false }
        ]
    },
    {
        name: "Айжан",
        initial: "A",
        color: "bg-teal-500",
        messages: [
            { text: "Миджорни это вещь! Сгенерировала логотипы, клиент выбрал сразу 3 варианта. Раньше бы неделю рисовала, а тут за час.", time: "13:45", isUser: false }
        ]
    },
     {
        name: "Бекзат",
        initial: "B",
        color: "bg-orange-500",
        messages: [
            { text: "Взял заказ на таргет + лендинг. Чек 150к. Боялся называть цену, но они согласились без вопросов!", time: "15:10", isUser: false },
            { text: "Главное уверенность! Ты профи, твое время стоит денег.", time: "15:20", isUser: true }
        ]
    },
    {
        name: "Мадина",
        initial: "M",
        color: "bg-cyan-600",
        messages: [
            { text: "Пока ребенок спал, настроила бота. Муж не верил, а сегодня я ему показала перевод от заказчика. Теперь просит и ему показать как это работает 😂", time: "21:00", isUser: false }
        ]
    }
];

const WhatsAppReviews: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Живые отзывы студентов</h2>
            <p className="mt-4 text-lg text-gray-400">Скриншоты из нашего рабочего чата в WhatsApp</p>
             <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
            {reviews.map((review, index) => (
                <div key={index} className="bg-[#0b141a] rounded-xl overflow-hidden border border-gray-800 shadow-xl flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="bg-[#202c33] p-3 flex items-center border-b border-gray-700 shrink-0">
                        <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold mr-3`}>{review.initial}</div>
                        <span className="text-white font-medium">{review.name}</span>
                    </div>
                    <div className="p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-10 flex-grow flex flex-col space-y-4 min-h-[200px] bg-repeat">
                        {review.messages.map((msg, i) => (
                             <div key={i} className={`rounded-lg p-2 max-w-[90%] shadow text-sm ${msg.isUser ? 'bg-[#005c4b] self-end rounded-br-none' : 'bg-[#202c33] self-start rounded-bl-none'}`}>
                                <p className="text-[#e9edef] leading-snug">{msg.text}</p>
                                <div className="flex justify-end items-center mt-1 space-x-1">
                                    <span className={`text-[10px] ${msg.isUser ? 'text-green-200' : 'text-gray-500'}`}>{msg.time}</span>
                                    {msg.isUser && <span className="text-blue-400 text-[10px]">✓✓</span>}
                                </div>
                             </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up">
            <p className="text-gray-400 mb-6">Хотите попасть в этот чат и начать зарабатывать?</p>
             <button onClick={() => document.getElementById('enroll')?.scrollIntoView({behavior: 'smooth'})} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center mx-auto gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Хочу также!
             </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppReviews;
