import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { COMPANY_CONTACT, TRANSLATIONS } from '../data/companyData';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  currentLang: Language;
  onNavigatePage: (page: string) => void;
  presetService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ currentLang, onNavigatePage, presetService }) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Page Hero Header */}
      <section className="relative py-24 sm:py-32 bg-[#FAFBFD] text-slate-900 overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/bg_construction_3.jpg"
            alt="Global Activity Contact Us"
            className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBFD]/98 via-[#FAFBFD]/90 to-[#FAFBFD]/55" />
          <div className="absolute inset-0 cad-grid-pattern opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-800">
              <button onClick={() => onNavigatePage('home')} className="hover:underline cursor-pointer">
                HOME
              </button>
              <span>/</span>
              <span>CONTACT & CONSULTATION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-slate-950 leading-tight">
              Start Your Project.{' '}
              <span className="gold-gradient-text-light inline-block">Consult With Our Engineers.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Whether you require heavy road infrastructure, foundation earthworks, structural steel fabrication, or turnkey commercial contracting, our senior directors in Baku are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Consultation Terminal */}
      <ContactSection
        currentLang={currentLang}
        presetService={presetService}
      />

      {/* Operational Protocol & Client Assurance */}
      <section className="py-20 bg-[#F4F6FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
              OUR CONSULTATION PROMISE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 tracking-tight mt-1">
              What Happens After You Inquire?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-mono font-bold text-sm flex items-center justify-center">
                1
              </span>
              <h3 className="text-base font-bold text-slate-900">Immediate Technical Triage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your submitted inquiry is routed directly to the appropriate discipline lead engineer (Civil, Roads, Steel, or Residential).
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-mono font-bold text-sm flex items-center justify-center">
                2
              </span>
              <h3 className="text-base font-bold text-slate-900">Preliminary Assessment (24h)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review provided blueprints or coordinates to formulate an initial timeline, resource envelope, and preliminary estimate.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-mono font-bold text-sm flex items-center justify-center">
                3
              </span>
              <h3 className="text-base font-bold text-slate-900">On-Site Geotechnical Inspection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our Chief Engineer arranges an on-site visit to inspect ground conditions, access roadways, and survey logistics in person.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
