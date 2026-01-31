import { useEffect, useRef, useState } from 'react';
import { Award, Shield, Clock, Lightbulb } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-16 h-16 feature-icon rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Experiencia y trayectoria',
      description: 'Más de 15 años en el mercado industrial aportando soluciones confiables y efectivas en cada proyecto.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Calidad y seguridad certificada',
      description: 'Operamos bajo estrictos estándares de calidad, garantizando excelencia operativa y cuidado del recurso humano en cada servicio.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Cumplimiento y eficacia',
      description: 'Trabajamos con flexibilidad y planificación, adaptándonos a las necesidades de cada cliente y cumpliendo los plazos establecidos.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovación y soluciones integrales',
      description: 'Integramos tecnologías de punta y procesos de mejora continua para optimizar nuestros servicios y resultados.',
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#003d7a]/10 text-[#003d7a] text-sm font-semibold rounded-full mb-4">
            NUESTRA DIFERENCIA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por qué elegir <span className="text-[#003d7a]">SJG</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
