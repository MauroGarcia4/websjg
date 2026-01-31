import { useScrollAnimation, useSmoothScroll } from '@/hooks';
import { companyValues, differentiators, companyHistory, legalInfo } from '@/data/company';
import { CheckCircle2 } from 'lucide-react';

/**
 * Sección Sobre Nosotros
 * Información de la empresa, valores y diferenciales
 */
const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { scrollTo } = useSmoothScroll();

  return (
    <section 
      id="nosotros" 
      ref={sectionRef}
      className="sjg-section bg-black"
      aria-labelledby="about-title"
    >
      <div className="sjg-container">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image */}
          <div 
            className={`relative transition-all duration-700 ${
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Trabajadores industriales en operación de montaje"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>

              {/* Company Info Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div 
                  className="text-3xl font-bold text-black"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {companyHistory.founded}
                </div>
                <div className="text-sm text-[#666] font-medium">
                  Inicio de<br />actividades
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-white/20" />
            </div>
          </div>

          {/* Right - Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="sjg-label mb-4">Quiénes Somos</span>
            <h2 
              id="about-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              SJG Montajes
              <span className="text-white"> Industriales S.R.L.</span>
            </h2>

            <div className="space-y-4 text-[#888] leading-relaxed mb-8">
              <p>
                <strong className="text-white">{legalInfo.companyName}</strong> es una 
                empresa argentina dedicada a brindar servicios industriales especializados, con foco 
                en el montaje, mantenimiento y asistencia técnica de instalaciones industriales.
              </p>
              <p>
                Desde <span className="text-white">{companyHistory.location}</span>, la empresa 
                presta servicios a plantas industriales, siderúrgicas, centrales eléctricas y 
                empresas de gran escala, acompañando proyectos con mano de obra calificada, 
                equipamiento y gestión técnica.
              </p>
            </div>

            {/* Diferenciales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {differentiators.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-start gap-2 text-sm text-[#888]"
                >
                  <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Legal Info */}
            <div className="bg-[#111] border border-[#222] rounded-lg p-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#666]">Razón Social:</span>
                  <p className="text-white">{legalInfo.companyName}</p>
                </div>
                <div>
                  <span className="text-[#666]">CUIT:</span>
                  <p className="text-white">{legalInfo.cuit}</p>
                </div>
                <div>
                  <span className="text-[#666]">Dirección:</span>
                  <p className="text-white">{legalInfo.address}</p>
                </div>
                <div>
                  <span className="text-[#666]">Ubicación:</span>
                  <p className="text-white">{legalInfo.city}, {legalInfo.province}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollTo('#contacto')}
              className="sjg-btn sjg-btn-primary"
            >
              Contactar con SJG
            </button>
          </div>
        </div>

        {/* Values */}
        <div 
          className={`transition-all duration-700 delay-400 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <span className="sjg-label justify-center mb-4">Compromiso</span>
            <h3 
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Nuestros <span className="text-white">valores</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyValues.map((valor) => {
              const Icon = valor.icon;
              return (
                <div 
                  key={valor.id}
                  className="text-center p-6 group"
                >
                  <div className="w-14 h-14 bg-[#111] border border-[#222] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#222] group-hover:border-[#333] transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 
                    className="text-base font-semibold text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {valor.title}
                  </h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
