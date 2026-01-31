import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

/**
 * Componente SEO dinámico
 * Actualiza los meta tags del documento según la página actual
 * 
 * @example
 * <SEO 
 *   title="Servicios | SJG Montajes Industriales"
 *   description="Servicios de montaje industrial en San Nicolás de los Arroyos"
 * />
 */
const SEO = ({
  title = 'SJG Montajes Industriales S.R.L. | Servicios Industriales en San Nicolás de los Arroyos',
  description = 'Servicios de montajes industriales, mantenimiento, instalaciones eléctricas, piping y asistencia técnica para plantas industriales en San Nicolás de los Arroyos y región.',
  keywords = 'montajes industriales, mantenimiento industrial, instalaciones eléctricas, piping industrial, San Nicolás de los Arroyos, servicios industriales',
  ogImage = 'https://sjg-industrial.com/og-image.jpg',
  ogUrl = 'https://sjg-industrial.com',
  canonicalUrl = 'https://sjg-industrial.com',
  noIndex = false,
}: SEOProps) => {
  useEffect(() => {
    // Actualizar título
    document.title = title;

    // Función helper para actualizar/crear meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Meta tags básicos
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // Robots
    setMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:url', ogUrl, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:locale', 'es_AR', true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Cleanup: no eliminamos los meta tags al desmontar
    // ya que otros componentes pueden necesitarlos
  }, [title, description, keywords, ogImage, ogUrl, canonicalUrl, noIndex]);

  return null;
};

export default SEO;
