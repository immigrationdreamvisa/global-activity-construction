import React from 'react';
import { X, Calendar, Clock, Newspaper, ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { NewsItem } from '../types';
import { VisualMedia } from './VisualMedia';

interface NewsModalProps {
  article: NewsItem | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const visualMap: Record<string, any> = {
    'fifa-agreement': 'commercial',
    'holcim-completion': 'road-infrastructure',
    'bakubuild-participation': 'commercial',
    'araz-bridge-progress': 'road-infrastructure',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]"
      >
        {/* Top Header */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-100 shrink-0">
          <VisualMedia
            type={visualMap[article.id] || 'commercial'}
            className="w-full h-full"
            title={article.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-transparent flex items-end p-6 sm:p-7">
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                {article.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug font-heading">
                {article.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200 backdrop-blur-sm transition-colors cursor-pointer shadow-md"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>{article.date}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readTime}</span>
            </span>
            <span>·</span>
            <span>Global Activity Media Desk</span>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span>Corporate Communications: Global Activity MMC</span>
            <span className="font-mono text-slate-400">press@globalactivity.az</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All News</span>
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: article.title, text: article.excerpt, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Share2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Share</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
