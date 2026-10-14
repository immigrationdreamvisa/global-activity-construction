import React from 'react';
import { FileCheck, RotateCw, SlidersHorizontal, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface WhyChooseUsProps {
  currentLang: Language;
  onOpenInquiry?: (defaultService?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang, onOpenInquiry }) => {
  const content = {
    en: {
      heading: 'Why choose us?',
      subheading:
        'Clients and partners trust us thanks to our solid business reputation, consistent work approach, and ability to deliver in any conditions.',
      card1Title: 'Quality and control',
      card1Desc: 'We use only certified materials and laboratory-tested concrete and asphalt.',
      card2Title: 'On-time delivery',
      card2Desc: 'Every project is completed within the agreed deadlines through rigorous scheduling.',
      card3Title: 'Tailored approach',
      card3Desc: 'Solutions for any scale and budget, from private villas to national infrastructure.',
      card4Badge: 'Choose the best',
      card4Title: "Contact us — we'll help realize your vision",
      card4Btn: 'Consult Engineers',
    },
    ru: {
      heading: 'Почему выбирают нас?',
      subheading:
        'Клиенты и партнеры доверяют нам благодаря солидной деловой репутации, последовательному подходу к работе и способности выполнять задачи в любых условиях.',
      card1Title: 'Качество и контроль',
      card1Desc: 'Мы используем только сертифицированные материалы и проверенные лабораторией смеси.',
      card2Title: 'Своевременная сдача',
      card2Desc: 'Каждый проект завершается строго в согласованные сроки по сетевому графику.',
      card3Title: 'Индивидуальный подход',
      card3Desc: 'Решения для любого масштаба и бюджета — от частных вилл до масштабных шоссе.',
      card4Badge: 'Выбирайте лучших',
      card4Title: 'Свяжитесь с нами — мы поможем с проектом',
      card4Btn: 'Консультация',
    },
    az: {
      heading: 'Niyə bizi seçməlisiniz?',
      subheading:
        'Müştərilər və tərəfdaşlar möhkəm işgüzar nüfuzumuz, ardıcıl iş yanaşmamız və istənilən şəraitdə təhvil vermək bacarığımız sayəsində bizə güvənirlər.',
      card1Title: 'Keyfiyyət və nəzarət',
      card1Desc: 'Yalnız sertifikatlaşdırılmış materiallar və laboratoriya sınaqlı beton istifadə edirik.',
      card2Title: 'Vaxtında təhvil',
      card2Desc: 'Hər bir layihə dəqiq planlaşdırma ilə razılaşdırılmış müddətdə tamamlanır.',
      card3Title: 'Fərdi yanaşma',
      card3Desc: 'İstənilən miqyas və büdcə üçün çevik mühəndislik və tikinti həlləri.',
      card4Badge: 'Ən yaxşısını seçin',
      card4Title: 'Bizimlə əlaqə saxlayın — layihənizə dəstək olaq',
      card4Btn: 'Mühəndislə əlaqə',
    },
  }[currentLang] || {
    heading: 'Why choose us?',
    subheading:
      'Clients and partners trust us thanks to our solid business reputation, consistent work approach, and ability to deliver in any conditions.',
    card1Title: 'Quality and control',
    card1Desc: 'We use only certified materials and laboratory-tested concrete and asphalt.',
    card2Title: 'On-time delivery',
    card2Desc: 'Every project is completed within the agreed deadlines through rigorous scheduling.',
    card3Title: 'Tailored approach',
    card3Desc: 'Solutions for any scale and budget, from private villas to national infrastructure.',
    card4Badge: 'Choose the best',
    card4Title: "Contact us — we'll help realize your vision",
    card4Btn: 'Consult Engineers',
  };

  return (
    <section id="why-choose-us" className="relative w-full bg-[#FAFBFD] text-slate-900 overflow-hidden">
      {/* 1. Full-Width Panoramic Construction Image with Cinematic Animation & Angular Cut */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden bg-slate-900">
        <motion.div
          className="w-full h-full relative"
          animate={{
            scale: [1, 1.07, 1],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/assets/images/why_choose_us_curb_workers.jpg"
            alt="Road construction curb and paving workers"
            loading="lazy"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.12] brightness-[0.88]"
          />
          {/* Subtle architectural lighting vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        </motion.div>

        {/* Dynamic Architectural Slanted Geometric Cut (matching reference layout) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            className="relative block w-full h-14 sm:h-24 lg:h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,120 1200,120 1200,55 960,10 0,80"
              fill="#FAFBFD"
            />
          </svg>
        </div>
      </div>

      {/* 2. Content & Card Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-8 pb-20 sm:pb-28">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight mb-4"
          >
            {content.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal"
          >
            {content.subheading}
          </motion.p>
        </div>

        {/* 4 Cards Grid Layout (matching reference screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Quality and control */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-8 rounded-3xl bg-[#F4F6FA] border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-400/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl shadow-xs border border-slate-200/60 flex items-center justify-center mb-7 group-hover:scale-108 transition-transform duration-300">
                <FileCheck className="w-6 h-6 text-slate-800 group-hover:text-amber-700 transition-colors" />
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-amber-800 transition-colors">
                {content.card1Title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {content.card1Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center text-[11px] font-mono text-slate-400 uppercase font-semibold">
              <span>ISO 9001 Protocol</span>
            </div>
          </motion.div>

          {/* Card 2: On-time delivery */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-8 rounded-3xl bg-[#F4F6FA] border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-400/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl shadow-xs border border-slate-200/60 flex items-center justify-center mb-7 group-hover:scale-108 transition-transform duration-300">
                <RotateCw className="w-6 h-6 text-slate-800 group-hover:text-amber-700 group-hover:rotate-45 transition-all duration-300" />
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-amber-800 transition-colors">
                {content.card2Title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {content.card2Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center text-[11px] font-mono text-slate-400 uppercase font-semibold">
              <span>98.8% On Schedule</span>
            </div>
          </motion.div>

          {/* Card 3: Tailored approach */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.45, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-8 rounded-3xl bg-[#F4F6FA] border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-400/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl shadow-xs border border-slate-200/60 flex items-center justify-center mb-7 group-hover:scale-108 transition-transform duration-300">
                <SlidersHorizontal className="w-6 h-6 text-slate-800 group-hover:text-amber-700 transition-colors" />
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-amber-800 transition-colors">
                {content.card3Title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {content.card3Desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center text-[11px] font-mono text-slate-400 uppercase font-semibold">
              <span>Custom Blueprinting</span>
            </div>
          </motion.div>

          {/* Card 4: Contact us (Featured Dark Navy Accent Card) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.45, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#384870] via-[#2A3758] to-[#1C253C] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shine-hover-effect"
          >
            {/* Subtle glow highlight in corner */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-amber-300 uppercase block mb-3">
                {content.card4Badge}
              </span>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight leading-snug">
                {content.card4Title}
              </h3>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('General Consultation')}
                className="w-full py-3.5 px-5 bg-white text-slate-900 hover:bg-amber-400 hover:text-slate-950 font-heading font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>{content.card4Btn}</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-700 group-hover/btn:text-slate-950 group-hover/btn:translate-x-1 transition-all" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
