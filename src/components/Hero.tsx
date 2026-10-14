import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, Play, Pause, Volume2, VolumeX, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { COMPANY_CONTACT } from '../data/companyData';

interface HeroProps {
  currentLang: Language;
  onNavigatePage: (page: string) => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onNavigatePage, onOpenInquiry }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted in some browsers without user interaction
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScrollDown = () => {
    const statsElem = document.getElementById('stats-section');
    if (statsElem) {
      statsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#FAFBFD] overflow-hidden text-slate-900">
      {/* Background Video Player with Fallback Image */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="/assets/images/hero_real_construction.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.04]"
        >
          <source src="/assets/videos/construction_hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback image if video fails or is loading */}
        {!videoLoaded && (
          <img
            src="/assets/images/hero_real_construction.jpg"
            alt="Global Activity Real Construction Site"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.88]"
          />
        )}

        {/* Cinematic Luminous Daylight Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFBFD]/98 via-[#FAFBFD]/90 to-[#FAFBFD]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBFD] via-[#FAFBFD]/30 to-[#FAFBFD]/60 pointer-events-none" />
        <div className="absolute inset-0 cad-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      </div>

      {/* Floating Video Control Bar (Bottom-Right - Light Frosted Glass) */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-xl">
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-white flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-2xs cursor-pointer"
          title={isPlaying ? 'Pause background video' : 'Play background video'}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-white flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-2xs cursor-pointer"
          title={isMuted ? 'Unmute video' : 'Mute video'}
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-700" />}
        </button>
        <span className="text-[10px] font-mono text-amber-800 font-bold px-2.5 hidden sm:inline">
          4K ARCHITECTURAL REEL
        </span>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-28 lg:py-36 w-full">
        <div className="max-w-3xl space-y-7">


          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.08] text-balance font-heading"
          >
            Building Tomorrow.{' '}
            <span className="gold-gradient-text-light inline-block">
              Engineering Excellence.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl"
          >
            We deliver innovative construction, engineering, and infrastructure solutions through expertise, precision, and a commitment to quality.
          </motion.p>

          {/* Prompt Required Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-3 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => onNavigatePage('projects')}
              className="gold-button-premium shine-hover-effect px-8 py-4 text-white font-bold text-sm sm:text-base rounded-xl flex items-center gap-2.5 cursor-pointer group shadow-xl hover:shadow-2xl transition-all"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigatePage('services')}
              className="px-7 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-amber-500 font-semibold text-sm sm:text-base rounded-xl shadow-xs transition-all flex items-center gap-2 group hover:shadow-md cursor-pointer hover:-translate-y-0.5"
            >
              <span>Discover Our Services</span>
              <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Trust Highlights - Pristine Light Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-6 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl text-xs text-slate-700"
          >
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/95 border border-slate-200/90 shadow-2xs backdrop-blur-xs font-medium hover:-translate-y-1 hover:shadow-md hover:border-amber-400/80 transition-all duration-300 group cursor-default">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-slate-950 transition-colors">ISO 9001 / 14001 / 45001 Certified</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/95 border border-slate-200/90 shadow-2xs backdrop-blur-xs font-medium hover:-translate-y-1 hover:shadow-md hover:border-amber-400/80 transition-all duration-300 group cursor-default">
              <Award className="w-4 h-4 text-amber-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-slate-950 transition-colors">State FHN Licensed Contractor</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/95 border border-slate-200/90 shadow-2xs backdrop-blur-xs font-medium hover:-translate-y-1 hover:shadow-md hover:border-amber-400/80 transition-all duration-300 group cursor-default">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-slate-950 transition-colors">15+ Years Active in Baku</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center text-slate-500 hover:text-amber-700 transition-colors cursor-pointer group"
          aria-label="Scroll to company statistics"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-amber-700 mb-1 transition-colors font-bold">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-amber-600" />
          </motion.div>
        </button>
      </div>
    </section>
  );
};
