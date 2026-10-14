import React, { useState } from 'react';

export type VisualMediaType =
  | 'hero-construction'
  | 'road-infrastructure'
  | 'earthworks'
  | 'landscape'
  | 'commercial'
  | 'engineering-bim'
  | 'private-villa'
  | 'renovation-interior'
  | 'metal-structure'
  | 'excavator'
  | 'bulldozer'
  | 'tipper-truck'
  | 'roller'
  | 'paver'
  | 'crane'
  | 'certificate-iso'
  | 'certificate-state'
  | 'certificate-expo'
  | 'project-socar'
  | 'project-holcim'
  | 'project-baku-steel'
  | 'project-araz'
  | 'project-siyazan'
  | 'project-alat'
  | 'project-caspian'
  | 'project-villa'
  | 'news-fifa'
  | 'news-holcim'
  | 'news-bakubuild'
  | 'news-araz';

interface VisualMediaProps {
  type: VisualMediaType | string;
  className?: string;
  title?: string;
}

const PHOTO_MAP: Record<string, { src: string; fallback: string; alt: string }> = {
  'hero-construction': {
    src: '/assets/images/bg_construction_2.jpg',
    fallback: '/assets/images/hero_real_construction.jpg',
    alt: 'Civil Infrastructure Construction Site Superstructure',
  },
  'road-infrastructure': {
    src: '/assets/images/service_highway_asphalt.jpg',
    fallback: '/assets/images/infrastructure_bridge.jpg',
    alt: 'High-Axle Highway Asphalt Paving and Civil Infrastructure',
  },
  'earthworks': {
    src: '/assets/images/service_earthmoving_quarry.jpg',
    fallback: '/assets/images/bg_construction_3.jpg',
    alt: 'Mass Earthworks Cut and Fill Excavation Quarry',
  },
  'landscape': {
    src: '/assets/images/project_luxury_villa.jpg',
    fallback: '/assets/images/building_residential.jpg',
    alt: 'Modern Landscape Architecture and Urban Infrastructure',
  },
  'commercial': {
    src: '/assets/images/building_commercial.jpg',
    fallback: '/assets/images/real_service_1.jpg',
    alt: 'Turnkey Commercial Business Center Construction',
  },
  'engineering-bim': {
    src: '/assets/images/service_bim_engineering.jpg',
    fallback: '/assets/images/bg_construction_3.jpg',
    alt: '3D BIM Digital Architectural Engineering',
  },
  'private-villa': {
    src: '/assets/images/project_luxury_villa.jpg',
    fallback: '/assets/images/building_residential.jpg',
    alt: 'Premium Private Residential Architecture & Villa',
  },
  'renovation-interior': {
    src: '/assets/images/real_interior_repair.jpg',
    fallback: '/assets/images/building_residential.jpg',
    alt: 'Architectural Modernization and Executive Interior Refurbishment',
  },
  'metal-structure': {
    src: '/assets/images/real_welder_steel.jpg',
    fallback: '/assets/images/building_skyscraper.jpg',
    alt: 'Industrial Structural Steel Welding and Truss Fabrication',
  },

  // Machinery fleet photos
  'excavator': {
    src: '/assets/images/vehicle_excavator.jpg',
    fallback: '/assets/images/service_earthmoving_quarry.jpg',
    alt: 'CAT Heavy Crawler Hydraulic Excavator',
  },
  'bulldozer': {
    src: '/assets/images/vehicle_bulldozer.jpg',
    fallback: '/assets/images/service_earthmoving_quarry.jpg',
    alt: 'Komatsu Heavy Crawler Bulldozer with GPS Laser Guidance',
  },
  'tipper-truck': {
    src: '/assets/images/vehicle_tipper_truck.jpg',
    fallback: '/assets/images/real_heavy_equipment.jpg',
    alt: 'Mercedes-Benz Heavy Multi-Axle Dump Truck',
  },
  'roller': {
    src: '/assets/images/vehicle_roller.jpg',
    fallback: '/assets/images/service_highway_asphalt.jpg',
    alt: 'Hamm Vibratory Soil and Asphalt Compactor Roller',
  },
  'paver': {
    src: '/assets/images/vehicle_paver.jpg',
    fallback: '/assets/images/service_highway_asphalt.jpg',
    alt: 'Vögele Super Tracked Asphalt Highway Paver',
  },
  'crane': {
    src: '/assets/images/vehicle_crane.jpg',
    fallback: '/assets/images/building_skyscraper.jpg',
    alt: 'Liebherr All-Terrain Mobile Heavy Lifting Crane',
  },

  // Key Infrastructure Projects
  'project-socar': {
    src: '/assets/images/building_skyscraper.jpg',
    fallback: '/assets/images/real_service_1.jpg',
    alt: 'SOCAR Carbamide Complex Civil Foundation',
  },
  'project-holcim': {
    src: '/assets/images/service_highway_asphalt.jpg',
    fallback: '/assets/images/bg_construction_2.jpg',
    alt: 'Holcim Cement Plant Heavy Haulage Road Network',
  },
  'project-baku-steel': {
    src: '/assets/images/real_welder_steel.jpg',
    fallback: '/assets/images/building_commercial.jpg',
    alt: 'Baku Steel Company Rolling Mill Foundation Engineering',
  },
  'project-araz': {
    src: '/assets/images/infrastructure_bridge.jpg',
    fallback: '/assets/images/service_highway_asphalt.jpg',
    alt: 'Araz River Dual-Spur Civil Bridge Crossings',
  },
  'project-siyazan': {
    src: '/assets/images/service_earthmoving_quarry.jpg',
    fallback: '/assets/images/bg_construction_3.jpg',
    alt: 'Siyazan Agro-Industrial Complex Mass Earthworks',
  },
  'project-alat': {
    src: '/assets/images/real_heavy_equipment.jpg',
    fallback: '/assets/images/building_commercial.jpg',
    alt: 'Alat Free Economic Zone Heavy Logistics Center',
  },
  'project-caspian': {
    src: '/assets/images/building_commercial.jpg',
    fallback: '/assets/images/project_luxury_villa.jpg',
    alt: 'Caspian Waterfront Prime Commercial Center',
  },
  'project-villa': {
    src: '/assets/images/project_luxury_villa.jpg',
    fallback: '/assets/images/building_residential.jpg',
    alt: 'Mardakan Luxury Contemporary Architectural Villa',
  },

  // News announcements
  'news-fifa': {
    src: '/assets/images/building_commercial.jpg',
    fallback: '/assets/images/bg_construction_2.jpg',
    alt: 'Baku Olympic Stadium Civil Works',
  },
  'news-holcim': {
    src: '/assets/images/service_highway_asphalt.jpg',
    fallback: '/assets/images/infrastructure_bridge.jpg',
    alt: 'Holcim Paving Commissioning',
  },
  'news-bakubuild': {
    src: '/assets/images/service_bim_engineering.jpg',
    fallback: '/assets/images/bg_construction_3.jpg',
    alt: 'BakuBuild International Expo Exhibition',
  },
  'news-araz': {
    src: '/assets/images/infrastructure_bridge.jpg',
    fallback: '/assets/images/service_highway_asphalt.jpg',
    alt: 'Araz River Civil Milestone',
  },
};

