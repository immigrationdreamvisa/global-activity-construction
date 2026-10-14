import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Layers, Users, Building, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS, COMPANY_CONTACT } from '../data/companyData';
import { VisualMedia } from './VisualMedia';

interface AboutSectionProps {
  currentLang: Language;
  onOpenInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onOpenInquiry }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFAFA] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Engineering & General Contracting</span>
              <span aria-hidden="true">·</span>
              <span>Baku, Azerbaijan</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
              {t.aboutHeading}
            </h2>

            <p className="text-base sm:text-lg font-bold text-amber-800 leading-snug">
              {t.aboutSub}
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rigorous Quality Control</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Laboratory-certified materials, ISO 9001 workflows, and HSE oversight on every project.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Digital BIM Integration</h4>
                  <p className="text-xs text-slate-500 mt-0.5">3D clash detection, automated surveying, and precise quantity takeoff for zero waste.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Own Heavy Machinery Fleet</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Modern hydraulic excavators, GPS dozers, and asphalt paving trains ready for immediate mobilization.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Senior Engineering Team</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Licensed civil engineers, structural analysts, and seasoned project directors with 15+ years experience.</p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry()}
                className="gold-button-premium px-6 py-3.5 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md group"
              >
                <span>Consult with Our Chief Engineer</span>
                <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#certificates"
                className="text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-900 underline underline-offset-4 transition-colors"
              >
                View State Licenses &amp; ISO Certificates →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white group shine-hover-effect">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <VisualMedia type="commercial" className="w-full h-full" />
              </div>

              {/* Overlay card for company credentials - Crisp Light Theme */}
              <div className="p-7 bg-white text-slate-900 space-y-4 border-t border-slate-100">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Headquarters</span>
                  <span className="text-xs font-heading font-bold text-amber-800">Baku, Narimanov District</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">General Contractor</span>
                  <span className="text-xs font-heading font-bold text-slate-900">Global Activity MMC</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Establishment Year</span>
                  <span className="text-xs font-semibold text-slate-800 font-mono">2008 (15+ Years)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Regulatory Oversight</span>
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 font-heading">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 animate-pulse-live" />
                    <span>State FHN Licensed</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Mini Experience Badge with Real Engineering Image */}
            <div className="hidden sm:flex absolute -bottom-4 -left-5 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200/90 shadow-xl items-center gap-3 animate-float-gentle z-20">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xs border border-amber-500/30 shrink-0">
                <img
                  src="/assets/images/service_bim_engineering.jpg"
                  alt="BIM Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-heading font-black text-slate-950 block">100% Certified</span>
                <span className="text-[11px] font-mono text-amber-800 font-bold">BIM Level 2 Enabled</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
