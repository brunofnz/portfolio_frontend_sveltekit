export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
}

export interface ProjectsProps {
  projects: Project[];
  githubUrl: string;
}
