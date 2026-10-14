import React, { useState } from 'react';
import { MapPin, Calendar, ArrowUpRight, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ProjectItem } from '../types';
import { TRANSLATIONS, PROJECTS_DATA } from '../data/companyData';
import { VisualMedia } from './VisualMedia';
import { ProjectLightbox } from './ProjectLightbox';

interface ProjectGalleryProps {
  currentLang: Language;
  onOpenInquiry: (projectTitle?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ currentLang, onOpenInquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const t = TRANSLATIONS[currentLang];

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Roads & Infrastructure' },
    { id: 'industrial', label: 'Industrial & Plants' },
    { id: 'civil', label: 'Civil & Bridges' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Private Residential' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter);

  const visualTypeMap: Record<string, any> = {
    'socar-carbamide': 'project-socar',
    'holcim-plant-roads': 'project-holcim',
    'baku-steel-sumgait': 'project-baku-steel',
    'araz-river-bridge': 'road-infrastructure',
    'siyazan-grain-complex': 'project-siyazan',
    'alat-free-zone': 'project-alat',
    'caspian-waterfront-commercial': 'project-caspian',
    'mardakan-luxury-villa': 'project-villa',
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F4F5F7] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>Executed Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Azerbaijan Works</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-950 tracking-tight mt-2 text-balance">
              {t.projectsHeading}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 font-normal">
              {t.projectsSub}
            </p>
          </div>

          {/* Interactive filter tabs with motion pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/90 rounded-2xl">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`relative px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveProject(project)}
                className="gold-hover-card bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Visual Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <VisualMedia
                      type={visualTypeMap[project.id] || 'commercial'}
                      className="w-full h-full group-hover:scale-106 transition-transform duration-500 ease-out"
                      title={project.title}
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-amber-800 text-[11px] font-mono px-3 py-1 rounded-md border border-amber-500/20 font-bold shadow-2xs">
                      {project.categoryLabel}
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 text-slate-800 backdrop-blur-sm shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-amber-700" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-800 font-medium">
                      <span className="bg-white/95 px-2.5 py-1 rounded-md text-[11px] text-amber-800 font-mono border border-slate-200 shadow-2xs font-bold backdrop-blur-sm">
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{project.location.split(',')[0]}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>{project.year}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-bold text-slate-950 group-hover:text-amber-800 transition-colors tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 sm:p-6 pt-0 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="text-amber-800 group-hover:underline">
                    Inspect Project Dossier →
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    {project.client.substring(0, 24)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={activeProject}
        allProjects={filteredProjects}
        onClose={() => setActiveProject(null)}
        onNavigate={(newProject) => setActiveProject(newProject)}
        onInquire={(title) => onOpenInquiry(title)}
      />
    </section>
  );
};
