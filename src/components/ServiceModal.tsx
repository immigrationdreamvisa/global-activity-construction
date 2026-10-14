import React from 'react';
import { X, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceItem } from '../types';
import { VisualMedia } from './VisualMedia';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  if (!service) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[90vh]"
      >
        {/* Header visual banner */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-100 shrink-0">
          <VisualMedia
            type={visualTypeMap[service.id] || 'commercial'}
            className="w-full h-full"
            title={service.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent flex items-end p-6 sm:p-7">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-1">
                <span>{service.category}</span>
                <span aria-hidden="true">·</span>
                <span>{service.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight font-heading">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200 backdrop-blur-sm transition-colors cursor-pointer shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-2">
              Discipline Overview
            </h4>
            <p className="text-slate-600 leading-relaxed text-base">
              {service.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-3">
              Technical Capabilities & Scope of Work
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3.5">
            <Shield className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Verified Track Record
              </h5>
              <p className="text-xs sm:text-sm text-amber-950 mt-1">
                {service.scope}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-500 font-medium">
            Complies with AzDTN, European Norms, and ISO 9001:2015.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(service.title);
              }}
              className="gold-button-premium px-6 py-2.5 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-4 h-4 text-amber-200" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
