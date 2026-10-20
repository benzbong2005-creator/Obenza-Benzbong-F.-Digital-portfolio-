import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Code, Check } from 'lucide-react';
import { PERSONAL_INFO, TECHNICAL_SKILLS, SOFT_SKILLS, PROJECTS, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Modal Toolbar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10 print:hidden">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">
              Professional Resume Summary
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-10 space-y-6 text-left text-slate-800 font-sans">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-bold text-blue-700 mt-0.5">
              {PERSONAL_INFO.title} · {PERSONAL_INFO.degree}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.address}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.phone}
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p className="text-xs text-slate-600">{EDUCATION_DATA.degree}</p>
                </div>
                <span className="text-xs text-slate-500 font-mono">Current Enrollment</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                {EDUCATION_DATA.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical & Soft Skills */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Skills & Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Technical Skills:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {TECHNICAL_SKILLS.map((s) => (
                    <span key={s.name} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 mb-1">Professional Soft Skills:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {SOFT_SKILLS.map((s) => (
                    <span key={s.name} className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
              Software Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-900 text-xs sm:text-sm font-bold">
                      {proj.title}
                    </strong>
                    <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-slate-600">{proj.description}</p>
                  <p className="text-slate-500 font-mono text-[11px]">
                    Technologies: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note in modal */}
          <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-400 text-center">
            Certified accurate and true as of {new Date().getFullYear()} · Torres Capitol College BSIT
          </div>
        </div>
      </div>
    </div>
  );
};
