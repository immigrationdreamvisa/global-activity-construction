import React, { useState } from 'react';
import { ChevronsRight, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, ServiceItem } from '../types';
import { TRANSLATIONS, SERVICES_DATA } from '../data/companyData';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  currentLang: Language;
  onOpenInquiry: (defaultService?: string) => void;
  selectedServiceId?: string | null;
  onClearSelectedService?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onOpenInquiry,
  selectedServiceId,
  onClearSelectedService,
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const t = TRANSLATIONS[currentLang];

  React.useEffect(() => {
    if (selectedServiceId) {
      const found = SERVICES_DATA.find((s) => s.id === selectedServiceId);
      if (found) {
        setActiveModalService(found);
      }
      if (onClearSelectedService) onClearSelectedService();
    }
  }, [selectedServiceId]);

  // Exact 8-card layout configuration matching user's reference design
  const bentoServices = [
    // ROW 1
    {
      id: 'road-infrastructure',
      fallbackTitle: 'Road and infrastructure construction',
      colSpan: 'lg:col-span-5',
      image: '/assets/images/service_road_foundation.jpg',
      isTall: false,
    },
    {
      id: 'landscape-design',
      fallbackTitle: 'Landscape design',
      colSpan: 'lg:col-span-3',
      image: '/assets/images/service_landscape_brick.jpg',
      isTall: false,
    },
    {
      id: 'design-engineering',
      fallbackTitle: 'Design and engineering solutions',
      colSpan: 'lg:col-span-4 lg:row-span-2',
      image: '/assets/images/service_blueprint_tall.png',
      isTall: true,
    },

    // ROW 2
    {
      id: 'private-construction',
      fallbackTitle: 'Private construction',
      colSpan: 'lg:col-span-3',
      image: '/assets/images/service_private_crane.png',
      isTall: false,
    },
    {
      id: 'commercial-construction',
      fallbackTitle: 'Commercial construction',
      colSpan: 'lg:col-span-5',
      image: '/assets/images/service_commercial_interior.png',
      isTall: false,
    },

    // ROW 3
    {
      id: 'renovation-modernization',
      fallbackTitle: 'Renovation and modernization',
      colSpan: 'lg:col-span-5',
      image: '/assets/images/service_insulation_worker.png',
      isTall: false,
    },
    {
      id: 'earthworks',
      fallbackTitle: 'Earthworks',
      colSpan: 'lg:col-span-3',
      image: '/assets/images/service_earthworks_excavators.png',
      isTall: false,
    },
    {
      id: 'metal-structure-production',
      fallbackTitle: 'Metal structure production',
      colSpan: 'lg:col-span-4',
      image: '/assets/images/service_metal_welder.png',
      isTall: false,
    },
  ];

  const handleCardClick = (serviceId: string) => {
    const found = SERVICES_DATA.find((s) => s.id === serviceId);
    if (found) {
      setActiveModalService(found);
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#182239] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Licensed Capabilities · 8 Disciplines</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight text-balance">
              {t.servicesHeading}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mt-3 font-normal max-w-2xl leading-relaxed">
              {t.servicesSub}
            </p>
          </div>

          {/* Action Quote button */}
          <div className="shrink-0">
            <button
              onClick={() => onOpenInquiry('General Technical Inquiry')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#242F4B] hover:bg-amber-500 text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider border border-white/10 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            >
              <span>{t.btnRequestQuote || 'Request Quote'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Exact Bento Grid matching user's reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {bentoServices.map((item, idx) => {
            const dataItem = SERVICES_DATA.find((s) => s.id === item.id);
            const title = dataItem ? dataItem.title : item.fallbackTitle;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`flex flex-col justify-between group cursor-pointer ${item.colSpan}`}
                onClick={() => handleCardClick(item.id)}
              >
                {/* Photo Top Container */}
                <div
                  className={`relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-800 shadow-md ${
                    item.isTall
                      ? 'h-64 sm:h-76 md:h-84 lg:h-[calc(100%-3.6rem)] min-h-[260px]'
                      : 'h-48 sm:h-56 lg:h-52'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark gradient scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182239]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {/* Micro Index Monospace Tag */}
                  <div className="absolute top-3 left-3 bg-[#182239]/80 backdrop-blur-md text-amber-400 text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/10 font-bold shadow-xs">
                    0{idx + 1}
                  </div>
                </div>

                {/* Bottom Title Bar matching screenshot: [ >> ]  [ Title ] */}
                <div className="flex items-center gap-2 mt-2.5">
                  {/* Square >> Button */}
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-[#242F4B] group-hover:bg-amber-500 flex items-center justify-center shrink-0 transition-all duration-300 shadow-md">
                    <ChevronsRight className="w-5 h-5 text-white group-hover:text-slate-950 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  {/* Sleek Slate-Blue Title Banner */}
                  <div className="flex-1 h-10 sm:h-11 rounded-xl sm:rounded-2xl bg-[#364262] group-hover:bg-[#425078] group-hover:border-amber-400/40 border border-white/5 flex items-center justify-center px-3 sm:px-5 transition-all duration-300 shadow-md">
                    <span className="text-xs sm:text-[13px] font-bold text-white text-center tracking-tight leading-snug line-clamp-1 group-hover:text-amber-200 transition-colors">
                      {title}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onInquire={(title) => onOpenInquiry(title)}
      />
    </section>
  );
};
