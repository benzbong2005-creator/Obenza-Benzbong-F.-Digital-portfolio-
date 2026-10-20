import React from 'react';
import { Target, User, Compass, BookOpen, Code, Lightbulb, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Personal Narrative & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            About Me & Career Objective
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Get to know my academic background, technical journey, and what drives my pursuit of excellence in the IT industry.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Story & Career Objective */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Bio Card */}
            <div className="bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Who I Am
                  </h3>
                  <p className="text-xs text-slate-500">
                    BSIT Undergraduate Student · Age 20
                  </p>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                {PERSONAL_INFO.about}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Passionate Coder
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Tech Enthusiast
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Continuous Learner
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Future IT Professional
                </span>
              </div>
            </div>

            {/* Career Objective Highlight Card */}
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 sm:p-8 rounded-3xl shadow-md overflow-hidden">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Career Objective
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic text-white/95">
                "{PERSONAL_INFO.careerObjective}"
              </blockquote>

              <p className="text-xs text-blue-100/90 mt-4 leading-normal">
                Focused on bridging theoretical knowledge from Torres Capitol College into industry-standard software engineering practices and collaborative agile teams.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Practical Code</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Building accessible, responsive web tools and solving practical software challenges.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Analytical Mind</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Methodical debugging, relational schema modeling, and modular logic design.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Growth Mindset</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Embracing novel technologies, modern AI prompt engineering, and proactive upskilling.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details Spec Table */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-7">
              <h3 className="text-base font-bold text-slate-900 pb-4 border-b border-slate-100 flex items-center justify-between">
                <span>Personal Specifications</span>
                <span className="text-xs font-normal text-blue-600 font-mono">STATUS: ACTIVE</span>
              </h3>

              <dl className="divide-y divide-slate-100 text-sm">
                <div className="py-3.5 flex justify-between items-center gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Full Name
                  </dt>
                  <dd className="font-semibold text-slate-900 text-right">
                    {PERSONAL_INFO.name}
                  </dd>
                </div>

                <div className="py-3.5 flex justify-between items-center gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Title
                  </dt>
                  <dd className="font-medium text-slate-800 text-right">
                    {PERSONAL_INFO.title}
                  </dd>
                </div>

                <div className="py-3.5 flex justify-between items-center gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Age
                  </dt>
                  <dd className="font-medium text-slate-900 text-right tabular-nums">
                    {PERSONAL_INFO.age} years old
                  </dd>
                </div>

                <div className="py-3.5 flex justify-between items-center gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Institution
                  </dt>
                  <dd className="font-medium text-slate-800 text-right">
                    {PERSONAL_INFO.school}
                  </dd>
                </div>

                <div className="py-3.5 flex justify-between items-center gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Degree
                  </dt>
                  <dd className="font-medium text-blue-700 text-right">
                    BS in Information Technology
                  </dd>
                </div>

                <div className="py-3.5 flex justify-between items-start gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide pt-0.5">
                    Address
                  </dt>
                  <dd className="font-medium text-slate-800 text-right max-w-[220px]">
                    {PERSONAL_INFO.address}
                  </dd>
                </div>

                <div className="py-3.5 flex justify-between items-center gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Email
                  </dt>
                  <dd className="font-medium text-blue-600 text-right hover:underline">
                    <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                  </dd>
                </div>

                <div className="py-3.5 flex justify-between items-center gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Phone
                  </dt>
                  <dd className="font-medium text-slate-900 text-right tabular-nums">
                    {PERSONAL_INFO.phone}
                  </dd>
                </div>

                <div className="py-3.5 flex justify-between items-center gap-4">
                  <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Target Roles
                  </dt>
                  <dd className="font-medium text-slate-800 text-right">
                    IT Intern / Junior Developer
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Need direct contact?</span>
                <a
                  href="#contact"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Send a Message →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
