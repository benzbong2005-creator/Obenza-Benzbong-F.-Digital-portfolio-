import React, { useState, useEffect } from 'react';
import {
  Award,
  ScrollText,
  PlusCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  X,
  Trophy,
  Star
} from 'lucide-react';
import { CERTIFICATES, ACHIEVEMENTS } from '../data/portfolioData';
import { CertificateItem, AchievementItem } from '../types/portfolio';

export const Credentials: React.FC = () => {
  const [certificates, setCertificates] = useState<CertificateItem[]>(CERTIFICATES);
  const [achievements, setAchievements] = useState<AchievementItem[]>(ACHIEVEMENTS);
  const [activeView, setActiveView] = useState<'certificates' | 'achievements'>('certificates');

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [selectedAchieve, setSelectedAchieve] = useState<AchievementItem | null>(null);

  // New Certificate Form State
  const [newTitle, setNewTitle] = useState('');
  const [newIssuer, setNewIssuer] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newSkills, setNewSkills] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Load any user-added credentials from localStorage
  useEffect(() => {
    const savedCerts = localStorage.getItem('benzbong_portfolio_custom_certs');
    if (savedCerts) {
      try {
        setCertificates([...CERTIFICATES, ...JSON.parse(savedCerts)]);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newIssuer) return;

    const newCertItem: CertificateItem = {
      id: `custom-cert-${Date.now()}`,
      title: newTitle,
      issuer: newIssuer,
      date: newDate || 'Target 2026',
      status: 'In Progress',
      skillsCovered: newSkills ? newSkills.split(',').map((s) => s.trim()) : ['IT Competency'],
      description: newDescription || 'Newly tracked credential towards professional software competency.'
    };

    const updated = [newCertItem, ...certificates];
    setCertificates(updated);

    const customOnly = updated.filter((c) => c.id.startsWith('custom-cert-'));
    localStorage.setItem('benzbong_portfolio_custom_certs', JSON.stringify(customOnly));

    setShowAddModal(false);
    setNewTitle('');
    setNewIssuer('');
    setNewDate('');
    setNewSkills('');
    setNewDescription('');
  };

  return (
    <section id="credentials" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Qualifications & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Certificates & Academic Achievements
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Documenting structured professional certifications, ongoing accreditations, and academic milestones achieved throughout my IT education.
          </p>
        </div>

        {/* View Toggle Tabs + Add Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl max-w-fit">
            <button
              onClick={() => setActiveView('certificates')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
                activeView === 'certificates'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ScrollText className="w-4 h-4" />
              <span>Certificates & Credentials ({certificates.length})</span>
            </button>
            <button
              onClick={() => setActiveView('achievements')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
                activeView === 'achievements'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Achievements & Honors ({achievements.length})</span>
            </button>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100 rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-auto"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Future Entry</span>
          </button>
        </div>

        {/* Content: Certificates View */}
        {activeView === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-slate-50/80 hover:bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <ScrollText className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        cert.status === 'Certified'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                    {cert.title}
                  </h3>

                  <div className="text-xs text-slate-500 mb-3">
                    <span>{cert.issuer}</span>
                    <span className="mx-1.5 text-slate-300">·</span>
                    <span className="font-mono text-slate-600">{cert.date}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Skills Covered
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-medium text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content: Achievements View */}
        {activeView === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {achievements.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAchieve(item)}
                className="bg-slate-50/80 hover:bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <div className="text-xs text-slate-500 mb-3">
                    <span>{item.organization}</span>
                    <span className="mx-1.5 text-slate-300">·</span>
                    <span className="font-semibold text-blue-600">{item.category}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Academic Impact
                  </div>
                  <p className="text-xs font-medium text-slate-800">
                    {item.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Credential Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200 text-left">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Add Certificate / Milestone
                </h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCertificate} className="mt-4 space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Certificate Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AWS Certified Cloud Practitioner"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Issuing Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. DICT / Coursera / Cisco"
                  value={newIssuer}
                  onChange={(e) => setNewIssuer(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Target Date / Year
                </label>
                <input
                  type="text"
                  placeholder="e.g. Q4 2026 or Completed 2025"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Skills Covered (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Cloud, Linux, Networking"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Brief summary of syllabus or achievement..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 font-medium text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
                >
                  Save to Portfolio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Certificate Detail Inspection Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200 text-left">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-mono text-blue-600 font-semibold">
                CREDENTIAL RECORD
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold text-slate-900">{selectedCert.title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                Issued / Managed by: <strong className="text-slate-700">{selectedCert.issuer}</strong>
              </p>
              <div className="mt-4 p-3 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900">
                <strong>Status:</strong> {selectedCert.status} ({selectedCert.date})
              </div>
              <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                {selectedCert.description}
              </p>
              <div className="mt-4">
                <span className="text-[11px] uppercase font-bold text-slate-400 block mb-1.5">
                  Core Competencies Tested
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skillsCovered.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Achievement Detail Inspection Modal */}
      {selectedAchieve && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200 text-left">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-mono text-amber-600 font-semibold">
                ACADEMIC RECOGNITION
              </span>
              <button
                onClick={() => setSelectedAchieve(null)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold text-slate-900">{selectedAchieve.title}</h3>
              <p className="text-xs text-slate-500 mt-1">
                Organization: <strong className="text-slate-700">{selectedAchieve.organization}</strong> ({selectedAchieve.year})
              </p>
              <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                {selectedAchieve.description}
              </p>
              <div className="mt-4 p-3 rounded-2xl bg-amber-50/60 border border-amber-100 text-xs text-amber-900">
                <strong>Impact:</strong> {selectedAchieve.impact}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedAchieve(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
