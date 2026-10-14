import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Facebook, Instagram, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { COMPANY_CONTACT, TRANSLATIONS, SERVICES_DATA } from '../data/companyData';

interface HeaderProps {
  currentLang: Language;
  currentPage: string;
  onNavigatePage: (page: string, subParam?: string) => void;
  onLanguageChange: (lang: Language) => void;
  onOpenInquiry: (defaultService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  currentPage,
  onNavigatePage,
  onLanguageChange,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop Dropdown States
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Mobile Accordion States
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

  const servicesTimeoutRef = useRef<number | null>(null);
  const projectsTimeoutRef = useRef<number | null>(null);
  const langRef = useRef<HTMLDivElement | null>(null);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageLabels: Record<Language, { label: string; code: string }> = {
    en: { label: 'English', code: 'EN' },
    az: { label: 'Azərbaycan', code: 'AZ' },
    ru: { label: 'Русский', code: 'RU' },
  };

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'services', label: t.navServices, hasDropdown: true },
    { id: 'projects', label: t.navProjects, hasProjectsDropdown: true },
    { id: 'equipment', label: t.navEquipment },
    { id: 'news', label: t.navNews },
  ];

  const projectCategories = [
    { id: 'all', label: 'All Executed Works', count: '50+' },
    { id: 'infrastructure', label: 'Roads & Infrastructure', count: '18' },
    { id: 'industrial', label: 'Industrial & Chemical', count: '12' },
    { id: 'civil', label: 'Civil & Border Crossings', count: '8' },
    { id: 'commercial', label: 'Commercial & Mixed-Use', count: '14' },
  ];

  // Debounce hover handlers for smooth dropdown bridges
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = window.setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 180);
  };

  const handleProjectsMouseEnter = () => {
    if (projectsTimeoutRef.current) clearTimeout(projectsTimeoutRef.current);
    setIsProjectsDropdownOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    projectsTimeoutRef.current = window.setTimeout(() => {
      setIsProjectsDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#162035]/95 backdrop-blur-xl border-b border-white/10 text-white ${
          isScrolled ? 'shadow-2xl' : 'shadow-md'
        }`}
      >
        <div className="w-full flex items-center justify-between h-14 sm:h-16">
          {/* 1. Left: Exact High-Definition Brand Logo Block matching reference screenshot */}
          <button
            onClick={() => onNavigatePage('home')}
            className="h-full bg-[#18233C] hover:bg-[#1E2D4E] transition-colors px-6 sm:px-8 lg:px-9 flex flex-col justify-center items-center text-center shrink-0 cursor-pointer border-r border-white/10 select-none group"
            title="Global Activity Construction Company"
          >
            <span
              className="text-base sm:text-lg lg:text-[19px] font-medium tracking-[0.18em] text-white uppercase leading-none block whitespace-nowrap transition-transform duration-200 group-hover:scale-[1.01]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              GLOBAL ACTIVITY
            </span>
            <span
              className="text-[9px] sm:text-[9.5px] lg:text-[10px] tracking-[0.26em] text-slate-300 uppercase font-normal mt-1.5 leading-none block whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              CONSTRUCTION COMPANY
            </span>
          </button>

          {/* 2. Middle: Full Navigation Menu ("keep all nav") */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 text-xs xl:text-sm font-semibold px-2 xl:px-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const linkTextColor = isActive
                ? 'text-amber-400 font-bold'
                : 'text-slate-200 hover:text-amber-400';

              /* Services Dropdown (Up/Down) */
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative py-4"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onNavigatePage('services')}
                        className={`transition-colors whitespace-nowrap cursor-pointer ${linkTextColor}`}
                      >
                        {item.label}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                        }}
                        className="p-0.5 rounded hover:bg-white/10 transition-colors cursor-pointer text-slate-400 hover:text-amber-400"
                        aria-label="Toggle Services menu"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isServicesDropdownOpen ? 'rotate-180 text-amber-400' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 sm:w-8 h-[2.5px] bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.16 }}
                          className="absolute top-full -left-4 w-92 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 text-slate-900 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5"
                        >
                          <div className="px-3.5 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                              Licensed Disciplines
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">8 Categories</span>
                          </div>

                          <div className="space-y-0.5 max-h-[60vh] overflow-y-auto">
                            {SERVICES_DATA.map((service, index) => (
                              <button
                                key={service.id}
                                onClick={() => {
                                  setIsServicesDropdownOpen(false);
                                  onNavigatePage('services', service.id);
                                }}
                                className="w-full text-left px-3.5 py-2.5 text-xs rounded-xl text-slate-700 hover:bg-amber-50/70 hover:text-amber-900 transition-all flex items-center justify-between group cursor-pointer"
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="font-mono text-[10px] text-amber-700 font-bold">
                                    0{index + 1}
                                  </span>
                                  <span className="font-semibold group-hover:translate-x-0.5 transition-transform line-clamp-1">
                                    {service.title}
                                  </span>
                                </div>
                                <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">
                                  {service.badge}
                                </span>
                              </button>
                            ))}
                          </div>

                          <div className="pt-2 mt-1 border-t border-slate-100 px-3">
                            <button
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                onNavigatePage('services');
                              }}
                              className="w-full py-2 text-center text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline flex items-center justify-center gap-1 cursor-pointer"
                            >
                              <span>View All 8 Disciplines</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              /* Projects Dropdown (Up/Down) */
              if (item.hasProjectsDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative py-4"
                    onMouseEnter={handleProjectsMouseEnter}
                    onMouseLeave={handleProjectsMouseLeave}
                  >
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onNavigatePage('projects')}
                        className={`transition-colors whitespace-nowrap cursor-pointer ${linkTextColor}`}
                      >
                        {item.label}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
                        }}
                        className="p-0.5 rounded hover:bg-white/10 transition-colors cursor-pointer text-slate-400 hover:text-amber-400"
                        aria-label="Toggle Projects menu"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isProjectsDropdownOpen ? 'rotate-180 text-amber-400' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 sm:w-8 h-[2.5px] bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    <AnimatePresence>
                      {isProjectsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.16 }}
                          className="absolute top-full -left-4 w-76 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 text-slate-900 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5"
                        >
                          <div className="px-3 py-1.5 border-b border-slate-100 mb-1 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                              Portfolio Sectors
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">50+ Works</span>
                          </div>

                          {projectCategories.map((cat) => (
                              <button
                              key={cat.id}
                              onClick={() => {
                                setIsProjectsDropdownOpen(false);
                                onNavigatePage('projects', cat.id);
                              }}
                              className="w-full text-left px-3 py-2 text-xs rounded-xl text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors font-medium cursor-pointer flex items-center justify-between group"
                            >
                              <span className="group-hover:translate-x-0.5 transition-transform">
                                {cat.label}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">
                                {cat.count}
                              </span>
                            </button>
                          ))}

                          <div className="pt-2 mt-1 border-t border-slate-100 px-3">
                            <button
                              onClick={() => {
                                setIsProjectsDropdownOpen(false);
                                onNavigatePage('projects');
                              }}
                              className="w-full py-2 text-center text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline flex items-center justify-center gap-1 cursor-pointer"
                            >
                              <span>Browse Project Gallery</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              /* Standard Nav Item */
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigatePage(item.id)}
                  className={`transition-colors whitespace-nowrap relative py-4 cursor-pointer ${linkTextColor}`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 sm:w-8 h-[2.5px] bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. Right: Exact Pill Bar + Language Switcher matching reference screenshot */}
          <div className="flex items-center gap-3 pr-4 sm:pr-8 lg:pr-10 shrink-0 py-2.5">
            {/* The Integrated Pill Bar: [ (f) (ig) +994 50 233 55 45 | Contact us ] */}
            <div className="rounded-full bg-[#6B5F5A]/80 hover:bg-[#786B65]/90 backdrop-blur-md border border-white/20 text-white flex items-center px-4 py-2 gap-3.5 shadow-lg transition-all">
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 rounded-full bg-white text-[#6B5F5A] hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-3 h-3 fill-current" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-5 h-5 rounded-full bg-white text-[#6B5F5A] hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-3 h-3" />
                </a>
              </div>

              {/* Phone Number */}
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="font-bold text-xs sm:text-sm text-white hover:text-amber-300 tracking-tight whitespace-nowrap transition-colors"
                title="Call Global Activity Construction"
              >
                {COMPANY_CONTACT.phone1}
              </a>

              {/* Vertical Divider */}
              <span className="w-px h-4.5 bg-white/40 shrink-0" />

              {/* Contact us Button */}
              <button
                onClick={() => onNavigatePage('contact')}
                className="font-bold text-xs sm:text-sm text-white hover:text-amber-300 whitespace-nowrap cursor-pointer transition-colors"
              >
                Contact us
              </button>
            </div>

            {/* Language Switcher Circle matching screenshot */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#6B5F5A]/80 hover:bg-[#786B65]/90 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center justify-center transition-all shadow-lg cursor-pointer"
                aria-expanded={isLangDropdownOpen}
                title="Language"
              >
                <span>{languageLabels[currentLang].code}</span>
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 py-1.5 z-50 backdrop-blur-xl"
                  >
                    {(['en', 'az', 'ru'] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          onLanguageChange(lang);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-amber-50 hover:text-amber-800 transition-colors cursor-pointer ${
                          currentLang === lang ? 'font-bold text-amber-800 bg-amber-50/70' : 'text-slate-700'
                        }`}
                      >
                        <span>{languageLabels[lang].label}</span>
                        <span className="text-[10px] uppercase font-mono text-slate-400">{lang}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile-only toggle for small screens where nav cannot fit */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (for small mobile screens only) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-slate-900/60 backdrop-blur-md lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#162035] border-b border-white/10 p-6 max-h-[85vh] overflow-y-auto space-y-5 shadow-2xl text-white"
            >
              <div className="flex flex-col space-y-1 font-semibold text-slate-200 text-base">
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.id} className="border-b border-white/10 py-2">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              onNavigatePage('services');
                            }}
                            className="text-left py-1 hover:text-amber-400 cursor-pointer text-white"
                          >
                            <span>{item.label}</span>
                          </button>
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="p-2 rounded-lg hover:bg-white/10 text-slate-400 cursor-pointer"
                            aria-label="Expand services"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isMobileServicesOpen ? 'rotate-180 text-amber-400' : ''
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-3 pt-2 space-y-1.5"
                            >
                              {SERVICES_DATA.map((service, index) => (
                                <button
                                  key={service.id}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onNavigatePage('services', service.id);
                                  }}
                                  className="w-full text-left py-1.5 text-xs text-slate-300 hover:text-amber-400 flex items-center justify-between"
                                >
                                  <span>0{index + 1}. {service.title}</span>
                                  <span className="text-[10px] font-mono text-slate-400">{service.badge}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (item.hasProjectsDropdown) {
                    return (
                      <div key={item.id} className="border-b border-white/10 py-2">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              onNavigatePage('projects');
                            }}
                            className="text-left py-1 hover:text-amber-400 cursor-pointer text-white"
                          >
                            <span>{item.label}</span>
                          </button>
                          <button
                            onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                            className="p-2 rounded-lg hover:bg-white/10 text-slate-400 cursor-pointer"
                            aria-label="Expand projects"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isMobileProjectsOpen ? 'rotate-180 text-amber-400' : ''
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {isMobileProjectsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-3 pt-2 space-y-1.5"
                            >
                              {projectCategories.map((cat) => (
                                <button
                                  key={cat.id}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onNavigatePage('projects', cat.id);
                                  }}
                                  className="w-full text-left py-1.5 text-xs text-slate-300 hover:text-amber-400 flex items-center justify-between"
                                >
                                  <span>{cat.label}</span>
                                  <span className="text-[10px] font-mono text-slate-400">{cat.count}</span>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onNavigatePage(item.id);
                      }}
                      className={`text-left py-2 border-b border-white/10 hover:text-amber-400 flex items-center justify-between cursor-pointer ${
                        currentPage === item.id ? 'text-amber-400 font-bold' : ''
                      }`}
                    >
                      <span>{item.label}</span>
                      {currentPage === item.id && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Language Selection in Mobile Drawer */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Language / Dil / Язык
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(['en', 'az', 'ru'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        onLanguageChange(lang);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-colors cursor-pointer ${
                        currentLang === lang
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {languageLabels[lang].label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
