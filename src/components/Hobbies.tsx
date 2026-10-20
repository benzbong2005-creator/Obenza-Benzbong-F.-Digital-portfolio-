import React from 'react';
import { Cpu, Bot, Code2, Smartphone, Gamepad2, Sparkles } from 'lucide-react';
import { HOBBIES } from '../data/portfolioData';

export const Hobbies: React.FC = () => {
  const getHobbyIcon = (icon: string) => {
    switch (icon) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-blue-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="interests" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Beyond Coursework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Hobbies & Personal Interests
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            The passions and curiosities that fuel my drive to build, discover, and experiment beyond the lecture hall.
          </p>
        </div>

        {/* 5 Hobbies Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
          {HOBBIES.map((hobby) => (
            <div
              key={hobby.name}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors mb-4">
                  <div className="group-hover:text-white transition-colors">
                    {getHobbyIcon(hobby.icon)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {hobby.name}
                </h3>

                <p className="text-xs font-semibold text-blue-600/90 mb-2.5">
                  {hobby.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Personal Focus</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
