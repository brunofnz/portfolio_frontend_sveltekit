import type { Experience } from '$lib/components/Experience/types';
import type { Education } from '$lib/components/Education/types';
import type { Project } from '$lib/components/Projects/types';
import type { SkillCategory } from '$lib/components/Skills/types';
import type { Orb } from '$lib/components/Effects/types';
import type { ContactInfo } from '$lib/components/Contact/types';

export const yearsOfExperience = new Date().getFullYear() - 2022;

export const skills: SkillCategory = {
  frontend: ['SvelteKit', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  backend: ['NestJS', 'Node.js', 'Python', 'GraphQL', 'REST APIs'],
  ia: ['n8n'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'ArangoDB'],
  devops: ['Git', 'GitHub', 'Docker', 'Jest']
};

export const experiences: Experience[] = [
  {
    period: 'Jun 2022 - Presente',
    duration: `+${new Date().getFullYear() - 2022} años`,
    role: 'Desarrollador Full-Stack',
    company: 'TOB Group Solutions',
    description: 'Desarrollo de soluciones tecnológicas para el sector inmobiliario y fintech.',
    achievements: [
      {
        title: 'Plataforma de Tokenización de Activos Inmobiliarios',
        description: 'Sistema para fraccionamiento digital de propiedades, permitiendo inversión accesible en bienes raíces.'
      },
      {
        title: 'CRM Inmobiliario + Sitio Web',
        description: 'Rediseño completo de plataforma de gestión de alquileres y ventas con mejoras en UX y SEO.'
      },
      {
        title: 'Sistema de Turnos con Chatbot',
        description: 'Automatización de reservas integrado con WhatsApp Business API y flujos n8n.'
      }
    ],
    tech: ['SvelteKit', 'NestJS', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'n8n']
  },
  {
    period: 'Oct 2021 - Feb 2022',
    duration: '5 meses',
    role: 'Desarrollador Full-Stack',
    company: 'AirBits',
    type: 'Pasantía',
    description: 'Desarrollo de aplicaciones IoT para monitoreo y control de datos en tiempo real.',
    achievements: [
      {
        title: 'Dashboard de Monitoreo IoT',
        description: 'Aplicación web para visualización y control de sensores en tiempo real con gráficos interactivos.'
      }
    ],
    tech: ['React', 'Bootstrap 5', 'ArangoDB', 'GraphQL']
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
    title: 'Sistema Hidropónico Automatizado',
    category: 'IoT / Electrónica',
    description: 'Sistema de cultivo automatizado con sensores de pH, temperatura y humedad. Control vía microcontrolador.',
    tech: ['C++', 'Arduino', 'Sensores IoT']
  },
  {
    title: 'Sistema de Gestión de Datos',
    category: 'Base de Datos',
    description: 'Comparativa de rendimiento entre bases relacionales (MySQL) y NoSQL (Cassandra) para grandes volúmenes.',
    tech: ['MySQL', 'Cassandra', 'Python']
  },
  {
    title: 'E-Commerce de Insumos',
    category: 'Web App',
    description: 'Plataforma de ventas online con carrito, pasarela de pagos y panel de administración.',
    tech: ['SvelteKit', 'Node.js', 'PostgreSQL']
  }
];

export const stats = [
  { value: `${yearsOfExperience}+`, label: 'Años en desarrollo' },
  { value: '10+', label: 'Proyectos entregados' },
  { value: '8+', label: 'Tecnologías' }
];

export const learning = ['TypeScript Avanzado', 'Docker & CI/CD', 'Testing (Jest/Cypress)'];

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
