import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Building, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { VisualMedia } from './VisualMedia';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onClose: () => void;
  onNavigate: (project: ProjectItem) => void;
  onInquire: (title: string) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  allProjects,
  onClose,
  onNavigate,
  onInquire,
}) => {
  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(prevProject);
      if (e.key === 'ArrowRight') onNavigate(nextProject);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, prevProject, nextProject, onClose, onNavigate]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white text-slate-900 w-full max-w-4xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top bar with category & close */}
        <div className="p-4 px-6 border-b border-slate-200 bg-gradient-to-r from-stone-100 via-amber-50/40 to-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-800 font-bold">
            <span>{project.categoryLabel}</span>
            <span>·</span>
            <span>Project {currentIndex + 1} of {allProjects.length}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 transition-colors cursor-pointer shadow-2xs"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Visual Header with Carousel Controls */}
        <div className="relative aspect-[16/9] w-full bg-slate-100 shrink-0">
          <VisualMedia
            type={visualTypeMap[project.id] || 'commercial'}
            className="w-full h-full"
            title={project.title}
          />

          {/* Nav arrows overlay */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              onClick={() => onNavigate(prevProject)}
              className="p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200 backdrop-blur-sm transition-all hover:scale-105 cursor-pointer shadow-md"
              title="Previous project"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              onClick={() => onNavigate(nextProject)}
              className="p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200 backdrop-blur-sm transition-all hover:scale-105 cursor-pointer shadow-md"
              title="Next project"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
            <span className="px-3 py-1 bg-white/95 text-amber-800 text-xs font-mono font-bold rounded-lg border border-amber-200 shadow-md">
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Project Technical Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight font-heading">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{project.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Building className="w-3.5 h-3.5 text-amber-600" />
                <span>Client: {project.client}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{project.year}</span>
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-amber-800">
              Project Description & Execution
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-amber-900 mb-1.5">
              Scope of Works Performed
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.scope}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs text-slate-600 font-mono bg-slate-100 px-2.5 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer with action */}
        <div className="p-5 px-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Use keyboard ← / → arrows to navigate projects.
          </div>
          <button
            onClick={() => {
              onClose();
              onInquire(`Inquiry for project similar to: ${project.title}`);
            }}
            className="gold-button-premium px-6 py-2.5 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <span>Request Proposal for Similar Project</span>
            <ArrowRight className="w-4 h-4 text-amber-200" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
