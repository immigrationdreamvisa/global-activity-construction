import React from 'react';
import { Building2, Handshake } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS, PARTNERS_DATA } from '../data/companyData';

interface PartnersSectionProps {
  currentLang: Language;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="py-16 sm:py-24 bg-[#F4F6FA] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Handshake className="w-4 h-4 text-amber-600" />
            <span>Industrial Clients & Strategic Alliances</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-heading font-black text-slate-950 tracking-tight mt-1.5">
            {t.partnersHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
            {t.partnersSub}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTNERS_DATA.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="gold-hover-card p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">
                    {partner.sector}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-amber-800 transition-colors tracking-tight">
                  {partner.name}
                </h3>
              </div>

              <p className="text-[11px] text-slate-500 mt-3 line-clamp-2 leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
