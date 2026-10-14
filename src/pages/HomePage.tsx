import React from 'react';
import { Language } from '../types';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectGallery } from '../components/ProjectGallery';
import { RepairDivision } from '../components/RepairDivision';
import { EquipmentRental } from '../components/EquipmentRental';
import { CertificatesSection } from '../components/CertificatesSection';
import { PartnersSection } from '../components/PartnersSection';
import { NewsSection } from '../components/NewsSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  currentLang: Language;
  onNavigatePage: (page: string, subParam?: string) => void;
  onOpenInquiry: (defaultService?: string) => void;
  onRentalSuccess: (refId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  onNavigatePage,
  onOpenInquiry,
  onRentalSuccess,
}) => {
  return (
    <div>
      {/* 1. Cinematic Hero with Looping Video */}
      <Hero
        currentLang={currentLang}
        onNavigatePage={onNavigatePage}
        onOpenInquiry={() => onOpenInquiry()}
      />

      {/* 2. Company Statistics */}
      <div id="stats-section">
        <Statistics currentLang={currentLang} />
      </div>

      {/* 3. About Company Summary */}
      <AboutSection
        currentLang={currentLang}
        onOpenInquiry={() => onOpenInquiry()}
      />

      {/* 4. Why Choose Us Advantages */}
      <WhyChooseUs currentLang={currentLang} onOpenInquiry={onOpenInquiry} />

      {/* 5. Core Services Showcase */}
      <ServicesSection
        currentLang={currentLang}
        onOpenInquiry={(svc) => onOpenInquiry(svc)}
      />

      {/* 6. Milestone Project Gallery */}
      <ProjectGallery
        currentLang={currentLang}
        onOpenInquiry={(title) => onOpenInquiry(title)}
      />

      {/* 7. Global Activity Repair (Dedicated Division) */}
      <RepairDivision
        currentLang={currentLang}
        onOpenInquiry={(svc) => onOpenInquiry(svc)}
      />

      {/* 8. Construction Equipment Rental Fleet */}
      <EquipmentRental
        currentLang={currentLang}
        onRentalSuccess={onRentalSuccess}
      />

      {/* 9. Licenses & Certificates */}
      <CertificatesSection currentLang={currentLang} />

      {/* 10. Strategic Partners & Clients */}
      <PartnersSection currentLang={currentLang} />

      {/* 11. Company News & Updates */}
      <NewsSection currentLang={currentLang} />

      {/* 12. Contact Consultation Form */}
      <ContactSection currentLang={currentLang} />
    </div>
  );
};
