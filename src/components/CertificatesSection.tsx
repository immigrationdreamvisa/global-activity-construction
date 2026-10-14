import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, ChevronRight, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, CertificateItem } from '../types';
import { CERTIFICATES_DATA } from '../data/companyData';
import { CertificateModal } from './CertificateModal';

interface CertificatesSectionProps {
  currentLang: Language;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ currentLang }) => {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  const content = {
    en: {
      heading: 'Licenses and Certificates',
      subheading:
        'We adhere to rigorous international and state standards at every stage of project delivery. All 6 official accreditations confirm that our engineering and construction operations comply with safety, quality, and environmental benchmarks.',
      verified: 'Verified',
      activeStatus: 'Active',
      fhnPill: 'State Construction License (FHN)',
      iso9001Pill: 'ISO 9001 Quality',
      iso14001Pill: 'ISO 14001 Ecology',
      iso45001Pill: 'ISO 45001 Safety',
    },
    ru: {
      heading: 'Лицензии и сертификаты',
      subheading:
        'Мы строго следуем международным и государственным строительным стандартам. Все 6 официальных аккредитаций подтверждают соответствие нашей работы требованиям безопасности, качества и экологии.',
      verified: 'Проверено',
      activeStatus: 'Действует',
      fhnPill: 'Гослицензия МЧС (FHN)',
      iso9001Pill: 'ISO 9001 Качество',
      iso14001Pill: 'ISO 14001 Экология',
      iso45001Pill: 'ISO 45001 Безопасность',
    },
    az: {
      heading: 'Lisenziyalar və Sertifikatlar',
      subheading:
        'Layihələrin icrasının hər bir mərhələsində beynəlxalq və dövlət standartlarına ciddi riayət edirik. Bütün 6 rəsmi akkreditasiya fəaliyyətimizin təhlükəsizlik, keyfiyyət və ekoloji tələblərə tam uyğunluğunu təsdiqləyir.',
      verified: 'Təsdiqlənib',
      activeStatus: 'Qüvvədədir',
      fhnPill: 'Dövlət Lisenziyası (FHN)',
      iso9001Pill: 'ISO 9001 Keyfiyyət',
      iso14001Pill: 'ISO 14001 Ekologiya',
      iso45001Pill: 'ISO 45001 Təhlükəsizlik',
    },
  }[currentLang];

  return (
    <section id="certificates" className="relative w-full overflow-hidden bg-[#162035] text-white">
      {/* 1. Full-Width Panoramic Construction Photography Banner with Ken Burns Loop */}
      <div className="relative w-full h-64 sm:h-80 lg:h-[360px] overflow-hidden bg-slate-950">
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full"
        >
          <img
            src="/assets/images/foundation_bridge_rebar.jpg"
            alt="Bridge deep foundation excavation, heavy rebar scaffolding and concrete piles"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.18] brightness-[0.86]"
          />
          {/* Subtle cinematic gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
        </motion.div>

        {/* Dynamic Architectural Geometric Cut Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-12 sm:h-20 lg:h-28"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,120 1200,120 1200,90 820,18 0,65"
              fill="#162035"
            />
          </svg>
        </div>
      </div>

      {/* 2. Content & All-in-One Small Certificates Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-2 sm:pt-4 pb-16 sm:pb-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified Accreditations · All 6 Credentials</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight mb-3"
            >
              {content.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl font-normal"
            >
              {content.subheading}
            </motion.p>
          </div>

          {/* Quick Stats Pill */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 shrink-0 text-xs font-mono text-slate-300">
            <FileCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Active & Certified</span>
          </div>
        </div>

        {/* 4-Column x 2-Row Certificate Grid Matching Official Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CERTIFICATES_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="flex flex-col group cursor-pointer"
              onClick={() => setActiveCert(cert)}
            >
              {/* Framed Certificate Box */}
              <div className="w-full h-64 sm:h-72 rounded-2xl border border-slate-700/60 bg-transparent group-hover:border-slate-400/80 transition-colors duration-300 flex items-center justify-center p-4 sm:p-5 relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain shadow-md rounded-[2px] transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Title Outside Below Card Box */}
              <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed mt-3 group-hover:text-slate-200 transition-colors">
                {cert.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Verification Strip */}
        <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>All credentials issued by accredited state authorities (FHN, SCUPA) and international certifiers (TÜV Austria).</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Official ISO 9001 · 14001 · 45001 Compliance</span>
        </div>
      </div>

      {/* High-Resolution Certificate Modal for Full Document Inspection */}
      <CertificateModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
};
