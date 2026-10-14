import React, { useState } from 'react';
import { Truck, CheckCircle2, ShieldCheck, Clock, Gauge, ArrowRight, Wrench, Shield, Check } from 'lucide-react';
import { Language, EquipmentItem } from '../types';
import { TRANSLATIONS, EQUIPMENT_FLEET } from '../data/companyData';
import { VisualMedia } from '../components/VisualMedia';
import { EquipmentModal } from '../components/EquipmentModal';

interface EquipmentPageProps {
  currentLang: Language;
  onNavigatePage: (page: string) => void;
  onRentalSuccess: (refId: string) => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({
  currentLang,
  onNavigatePage,
  onRentalSuccess,
}) => {
  const [selectedMachine, setSelectedMachine] = useState<EquipmentItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const visualMap: Record<string, any> = {
    'cat-336-excavator': 'excavator',
    'komatsu-d65-bulldozer': 'bulldozer',
    'mercedes-actros-tipper': 'tipper-truck',
    'hamm-3411-roller': 'roller',
    'vogele-super-paver': 'paver',
    'liebherr-ltm-crane': 'crane',
  };

  const categories = [
    { id: 'all', label: 'All Fleet' },
    { id: 'Excavation', label: 'Excavators & Earthmoving' },
    { id: 'Grading', label: 'Bulldozers & Grading' },
    { id: 'Haulage', label: 'Dump Trucks & Haulage' },
    { id: 'Compaction', label: 'Soil Compactors & Rollers' },
    { id: 'Road Paving', label: 'Asphalt Pavers' },
    { id: 'Lifting', label: 'Mobile Cranes' },
  ];

  const filteredFleet = EQUIPMENT_FLEET.filter((m) => {
    if (activeCategory === 'all') return true;
    return m.category.includes(activeCategory);
  });

  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Page Hero Header */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/real_heavy_equipment.jpg"
            alt="Global Activity Machinery Fleet"
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
              <span>EQUIPMENT RENTAL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-slate-950 leading-tight">
              Heavy Machinery Fleet.{' '}
              <span className="gold-gradient-text-light inline-block">Modern & GPS-Guided.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Heavy hydraulic excavators, GPS-guided crawler bulldozers, multi-axle tippers, and asphalt paving trains available for short-term and long-term project mobilization in Azerbaijan.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Filter Bar */}
      <section className="sticky top-[75px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Cards Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((machine) => (
            <div
              key={machine.id}
              className="gold-hover-card bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <VisualMedia
                    type={visualMap[machine.id] || 'excavator'}
                    className="w-full h-full group-hover:scale-106 transition-transform duration-500 ease-out"
                    title={machine.name}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-amber-800 text-[11px] font-mono px-3 py-1 rounded-md border border-amber-500/20 font-bold shadow-2xs backdrop-blur-sm">
                    {machine.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-700 text-[10px] font-mono px-2.5 py-0.5 rounded-md border border-slate-200 shadow-2xs backdrop-blur-sm">
                    {machine.availability}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider block">
                      {machine.model}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-slate-950 group-hover:text-amber-800 transition-colors mt-0.5">
                      {machine.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {machine.description}
                  </p>

                  {/* Specs Table */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <div className="bg-slate-50 px-3.5 py-2 font-mono text-[10px] uppercase tracking-wider text-amber-800 font-bold border-b border-slate-200">
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

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedMachine(machine)}
                  className="gold-button-premium w-full py-3.5 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Inquire About Rental</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rental Inclusions & Terms */}
      <section className="py-20 lg:py-24 bg-[#F4F6FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block">
              RENTAL CONDITIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-950 tracking-tight mt-1.5">
              Included with Every Machinery Lease
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <Check className="w-6 h-6 text-emerald-600" />
              <h3 className="text-base font-heading font-bold text-slate-950">Certified Operators Available</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Machinery can be dispatched with our seasoned, certified heavy equipment operators with 10+ years experience on complex civil works.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <Check className="w-6 h-6 text-emerald-600" />
              <h3 className="text-base font-heading font-bold text-slate-950">24/7 Mobile Mechanic Dispatch</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Emergency mobile service vans equipped with hydraulic hoses, filters, and diagnostic software guarantee minimum on-site downtime.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <Check className="w-6 h-6 text-emerald-600" />
              <h3 className="text-base font-heading font-bold text-slate-950">Pre-Deployment Calibration</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                All 3D GPS guidance and laser grade receivers are bench-tested and calibrated before transport to your project worksite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <EquipmentModal
        equipment={selectedMachine}
        onClose={() => setSelectedMachine(null)}
        onSuccess={onRentalSuccess}
      />
    </div>
  );
};
