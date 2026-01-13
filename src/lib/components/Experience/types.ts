export interface Achievement {
  title: string;
  description: string;
}

export interface Experience {
  period: string;
  duration: string;
  role: string;
  company: string;
  type?: string;
  description: string;
  achievements: Achievement[];
  tech: string[];
}

export interface ExperienceProps {
  experiences: Experience[];
}
