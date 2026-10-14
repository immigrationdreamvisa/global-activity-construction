import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle2, ArrowRight, Building, Users, Calendar, MapPin, Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS, COMPANY_CONTACT, CERTIFICATES_DATA } from '../data/companyData';
import { CertificateModal } from '../components/CertificateModal';
import { VisualMedia } from '../components/VisualMedia';

interface AboutPageProps {
  currentLang: Language;
  onNavigatePage: (page: string) => void;
  onOpenInquiry: (defaultService?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ currentLang, onNavigatePage, onOpenInquiry }) => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const timelineEvents = [
    {
      year: '2008',
      title: 'Company Foundation in Baku',
      desc: 'Established as Global Activity MMC in Baku, beginning operations with residential construction, foundation earthworks, and architectural design contracts.',
    },
    {
      year: '2014',
      title: 'Expansion into Civil Infrastructure',
      desc: 'Invested heavily in modern heavy road pavers, compactors, and hydraulic excavators, securing major industrial paving contracts across Sumgayit and Garadagh.',
    },
    {
      year: '2018',
      title: 'ISO Management & FHN State License',
      desc: 'Achieved international ISO 9001, ISO 14001, and ISO 45001 accreditations, alongside perpetual general contracting licenses from the Ministry of Emergency Situations (FHN).',
    },
    {
      year: '2023',
      title: 'Major Strategic National Projects',
      desc: 'Delivered heavy-duty internal road systems at the SOCAR Carbamide Plant and Holcim Plant; began work on the Araz River international state border crossing.',
    },
    {
      year: '2026',
      title: 'International Mandates & BIM Leadership',
      desc: 'Signed a landmark agreement with FIFA for international sports infrastructure construction; expanded full-cycle 3D BIM integration across Azerbaijani projects.',
    },
  ];

  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Page Hero Header - Daylight Architectural Scrim */}
      <section className="relative py-24 sm:py-32 bg-[#FAFBFD] text-slate-900 overflow-hidden border-b border-slate-200/90">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/bg_construction_2.jpg"
            alt="Global Activity Construction About Us"
            className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBFD]/98 via-[#FAFBFD]/90 to-[#FAFBFD]/55" />
          <div className="absolute inset-0 cad-grid-pattern opacity-40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-800">
              <button onClick={() => onNavigatePage('home')} className="hover:underline cursor-pointer">
                HOME
              </button>
              <span>/</span>
              <span>ABOUT US</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight font-heading">
              Engineering Reliability.{' '}
              <span className="gold-gradient-text inline-block">Building Trust Since 2008.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Discover the engineering philosophy, certified standards, and seasoned team powering Azerbaijan’s most ambitious civil, industrial, and commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Split Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block">
              OUR PROFILE & MISSION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Setting Uncompromising Benchmarks for Quality Across Azerbaijan
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Global Activity Construction (Global Activity MMC) was founded in 2008 in Baku with a clear commitment: to provide full-cycle engineering, contracting, and civil infrastructure execution with zero compromises on safety, schedule, or material quality.
              </p>
              <p>
                Over the past 15+ years, we have evolved from a specialized structural builder into one of Azerbaijan's premier multi-disciplinary general contracting firms. Today, our capabilities span high-load highway and industrial road networks, mass earthmoving, structural steel fabrication, turnkey commercial hubs, and bespoke architectural private residences.
              </p>
              <p>
                Our projects are backed by our own fleet of modern CAT and Komatsu heavy machinery, licensed BIM engineering studios, and ISO-certified quality management protocols.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry()}
                className="gold-button-premium px-6 py-3.5 text-white font-bold text-sm rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl bg-[#090E1B]">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/assets/images/real_service_1.jpg"
                  alt="Global Activity Headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7 bg-[#090E1B] text-white space-y-3.5 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400 font-mono">REGISTRATION</span>
                  <span className="text-white font-bold">Global Activity MMC (TIN: 1401349881)</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400 font-mono">MAIN OFFICE</span>
                  <span className="text-amber-400 font-bold">Yusif Vazir Chamanzaminli 23, Narimanov</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400 font-mono">STANDARDS</span>
                  <span className="text-emerald-400 font-bold">ISO 9001 / 14001 / 45001</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">LICENSE</span>
                  <span className="text-amber-400 font-bold">FHN State General Contractor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15-Year Timeline Section */}
      <section className="py-20 lg:py-28 bg-[#F4F5F7] border-y border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block">
              15+ YEARS OF GROWTH
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1.5">
              Key Milestones in Our History
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From our first foundation concrete pours in Baku to international agreements with FIFA.
            </p>
          </div>

          <div className="relative border-l-2 border-amber-500/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-amber-600 shadow-md group-hover:scale-125 transition-transform" />
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block mb-2">
                    {event.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health, Safety & Environment (HSE) Section - Light Architectural Cards */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white text-slate-900 space-y-4 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 tracking-tight font-heading">
              Occupational Health & Safety (ISO 45001)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every job site enforces mandatory PPE compliance, daily morning toolbox hazard briefings, and certified safety rigging inspections. Zero accidents is our uncompromising target.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white text-slate-900 space-y-4 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 tracking-tight font-heading">
              Quality Assurance & Lab Testing (ISO 9001)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All concrete batches, asphalt aggregate blends, and steel weld joints undergo certified laboratory stress and ultrasonic non-destructive testing before installation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white text-slate-900 space-y-4 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 tracking-tight font-heading">
              Environmental Responsibility (ISO 14001)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Systematic construction waste recycling, environmentally safe soil disposal, and minimal ecological footprint on all regional water and infrastructure corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Official Credentials Grid */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
              OFFICIAL ACCREDITATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1.5">
              Licenses & Verified Certificates
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Click any certificate to view official registration codes and validity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CERTIFICATES_DATA.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="gold-hover-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-mono font-bold text-amber-700">{cert.standard}</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-amber-800 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">{cert.code}</span>
                  <span className="font-bold text-amber-800 group-hover:underline">View →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
