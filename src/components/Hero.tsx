import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Camera,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Upload,
  RefreshCw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(PERSONAL_INFO.defaultPhotoUrl);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [photoStatusMessage, setPhotoStatusMessage] = useState<string | null>(null);

  // Load saved photo from localStorage if user uploaded or specified their Google picture
  useEffect(() => {
    const savedPhoto = localStorage.getItem('benzbong_portfolio_custom_avatar');
    if (savedPhoto) {
      setPhotoUrl(savedPhoto);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setPhotoStatusMessage('Please select an image smaller than 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          localStorage.setItem('benzbong_portfolio_custom_avatar', result);
          setPhotoStatusMessage('Profile picture updated successfully!');
          setTimeout(() => setShowPhotoModal(false), 800);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;
    setPhotoUrl(customUrlInput.trim());
    localStorage.setItem('benzbong_portfolio_custom_avatar', customUrlInput.trim());
    setPhotoStatusMessage('Custom image URL applied!');
    setTimeout(() => setShowPhotoModal(false), 800);
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('benzbong_portfolio_custom_avatar');
    setPhotoUrl(PERSONAL_INFO.defaultPhotoUrl);
    setPhotoStatusMessage('Reset to studio portrait.');
    setTimeout(() => setShowPhotoModal(false), 800);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
      {/* Decorative ambient background blur */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-sky-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase mb-3">
              <span>{PERSONAL_INFO.degree}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{PERSONAL_INFO.school}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance mb-5">
              Hi, I’m <span className="text-blue-600">{PERSONAL_INFO.name}</span>. Aspiring IT Professional & Developer.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              A 20-year-old Information Technology student from <span className="text-slate-800 font-medium">Katutungan, Wao, Lanao del Sur</span>. Passionate about software development, practical web solutions, and continuous learning to prepare for impactful IT industry roles.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-sm font-semibold text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Resume Summary</span>
              </button>
            </div>

            {/* Quick Contact & Status Line */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 pt-4 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Backing decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl blur-md opacity-25" />

              {/* Main Card */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 group">
                  <img
                    src={photoUrl}
                    alt="Benzbong F. Obenza - IT Student at Torres Capitol College"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if custom URL fails
                      (e.currentTarget as HTMLImageElement).src = PERSONAL_INFO.defaultPhotoUrl;
                    }}
                  />

                  {/* Gradient scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Overlay student info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-bold text-base sm:text-lg leading-tight drop-shadow-sm">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="text-xs text-blue-200 font-medium">
                      BSIT · 20 y/o · {PERSONAL_INFO.school}
                    </p>
                  </div>

                  {/* Photo Switcher Trigger Button */}
                  <button
                    onClick={() => setShowPhotoModal(true)}
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-800 rounded-xl shadow-md backdrop-blur-sm transition-all flex items-center gap-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                    title="Change / Use Google Account Photo"
                  >
                    <Camera className="w-3.5 h-3.5 text-blue-600" />
                    <span className="hidden sm:inline">Set Photo</span>
                  </button>
                </div>

                {/* Sub-card details */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Katutungan, Wao, Lanao del Sur</span>
                  </div>
                  <span className="text-slate-400 font-mono">BSIT-2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item KPI / Quick Facts Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Student Age
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              20 <span className="text-sm font-semibold text-blue-600">Years</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Torres Capitol College</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Academic Program
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight">
              BSIT
            </div>
            <p className="text-xs text-slate-500 mt-1">Information Technology</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Hometown
            </span>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 truncate">
              Wao, LDS
            </div>
            <p className="text-xs text-slate-500 mt-1">Lanao del Sur, Philippines</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Core Competencies
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              8+ <span className="text-sm font-semibold text-blue-600">Skills</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Web, Java, Database & AI</p>
          </div>
        </div>
      </div>

      {/* Photo Selector Modal for Google Picture or Custom Upload */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Update Portfolio Picture
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowPhotoModal(false);
                  setPhotoStatusMessage(null);
                }}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              You can easily use your personal Google account photo, upload an image from your device, or paste a direct picture URL.
            </p>

            {photoStatusMessage && (
              <div className="mt-3 p-2.5 rounded-lg bg-blue-50 text-blue-800 text-xs font-medium border border-blue-200">
                {photoStatusMessage}
              </div>
            )}

            <div className="mt-4 space-y-4">
              {/* Option 1: File Upload */}
              <div className="p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-blue-400 transition-colors text-center">
                <Upload className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <label className="cursor-pointer block">
                  <span className="text-xs font-semibold text-blue-600 hover:underline">
                    Upload your Google / personal photo
                  </span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    PNG, JPG, or WEBP up to 5MB
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Option 2: Image URL */}
              <form onSubmit={handleSaveUrl} className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Or Paste Image URL:
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://..."
                    value={customUrlInput}
                    onChange={(e) => setCustomUrlInput(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </form>

              {/* Reset Option */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleResetPhoto}
                  className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Studio Portrait</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowPhotoModal(false)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
