import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Componente de imagen con lazy loading optimizado
 * 
 * Características:
 * - Lazy loading con Intersection Observer
 * - Placeholder shimmer mientras carga
 * - Manejo de errores con imagen fallback
 * - Soporte para diferentes aspect ratios
 * - Animación suave al cargar
 * 
 * @example
 * <OptimizedImage
 *   src="/images/project.jpg"
 *   alt="Proyecto industrial"
 *   aspectRatio="16/9"
 *   priority={false}
 * />
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = '16/9',
  priority = false,
  objectFit = 'cover',
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy loading con Intersection Observer
  useEffect(() => {
    if (priority) return;

    const container = containerRef.current;
    if (!container) return;

    // Fallback para navegadores sin IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(container);
        }
      },
      {
        rootMargin: '50px',
        threshold: 0,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [priority]);

  // Precargar imagen cuando entra en viewport
  useEffect(() => {
    if (!isInView || hasError) return;

    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      onLoad?.();
    };
    
    img.onerror = () => {
      setHasError(true);
      onError?.();
    };

    img.src = src;
  }, [isInView, src, hasError, onLoad, onError]);

  // Fallback para errores de carga
  const fallbackSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext fill="%23444" font-family="sans-serif" font-size="14" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImagen no disponible%3C/text%3E%3C/svg%3E';

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#111] ${containerClassName}`}
      style={{ aspectRatio }}
    >
      {/* Shimmer placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 shimmer" aria-hidden="true" />
      )}

      {/* Imagen principal */}
      {(isInView || priority) && (
        <img
          ref={imgRef}
          src={hasError ? fallbackSrc : src}
          alt={alt}
          className={`
            absolute inset-0 w-full h-full transition-opacity duration-500
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${className}
          `}
          style={{ objectFit }}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
        />
      )}

      {/* Overlay de error */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
          <span className="text-[#444] text-sm">Imagen no disponible</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
