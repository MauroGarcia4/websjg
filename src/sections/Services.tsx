import { useScrollAnimation, useSmoothScroll } from '@/hooks';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

/**
 * Sección de Servicios
 * Muestra los servicios ofrecidos por SJG con animaciones y CTAs
 */
const Services = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { scrollTo } = useSmoothScroll();

  return (
    <section 
      id="servicios" 
      ref={ref}
      className="sjg-section bg-black"
      aria-labelledby="services-title"
    >
      <div className="sjg-container">
        {/* Section Header */}
        <div 
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="sjg-label mb-4">Servicios</span>
          <h2 
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Servicios industriales
            <span className="text-white"> especializados</span>
          </h2>
          <p className="text-lg text-[#888] leading-relaxed">
            Brindamos servicios de montaje, mantenimiento y asistencia técnica 
            para plantas industriales, siderúrgicas, centrales eléctricas y empresas 
            de gran escala.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <article
                key={service.id}
                className={`group relative bg-[#111] border border-[#222] rounded-lg p-8 transition-all duration-500 hover:border-[#444] hover:bg-[#1a1a1a] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#222] border border-[#333] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#333] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <span className="text-xs text-[#666] uppercase tracking-wider mb-2 block">
                    {service.subtitle}
                  </span>
                  <h3 
                    className="text-xl font-semibold text-white mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Scope */}
                <ul className="space-y-2 mb-8">
                  {service.scope.map((item) => (
                    <li 
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#666]"
                    >
                      <span className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => scrollTo('#contacto')}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#888] hover:text-[#f5c518] transition-colors group/btn"
                  aria-label={`Consultar por ${service.title}`}
                >
                  Solicitar información
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                </button>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#666] mb-6">
            ¿Necesitás un servicio específico? Contactanos para evaluar tu proyecto.
          </p>
          <button
            onClick={() => scrollTo('#contacto')}
            className="sjg-btn sjg-btn-outline"
          >
            Consultar servicio personalizado
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
