# SJG Montajes Industriales S.R.L.

[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)

Sitio web profesional para SJG Montajes Industriales S.R.L., empresa de servicios industriales ubicada en San Nicolás de los Arroyos, Buenos Aires, Argentina.

## 🌐 Demo en vivo

[https://sjgmontajes.com](https://sjgmontajes.com) *(reemplazar con URL real)*

---

## 📋 Contenido

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Desarrollo local](#desarrollo-local)
- [Deploy en Vercel](#deploy-en-vercel)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Configuración](#configuración)
- [SEO y Marketing](#seo-y-marketing)
- [Escalabilidad](#escalabilidad)
- [Licencia](#licencia)

---

## ✨ Características

### 🎯 Conversión y Contacto
- ✅ Botón flotante de WhatsApp con mensaje predefinido
- ✅ Botón "Llamar ahora" funcional (tel:)
- ✅ Formulario de contacto completo con validaciones
- ✅ Estados de carga y confirmación visual

### 🧭 UX/UI
- ✅ Navbar sticky con transición al hacer scroll
- ✅ Scroll suave entre secciones
- ✅ Estados hover claros en botones y tarjetas
- ✅ Animaciones sutiles on-scroll (fade/slide)
- ✅ Diseño responsive completo

### 🌍 SEO Local
- ✅ Meta tags dinámicos por sección
- ✅ Jerarquía correcta H1, H2, H3
- ✅ Keywords locales optimizadas
- ✅ Datos estructurados LocalBusiness (JSON-LD)
- ✅ Open Graph para redes sociales

### 🧱 Escalabilidad
- ✅ Código limpio, modular y comentado
- ✅ Contenido separado de la lógica
- ✅ Preparado para:
  - Nuevos proyectos
  - Blog técnico industrial
  - Página "Trabajá con nosotros"
  - Multi-idioma (ES/EN)

---

## 🛠 Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 18.x | Framework UI |
| TypeScript | 5.x | Tipado estático |
| Vite | 5.x | Build tool |
| Tailwind CSS | 3.x | Estilos |
| Lucide React | Latest | Iconos |
| shadcn/ui | Latest | Componentes UI |

---

## 📦 Instalación

### Requisitos previos

- Node.js 18+ 
- npm o yarn
- Git

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/sjg-montajes.git
cd sjg-montajes
```

### Paso 2: Instalar dependencias

```bash
npm install
# o
yarn install
```

---

## 💻 Desarrollo local

### Iniciar servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

El sitio estará disponible en: `http://localhost:5173`

### Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Compilar para producción |
| `npm run preview` | Previsualizar build de producción |
| `npm run lint` | Ejecutar ESLint |
| `npm run type-check` | Verificar tipos de TypeScript |

---

## 🚀 Deploy en Vercel

### Opción 1: Deploy automático con Git

1. Sube el proyecto a GitHub/GitLab/Bitbucket
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente la configuración
4. Cada push a `main` generará un nuevo deploy

### Opción 2: Deploy manual con CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Configuración de Vercel

El archivo `vercel.json` ya está configurado:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

---

## 📁 Estructura del proyecto

```
sjg-montajes/
├── public/                 # Archivos estáticos
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── assets/            # Imágenes y recursos
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── SEO.tsx       # Meta tags dinámicos
│   │   ├── WhatsAppButton.tsx
│   │   └── OptimizedImage.tsx
│   ├── data/             # Datos y configuración
│   │   ├── siteConfig.ts # Configuración central
│   │   ├── services.ts   # Servicios ofrecidos
│   │   ├── projects.ts   # Proyectos realizados
│   │   ├── company.ts    # Info de la empresa
│   │   └── index.ts      # Exportaciones
│   ├── hooks/            # Hooks personalizados
│   │   ├── useScrollAnimation.ts
│   │   ├── useContactForm.ts
│   │   └── index.ts
│   ├── lib/              # Utilidades
│   │   ├── utils.ts      # Funciones helper
│   │   ├── seo.ts        # Utilidades SEO
│   │   └── index.ts
│   ├── sections/         # Secciones del sitio
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── types/            # Tipos globales
│   ├── App.tsx           # Componente principal
│   ├── App.css           # Estilos adicionales
│   ├── index.css         # Estilos globales
│   └── main.tsx          # Punto de entrada
├── index.html            # HTML principal con SEO
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── vercel.json           # Configuración Vercel
└── README.md
```

---

## ⚙️ Configuración

### Información de la empresa

Edita `src/data/siteConfig.ts` para actualizar:

```typescript
export const siteConfig = {
  company: {
    name: 'SJG Montajes Industriales S.R.L.',
    cuit: '30-71655883-1',
    contact: {
      phone: '+54 336 421-3653',
      email: 'info@sjgmontajes.com',
      address: {
        street: 'Hipólito Yrigoyen 650',
        city: 'San Nicolás de los Arroyos',
        // ...
      }
    }
  }
}
```

### Servicios

Edita `src/data/services.ts` para agregar/modificar servicios:

```typescript
export const services: Service[] = [
  {
    id: 'nuevo-servicio',
    icon: IconComponent,
    title: 'Nuevo Servicio',
    description: 'Descripción...',
    scope: ['Item 1', 'Item 2'],
    keywords: ['keyword1', 'keyword2'],
  },
  // ...
];
```

### Proyectos

Edita `src/data/projects.ts` para agregar proyectos:

```typescript
export const projects: Project[] = [
  {
    id: 7,
    title: 'Nuevo Proyecto',
    category: 'montajes',
    // ...
  },
];
```

---

## 🔍 SEO y Marketing

### Keywords principales

- "Montajes industriales en San Nicolás de los Arroyos"
- "Mantenimiento industrial San Nicolás"
- "Piping industrial Argentina"
- "Instalaciones eléctricas industriales"

### Datos estructurados

El sitio incluye JSON-LD para:
- LocalBusiness (empresa)
- Service (servicios)
- Open Graph (redes sociales)

### Meta tags por sección

Cada sección tiene meta tags optimizados:
- Título único
- Descripción específica
- Keywords relevantes
- Canonical URL

---

## 📈 Escalabilidad

### Agregar nuevos proyectos

1. Agregar entrada en `src/data/projects.ts`
2. Subir imagen a CDN o carpeta `public/`
3. El proyecto aparecerá automáticamente

### Agregar blog técnico

1. Crear carpeta `src/data/blog.ts`
2. Crear componente `src/sections/Blog.tsx`
3. Agregar ruta en navegación

### Multi-idioma (ES/EN)

1. Crear carpetas `src/data/es/` y `src/data/en/`
2. Implementar contexto de idioma
3. Crear switcher de idioma

---

## 📝 Licencia

Este proyecto es propiedad de **SJG Montajes Industriales S.R.L.**

Todos los derechos reservados © 2024

---

## 👥 Contacto

**SJG Montajes Industriales S.R.L.**
- 📍 Hipólito Yrigoyen 650, San Nicolás de los Arroyos, BA
- 📞 +54 336 421-3653
- ✉️ info@sjgmontajes.com

---

## 🙏 Créditos

Desarrollado con ❤️ para SJG Montajes Industriales S.R.L.
