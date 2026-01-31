/**
 * Exportaciones centralizadas de utilidades
 */

export {
  cn,
  formatWhatsAppNumber,
  generateWhatsAppLink,
  generateTelLink,
  truncateText,
  formatDate,
  sanitizeInput,
  isValidEmail,
  isValidPhone,
  scrollToElement,
  debounce,
  generateId,
} from './utils';

export {
  getDefaultMeta,
  generatePageMeta,
  generateLocalBusinessSchema,
  generateServiceSchema,
  sectionKeywords,
} from './seo';

export type { PageMeta } from './seo';
