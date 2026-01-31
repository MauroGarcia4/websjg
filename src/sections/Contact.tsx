import { useScrollAnimation } from '@/hooks';
import { useContactForm } from '@/hooks/useContactForm';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
import { generateTelLink } from '@/lib/utils';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Building2
} from 'lucide-react';

/**
 * Sección de Contacto
 * Formulario funcional con validaciones y mensaje de confirmación
 * Información de contacto completa de SJG
 */
const Contact = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    getInputClass,
  } = useContactForm();

  const { company } = siteConfig;
  const telLink = generateTelLink(company.contact.phone);

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Dirección',
      content: company.contact.address.street,
      subContent: `${company.contact.address.city}, ${company.contact.address.province}`,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Teléfono',
      content: company.contact.phone,
      subContent: company.contact.hours.weekday,
      href: telLink,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      content: company.contact.email,
      subContent: 'Respuesta en 24-48hs',
      href: `mailto:${company.contact.email}`,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Horario de Atención',
      content: company.contact.hours.weekday,
      subContent: company.contact.hours.emergency,
    },
  ];

  return (
    <section 
      id="contacto" 
      ref={ref}
      className="sjg-section bg-[#0a0a0a]"
      aria-labelledby="contact-title"
    >
      <div className="sjg-container">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="sjg-label justify-center mb-4">Contacto</span>
          <h2 
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Solicitá tu <span className="text-white">presupuesto</span>
          </h2>
          <p className="text-lg text-[#888]">
            Completá el formulario y te contactaremos para evaluar tu proyecto industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <div 
            className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Company Card */}
            <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-[#333] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#222] rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{company.legalName}</h4>
                  <p className="text-sm text-[#666]">CUIT: {company.cuit}</p>
                </div>
              </div>
            </div>

            {contactInfo.map((info) => (
              <div 
                key={info.title}
                className="bg-[#111] border border-[#222] rounded-lg p-5 flex items-start gap-4 group hover:border-[#444] transition-colors"
              >
                <div className="w-10 h-10 bg-[#222] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#333] transition-colors">
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#666] mb-1">{info.title}</h4>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-white font-medium hover:text-[#f5c518] transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.content}</p>
                  )}
                  <p className="text-sm text-[#444]">{info.subContent}</p>
                </div>
              </div>
            ))}

            {/* Botón Llamar Ahora */}
            <a
              href={telLink}
              className="sjg-btn sjg-btn-outline w-full"
            >
              <Phone className="w-4 h-4" />
              Llamar Ahora
            </a>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-[#111] border border-[#222] rounded-lg p-8">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>
                  <h3 
                    className="text-2xl font-bold text-white mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    ¡Consulta enviada!
                  </h3>
                  <p className="text-[#888]">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Error general */}
                  {submitError && (
                    <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg p-4 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-[#ef4444]" />
                      <p className="text-sm text-[#ef4444]">{submitError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-[#888] mb-2">
                        Nombre completo <span className="text-white">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('nombre')}
                        placeholder="Tu nombre"
                        disabled={isSubmitting}
                      />
                      {touched.nombre && errors.nombre && (
                        <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.nombre}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-[#888] mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="sjg-input"
                        placeholder="Nombre de tu empresa"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#888] mb-2">
                        Email <span className="text-white">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('email')}
                        placeholder="tu@email.com"
                        disabled={isSubmitting}
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-[#888] mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass('telefono')}
                        placeholder="+54 ..."
                        disabled={isSubmitting}
                      />
                      {touched.telefono && errors.telefono && (
                        <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.telefono}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-[#888] mb-2">
                      Servicio de interés <span className="text-white">*</span>
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass('servicio')}
                      disabled={isSubmitting}
                    >
                      <option value="">Seleccioná un servicio</option>
                      {services.map((servicio) => (
                        <option key={servicio.id} value={servicio.title}>
                          {servicio.title}
                        </option>
                      ))}
                    </select>
                    {touched.servicio && errors.servicio && (
                      <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.servicio}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-[#888] mb-2">
                      Consulta <span className="text-white">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      className={getInputClass('mensaje')}
                      placeholder="Contanos sobre tu proyecto o consulta..."
                      disabled={isSubmitting}
                    />
                    {touched.mensaje && errors.mensaje && (
                      <p className="mt-1.5 text-sm text-[#ef4444] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="sjg-btn sjg-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar consulta
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#444] text-center">
                    {company.legalName} - CUIT {company.cuit}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
