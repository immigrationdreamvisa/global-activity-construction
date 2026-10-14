import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, ChevronDown, Wrench, HardHat, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ServiceItem } from '../types';
import { TRANSLATIONS, SERVICES_DATA } from '../data/companyData';
import { VisualMedia } from '../components/VisualMedia';
import { ServiceModal } from '../components/ServiceModal';

interface ServicesPageProps {
  currentLang: Language;
  onNavigatePage: (page: string) => void;
  onOpenInquiry: (defaultService?: string) => void;
  initialServiceId?: string | null;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  currentLang,
  onNavigatePage,
  onOpenInquiry,
  initialServiceId,
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(() => {
    if (initialServiceId) {
      return SERVICES_DATA.find((s) => s.id === initialServiceId) || null;
    }
    return null;
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const visualTypeMap: Record<string, any> = {
    'road-infrastructure': 'road-infrastructure',
    'earthworks': 'earthworks',
    'landscape-design': 'landscape',
    'commercial-construction': 'commercial',
    'design-engineering': 'engineering-bim',
    'private-construction': 'private-villa',
    'renovation-modernization': 'renovation-interior',
    'metal-structure-production': 'metal-structure',
  };

  const executionSteps = [
    {
      step: '01',
      title: 'Geotechnical Survey & Topography',
      desc: 'Subsurface soil core sampling, ground compaction density testing, and 3D laser topographic scanning.',
    },
    {
      step: '02',
      title: '3D BIM Engineering & Permitting',
      desc: 'Multi-disciplinary clash detection, seismic structural calculations, and state expert examination permitting.',
    },
    {
      step: '03',
      title: 'Resource Mobilization & Fleet Deployment',
      desc: 'Rapid mobilization of our in-house heavy machinery fleet, certified operators, and bulk certified materials.',
    },
    {
      step: '04',
      title: 'Precision Site Execution & Laboratory QC',
      desc: 'Rigorous adherence to AzDTN norms, daily compaction and concrete slump lab tests, and HSE supervision.',
    },
    {
      step: '05',
      title: 'Commissioning & Handover',
      desc: 'Full as-built dossiers, state authority handover certification, and comprehensive warranty coverage.',
    },
  ];

  const faqs = [
    {
      q: 'Does Global Activity hold official state licenses for high-complexity construction?',
      a: 'Yes. Global Activity MMC holds perpetual general contracting licenses issued by the Ministry of Emergency Situations (FHN) of the Republic of Azerbaijan, authorizing civil, industrial, high-load road, and complex engineering works.',
    },
    {
      q: 'Do you operate your own heavy machinery fleet or rely on third parties?',
      a: 'We own and operate our dedicated heavy fleet consisting of CAT 336 crawler excavators, Komatsu D65 dozers with 3D GPS grading, Mercedes-Benz Actros dump trucks, Hamm rollers, and Vögele asphalt pavers, ensuring zero project mobilization delays.',
    },
    {
      q: 'How does your team guarantee project delivery schedules?',
      a: 'We implement Primavera and BIM 4D schedule tracking, establishing critical-path milestones and deploying double-shift operational crews when necessary to ensure 98.8% on-time project completion.',
    },
    {
      q: 'Can you provide independent technical supervision for ongoing developer projects?',
      a: 'Yes. Our licensed engineering department offers independent technical inspection, QA/QC audits, materials testing verification, and drone progress surveillance for third-party investors and developers.',
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Services Hero Header */}
      <section className="relative py-24 sm:py-32 bg-[#FAFBFD] text-slate-900 overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/bg_construction_3.jpg"
            alt="Global Activity Construction Services"
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
              <span>SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-slate-950 leading-tight">
              Comprehensive Contracting.{' '}
              <span className="gold-gradient-text-light inline-block">8 Core Disciplines.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              From high-axle highway paving and mass earthmoving to BIM structural design and industrial steel fabrication, explore our full-cycle engineering capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Deep Dive Grid */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="space-y-16">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 shadow-sm hover:border-amber-400/80 transition-all duration-300"
            >
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                  <VisualMedia
                    type={visualTypeMap[service.id] || 'commercial'}
                    className="w-full h-full"
                    title={service.title}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-amber-800 text-xs font-mono font-bold px-3 py-1 rounded-md border border-amber-500/30 shadow-xs backdrop-blur-sm">
                    DISCIPLINE 0{index + 1}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow">
                    {service.badge}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-7 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block">
                  {service.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 tracking-tight">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {service.fullDescription}
                </p>

                {/* Capabilities list */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Technical Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-800">
                    {service.capabilities.map((cap, cidx) => (
                      <div key={cidx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-200">
                  <span className="text-xs font-semibold text-slate-500">
                    Scope: <strong className="text-slate-800">{service.scope}</strong>
                  </span>
                  <button
                    onClick={() => onOpenInquiry(service.title)}
                    className="gold-button-premium px-5 py-2.5 text-white text-xs font-bold rounded-xl shadow cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Request Quote for {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Execution Lifecycle */}
      <section className="py-20 lg:py-28 bg-[#F4F6FA] text-slate-900 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block">
              EXECUTION RIGOR
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-950 tracking-tight mt-1.5">
              Our 5-Stage Project Lifecycle
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              From initial geotechnical ground surveys to official state commissioning handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {executionSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-amber-700 block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical FAQ Accordion */}
      <section className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
            COMMON QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1.5">
            Technical & Contracting FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-800 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onInquire={(title) => onOpenInquiry(title)}
      />
    </div>
  );
};
