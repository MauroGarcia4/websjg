import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 section-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-amber-400 text-sm font-semibold rounded-full mb-6">
              TRABAJEMOS JUNTOS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Empezá a apuntar
              <br />
              <span className="text-amber-400">a lo más alto</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Hablemos sobre cómo mantener tu operación en marcha, con soporte técnico 
              especializado y soluciones listas para cada desafío industrial.
            </p>
            <a
              href="#contacto"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-full transition-all duration-300 text-lg"
            >
              Contactar a un asesor
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Content - Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Ubicación</p>
                    <p className="text-white font-medium">
                      San Nicolás de los Arroyos
                      <br />
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Teléfono</p>
                    <p className="text-white font-medium">+54 9 336 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">info@sjgservicios.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
