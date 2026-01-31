/**
 * Configuración principal del sitio SJG Montajes Industriales
 * Centraliza toda la información de la empresa para fácil mantenimiento
 */

export const siteConfig = {
  // Información básica de la empresa
  company: {
    name: 'SJG Montajes Industriales S.R.L.',
    shortName: 'SJG',
    legalName: 'SJG Montajes Industriales S.R.L.',
    cuit: '30-71655883-1',
    foundingYear: 2019,
    description: 'Servicios de montajes industriales, mantenimiento y asistencia técnica para plantas industriales, siderúrgicas, centrales eléctricas y empresas de gran escala.',
    
    // Contacto
    contact: {
      phone: '+54 336 421-3653',
      phoneRaw: '543364213653', // Para WhatsApp
      email: 'info@sjgmontajes.com',
      address: {
        street: 'Hipólito Yrigoyen 650',
        city: 'San Nicolás de los Arroyos',
        province: 'Buenos Aires',
        zipCode: '2900',
        country: 'AR',
      },
      hours: {
        weekday: 'Lunes a Viernes: 8:00 - 18:00',
        emergency: 'Emergencias: disponible',
      },
    },
    
    // Redes sociales
    social: {
      facebook: 'https://facebook.com/sjgmontajes',
      instagram: 'https://instagram.com/sjgmontajes',
      linkedin: 'https://linkedin.com/company/sjgmontajes',
    },
  },
  
  // Configuración del sitio
  site: {
    url: 'https://sjgmontajes.com',
    language: 'es-AR',
    locale: 'es_AR',
    themeColor: '#000000',
    
    // SEO por defecto
    seo: {
      titleTemplate: '%s | SJG Montajes Industriales',
      defaultTitle: 'SJG Montajes Industriales S.R.L. | Servicios Industriales en San Nicolás de los Arroyos',
      defaultDescription: 'Servicios de montajes industriales, mantenimiento, instalaciones eléctricas, piping y asistencia técnica para plantas industriales en San Nicolás de los Arroyos y región.',
      defaultKeywords: 'montajes industriales, mantenimiento industrial, instalaciones eléctricas, piping industrial, San Nicolás de los Arroyos, servicios industriales',
    },
  },
  
  // Configuración de WhatsApp
  whatsapp: {
    enabled: true,
    message: 'Hola, me interesan los servicios de SJG Montajes Industriales. Me gustaría recibir más información.',
    position: 'bottom-right',
  },
  
  // Navegación
  navigation: {
    main: [
      { name: 'Inicio', href: '#inicio' },
      { name: 'Servicios', href: '#servicios' },
      { name: 'Proyectos', href: '#proyectos' },
      { name: 'Nosotros', href: '#nosotros' },
      { name: 'Contacto', href: '#contacto' },
    ],
    footer: {
      servicios: [
        { name: 'Montajes Industriales', href: '#servicios' },
        { name: 'Mantenimiento Industrial', href: '#servicios' },
        { name: 'Instalaciones Eléctricas', href: '#servicios' },
        { name: 'Piping Industrial', href: '#servicios' },
        { name: 'Asistencia Técnica', href: '#servicios' },
      ],
      empresa: [
        { name: 'Quiénes Somos', href: '#nosotros' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Contacto', href: '#contacto' },
      ],
    },
  },
} as const;

// Exportación de tipos inferidos
export type SiteConfig = typeof siteConfig;
