
import React, { useState } from 'react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 animate-fade-in-up">Посмотрите, как проходит обучение</h2>
        
        <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {!isPlaying ? (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Video Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-indigo-500 transition-all duration-300 animate-pulse-glow">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-left">
                <p className="text-white font-bold text-lg">Введение в курс</p>
                <p className="text-gray-300 text-sm">2 минуты</p>
              </div>
            </div>
          ) : (
             <div className="w-full h-full bg-black flex items-center justify-center text-white relative">
                <p>Видео-презентация курса загружается...</p>
                <button onClick={() => setIsPlaying(false)} className="absolute top-4 right-4 text-white hover:text-indigo-400 bg-black/50 px-3 py-1 rounded">Закрыть</button>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;