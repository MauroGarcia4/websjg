import { useEffect, useState } from 'react';
import { ArrowRight, Phone, ChevronDown, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { generateWhatsAppLink } from '@/lib/utils';
import { useSmoothScroll } from '@/hooks';

/**
 * Sección Hero principal
 * Presentación de la empresa con CTAs principales
 */
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollTo } = useSmoothScroll();
  const { company } = siteConfig;
  
  const whatsappLink = generateWhatsAppLink(company.contact.phoneRaw, siteConfig.whatsapp.message);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const diferenciales = [
    'Mano de obra calificada',
    'Equipamiento profesional',
    'Gestión técnica especializada',
  ];

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="sjg-container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div 
            className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
            <span className="text-sm text-[#888] uppercase tracking-widest">
              {company.contact.address.city}, {company.contact.address.province}
            </span>
          </div>

          {/* Main Title */}
          <h1 
            id="hero-title"
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {company.shortName} Montajes
            <span className="block text-white">Industriales S.R.L.</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-lg sm:text-xl text-[#aaa] leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Servicios de montajes industriales, mantenimiento y asistencia técnica 
            para plantas industriales, siderúrgicas, centrales eléctricas y empresas 
            de gran escala en <span className="text-white font-medium">{company.contact.address.city} y la región</span>.
          </p>

          {/* Diferenciales */}
          <div 
            className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {diferenciales.map((item) => (
              <div 
                key={item}
                className="flex items-center gap-2 text-sm text-[#666]"
              >
                <CheckCircle2 className="w-4 h-4 text-white" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => scrollTo('#contacto')}
              className="sjg-btn sjg-btn-primary sjg-btn-lg"
              aria-label="Solicitar presupuesto"
            >
              Solicitar Presupuesto
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <a
              href={whatsappLink}
              className="sjg-btn sjg-btn-outline sjg-btn-lg"
              aria-label="Contactar por WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Llamar Ahora
            </a>
          </div>

          {/* Company Info */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 pt-8 border-t border-[#222] transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="text-sm text-[#666] mb-1">Dirección</div>
              <div className="text-white font-medium">{company.contact.address.street}</div>
              <div className="text-sm text-[#444]">{company.contact.address.city}, {company.contact.address.province}</div>
            </div>
            <div>
              <div className="text-sm text-[#666] mb-1">Razón Social</div>
              <div className="text-white font-medium">{company.legalName}</div>
              <div className="text-sm text-[#444]">CUIT: {company.cuit}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => scrollTo('#servicios')}
          className="flex flex-col items-center text-[#444] hover:text-white transition-colors group"
          aria-label="Desplazar a la sección de servicios"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Descubrir</span>
          <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-[#222] opacity-30" />
    </section>
  );
};

export default Hero;
