import { Shield, Award, Users, Leaf, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Información sobre la empresa SJG Montajes Industriales
 * Valores, historia y diferenciales competitivos
 */

export interface Value {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Differentiator {
  id: string;
  text: string;
}

/**
 * Valores corporativos de SJG
 */
export const companyValues: Value[] = [
  {
    id: 'seguridad',
    icon: Shield,
    title: 'Seguridad y Salud Ocupacional',
    description: 'Compromiso con la seguridad y salud ocupacional en todas las operaciones que realizamos.',
  },
  {
    id: 'practicas',
    icon: Award,
    title: 'Buenas Prácticas',
    description: 'Aplicación de buenas prácticas industriales y mejora continua en cada proyecto.',
  },
  {
    id: 'capacitacion',
    icon: Users,
    title: 'Capacitación Permanente',
    description: 'Capacitación continua de nuestro personal técnico para mantener los más altos estándares.',
  },
  {
    id: 'ambiente',
    icon: Leaf,
    title: 'Cuidado Ambiental',
    description: 'Trabajo responsable con cuidado del medio ambiente en todas nuestras operaciones.',
  },
  {
    id: 'cliente',
    icon: Heart,
    title: 'Satisfacción del Cliente',
    description: 'Enfoque en la satisfacción del cliente y la calidad del servicio prestado.',
  },
];

/**
 * Diferenciales competitivos
 */
export const differentiators: Differentiator[] = [
  { id: '1', text: 'Mano de obra calificada y especializada' },
  { id: '2', text: 'Equipamiento profesional para cada tarea' },
  { id: '3', text: 'Gestión técnica especializada' },
  { id: '4', text: 'Cobertura en San Nicolás de los Arroyos y región' },
  { id: '5', text: 'Atención a plantas industriales y siderúrgicas' },
  { id: '6', text: 'Servicio a centrales eléctricas' },
];

/**
 * Historia de la empresa
 */
export const companyHistory = {
  founded: 2019,
  location: 'San Nicolás de los Arroyos, Buenos Aires',
  mission: 'Brindar servicios de montaje, mantenimiento y asistencia técnica de excelencia para plantas industriales, acompañando a nuestros clientes con mano de obra calificada, equipamiento y gestión técnica especializada.',
  vision: 'Ser referentes en servicios industriales en la región de San Nicolás de los Arroyos, reconocidos por la calidad, seguridad y compromiso en cada proyecto.',
};

/**
 * Información legal
 */
export const legalInfo = {
  companyName: 'SJG Montajes Industriales S.R.L.',
  cuit: '30-71655883-1',
  address: 'Hipólito Yrigoyen 650',
  city: 'San Nicolás de los Arroyos',
  province: 'Buenos Aires',
  country: 'Argentina',
};
