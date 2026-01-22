
export type BadgeType = 'Template For Sale' | 'Portfolio Build' | 'Template-Style (for sale)';

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  badge: BadgeType;
  oneLiner: string;
  bullets: string[];
  tags: string[];
  category: 'POS/Commerce' | 'CRM/Sales' | 'Wellness' | 'Operations' | 'Community' | 'SaaS Infrastructure' | 'FinTech' | 'AI/Automation' | 'Data/Analytics' | 'Marketing Tech' | 'Data Visualization';
  detail: {
    heroHeadline: string;
    heroSubhead: string;
    sections: {
      problem?: string;
      solution?: string;
      features?: string[];
      stack?: string[];
      outcomes?: string;
    };
    pricing?: {
      title: string;
      items: string[];
    }[];
  };
}

export type ContactReason = 'Buy Template' | 'Customize Template' | 'Custom Build' | 'Consulting';
