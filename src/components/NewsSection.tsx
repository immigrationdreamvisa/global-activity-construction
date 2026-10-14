import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, NewsItem } from '../types';
import { TRANSLATIONS, NEWS_DATA } from '../data/companyData';
import { VisualMedia } from './VisualMedia';
import { NewsModal } from './NewsModal';

interface NewsSectionProps {
  currentLang: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ currentLang }) => {
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const t = TRANSLATIONS[currentLang];

  const visualMap: Record<string, any> = {
    'fifa-agreement': 'commercial',
    'holcim-completion': 'road-infrastructure',
    'bakubuild-participation': 'commercial',
    'araz-bridge-progress': 'road-infrastructure',
  };

  return (
    <section id="news" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Newspaper className="w-4 h-4 text-amber-600" />
            <span>Company Press & Media</span>
            <span aria-hidden="true">·</span>
            <span>Verified Dispatches</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-950 tracking-tight mt-2 text-balance">
            {t.newsHeading}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            {t.newsSub}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {NEWS_DATA.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveArticle(article)}
              className="gold-hover-card bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <VisualMedia
                    type={visualMap[article.id] || 'commercial'}
                    className="w-full h-full group-hover:scale-106 transition-transform duration-500 ease-out"
                    title={article.title}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-amber-800 text-[11px] font-mono px-2.5 py-0.5 rounded-md border border-amber-500/20 font-bold shadow-2xs">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1 text-slate-600">
                      <Calendar className="w-3 h-3 text-amber-600" />
                      <span>{article.date}</span>
                    </span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base font-heading font-bold text-slate-950 group-hover:text-amber-800 transition-colors tracking-tight leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <NewsModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
};
