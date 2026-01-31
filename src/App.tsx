import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SEO from './components/SEO';
import { siteConfig } from './data/siteConfig';

/**
 * SJG Montajes Industriales S.R.L.
 * San Nicolás de los Arroyos, Buenos Aires
 * 
 * Sitio web profesional industrial - Versión Productiva 2.0
 * Stack: React + TypeScript + Vite + Tailwind CSS
 * 
 * Estructura modular:
 * - /data: Configuración y contenido separado de la lógica
 * - /hooks: Hooks personalizados reutilizables
 * - /lib: Utilidades y helpers
 * - /sections: Secciones principales del sitio
 * - /components: Componentes reutilizables
 */

function App() {
  const { site } = siteConfig;

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Dinámico */}
      <SEO 
        title={site.seo.defaultTitle}
        description={site.seo.defaultDescription}
        keywords={site.seo.defaultKeywords}
        ogUrl={site.url}
        canonicalUrl={site.url}
      />

      {/* Skip to main content - accesibilidad */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-medium focus:rounded"
      >
        Saltar al contenido principal
      </a>

      <Navbar />
      
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
