import { Settings, Wrench, Zap, GitBranch, ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Definición de tipos para servicios
 */
export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  scope: string[];
  keywords: string[];
}

/**
 * Servicios ofrecidos por SJG Montajes Industriales
 * Fácil de extender con nuevos servicios
 */
export const services: Service[] = [
  {
    id: 'montajes-industriales',
    icon: Settings,
    title: 'Montajes Industriales Integrales',
    subtitle: 'Mecánicos, Eléctricos y Electromecánicos',
    description: 'Ejecución de montajes industriales completos, integrando sistemas mecánicos, eléctricos y electromecánicos para plantas industriales y centrales.',
    scope: [
      'Montaje de equipos industriales',
      'Instalación de sistemas mecánicos',
      'Integración electromecánica',
      'Puesta en marcha y pruebas',
    ],
    keywords: [
      'montajes industriales San Nicolás',
      'montaje electromecánico',
      'montaje mecánico industrial',
    ],
  },
  {
    id: 'mantenimiento-industrial',
    icon: Wrench,
    title: 'Mantenimiento Industrial',
    subtitle: 'Equipos y Líneas Productivas',
    description: 'Servicios de mantenimiento preventivo y correctivo para equipos, líneas productivas y plantas industriales en funcionamiento.',
    scope: [
      'Mantenimiento preventivo programado',
      'Reparaciones de emergencia',
      'Lubricación y ajustes',
      'Diagnóstico de fallas',
    ],
    keywords: [
      'mantenimiento industrial San Nicolás',
      'mantenimiento preventivo industrial',
      'reparación equipos industriales',
    ],
  },
  {
    id: 'instalaciones-electricas',
    icon: Zap,
    title: 'Instalaciones Eléctricas Industriales',
    subtitle: 'Tableros y Sistemas Asociados',
    description: 'Instalación de sistemas eléctricos industriales, montaje de tableros de fuerza y control, y sistemas asociados.',
    scope: [
      'Montaje de tableros eléctricos',
      'Instalación de motores y variadores',
      'Cableado industrial',
      'Puesta a tierra y protecciones',
    ],
    keywords: [
      'instalaciones eléctricas industriales',
      'tableros eléctricos industriales',
      'electricista industrial San Nicolás',
    ],
  },
  {
    id: 'piping-industrial',
    icon: GitBranch,
    title: 'Piping Industrial',
    subtitle: 'Montaje de Tuberías',
    description: 'Montaje de sistemas de tuberías industriales para fluidos, gases y procesos productivos.',
    scope: [
      'Tuberías de proceso',
      'Lineas de vapor y condensado',
      'Sistemas de aire comprimido',
      'Tuberías de agua y desagües',
    ],
    keywords: [
      'piping industrial Argentina',
      'montaje tuberías industriales',
      'tuberías proceso industrial',
    ],
  },
  {
    id: 'asistencia-tecnica',
    icon: ClipboardCheck,
    title: 'Asistencia Técnica e Ingeniería',
    subtitle: 'Provisión de Personal Especializado',
    description: 'Servicios de asistencia técnica especializada e ingeniería aplicada, con provisión de personal calificado para proyectos industriales.',
    scope: [
      'Provisión de personal técnico',
      'Supervisión de obra',
      'Ingeniería de detalle',
      'Consultoría técnica',
    ],
    keywords: [
      'asistencia técnica industrial',
      'personal técnico calificado',
      'supervisión obra industrial',
    ],
  },
];

/**
 * Obtener un servicio por ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

/**
 * Obtener servicios por keyword
 */
export function getServicesByKeyword(keyword: string): Service[] {
  return services.filter((service) =>
    service.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))
  );
}
