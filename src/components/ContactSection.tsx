import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, InquiryFormData } from '../types';
import { COMPANY_CONTACT, TRANSLATIONS, SERVICES_DATA } from '../data/companyData';

interface ContactSectionProps {
  currentLang: Language;
  presetService?: string;
  onClearPresetService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  presetService,
  onClearPresetService,
}) => {
  const t = TRANSLATIONS[currentLang];

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: presetService || 'Road and Infrastructure Construction',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (presetService) {
      setFormData((prev) => ({ ...prev, service: presetService }));
    }
  }, [presetService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid corporate or personal email address.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      setErrorMessage('Please provide a valid contact phone number.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage('Please describe your project scope or questions in at least a few words.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server rejected the submission. Please check your data.');
      }

      setSubmissionSuccess({
        referenceId: data.referenceId,
        message: data.message,
      });

      if (onClearPresetService) onClearPresetService();
    } catch (err: any) {
      setErrorMessage(err.message || 'Network connection failed. Please ensure the server is reachable.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: 'Road and Infrastructure Construction',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#F4F6FA] text-slate-900 overflow-hidden border-b border-slate-200/90">
      {/* Ambient gold glow */}
      <div className="absolute inset-0 ambient-gold-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                <Send className="w-4 h-4 text-amber-600" />
                <span>Direct Engineering Channel</span>
                <span aria-hidden="true">·</span>
                <span>Baku HQ</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
                {t.contactHeading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.contactSub}
              </p>
            </div>

            {/* Direct Contact Cards - Light Luxury Palette */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono text-amber-800 font-bold">Phone Lines</span>
                  <div className="flex flex-col text-sm font-bold text-slate-900">
                    <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="hover:text-amber-700 transition-colors">
                      {COMPANY_CONTACT.phone1} (Mobile)
                    </a>
                    <a href={`tel:${COMPANY_CONTACT.phone2.replace(/\s+/g, '')}`} className="hover:text-amber-700 transition-colors text-slate-600">
                      {COMPANY_CONTACT.phone2} (Landline)
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono text-amber-800 font-bold">Corporate Email</span>
                  <div>
                    <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-sm font-bold text-amber-800 hover:underline">
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono text-amber-800 font-bold">Headquarters & Operating Offices</span>
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-950 block">Main Office:</strong> {COMPANY_CONTACT.addressNarimanov}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 pt-1">
                    <strong className="text-slate-950 block">Binəqədi Base:</strong> {COMPANY_CONTACT.addressBinegedi}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono text-amber-800 font-bold">Office Working Hours</span>
                  <p className="text-sm font-semibold text-slate-900">
                    {COMPANY_CONTACT.workingHours}
                  </p>
                  <p className="text-xs text-slate-500">Emergency & On-Site dispatch available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-7 sm:p-10 shadow-2xl border border-slate-200">
            <AnimatePresence mode="wait">
              {submissionSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-8 space-y-6 text-center"
                >
                  <div className="w-18 h-18 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-11 h-11" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                      REQUEST LOGGED TO SYSTEM
                    </span>
                    <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                      Inquiry Successfully Submitted
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      {submissionSuccess.message}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono">Reference Tracking ID</span>
                      <span className="font-mono font-bold text-amber-800 text-base">
                        {submissionSuccess.referenceId}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono">Status</span>
                      <span className="font-bold text-emerald-700">Received & Dispatched</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono">Response Window</span>
                      <span className="font-bold text-slate-800">Within 24 Hours</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                      Project Consultation Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill in your project specifications. Our licensed engineers will formulate an initial assessment.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {t.fullName} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Samir Aliyev"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {t.companyName}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Caspian Holdings / Private"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {t.emailAddress} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.az"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {t.phoneNumber} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+994 50 234 56 78"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {t.serviceOfInterest}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white transition-all font-medium"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="Global Activity Repair — Renovation & Finishing">
                        Global Activity Repair — Renovation & Finishing
                      </option>
                      <option value="Construction Machinery & Heavy Equipment Rental">
                        Construction Machinery & Heavy Equipment Rental
                      </option>
                      <option value="General Engineering & Independent Technical Supervision">
                        General Engineering & Independent Technical Supervision
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {t.projectDescription} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify project location, estimated area in m², required deadlines, and whether blueprints are available..."
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="gold-button-premium w-full py-4 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Transmitting to Engineering Department...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-200" />
                          <span>{t.btnSubmitRequest}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Guaranteed confidentiality & NDAs supported</span>
                    <span>Direct response within 24h</span>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
