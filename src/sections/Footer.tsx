import { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { generateTelLink } from '@/lib/utils';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  Send,
  CheckCircle2,
  Loader2,
  Building2
} from 'lucide-react';

/**
 * Footer del sitio
 * Links de navegación, información de contacto y newsletter
 */
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const currentYear = new Date().getFullYear();
  const { company, navigation } = siteConfig;
  const telLink = generateTelLink(company.contact.phone);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    // Simular suscripción - REEMPLAZAR CON API REAL
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribing(false);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-[#1a1a1a]">
      {/* Main Footer */}
      <div className="sjg-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon 
                    points="50,10 85,80 15,80" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="4"
                  />
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
                <span className="text-[9px] text-[#666] uppercase tracking-[0.2em] leading-none">
                  MONTAJES INDUSTRIALES
                </span>
              </div>
            </div>
            
            <div className="bg-[#111] border border-[#222] rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">{company.legalName}</span>
              </div>
              <p className="text-xs text-[#666]">CUIT: {company.cuit}</p>
              <p className="text-xs text-[#666]">Desde {company.foundingYear}</p>
            </div>

            <p className="text-[#888] text-sm leading-relaxed mb-6">
              Servicios de montajes industriales, mantenimiento y asistencia técnica 
              para plantas industriales, siderúrgicas y centrales eléctricas.
            </p>
            
            <div className="flex gap-2">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111] border border-[#222] flex items-center justify-center text-[#666] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Seguir a SJG en Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111] border border-[#222] flex items-center justify-center text-[#666] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Seguir a SJG en Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111] border border-[#222] flex items-center justify-center text-[#666] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Seguir a SJG en LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 
              className="text-sm font-semibold text-white uppercase tracking-wider mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Servicios
            </h4>
            <ul className="space-y-3">
              {navigation.footer.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-sm text-[#888] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 
              className="text-sm font-semibold text-white uppercase tracking-wider mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Empresa
            </h4>
            <ul className="space-y-3">
              {navigation.footer.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-sm text-[#888] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-sm text-[#888]">
                <MapPin className="w-4 h-4 text-white" />
                {company.contact.address.street}, {company.contact.address.city}
              </div>
              <a 
                href={telLink}
                className="flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors"
                aria-label="Llamar a SJG Montajes Industriales"
              >
                <Phone className="w-4 h-4 text-white" />
                {company.contact.phone}
              </a>
              <a 
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors"
                aria-label="Enviar email a SJG Montajes Industriales"
              >
                <Mail className="w-4 h-4 text-white" />
                {company.contact.email}
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 
              className="text-sm font-semibold text-white uppercase tracking-wider mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Newsletter
            </h4>
            <p className="text-sm text-[#888] mb-4">
              Suscribite para recibir novedades de SJG Montajes Industriales.
            </p>
            
            {isSubscribed ? (
              <div className="bg-white rounded-lg p-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-black" />
                <p className="text-sm text-black">
                  ¡Gracias por suscribirte!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-white text-sm placeholder:text-[#444] focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full px-4 py-3 bg-white text-black font-semibold text-sm rounded-lg hover:bg-[#f5c518] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubscribing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Suscribirme
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="sjg-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#444] text-center md:text-left">
              © {currentYear} <span className="text-[#888]">{company.legalName}</span> 
              - CUIT {company.cuit}
            </p>
            <p className="text-sm text-[#444]">
              {company.contact.address.city}, {company.contact.address.province}, Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
