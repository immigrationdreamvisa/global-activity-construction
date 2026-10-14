import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/companyData';

interface CookieBannerProps {
  currentLang: Language;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const consent = localStorage.getItem('gac_cookie_consent');
    if (!consent) {
      // Show banner after brief delay
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gac_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gac_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white text-slate-900 p-5 rounded-2xl shadow-2xl border border-slate-200 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800">
            <Cookie className="w-4 h-4 text-amber-600" />
            <span>COOKIE PRIVACY NOTICE</span>
          </div>
          <button
            onClick={handleDecline}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1"
            aria-label="Close cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          {t.cookieNotice}
        </p>

        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="gold-button-premium px-4 py-1.5 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </div>
  );
};
