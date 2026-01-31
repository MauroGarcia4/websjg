/**
 * Utilidades para SEO
 * Generación de meta tags y datos estructurados
 */

import { siteConfig } from '@/data/siteConfig';

/**
 * Interfaz para meta tags de página
 */
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

/**
 * Generar meta tags por defecto
 */
export function getDefaultMeta(): PageMeta {
  return {
    title: siteConfig.site.seo.defaultTitle,
    description: siteConfig.site.seo.defaultDescription,
    keywords: siteConfig.site.seo.defaultKeywords,
    ogImage: `${siteConfig.site.url}/og-image.jpg`,
    canonicalUrl: siteConfig.site.url,
  };
}

/**
 * Generar meta tags para una página específica
 */
export function generatePageMeta(
  title: string,
  description?: string,
  keywords?: string
): PageMeta {
  return {
    title: `${title} | ${siteConfig.company.shortName} Montajes Industriales`,
    description: description || siteConfig.site.seo.defaultDescription,
    keywords: keywords || siteConfig.site.seo.defaultKeywords,
    ogImage: `${siteConfig.site.url}/og-image.jpg`,
    canonicalUrl: siteConfig.site.url,
  };
}

/**
 * Generar datos estructurados LocalBusiness (JSON-LD)
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.company.legalName,
    alternateName: siteConfig.company.name,
    description: siteConfig.company.description,
    url: siteConfig.site.url,
    telephone: siteConfig.company.contact.phone,
    email: siteConfig.company.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.contact.address.street,
      addressLocality: siteConfig.company.contact.address.city,
      addressRegion: siteConfig.company.contact.address.province,
      postalCode: siteConfig.company.contact.address.zipCode,
      addressCountry: siteConfig.company.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.3333,
      longitude: -60.2167,
    },
    openingHours: ['Mo-Fr 08:00-18:00'],
    foundingDate: siteConfig.company.foundingYear.toString(),
    taxID: siteConfig.company.cuit,
    priceRange: '$$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -33.3333,
        longitude: -60.2167,
      },
      geoRadius: '100000',
    },
    serviceType: [
      'Montajes Industriales Integrales',
      'Mantenimiento Industrial',
      'Instalaciones Eléctricas Industriales',
      'Piping Industrial',
      'Asistencia Técnica e Ingeniería',
    ],
    knowsAbout: [
      'Montajes mecánicos, eléctricos y electromecánicos',
      'Mantenimiento de equipos industriales',
      'Instalación de tableros eléctricos',
      'Montaje de tuberías industriales',
      'Ingeniería aplicada industrial',
    ],
  };
}

/**
 * Generar datos estructurados para servicios
 */
export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.company.legalName,
    },
    description,
    areaServed: {
      '@type': 'City',
      name: siteConfig.company.contact.address.city,
      containedInPlace: {
        '@type': 'State',
        name: siteConfig.company.contact.address.province,
      },
    },
  };
}

/**
 * Keywords específicas por sección para SEO local
 */
export const sectionKeywords = {
  home: [
    'montajes industriales San Nicolás de los Arroyos',
    'mantenimiento industrial San Nicolás',
    'servicios industriales Buenos Aires',
    'SJG Montajes Industriales',
  ],
  services: [
    'montajes industriales integrales',
    'mantenimiento industrial preventivo',
    'instalaciones eléctricas industriales',
    'piping industrial Argentina',
    'asistencia técnica industrial',
  ],
  projects: [
    'proyectos industriales San Nicolás',
    'trabajos montaje industrial',
    'obras mantenimiento industrial',
  ],
  about: [
    'empresa montajes industriales',
    'SJG Montajes Industriales S.R.L.',
    'empresa industrial San Nicolás',
  ],
  contact: [
    'contacto montajes industriales',
    'presupuesto mantenimiento industrial',
    'cotización servicios industriales',
  ],
};
