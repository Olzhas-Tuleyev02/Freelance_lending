
import React from 'react';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { 
      name: 'Тулеев Олжас', 
      role: 'Главный преподаватель', 
      experience: '10 лет в веб-разработке. Основатель студии.', 
      imageUrl: 'https://i.ibb.co/PGX7vYR/Subtract.png',
      socialLinks: { instagram: '#', linkedin: '#' }
  },
  { 
      name: 'Адлет Ким', 
      role: 'Full-stack Ментор', 
      experience: '7 лет коммерческого опыта. Ex-Yandex.', 
      imageUrl: 'https://i.ibb.com/gw11jd6/Generated-Image-November-17-2025-2-48-PM.png',
      socialLinks: { linkedin: '#' }
  },
  { 
      name: 'Райымкулова Асель', 
      role: 'UI/UX Эксперт', 
      experience: 'Топ-фрилансер на Upwork (Top Rated).', 
      imageUrl: 'https://i.ibb.com/kgJLN57/Generated-Image-November-17-2025-2-34-PM.png',
      socialLinks: { instagram: '#' }
  },
  { 
      name: 'Мария Кузнецова', 
      role: 'Куратор по фрилансу', 
      experience: 'Помогла 200+ студентам найти первый заказ.', 
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200',
      socialLinks: { telegram: '#' }
  },
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-gray-800 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700 group flex flex-col items-center">
        <div className="relative inline-block">
            <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500 object-cover group-hover:border-purple-500 transition-colors" src={member.imageUrl} alt={member.name} />
        </div>
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-indigo-400 font-semibold mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.experience}</p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-3 mt-auto">
            {member.socialLinks?.instagram && (
                <a href={member.socialLinks.instagram} className="text-gray-500 hover:text-pink-500 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            )}
            {member.socialLinks?.linkedin && (
                <a href={member.socialLinks.linkedin} className="text-gray-500 hover:text-blue-500 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.17 5.432 0v8.306h5v-10.597c0-6.627-7.502-6.394-10.463-3.728v-1.981z"/></svg></a>
            )}
             {member.socialLinks?.telegram && (
                <a href={member.socialLinks.telegram} className="text-gray-500 hover:text-blue-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a>
            )}
        </div>
    </div>
);

const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Команда</h2>
                    <p className="mt-4 text-lg text-gray-400">Практики с реальным опытом.</p>
                     <div className="mt-4 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                         <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <TeamCard member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
