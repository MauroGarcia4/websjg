/**
 * Proyectos realizados por SJG Montajes Industriales
 * Estructura preparada para escalabilidad y futuro CMS
 */

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  year: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery?: string[]; // Para futura galería de imágenes
  scope: string[];
  client?: string; // Para futura sección de clientes
  featured?: boolean; // Para destacar proyectos
}

export type ProjectCategory = 
  | 'todos' 
  | 'montajes' 
  | 'mantenimiento' 
  | 'instalaciones' 
  | 'piping';

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'montajes', label: 'Montajes' },
  { id: 'mantenimiento', label: 'Mantenimiento' },
  { id: 'instalaciones', label: 'Instalaciones' },
  { id: 'piping', label: 'Piping' },
];

/**
 * Proyectos de ejemplo
 * En producción, estos datos vendrían de un CMS o API
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Montaje Electromecánico',
    category: 'montajes',
    categoryLabel: 'Montajes',
    location: 'San Nicolás de los Arroyos, BA',
    year: '2024',
    description: 'Montaje integral de sistema electromecánico para planta industrial.',
    fullDescription: 'Ejecución de montaje electromecánico completo, incluyendo instalación de equipos, cableado de fuerza y control, y puesta en marcha del sistema.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    scope: ['Montaje de equipos', 'Instalación eléctrica', 'Cableado de control', 'Puesta en marcha'],
    featured: true,
  },
  {
    id: 2,
    title: 'Mantenimiento de Línea Productiva',
    category: 'mantenimiento',
    categoryLabel: 'Mantenimiento',
    location: 'San Nicolás de los Arroyos, BA',
    year: '2024',
    description: 'Servicio de mantenimiento preventivo y correctivo de línea productiva.',
    fullDescription: 'Ejecución de tareas de mantenimiento preventivo programado y reparaciones correctivas en línea productiva industrial.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    scope: ['Mantenimiento preventivo', 'Ajustes y calibraciones', 'Lubricación', 'Diagnóstico de fallas'],
  },
  {
    id: 3,
    title: 'Instalación de Tableros Eléctricos',
    category: 'instalaciones',
    categoryLabel: 'Instalaciones',
    location: 'Región de San Nicolás, BA',
    year: '2023',
    description: 'Montaje e instalación de tableros de fuerza y control industrial.',
    fullDescription: 'Montaje e instalación de tableros eléctricos industriales, incluyendo protecciones, variadores de frecuencia y sistemas de control.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    scope: ['Tableros de fuerza', 'Tableros de control', 'Variadores', 'Protecciones eléctricas'],
    featured: true,
  },
  {
    id: 4,
    title: 'Sistema de Piping Industrial',
    category: 'piping',
    categoryLabel: 'Piping',
    location: 'San Nicolás de los Arroyos, BA',
    year: '2023',
    description: 'Montaje de sistema de tuberías para proceso industrial.',
    fullDescription: 'Ejecución de montaje de sistema de tuberías industriales para transporte de fluidos de proceso, incluyendo soportes y aislamiento.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    scope: ['Tuberías de proceso', 'Soportes y fijaciones', 'Válvulas y accesorios', 'Pruebas de estanqueidad'],
  },
  {
    id: 5,
    title: 'Asistencia Técnica Especializada',
    category: 'mantenimiento',
    categoryLabel: 'Mantenimiento',
    location: 'Zona industrial de San Nicolás, BA',
    year: '2023',
    description: 'Provisión de personal técnico especializado para proyecto industrial.',
    fullDescription: 'Provisión de personal técnico calificado para ejecución de tareas especializadas en planta industrial, con supervisión y gestión técnica.',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    scope: ['Personal técnico calificado', 'Supervisión de obra', 'Gestión técnica', 'Reportes de avance'],
  },
  {
    id: 6,
    title: 'Montaje Mecánico Industrial',
    category: 'montajes',
    categoryLabel: 'Montajes',
    location: 'Región de San Nicolás, BA',
    year: '2022',
    description: 'Montaje mecánico de equipos y componentes industriales.',
    fullDescription: 'Ejecución de montaje mecánico de equipos industriales, incluyendo alineación, nivelación, anclaje y conexiones mecánicas.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    scope: ['Montaje de equipos', 'Alineación y nivelación', 'Anclajes y fijaciones', 'Pruebas funcionales'],
  },
];

/**
 * Obtener proyectos por categoría
 */
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  if (category === 'todos') return projects;
  return projects.filter((p) => p.category === category);
}

/**
 * Obtener proyectos destacados
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/**
 * Obtener proyecto por ID
 */
export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
