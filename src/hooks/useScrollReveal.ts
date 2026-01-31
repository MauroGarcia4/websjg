import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook para revelar elementos al hacer scroll
 * Usa Intersection Observer para detectar cuando un elemento entra en viewport
 * 
 * @param options - Opciones de configuración
 * @returns Ref para el elemento y estado de visibilidad
 * 
 * @example
 * const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
 */
export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Verificar si IntersectionObserver está disponible
    if (!('IntersectionObserver' in window)) {
      // Fallback: mostrar elemento inmediatamente
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * Hook para animaciones de entrada escalonadas
 * Útil para listas o grids donde los elementos aparecen uno tras otro
 */
export function useStaggeredReveal<T extends HTMLElement>(
  itemCount: number,
  baseDelay: number = 100
) {
  const containerRef = useRef<T>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Revelar items escalonadamente
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * baseDelay);
          }
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [itemCount, baseDelay]);

  return { containerRef, visibleItems };
}

/**
 * Hook para smooth scroll a secciones
 * Proporciona una función para navegar suavemente a un selector
 */
export function useSmoothScroll() {
  const scrollTo = useCallback((selector: string, offset: number = 0) => {
    const element = document.querySelector(selector);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return { scrollTo };
}

/**
 * Hook para detectar scroll y aplicar efectos
 * Útil para headers que cambian al hacer scroll
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Valor inicial
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled };
}

export default useScrollReveal;
