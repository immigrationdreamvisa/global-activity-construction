import React from 'react';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onOpenInquiry: (defaultService?: string) => void;
  onNavigatePage?: (page: string, subParam?: string) => void;
  onOpenCookieSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
}) => {

  const textData = {
    en: {
      addressLabel: 'Address',
      hoursLabel: 'Working hours',
      salesLabel: 'Sales department',
      messengersLabel: 'Messengers',
      addressLine1: 'Bakı şəhəri, Binəqədi rayonu,',
      addressLine2: 'M.Ə Rəsulzadə ŞTQ, Faiq',
      addressLine3: 'Rüstəmov ev.1',
      hoursLine1: 'Monday–Friday',
      hoursLine2: '9:00 - 18:00',
      phone: '+994 50 233 55 45',
      email: 'office@globalactivity.az',
      copyright: 'Copyright © 2025 Global Activity Construction - All Rights Reserved.',
    },
    az: {
      addressLabel: 'Ünvan',
      hoursLabel: 'İş saatları',
      salesLabel: 'Satış şöbəsi',
      messengersLabel: 'Mesencerlər',
      addressLine1: 'Bakı şəhəri, Binəqədi rayonu,',
      addressLine2: 'M.Ə Rəsulzadə ŞTQ, Faiq',
      addressLine3: 'Rüstəmov ev.1',
      hoursLine1: 'Bazar ertəsi–Cümə',
      hoursLine2: '9:00 - 18:00',
      phone: '+994 50 233 55 45',
      email: 'office@globalactivity.az',
      copyright: 'Copyright © 2025 Global Activity Construction - Bütün hüquqlar qorunur.',
    },
    ru: {
      addressLabel: 'Адрес',
      hoursLabel: 'График работы',
      salesLabel: 'Отдел продаж',
      messengersLabel: 'Мессенджеры',
      addressLine1: 'г. Баку, Бинагадинский р-н,',
      addressLine2: 'пос. М.А. Расулзаде, Фаиг',
      addressLine3: 'Рустамов д.1',
      hoursLine1: 'Понедельник–Пятница',
      hoursLine2: '9:00 - 18:00',
      phone: '+994 50 233 55 45',
      email: 'office@globalactivity.az',
      copyright: 'Copyright © 2025 Global Activity Construction - Все права защищены.',
    },
  }[currentLang] || {
    addressLabel: 'Address',
    hoursLabel: 'Working hours',
    salesLabel: 'Sales department',
    messengersLabel: 'Messengers',
    addressLine1: 'Bakı şəhəri, Binəqədi rayonu,',
    addressLine2: 'M.Ə Rəsulzadə ŞTQ, Faiq',
    addressLine3: 'Rüstəmov ev.1',
    hoursLine1: 'Monday–Friday',
    hoursLine2: '9:00 - 18:00',
    phone: '+994 50 233 55 45',
    email: 'office@globalactivity.az',
    copyright: 'Copyright © 2025 Global Activity Construction - All Rights Reserved.',
  };

  return (
    <footer className="relative w-full overflow-hidden bg-slate-950 pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8">
      {/* Background Image: Aerial Top-Down Drone View of Quarry Excavation Site */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/footer_aerial_quarry.jpg"
          alt="Aerial Construction Quarry Site"
          className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.1] saturate-[0.9]"
        />
        {/* Soft dark radial & vertical overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/25 to-slate-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/20 to-slate-950/70 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Floating Glassmorphic Container Card */}
        <div className="rounded-3xl sm:rounded-[32px] bg-[#202B47]/85 backdrop-blur-xl border border-white/15 px-8 sm:px-12 lg:px-14 py-10 sm:py-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-white">
          {/* Top Brand Badges (Exact two-chamber boxed design matching reference image) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Boxed Brand Badge 1: GLOBAL ACTIVITY REPAIR */}
            <div
              className="inline-flex items-stretch border border-white bg-transparent overflow-hidden select-none"
              title="Global Activity Repair Division"
            >
              {/* Left Chamber: Solid Dark Square with Exact Custom Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-black border-r border-white flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/images/logo_repair_icon.jpg"
                  alt="Global Activity Repair Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Chamber: Exact Letterspaced Typography */}
              <div className="px-3.5 sm:px-4 py-2 flex flex-col justify-center text-left">
                <span
                  className="text-xs sm:text-[13.5px] font-normal tracking-[0.16em] uppercase text-white leading-none whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  GLOBAL ACTIVITY
                </span>
                <span
                  className="text-[10px] sm:text-[11.5px] font-normal tracking-[0.24em] uppercase text-white/95 leading-none mt-1.5 whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  REPAIR
                </span>
              </div>
            </div>

            {/* Boxed Brand Badge 2: GLOBAL ACTIVITY RENT */}
            <div
              className="inline-flex items-stretch border border-white bg-transparent overflow-hidden select-none"
              title="Global Activity Equipment Rental"
            >
              {/* Left Chamber: Solid Dark Square with Exact Custom Rent Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-black border-r border-white flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/images/logo_rent_icon.jpg"
                  alt="Global Activity Rent Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Chamber: Exact Letterspaced Typography */}
              <div className="px-3.5 sm:px-4 py-2 flex flex-col justify-center text-left">
                <span
                  className="text-xs sm:text-[13.5px] font-normal tracking-[0.16em] uppercase text-white leading-none whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  GLOBAL ACTIVITY
                </span>
                <span
                  className="text-[10px] sm:text-[11.5px] font-normal tracking-[0.24em] uppercase text-white/95 leading-none mt-1.5 whitespace-nowrap"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  RENT
                </span>
              </div>
            </div>
          </div>

          {/* 4-Column Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-12 sm:mt-14 items-start">
            {/* Column 1: Address */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-[13px] text-slate-400 font-normal tracking-normal">
                {textData.addressLabel}
              </h4>
              <div className="text-sm sm:text-base font-medium text-white/95 leading-relaxed font-sans">
                <p>{textData.addressLine1}</p>
                <p>{textData.addressLine2}</p>
                <p>{textData.addressLine3}</p>
              </div>
            </div>

            {/* Column 2: Working hours */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-[13px] text-slate-400 font-normal tracking-normal">
                {textData.hoursLabel}
              </h4>
              <div className="text-sm sm:text-base font-medium text-white/95 leading-relaxed font-sans">
                <p>{textData.hoursLine1}</p>
                <p>{textData.hoursLine2}</p>
              </div>
            </div>

            {/* Column 3: Sales department */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-[13px] text-slate-400 font-normal tracking-normal">
                {textData.salesLabel}
              </h4>
              <div className="text-sm sm:text-base font-medium text-white/95 leading-relaxed font-sans flex flex-col">
                <a
                  href={`tel:${textData.phone.replace(/\s+/g, '')}`}
                  className="hover:text-amber-400 transition-colors w-fit"
                >
                  {textData.phone}
                </a>
                <a
                  href={`mailto:${textData.email}`}
                  className="hover:text-amber-400 transition-colors w-fit"
                >
                  {textData.email}
                </a>
              </div>
            </div>

            {/* Column 4: Messengers */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-[13px] text-slate-400 font-normal tracking-normal">
                {textData.messengersLabel}
              </h4>
              <div className="flex items-center gap-3 pt-1">
                {/* Telegram circular button */}
                <a
                  href="https://t.me/globalactivity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#36425D] hover:bg-[#435273] border border-white/10 flex items-center justify-center text-white transition-all shadow-md hover:scale-105 active:scale-95"
                  title="Telegram"
                  aria-label="Telegram"
                >
                  <svg
                    className="w-4 h-4 fill-white -translate-x-0.5 translate-y-0.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.5 2.5a1.2 1.2 0 0 0-1.3-.2L2.6 9.8c-.8.3-.8 1.4 0 1.7l4.9 1.6 1.8 5.4c.3.8 1.3 1 1.9.4l3-2.8 4.7 3.5c.7.5 1.7.1 1.9-.8l3.1-15c.1-.6-.2-1.1-.6-1.3zm-3.6 4.1L8.8 13.7l-.4 3-.8-2.6 10.3-7.5z" />
                  </svg>
                </a>

                {/* WhatsApp circular button */}
                <a
                  href="https://wa.me/994502335545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#36425D] hover:bg-[#435273] border border-white/10 flex items-center justify-center text-white transition-all shadow-md hover:scale-105 active:scale-95"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.8.48 3.5 1.35 5L2.1 21.9l5-1.3A9.9 9.9 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.3c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.1-1.7-.1-.4-.1-.9-.3-1.5-.5-2.5-1.1-4.2-3.6-4.3-3.8-.1-.2-1-1.4-1-2.6s.6-1.8.8-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.8.8 1.9.1.2.1.3 0 .5s-.2.3-.3.5c-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.1.5.1.7-.1.2-.2.9-1 1.1-1.4.2-.3.4-.3.7-.2.3.1 1.8.9 2.1 1 .3.2.5.3.6.4.1.2.1.8-.1 1.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer: Copyright */}
        <div className="mt-8 px-2 flex items-center justify-between text-xs sm:text-sm text-white/85">
          <p className="font-normal font-sans tracking-wide">
            {textData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
