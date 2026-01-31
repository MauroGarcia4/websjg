import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { generateWhatsAppLink } from '@/lib/utils';

/**
 * Botón flotante de WhatsApp
 * Visible en todas las páginas, permite contacto rápido
 * 
 * Configuración centralizada en siteConfig.ts
 */
const WhatsAppButton = () => {
  const { company, whatsapp } = siteConfig;
  
  // Generar enlace de WhatsApp con configuración centralizada
  const whatsappUrl = generateWhatsAppLink(
    company.contact.phoneRaw,
    whatsapp.message
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-white text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
        Hablar por WhatsApp
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
      </span>

      {/* Button */}
      <div className="relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white fill-white" aria-hidden="true" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
