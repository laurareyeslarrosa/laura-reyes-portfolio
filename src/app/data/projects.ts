export interface Project {
  title: string;
  featured: boolean;
  image?: string;
  description: {
    es: string;
    en: string;
  };
  stack: string[];
  demoLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    featured: true,
    description: {
      es: 'Portfolio personal desarrollado con Angular 20 que incluye un sistema de diseño propio, motor de temas claro/oscuro, internacionalización y una arquitectura modular enfocada en escalabilidad y mantenibilidad.',
      en: 'Personal portfolio built with Angular 20 featuring a custom design system, light/dark theme engine, internationalization and a modular architecture focused on scalability and maintainability.',
    },
    stack: [
      'Angular 20',
      'TypeScript',
      'SCSS',
      'Design System',
      'Theme Engine',
      'i18n',
      'Responsive Design',
    ],
    demoLink: 'https://laurareyeslarrosa.github.io/laura-reyes-portfolio/',
    githubLink: 'https://github.com/laurareyeslarrosa/laura-reyes-portfolio',
  },

  {
    title: 'Marketing Campaign Dashboard',
    featured: true,
    description: {
      es: 'Dashboard desarrollado en React para la gestión de campañas de marketing, con soporte para temas, internacionalización y persistencia local mediante LocalStorage.',
      en: 'React dashboard for managing marketing campaigns featuring theme switching, internationalization and local persistence using LocalStorage.',
    },
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'SCSS',
      'LocalStorage',
      'Theme Engine',
      'i18n',
      'Responsive Design',
    ],
    demoLink: 'https://laurareyeslarrosa.github.io/campaign-dashboard/',
    githubLink: 'https://github.com/laurareyeslarrosa/campaign-dashboard',
  },

  {
    title: 'Music Inventory Manager',
    featured: true,
    description: {
      es: 'Aplicación Full Stack para la gestión de un inventario musical con frontend en React y backend desarrollado en .NET, incluyendo documentación automática mediante Swagger y persistencia con Entity Framework y SQLite.',
      en: 'Full Stack music inventory application built with React and .NET, featuring Swagger documentation, Entity Framework and SQLite persistence.',
    },
    stack: [
      'React',
      'TypeScript',
      'Vite',
      '.NET',
      'ASP.NET Core',
      'Entity Framework',
      'SQLite',
      'Swagger',
    ],
    demoLink: '',
    githubLink: 'https://github.com/laurareyeslarrosa/music-inventory-app',
  },

  {
    title: 'Angular Signals Playground',
    featured: false,
    description: {
      es: 'Proyecto experimental para explorar Angular Signals, la reactividad moderna y el manejo eficiente del estado utilizando las nuevas APIs de Angular.',
      en: "Experimental project exploring Angular Signals, modern reactivity and efficient state management using Angular's latest APIs.",
    },
    stack: ['Angular', 'Signals', 'TypeScript', 'RxJS'],
    demoLink: '',
    githubLink: 'https://github.com/laurareyeslarrosa/angular-signals',
  },

  {
    title: 'Desktop Companion',
    featured: false,
    description: {
      es: 'Aplicación de escritorio desarrollada con Avalonia UI y .NET que incorpora un asistente virtual con comportamiento interactivo.',
      en: 'Desktop application built with Avalonia UI and .NET featuring an interactive virtual desktop companion.',
    },
    stack: ['.NET', 'C#', 'Avalonia UI', 'Desktop Development'],
    demoLink: '',
    githubLink: 'https://github.com/laurareyeslarrosa/desktop-cat',
  },

  {
    title: 'Advanced CSS Playground',
    featured: false,
    description: {
      es: 'Colección de ejercicios y ejemplos avanzados enfocados en layouts modernos, Flexbox, CSS Grid, SCSS y componentes reutilizables.',
      en: 'Collection of advanced CSS exercises showcasing modern layouts, Flexbox, CSS Grid, SCSS and reusable UI components.',
    },
    stack: ['CSS3', 'SCSS', 'Flexbox', 'CSS Grid', 'Responsive Design'],
    demoLink: '',
    githubLink: 'https://github.com/laurareyeslarrosa/css-advance',
  },
];
