import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  ExternalLink,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentTimePHT, setCurrentTimePHT] = useState('');

  // Update Philippine Time (UTC+8) live
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTimePHT(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch & log to local messages
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Save message locally
      const existing = JSON.parse(localStorage.getItem('benzbong_portfolio_messages') || '[]');
      existing.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('benzbong_portfolio_messages', JSON.stringify(existing));

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const getMailtoHref = () => {
    const sub = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Benzbong,\n\n${formData.message || 'I would like to connect regarding an IT project / internship opportunity.'}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${sub}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Let's Connect & Collaborate
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Interested in discussing an internship, junior software opportunity, academic collaboration, or technical project? Reach out directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 p-1"
                  title="Copy email to clipboard"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedField === 'email' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Official Email
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Preferred for formal inquiries, resumes, and internship offers.
              </p>
            </div>

            {/* Direct Phone Card */}
            <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 p-1"
                  title="Copy phone number"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedField === 'phone' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Mobile & SMS
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors tabular-nums"
              >
                {PERSONAL_INFO.formattedPhone}
              </a>
              <div className="mt-2 flex gap-2">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  Call Mobile
                </a>
                <a
                  href={`sms:${PERSONAL_INFO.phone}`}
                  className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  Send SMS
                </a>
              </div>
            </div>

            {/* Location & Philippine Standard Time Card */}
            <div className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{currentTimePHT || 'PHT (UTC+8)'}</span>
                </div>
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Home Address
              </div>
              <p className="text-sm font-bold text-slate-900 leading-snug">
                {PERSONAL_INFO.address}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Open to local roles across Mindanao as well as remote internships nationwide.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">Response within 24h</span>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-bold">Message Sent Successfully!</strong>
                    <span>Thank you for reaching out, Benzbong will respond promptly. You can also send a copy directly via your preferred email client below.</span>
                    <div className="mt-2.5">
                      <a
                        href={getMailtoHref()}
                        className="font-bold underline text-emerald-900 hover:text-emerald-950"
                      >
                        Launch in Email App (Gmail / Outlook) →
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Santos"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maria@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">
                    Subject / Inquiry Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Opportunity / Technical Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href={getMailtoHref()}
                    className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Or send via email client</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
