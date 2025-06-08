interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  description: string;
  contact: {
    email: string;
    location: string;
    github: string;
    linkedin: string;
    twitter: string;
    calendar: string;
  };
  about: {
    title: string;
    intro: string;
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
    calendar: {
      display: boolean;
      link: string;
    };
  };
  workExperience: Array<{
    role: string;
    company: string;
    period: string;
    highlights: string[];
  }>;
  education: Array<{
    degree: string;
    description: string;
  }>;
  technicalSkills: Array<{
    title: string;
    description: string;
  }>;
  toolsAndTech: string[];
  languages: string[];
  avatar: string;
  social: Array<{
    name: string;
    icon: string;
    link: string;
  }>;
}

export interface Skill {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  frontend: {
    title: string;
    features: string[];
  };
  backend: {
    title: string;
    features: string[];
  };
  metrics: string[];
}

export default PortfolioData;
