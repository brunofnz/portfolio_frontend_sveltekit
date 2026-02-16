export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  url?: string;
}

export interface ProjectsProps {
  projects: Project[];
  githubUrl: string;
}
