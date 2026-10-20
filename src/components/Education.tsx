import React, { useState } from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'coursework'>('overview');

  return (
    <section id="education" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Education & Academic Timeline
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Rigorous undergraduate studies establishing core software engineering, networking, and data foundations at Torres Capitol College.
          </p>
        </div>

        {/* Timeline & Campus Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Timeline Card */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative">
              {/* Timeline marker pill */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {EDUCATION_DATA.degree}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {EDUCATION_DATA.duration}
                  </span>
                </div>
              </div>

              {/* Segmented Controller for Overview vs Coursework */}
              <div className="mt-6 flex items-center gap-1 p-1 bg-slate-100 rounded-xl max-w-xs">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Program Highlights
                </button>
                <button
                  onClick={() => setActiveTab('coursework')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'coursework'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Key Coursework
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' ? (
                <div className="mt-6 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The Bachelor of Science in Information Technology (BSIT) program at Torres Capitol College provides an extensive grounding in both computational theory and practical, real-world application deployment.
                  </p>

                  <div className="space-y-3 pt-2">
                    {EDUCATION_DATA.highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-blue-900 block">Expected Standing</span>
                      <span className="text-blue-700">Upperclassman with focus on Web Development & AI</span>
                    </div>
                    <span className="font-mono text-blue-600 font-bold">2023 - 2027</span>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-3">
                  <p className="text-xs text-slate-500 mb-2">
                    Core subjects completed or actively pursued during degree progression:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {EDUCATION_DATA.keyCourses.map((course, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5 text-xs font-medium text-slate-800"
                      >
                        <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 font-mono">
                          {idx + 1}
                        </span>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Academic Milestone note */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Academic Diligence</h4>
                  <p className="text-xs text-slate-500">Dedicated to strong academic performance and peer collaboration</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-blue-600">Torres Capitol College</span>
            </div>
          </div>

          {/* Right Column: Campus Tech Lab Spotlight */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={PERSONAL_INFO.educationLabImage}
                  alt="Torres Capitol College IT and Computer Science Laboratory"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300">
                    Hands-On Training
                  </span>
                  <h4 className="text-sm font-bold leading-tight">
                    IT & Software Computing Laboratory
                  </h4>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Torres Capitol College Computer Center</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engaging in practical laboratory exercises ranging from database design, object-oriented Java programming, network configurations, and responsive web implementation.
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block font-semibold text-[11px] uppercase">
                      Curriculum Standard
                    </span>
                    <span className="font-bold text-slate-800">CHED Compliant BSIT</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold text-[11px] uppercase">
                      Study Mode
                    </span>
                    <span className="font-bold text-slate-800">Full-Time Undergraduate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
