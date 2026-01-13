export interface SkillCategory {
  frontend: string[];
  backend: string[];
  ia: string[];
  databases: string[];
  devops: string[];
}

export interface SkillsProps {
  skills: SkillCategory;
  learning: string[];
}
