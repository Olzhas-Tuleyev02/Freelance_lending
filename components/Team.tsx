
import React from 'react';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { name: 'Тулеев Олжас', role: 'Главный преподаватель', experience: '10 лет в веб-разработке. Основатель студии.', imageUrl: 'https://i.ibb.co/PGX7vYR/Subtract.png' },
  { name: 'Адлет Ким', role: 'Full-stack Ментор', experience: '7 лет коммерческого опыта. Ex-Yandex.', imageUrl: 'https://i.ibb.com/gw11jd6/Generated-Image-November-17-2025-2-48-PM.png' },
  { name: 'Райымкулова Асель', role: 'UI/UX Эксперт', experience: 'Топ-фрилансер на Upwork (Top Rated).', imageUrl: 'https://i.ibb.com/kgJLN57/Generated-Image-November-17-2025-2-34-PM.png' },
  { name: 'Мария Кузнецова', role: 'Куратор по фрилансу', experience: 'Помогла 200+ студентам найти первый заказ.', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200' },
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-gray-800 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700 group">
        <div className="relative inline-block">
            <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500 object-cover group-hover:border-purple-500 transition-colors" src={member.imageUrl} alt={member.name} />
        </div>
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-indigo-400 font-semibold mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{member.experience}</p>
    </div>
);

const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Кто ведет курс?</h2>
                    <p className="mt-4 text-lg text-gray-400">Практики с реальным опытом, а не теоретики.</p>
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
