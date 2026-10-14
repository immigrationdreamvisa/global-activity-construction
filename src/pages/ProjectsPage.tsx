import React, { useState } from 'react';
import { Search, MapPin, Calendar, Building, ArrowUpRight, Filter, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ProjectItem } from '../types';
import { TRANSLATIONS, PROJECTS_DATA } from '../data/companyData';
import { VisualMedia } from '../components/VisualMedia';
import { ProjectLightbox } from '../components/ProjectLightbox';

interface ProjectsPageProps {
  currentLang: Language;
  onNavigatePage: (page: string) => void;
  onOpenInquiry: (projectTitle?: string) => void;
  initialFilter?: string | null;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  currentLang,
  onNavigatePage,
  onOpenInquiry,
  initialFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilter || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Roads & Infrastructure' },
    { id: 'industrial', label: 'Industrial Facilities' },
    { id: 'civil', label: 'Civil & Bridges' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Private Residential' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Page Hero Header */}
      <section className="relative py-24 sm:py-32 bg-[#FAFBFD] text-slate-900 overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/bg_construction_2.jpg"
            alt="Global Activity Construction Projects"
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
              <span>PROJECTS PORTFOLIO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-slate-950 leading-tight">
              Executed Landmarks.{' '}
              <span className="gold-gradient-text-light inline-block">National Infrastructure.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Inspect our delivered portfolio of strategic road infrastructure, heavy industrial machine foundations, civil bridge crossings, and turnkey commercial projects in Azerbaijan.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar Strip */}
      <section className="sticky top-[75px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, client, or keyword..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-heading font-bold text-slate-800">No matching projects found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search query or switching to All Projects.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="gold-hover-card bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <VisualMedia
                      type={visualTypeMap[project.id] || 'commercial'}
                      className="w-full h-full group-hover:scale-106 transition-transform duration-500 ease-out"
                      title={project.title}
                    />
                    <div className="absolute top-3 left-3 bg-white/95 text-amber-800 text-[11px] font-mono px-3 py-1 rounded-md border border-amber-500/20 font-bold shadow-2xs backdrop-blur-sm">
                      {project.categoryLabel}
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 text-slate-800 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-amber-700" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="bg-white/95 px-2.5 py-1 rounded-md text-[11px] text-amber-800 font-mono border border-slate-200 inline-block shadow-2xs backdrop-blur-sm font-bold">
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{project.location.split(',')[0]}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>{project.year}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-amber-800 transition-colors tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs font-semibold text-slate-400 border-t border-slate-100 pt-3">
                  <span className="text-amber-800 group-hover:underline">
                    Inspect Technical Dossier →
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    {project.client.substring(0, 24)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={activeProject}
        allProjects={filteredProjects}
        onClose={() => setActiveProject(null)}
        onNavigate={(newProject) => setActiveProject(newProject)}
        onInquire={(title) => onOpenInquiry(title)}
      />
    </div>
  );
};
