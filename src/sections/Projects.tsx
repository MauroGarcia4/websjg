import { useState } from 'react';
import { useScrollAnimation } from '@/hooks';
import { projects, projectCategories, type ProjectCategory } from '@/data/projects';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, ArrowUpRight, Wrench } from 'lucide-react';

/**
 * Sección de Proyectos
 * Galería de proyectos realizados con filtros y lightbox
 */
const Projects = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Filtrar proyectos
  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Abrir lightbox
  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  // Cerrar lightbox
  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  // Navegar entre proyectos en lightbox
  const navigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const newIndex = direction === 'prev' 
      ? (currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1)
      : (currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0);
    setSelectedProject(filteredProjects[newIndex]);
  };

  // Manejar teclado en lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateProject('prev');
    if (e.key === 'ArrowRight') navigateProject('next');
  };

  return (
    <section 
      id="proyectos" 
      ref={ref}
      className="sjg-section bg-[#0a0a0a]"
      aria-labelledby="projects-title"
    >
      <div className="sjg-container">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="sjg-label justify-center mb-4">Proyectos</span>
          <h2 
            id="projects-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Trabajos <span className="text-white">Realizados</span>
          </h2>
          <p className="text-lg text-[#888]">
            Conocé algunos de los proyectos que ejecutamos para empresas industriales 
            de San Nicolás de los Arroyos y la región.
          </p>
        </div>

        {/* Filters */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projectCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-white text-black'
                  : 'bg-[#111] text-[#888] border border-[#222] hover:border-[#444] hover:text-white'
              }`}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => openLightbox(project)}
              className={`group relative cursor-pointer overflow-hidden rounded-lg bg-[#111] border border-[#222] transition-all duration-500 hover:border-[#444] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
              aria-label={`Ver proyecto: ${project.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-white">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#666]">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                  </div>
                  <h3 
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#888] line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p 
          className={`text-center text-sm text-[#444] mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Las imágenes son representativas de los tipos de trabajos que realizamos.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/98 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          tabIndex={-1}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-[#111] border border-[#222] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#111]/80 border border-[#222] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#111]/80 border border-[#222] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="bg-[#111] border border-[#222] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="flex items-center gap-1 text-sm text-white">
                  <Calendar className="w-4 h-4" />
                  {selectedProject.year}
                </span>
                <span className="flex items-center gap-1 text-sm text-[#666]">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </span>
              </div>

              <h3 
                id="lightbox-title"
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {selectedProject.title}
              </h3>

              <p className="text-[#888] leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                  Alcance del trabajo
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.scope.map((item) => (
                    <li 
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#888]"
                    >
                      <Wrench className="w-4 h-4 text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contacto"
                onClick={(e) => { 
                  e.preventDefault(); 
                  closeLightbox();
                  setTimeout(() => {
                    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="sjg-btn sjg-btn-primary"
              >
                Consultar proyecto similar
              </a>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-[#666]">
            {filteredProjects.findIndex(p => p.id === selectedProject.id) + 1} / {filteredProjects.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