export const VisualMedia: React.FC<VisualMediaProps> = ({ type, className = '', title }) => {
  const [imgError, setImgError] = useState(false);
  const [useSecondaryFallback, setUseSecondaryFallback] = useState(false);

  // Special Certificate Case
  if (type === 'certificate-iso' || type === 'certificate-state' || type === 'certificate-expo') {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-amber-50/90 via-stone-50 to-amber-100/60 p-6 flex flex-col justify-between border border-amber-200/90 ${className}`}>
        {/* Animated Security Guilloche Borders */}
        <div className="absolute inset-2 border-2 border-amber-600/40 rounded-sm pointer-events-none" />
        <div className="absolute inset-3.5 border border-amber-500/20 rounded-sm pointer-events-none" />
        
        {/* Background watermark seal */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="w-56 h-56 rounded-full border-8 border-amber-900 flex items-center justify-center font-heading font-black text-6xl">
            GA
          </div>
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <div className="w-11 h-11 rounded-full border-2 border-amber-600 bg-white/90 shadow-xs flex items-center justify-center font-heading font-black text-amber-700 text-xs">
            GA
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-amber-800/90 block">OFFICIAL ACCREDITATION</span>
            <span className="text-xs font-heading font-bold text-slate-800">AZERBAIJAN REPUBLIC</span>
          </div>
        </div>

        <div className="relative z-10 my-auto text-center py-4">
          <div className="inline-block px-3 py-1 bg-amber-100/90 text-amber-900 text-[11px] font-mono rounded font-bold mb-2 border border-amber-300/60 shadow-2xs">
            {type === 'certificate-iso' ? 'ISO CERTIFIED STANDARD' : type === 'certificate-state' ? 'STATE CONSTRUCTION LICENSE' : 'HONORARY DIPLOMA'}
          </div>
          <h4 className="text-base font-heading font-bold text-slate-900 tracking-tight">{title || 'Official Certification'}</h4>
          <p className="text-xs text-slate-600 font-medium mt-1">Global Activity Construction MMC</p>
        </div>

        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-amber-200/80">
          <div className="text-[10px] text-slate-500 font-mono font-bold">
            VALIDITY: 2024–2027
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-500/15 border-2 border-amber-500/40 flex items-center justify-center text-amber-800 text-[9px] font-bold shadow-2xs">
            VERIFIED
          </div>
        </div>
      </div>
    );
  }

  const mediaInfo = PHOTO_MAP[type] || {
    src: '/assets/images/bg_construction_2.jpg',
    fallback: '/assets/images/real_service_1.jpg',
    alt: title || 'Global Activity Construction',
  };

  const currentSrc = !imgError 
    ? mediaInfo.src 
    : !useSecondaryFallback 
      ? mediaInfo.fallback 
      : '/assets/images/bg_construction_2.jpg';

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-900 group ${className}`}>
      {/* High-Resolution Real Construction Image with Zoom & Hover Lighting */}
      <img
        src={currentSrc}
        alt={title || mediaInfo.alt}
        loading="lazy"
        onError={() => {
          if (!imgError) {
            setImgError(true);
          } else if (!useSecondaryFallback) {
            setUseSecondaryFallback(true);
          }
        }}
        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-[0.88] contrast-[1.04]"
      />

      {/* Luminous Shimmer Sheen Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />

      {/* Subtle CAD Grid Watermark Accent */}
      <div className="absolute inset-0 cad-grid-pattern opacity-10 pointer-events-none" />
    </div>
  );
};
