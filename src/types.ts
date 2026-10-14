export type Language = 'en' | 'az' | 'ru';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  scope: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'infrastructure' | 'commercial' | 'industrial' | 'residential' | 'civil';
  categoryLabel: string;
  location: string;
  year: string;
  client: string;
  description: string;
  scope: string;
  metrics: string;
  tags: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  category: 'iso' | 'license' | 'membership';
  categoryLabel: string;
  issuer: string;
  code: string;
  validity: string;
  description: string;
  standard: string;
  image?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  model: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  availability: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  sector: string;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface EquipmentRentalFormData {
  equipmentId: string;
  equipmentName: string;
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  duration: string;
  location: string;
  notes?: string;
}
