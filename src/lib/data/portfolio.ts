import type { Experience } from '$lib/components/Experience/types';
import type { Education } from '$lib/components/Education/types';
import type { Project } from '$lib/components/Projects/types';
import type { SkillCategory } from '$lib/components/Skills/types';
import type { Orb } from '$lib/components/Effects/types';
import type { ContactInfo } from '$lib/components/Contact/types';

export const yearsOfExperience = new Date().getFullYear() - 2022;

export const skills: SkillCategory = {
  frontend: ['SvelteKit', 'React', 'TypeScript', 'Tailwind CSS'],
  backend: ['NestJS', 'Node.js', 'Python', 'GraphQL'],
  ia: ['n8n'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
  devops: ['Docker', 'Linux', 'Git']
};

export const experiences: Experience[] = [
  {
    period: 'Jun 2022 - Presente',
    duration: `+${new Date().getFullYear() - 2022} años`,
    role: 'Desarrollador Full Stack',
    company: 'TOB Group Solutions',
    description: 'Desarrollo de aplicaciones web y APIs para clientes externos y productos propios, participando en todo el ciclo: diseño técnico, desarrollo, deploy y mantenimiento.',
    achievements: [
      {
        title: 'Plataforma de Tokenización Inmobiliaria',
        description: 'Sistema de tokenización de activos digitales de inmuebles con certificación en blockchain.'
      },
      {
        title: 'CRM Inmobiliario',
        description: 'Sistema integral de gestión de alquileres y ventas usado activamente por inmobiliarias en producción.'
      },
      {
        title: 'Chatbot & Turnos Automatizados',
        description: 'Sistema de atención automatizada y gestión de turnos integrado con WhatsApp Business API y n8n, eliminando coordinación manual.'
      },
      {
        title: 'Sistema de Tickets',
        description: 'Plataforma interna de seguimiento de incidencias y gestión de tareas para equipos operativos.'
      },
      {
        title: 'Automatizaciones & Scraping',
        description: 'Herramientas de automatización de procesos empresariales e integración con APIs de terceros y pasarelas de pago.'
      }
    ],
    tech: ['NestJS', 'SvelteKit', 'React', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Linux', 'n8n']
  },
  {
    period: 'Oct 2021 - Feb 2022',
    duration: '5 meses',
    role: 'Desarrollador Full Stack',
    company: 'AirBits',
    type: 'Pasantía',
    description: 'Desarrollo de aplicación de control y visualización de datos en tiempo real.',
    achievements: [
      {
        title: 'Dashboard de Monitoreo IoT',
        description: 'Aplicación web para visualización y control de sensores en tiempo real con gráficos interactivos.'
      }
    ],
    tech: ['React', 'ArangoDB', 'GraphQL']
  }
];

export const education: Education[] = [
  {
    period: '2017 - Presente',
    title: 'Ingeniería en Sistemas de Información',
    institution: 'Universidad Tecnológica Nacional',
    faculty: 'Facultad Regional Resistencia',
    location: 'Resistencia, Chaco',
    status: 'En curso'
  },
  {
    period: '2011 - 2016',
    title: 'Técnico en Electrónica',
    institution: 'E.E.T. N°2 Gral. San Martín',
    location: 'Barranqueras, Chaco',
    status: 'Graduado',
    highlight: 'Base sólida en electrónica y programación de microcontroladores'
  }
];

export const featuredProjects: Project[] = [
  {
    title: 'Tokenización Inmobiliaria',
    category: 'Blockchain / Fintech',
    description: 'Plataforma de tokenización de activos digitales de inmuebles con certificación en blockchain y smart contracts.',
    tech: ['NestJS', 'SvelteKit', 'PostgreSQL', 'Blockchain']
  },
  {
    title: 'CRM Inmobiliario',
    category: 'Web App',
    description: 'Sistema integral de gestión de alquileres y ventas con panel administrativo, usado en producción por inmobiliarias.',
    tech: ['NestJS', 'SvelteKit', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Chatbot & Turnos',
    category: 'Automatización',
    description: 'Sistema de atención automatizada y gestión de turnos integrado con WhatsApp Business API que eliminó la coordinación manual.',
    tech: ['NestJS', 'n8n', 'WhatsApp API', 'MongoDB']
  }
];

export const stats = [
  { value: `${yearsOfExperience}+`, label: 'Años en desarrollo' },
  { value: '10+', label: 'Proyectos entregados' },
  { value: '10+', label: 'Tecnologías' }
];

export const learning = ['Arquitectura de microservicios', 'CI/CD pipelines', 'Testing avanzado'];

export const orbs: Orb[] = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  size: 100 + Math.random() * 300,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 15 + Math.random() * 20,
  delay: Math.random() * -20
}));

export const contactInfo: ContactInfo = {
  email: 'brunofnz28@gmail.com',
  phone: '+5493624519254',
  phoneDisplay: '+54 9 362 4519254',
  linkedin: 'https://www.linkedin.com/in/bruno-fernandez-developer/',
  linkedinDisplay: '/bruno-fernandez-developer',
  github: 'https://github.com/brunofnz',
  githubDisplay: '/brunofnz'
};
