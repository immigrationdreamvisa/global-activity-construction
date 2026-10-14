import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ChevronRight, Search, Share2, Mail } from 'lucide-react';
import { Language, NewsItem } from '../types';
import { TRANSLATIONS, NEWS_DATA, COMPANY_CONTACT } from '../data/companyData';
import { VisualMedia } from '../components/VisualMedia';
import { NewsModal } from '../components/NewsModal';

interface NewsPageProps {
  currentLang: Language;
  onNavigatePage: (page: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ currentLang, onNavigatePage }) => {
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const visualMap: Record<string, any> = {
    'fifa-agreement': 'commercial',
    'holcim-completion': 'road-infrastructure',
    'bakubuild-participation': 'commercial',
    'araz-bridge-progress': 'road-infrastructure',
  };

  const filteredNews = NEWS_DATA.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Page Hero Header */}
      <section className="relative py-24 sm:py-32 bg-[#FAFBFD] text-slate-900 overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/bg_construction_2.jpg"
            alt="Global Activity Press & Media"
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
              <span>NEWS & DISPATCHES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-slate-950 leading-tight">
              Company News.{' '}
              <span className="gold-gradient-text-light inline-block">Milestones & Press.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Official press announcements, milestone handovers, international partnerships, and engineering innovations from Global Activity Construction.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar Strip */}
      <section className="sticky top-[75px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          <span className="text-xs font-bold text-slate-500 uppercase font-mono">
            All Company Dispatches ({filteredNews.length})
          </span>

          <div className="relative w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search announcements..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="gold-hover-card bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <VisualMedia
                    type={visualMap[article.id] || 'commercial'}
                    className="w-full h-full group-hover:scale-106 transition-transform duration-500 ease-out"
                    title={article.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-amber-800 text-[11px] font-mono px-3 py-1 rounded-md border border-amber-500/20 font-bold shadow-2xs backdrop-blur-sm">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1 text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{article.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-950 group-hover:text-amber-800 transition-colors tracking-tight leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800 pt-4">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Full Press Release</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
                <span className="text-slate-400 font-mono font-normal">
                  Global Activity Communications
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Inquiries Callout */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white text-slate-900 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs hover:border-amber-400/80 transition-all">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono font-bold uppercase text-amber-800">PRESS & MEDIA INQUIRIES</span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-950 tracking-tight">Need Official Statements or Photographic Assets?</h3>
            <p className="text-xs sm:text-sm text-slate-600">Contact our corporate communications desk at {COMPANY_CONTACT.email}</p>
          </div>
          <a
            href={`mailto:${COMPANY_CONTACT.email}?subject=Media%20Inquiry%20-%20Global%20Activity`}
            className="gold-button-premium px-6 py-3 text-white text-xs font-bold rounded-xl shadow-md whitespace-nowrap"
          >
            Contact Media Relations
          </a>
        </div>
      </section>

      {/* Modal */}
      <NewsModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
};
