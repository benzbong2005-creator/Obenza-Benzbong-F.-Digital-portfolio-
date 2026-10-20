export interface TechnicalSkill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'productivity' | 'ai';
  level: number; // 0 to 100
  experience: string;
  description: string;
}

export interface SoftSkill {
  name: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: 'Completed' | 'In Active Development' | 'Prototype';
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'Planned' | 'In Progress' | 'Certified';
  skillsCovered: string[];
  description: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  impact: string;
}

export interface HobbyItem {
  name: string;
  description: string;
  icon: string;
  tagline: string;
}
