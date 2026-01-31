/**
 * Exportaciones centralizadas de datos del sitio
 * Facilita las importaciones en componentes
 */

// Configuración principal del sitio
export { siteConfig } from './siteConfig';
export type { SiteConfig } from './siteConfig';

// Servicios
export { services, getServiceById, getServicesByKeyword } from './services';
export type { Service } from './services';

// Proyectos
export { 
  projects, 
  projectCategories, 
  getProjectsByCategory, 
  getFeaturedProjects, 
  getProjectById 
} from './projects';
export type { Project, ProjectCategory } from './projects';

// Información de la empresa
export { 
  companyValues, 
  differentiators, 
  companyHistory, 
  legalInfo 
} from './company';
export type { Value, Differentiator } from './company';
