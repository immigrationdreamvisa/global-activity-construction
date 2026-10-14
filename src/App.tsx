import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { ScrollToTop } from './components/ScrollToTop';
import { CheckCircle2, X } from 'lucide-react';

// Dedicated Internal Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('gac_language');
    if (saved === 'az' || saved === 'ru' || saved === 'en') return saved;
    return 'en';
  });

  // Current active page state
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'about', 'services', 'projects', 'equipment', 'news', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [activeProjectFilter, setActiveProjectFilter] = useState<string | null>(null);
  const [presetService, setPresetService] = useState<string>('Road and Infrastructure Construction');
  const [rentalSuccessRef, setRentalSuccessRef] = useState<string | null>(null);

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'projects', 'equipment', 'news', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('gac_language', lang);
  };

  const handleNavigatePage = (page: string, subParam?: string) => {
    setCurrentPage(page);

    if (page === 'services' && subParam) {
      setActiveServiceId(subParam);
    } else if (page === 'services') {
      setActiveServiceId(null);
    }

    if (page === 'projects' && subParam) {
      setActiveProjectFilter(subParam);
    } else if (page === 'projects') {
      setActiveProjectFilter('all');
    }

    if (page === 'contact' && subParam) {
      setPresetService(subParam);
    }

    // Update URL hash cleanly
    if (page === 'home') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
      }
    } else {
      window.location.hash = page;
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setPresetService(serviceName);
    }
    handleNavigatePage('contact', serviceName);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 font-sans antialiased selection:bg-amber-600 selection:text-white flex flex-col">
      {/* Toast Alert for Equipment Rental Success with Motion */}
      <AnimatePresence>
        {rentalSuccessRef && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-4 sm:right-8 z-50 max-w-md bg-white text-slate-900 p-4.5 rounded-2xl shadow-2xl border border-emerald-500/50 flex items-start gap-3.5 backdrop-blur-xl"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-mono font-bold uppercase text-emerald-800">
                RENTAL INQUIRY DISPATCHED
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Machinery reservation registered under reference{' '}
                <strong className="text-amber-700 font-mono font-bold">{rentalSuccessRef}</strong>. Our
                logistics dispatcher will call you shortly.
              </p>
            </div>
            <button
              onClick={() => setRentalSuccessRef(null)}
              className="text-slate-400 hover:text-slate-700 p-1 ml-auto cursor-pointer"
              aria-label="Dismiss message"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corporate Responsive Sticky Header */}
      <Header
        currentLang={currentLang}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onLanguageChange={handleLanguageChange}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Multi-Page Dynamic View */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage
                currentLang={currentLang}
                onNavigatePage={handleNavigatePage}
                onOpenInquiry={handleOpenInquiry}
                onRentalSuccess={(refId) => setRentalSuccessRef(refId)}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                currentLang={currentLang}
                onNavigatePage={handleNavigatePage}
                onOpenInquiry={handleOpenInquiry}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                currentLang={currentLang}
                onNavigatePage={handleNavigatePage}
                onOpenInquiry={handleOpenInquiry}
                initialServiceId={activeServiceId}
              />
            )}

            {currentPage === 'projects' && (
              <ProjectsPage
                currentLang={currentLang}
                onNavigatePage={handleNavigatePage}
                onOpenInquiry={handleOpenInquiry}
                initialFilter={activeProjectFilter}
              />
            )}

            {currentPage === 'equipment' && (
              <EquipmentPage
                currentLang={currentLang}
                onNavigatePage={handleNavigatePage}
                onRentalSuccess={(refId) => setRentalSuccessRef(refId)}
              />
            )}

            {currentPage === 'news' && (
              <NewsPage
                currentLang={currentLang}
                onNavigatePage={handleNavigatePage}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                currentLang={currentLang}
                onNavigatePage={handleNavigatePage}
                presetService={presetService}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footer with Multi-Page Links */}
      <Footer
        currentLang={currentLang}
        onOpenInquiry={handleOpenInquiry}
        onNavigatePage={handleNavigatePage}
      />

      {/* Persistent Cookie Consent */}
      <CookieBanner currentLang={currentLang} />

      {/* Floating Scroll to Top button matching screenshot */}
      <ScrollToTop />
    </div>
  );
}
