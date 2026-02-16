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
  ia: ['n8n', 'OpenAI API', 'RAG / pgvector'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'MinIO'],
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
        title: 'Tokenización Inmobiliaria + Certificación Blockchain',
        description: 'Plataforma de tokenización de activos digitales de inmuebles y certificación de documentos en Ethereum.'
      },
      {
        title: 'CRM Inmobiliario con Portal Público',
        description: 'Sistema de gestión de alquileres y ventas con portal público de propiedades y panel administrativo.'
      },
      {
        title: 'Chatbot IA + Turnos Automatizados',
        description: 'Chatbot en WhatsApp con n8n que responde consultas y agenda turnos automáticamente.'
      },
      {
        title: 'Chatbot RAG con IA',
        description: 'Sistema de atención inteligente con OpenAI y búsqueda semántica usando pgvector en PostgreSQL.'
      },
      {
        title: 'Scraping de Portales Inmobiliarios',
        description: 'Extracción automatizada de datos de propiedades desde portales inmobiliarios para alimentar el CRM.'
      },
      {
        title: 'Paneles Administrativos & Backoffice',
        description: 'Múltiples paneles de gestión interna con sistema de tickets, seguimiento de tareas e incidencias.'
      }
    ],
    tech: ['NestJS', 'SvelteKit', 'React', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Linux', 'n8n', 'OpenAI', 'MinIO', 'Ethereum']
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
    description: 'Plataforma de tokenización de activos digitales de inmuebles y certificación de documentos en Ethereum.',
    tech: ['NestJS', 'SvelteKit', 'PostgreSQL', 'Ethereum']
  },
  {
    title: 'CRM Inmobiliario',
    category: 'Web App',
    description: 'Sistema de gestión de alquileres y ventas con portal público de propiedades y panel administrativo.',
    tech: ['NestJS', 'SvelteKit', 'MySQL', 'MinIO']
  },
  {
    title: 'Chatbot IA (RAG)',
    category: 'Inteligencia Artificial',
    description: 'Chatbot inteligente con búsqueda semántica usando OpenAI y pgvector para responder con contexto real.',
    tech: ['NestJS', 'OpenAI', 'pgvector', 'PostgreSQL']
  },
  {
    title: 'Chatbot WhatsApp & Turnos',
    category: 'Automatización',
    description: 'Bot en WhatsApp que responde consultas y agenda turnos de forma automática con flujos de n8n.',
    tech: ['NestJS', 'n8n', 'WhatsApp API', 'MongoDB']
  },
  {
    title: 'Scraping Inmobiliario',
    category: 'Data',
    description: 'Extracción automatizada de propiedades desde portales inmobiliarios para alimentar el CRM.',
    tech: ['Node.js', 'Python', 'PostgreSQL']
  },
  {
    title: 'Sistema de Tickets',
    category: 'Backoffice',
    description: 'Plataforma de gestión de incidencias y seguimiento de tareas para equipos operativos.',
    tech: ['NestJS', 'SvelteKit', 'PostgreSQL']
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
