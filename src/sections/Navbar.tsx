import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useScrollPosition, useSmoothScroll } from '@/hooks';
import { siteConfig } from '@/data/siteConfig';
import { generateWhatsAppLink } from '@/lib/utils';

/**
 * Navbar principal del sitio
 * - Sticky con transición al hacer scroll
 * - Navegación desktop y mobile
 * - Botones de CTA (Llamar, Presupuesto)
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { scrollTo } = useSmoothScroll();
  
  const { navigation, company, whatsapp } = siteConfig;
  const whatsappLink = generateWhatsAppLink(company.contact.phoneRaw, whatsapp.message);

  // Cerrar menú mobile al redimensionar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloquear scroll cuando menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollTo(href, 80);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-[#222]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav 
          className="sjg-container"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo - Estilo Logo SJG Original (Blanco y Negro) */}
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
              className="flex items-center gap-3 group"
              aria-label="SJG Montajes Industriales - Inicio"
            >
              {/* Icono Montaña del Logo */}
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Montaña grande */}
                  <polygon 
                    points="50,10 85,80 15,80" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="4"
                  />
                  {/* Montaña pequeña */}
                  <polygon 
                    points="50,35 70,80 30,80" 
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span 
                  className="font-bold text-xl text-white tracking-tight leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  SJG
                </span>
                <span className="text-[9px] text-[#888] uppercase tracking-[0.2em] leading-none">
                  MONTAJES INDUSTRIALES
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navigation.main.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="relative text-sm font-medium text-[#888] hover:text-white transition-colors duration-300 group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={whatsappLink}
                className="sjg-btn sjg-btn-ghost text-sm"
                aria-label="Contactar por WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                Llamar
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contacto'); }}
                className="sjg-btn sjg-btn-primary text-sm"
              >
                Solicitar Presupuesto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#f5c518] transition-colors"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div 
          className={`absolute top-20 left-4 right-4 bg-[#111] border border-[#222] rounded-lg shadow-2xl transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="p-4" aria-label="Navegación móvil">
            <ul className="space-y-1">
              {navigation.main.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="block px-4 py-3 text-[#888] hover:text-white hover:bg-[#1a1a1a] font-medium uppercase tracking-wider text-sm transition-colors border-b border-[#222] last:border-0"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-[#222] space-y-3">
              <a
                href={whatsappLink}
                className="sjg-btn sjg-btn-outline w-full text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                Llamar Ahora
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contacto'); }}
                className="sjg-btn sjg-btn-primary w-full text-sm"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
