export interface Education {
  period: string;
  title: string;
  institution: string;
  faculty?: string;
  location: string;
  status: 'En curso' | 'Graduado';
  highlight?: string;
}

export interface EducationProps {
  education: Education[];
}
