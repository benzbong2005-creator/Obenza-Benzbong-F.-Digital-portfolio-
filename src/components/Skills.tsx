import React, { useState } from 'react';
import {
  Code,
  Layers,
  Database,
  Palette,
  FileSpreadsheet,
  Cpu,
  MessageSquare,
  Users,
  Lightbulb,
  Sparkles,
  Clock,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'design', label: 'Design & UI/UX' },
    { id: 'ai', label: 'AI & Productivity' }
  ];

  const filteredSkills = TECHNICAL_SKILLS.filter((skill) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') return skill.category === 'ai' || skill.category === 'productivity';
    return skill.category === selectedCategory;
  });

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'HTML':
      case 'CSS':
      case 'JavaScript':
        return <Code className="w-4 h-4 text-blue-600" />;
      case 'Basic Java':
        return <Layers className="w-4 h-4 text-blue-600" />;
      case 'Database Fundamentals':
        return <Database className="w-4 h-4 text-blue-600" />;
      case 'UI/UX Design':
        return <Palette className="w-4 h-4 text-blue-600" />;
      case 'Microsoft Office':
        return <FileSpreadsheet className="w-4 h-4 text-blue-600" />;
      case 'AI Prompt Engineering':
        return <Cpu className="w-4 h-4 text-blue-600" />;
      default:
        return <Code className="w-4 h-4 text-blue-600" />;
    }
  };

  const getSoftSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Technical & Professional Skills
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            A balanced skill set blending programming fundamentals, database architecture, design intuition, and collaborative soft skills.
          </p>
        </div>

        {/* Technical Skills Category Filter Buttons (Interactive Buttons allowed by Zero-Pill rule) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-fit mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid with Animated Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 text-left">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-50/80 hover:bg-slate-50 p-6 rounded-2xl border border-slate-200/80 transition-all hover:border-blue-200 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      {getSkillIcon(skill.name)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-500">
                        {skill.experience}
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-extrabold text-blue-600 font-mono tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-2.5 mb-4 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden relative">
                <div
                  className="bg-gradient-to-r from-blue-600 to-sky-500 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12 text-left">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200/80">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Professional Soft Skills
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Essential interpersonal and workplace competencies cultivated through team projects and academic coursework.
              </p>
            </div>
            <span className="text-xs font-semibold text-blue-600 hidden sm:inline">
              5 Core Attributes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SOFT_SKILLS.map((soft) => (
              <div
                key={soft.name}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                    {getSoftSkillIcon(soft.iconName)}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    {soft.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {soft.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-medium text-blue-600">
                  Key Competency
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
