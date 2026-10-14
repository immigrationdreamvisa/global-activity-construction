import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { COMPANY_STATS } from '../data/companyData';

interface StatisticsProps {
  currentLang: Language;
}

export const Statistics: React.FC<StatisticsProps> = ({ currentLang }) => {
  return (
    <section className="relative bg-[#F4F6FA] text-slate-900 py-16 sm:py-24 border-b border-slate-200/90 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 ambient-gold-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {COMPANY_STATS.map((stat, index) => {
            const label = currentLang === 'az' ? stat.labelAz : currentLang === 'ru' ? stat.labelRu : stat.labelEn;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-between group cursor-default ${
                  index > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''
                }`}
              >
                <div>
                  <div className="flex items-baseline gap-1 text-3xl sm:text-4xl lg:text-5xl font-black tabular-nums tracking-tight font-mono">
                    <span className="gold-gradient-text-light drop-shadow-2xs group-hover:scale-105 transition-transform duration-300 inline-block font-black">
                      {stat.value}
                    </span>
                    {stat.unit && stat.unit !== 'Years' && stat.unit !== 'Projects' && stat.unit !== 'Rate' && stat.unit !== 'On-Time' && (
                      <span className="text-xl sm:text-2xl font-bold text-amber-700">{stat.unit}</span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-2.5 tracking-tight group-hover:text-amber-800 transition-colors">
                    {label}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-normal leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
