import React, { useState } from 'react';
import { X, Award, ShieldCheck, CheckCircle2, FileText, ZoomIn, Eye, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { CertificateItem } from '../types';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [activeTab, setActiveTab] = useState<'document' | 'details'>('document');
  const [isZoomed, setIsZoomed] = useState(false);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[94vh]"
      >
        {/* Modal Top Header Bar */}
        <div className="p-4 px-6 bg-gradient-to-r from-stone-100 via-amber-50/50 to-stone-100 text-slate-900 flex items-center justify-between shrink-0 border-b border-stone-200">
          <div className="flex items-center gap-2.5 text-xs font-mono text-amber-800 font-bold">
            <Award className="w-4 h-4 text-amber-600" />
            <span>OFFICIAL ACCREDITATION &amp; CERTIFICATE</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-slate-200/70 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setActiveTab('document')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'document'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Document Scan
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'details'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Registry Record
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200 transition-colors cursor-pointer shadow-2xs"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-4 sm:p-6 lg:p-8 bg-[#FAFBFD] overflow-y-auto flex-1">
          {activeTab === 'document' ? (
            <div className="flex flex-col items-center justify-center">
              <div
                onClick={() => setIsZoomed(!isZoomed)}
                className={`relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white cursor-zoom-in transition-all duration-300 ${
                  isZoomed ? 'max-w-3xl scale-105' : 'max-w-md'
                }`}
              >
                <img
                  src={certificate.image || '/assets/images/cert_tuv_iso9001.jpg'}
                  alt={certificate.title}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[11px] font-mono px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-1.5 pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isZoomed ? 'Click to minimize' : 'Click to zoom'}</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                  Standard: <span className="text-amber-800">{certificate.standard}</span> · Code:{' '}
                  <span className="text-slate-800">{certificate.code}</span>
                </span>
              </div>
            </div>
          ) : (
            /* Technical Specification & Legal Details */
            <div className="border-4 border-double border-amber-600/40 rounded-2xl p-6 sm:p-8 bg-white shadow-md relative space-y-6">
              {/* Guilloche Corner Accents */}
              <div className="absolute top-2 left-2 text-amber-700 text-[10px] font-mono">✦ GA-AZ ✦</div>
              <div className="absolute top-2 right-2 text-amber-700 text-[10px] font-mono">✦ GA-AZ ✦</div>
              <div className="absolute bottom-2 left-2 text-amber-700 text-[10px] font-mono">✦ GA-AZ ✦</div>
              <div className="absolute bottom-2 right-2 text-amber-700 text-[10px] font-mono">✦ GA-AZ ✦</div>

              {/* Certificate Header */}
              <div className="text-center space-y-1.5">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-800 font-bold block">
                  AZERBAIJAN REPUBLIC & INTERNATIONAL COMPLIANCE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight font-heading">
                  {certificate.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  Issued to: Global Activity Construction MMC (TIN: 1401349881)
                </p>
              </div>

              <div className="h-px bg-amber-200/80" />

              {/* Body */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>{certificate.description}</p>
              </div>

              {/* Official Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block text-[10px]">ISSUING AUTHORITY</span>
                  <span className="font-bold text-slate-800">{certificate.issuer}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block text-[10px]">REGISTRATION CODE</span>
                  <span className="font-mono font-bold text-amber-800">{certificate.code}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block text-[10px]">APPLICABLE STANDARD</span>
                  <span className="font-bold text-slate-800">{certificate.standard}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block text-[10px]">STATUS & VALIDITY</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{certificate.validity}</span>
                  </span>
                </div>
              </div>

              {/* Seal & Signature stamp */}
              <div className="flex items-end justify-between pt-4 border-t border-amber-200/60">
                <div className="text-left">
                  <span className="text-[11px] font-mono text-slate-400 block">General Directorate</span>
                  <span className="text-xs font-bold text-slate-800">Global Activity MMC</span>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-amber-700/60 flex items-center justify-center text-center p-1 bg-amber-50">
                  <span className="text-[8px] font-mono font-bold text-amber-800 uppercase leading-none">
                    SEALED & VERIFIED
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            Official verifiable state and international compliance records.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-2xs"
          >
            Close View
          </button>
        </div>
      </motion.div>
    </div>
  );
};
