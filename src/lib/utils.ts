/**
 * Utilidades generales del proyecto
 * Funciones helper reutilizables
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind CSS de manera eficiente
 * Usa clsx para condicionales y tailwind-merge para evitar duplicados
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatear número de teléfono para WhatsApp
 * Elimina caracteres no numéricos y agrega código de país si es necesario
 */
export function formatWhatsAppNumber(phone: string): string {
  // Eliminar todo excepto números
  const cleaned = phone.replace(/\D/g, '');
  
  // Si no empieza con 54, agregarlo
  if (!cleaned.startsWith('54')) {
    return `54${cleaned}`;
  }
  
  return cleaned;
}

/**
 * Generar enlace de WhatsApp con mensaje predefinido
 */
export function generateWhatsAppLink(phone: string, message: string): string {
  const formattedPhone = formatWhatsAppNumber(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

/**
 * Generar enlace de llamada telefónica
 */
export function generateTelLink(phone: string): string {
  const cleaned = phone.replace(/\s/g, '');
  return `tel:${cleaned}`;
}

/**
 * Truncar texto a una longitud máxima
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Formatear fecha a formato local argentino
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Sanitizar input de usuario (prevención básica de XSS)
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

/**
 * Validar email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validar teléfono argentino
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[0-9\s\-\(\)]{8,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Scroll suave a un elemento
 */
export function scrollToElement(selector: string, offset: number = 0): void {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Generar ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}
