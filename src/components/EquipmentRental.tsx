import React, { useState } from 'react';
import { Truck, CheckCircle2, ShieldCheck, Clock, Gauge, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, EquipmentItem } from '../types';
import { TRANSLATIONS, EQUIPMENT_FLEET } from '../data/companyData';
import { VisualMedia } from './VisualMedia';
import { EquipmentModal } from './EquipmentModal';

interface EquipmentRentalProps {
  currentLang: Language;
  onRentalSuccess: (refId: string) => void;
}

export const EquipmentRental: React.FC<EquipmentRentalProps> = ({ currentLang, onRentalSuccess }) => {
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);

  const t = TRANSLATIONS[currentLang];

  const visualMap: Record<string, any> = {
    'cat-336-excavator': 'excavator',
    'komatsu-d65-bulldozer': 'bulldozer',
    'mercedes-actros-tipper': 'tipper-truck',
    'hamm-3411-roller': 'roller',
    'vogele-super-paver': 'paver',
    'liebherr-ltm-crane': 'crane',
  };

  return (
    <section id="equipment" className="relative py-20 lg:py-28 bg-[#F4F6FA] text-slate-900 border-b border-slate-200/90 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 ambient-gold-glow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Truck className="w-4 h-4 text-amber-600" />
            <span>Heavy Machinery Fleet</span>
            <span aria-hidden="true">·</span>
            <span>Azerbaijan Deployment</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-950 tracking-tight mt-2 text-balance">
            {t.rentalHeading}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            {t.rentalSub}
          </p>
        </div>

        {/* 3 Core Content Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-slate-900 tracking-tight">Wide Range of Equipment</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                Hydraulic excavators, 3D laser-guided dozers, multi-axle tippers, tandem rollers, and asphalt pavers from world leaders (CAT, Komatsu, Mercedes, Hamm, Vögele).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-slate-900 tracking-tight">Flexible Rental Terms</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                Shift-based operational contracts, monthly projects, and long-term infrastructure leases with transparent pricing and maintenance support.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4 hover:border-amber-400 hover:shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-slate-900 tracking-tight">Accuracy and Efficiency</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                Equipped with satellite 3D GPS leveling and operated by certified heavy machinery operators ensuring high output and zero downtime.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Machinery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EQUIPMENT_FLEET.map((machine, idx) => (
            <motion.div
              key={machine.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="gold-hover-card bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg flex flex-col justify-between group shine-hover-effect"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <VisualMedia
                    type={visualMap[machine.id] || 'excavator'}
                    className="w-full h-full"
                    title={machine.name}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-amber-800 text-[11px] font-mono px-3 py-1 rounded-md border border-amber-200 font-bold shadow-xs">
                    {machine.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-700 text-[10px] font-mono px-2.5 py-0.5 rounded-md border border-slate-200 shadow-2xs font-semibold">
                    {machine.availability}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-amber-700 font-bold uppercase tracking-wider block">
                      {machine.model}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-slate-950 group-hover:text-amber-800 transition-colors mt-0.5">
                      {machine.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {machine.description}
                  </p>

                  {/* Technical Specs Table */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <div className="bg-amber-50/60 px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider text-amber-800 border-b border-slate-200 font-bold">
                      Technical Specifications
                    </div>
                    <div className="divide-y divide-slate-100 bg-white">
                      {machine.specs.map((spec, sidx) => (
                        <div key={sidx} className="px-3.5 py-2 flex items-center justify-between">
                          <span className="text-slate-500">{spec.label}</span>
                          <span className="font-mono font-bold text-slate-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedEquipment(machine)}
                  className="gold-button-premium w-full py-3.5 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Inquire About Rental</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rental Modal */}
      <EquipmentModal
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
        onSuccess={onRentalSuccess}
      />
    </section>
  );
};
