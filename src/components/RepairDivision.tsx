import React from 'react';
import { ArrowRight, CheckCircle2, Home, Sparkles, Shield, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { REPAIR_DIVISION_INFO, TRANSLATIONS } from '../data/companyData';
import { VisualMedia } from './VisualMedia';

interface RepairDivisionProps {
  currentLang: Language;
  onOpenInquiry: (defaultService?: string) => void;
}

export const RepairDivision: React.FC<RepairDivisionProps> = ({ currentLang, onOpenInquiry }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="repair" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Home className="w-3.5 h-3.5 text-amber-600" />
            <span>Dedicated Residential & Fit-Out Division</span>
            <span aria-hidden="true">·</span>
            <span>Baku & Absheron</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mt-2 text-balance leading-tight">
            Global Activity Repair — <span className="gold-gradient-text-light">a home you want to come back to</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3">
            {REPAIR_DIVISION_INFO.tagline}
          </p>
        </div>

        {/* Asymmetric Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white group shine-hover-effect">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <VisualMedia type="renovation-interior" className="w-full h-full" />
              </div>

              <div className="p-7 bg-white text-slate-900 space-y-3.5 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2.5">
                  <span className="text-slate-500 font-mono font-medium">STANDARDS</span>
                  <span className="text-amber-800 font-bold font-heading">Premium European Materials Only</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2.5">
                  <span className="text-slate-500 font-mono font-medium">WARRANTY</span>
                  <span className="text-emerald-700 font-bold font-heading flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 animate-pulse-live" />
                    <span>36 Months Full Guarantee</span>
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1 font-normal">
                  From initial 3D architectural visualization to handover, our master builders and interior engineers ensure flawless execution down to the millimeter.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-100/80 border border-amber-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex-1 min-w-0 pr-2">
                <h4 className="text-sm sm:text-base font-heading font-black text-amber-950">
                  Planning a Villa or Apartment Renovation?
                </h4>
                <p className="text-xs text-amber-800 mt-0.5 font-normal">
                  Book a free design consultation and comprehensive budget calculation.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry('Global Activity Repair — Renovation Inquiry')}
                className="gold-button-premium px-6 py-3 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md whitespace-nowrap shrink-0 min-w-fit cursor-pointer transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-1.5"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </motion.div>

          {/* Right Subsections List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            {REPAIR_DIVISION_INFO.subsections.map((sub, idx) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="gold-hover-card p-5 sm:p-6 rounded-2xl bg-[#FAFAFA] border border-slate-200 hover:border-amber-400 hover:bg-white flex items-start gap-4 sm:gap-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-900 border border-amber-300/60 flex items-center justify-center font-mono font-bold text-base shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  {sub.number}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-amber-800 transition-colors tracking-tight">
                    {sub.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="pt-3">
              <button
                onClick={() => onOpenInquiry('Global Activity Repair')}
                className="gold-button-premium px-7 py-3.5 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md group"
              >
                <span>Request Turnkey Renovation Quotation</span>
                <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
