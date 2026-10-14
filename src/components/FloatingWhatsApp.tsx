import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-22 right-6 z-40 flex items-center gap-2">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="font-semibold text-slate-800">Chat with Engineering on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={COMPANY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200 group animate-pulse-live"
        aria-label="Chat on WhatsApp"
        title="Chat with Global Activity Construction on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
